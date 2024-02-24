import { Play } from '@phosphor-icons/react'
import {
  CountDownContainer,
  CountDownNumbers,
  CountDownStarterButton,
  DividerContainer,
  FormContainer,
  HomeContainer,
  MinutesInput,
  SubjectInput,
} from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

type Cycle = {
  id: string
  subject: string
  minutes: number
  startDate: Date
}

const newCycleValidationSchema = zod.object({
  subject: zod.string().min(1, 'A tarefa não pode estar em branco'),
  minutes: zod.number().min(5).max(50),
})

type FormValues = zod.infer<typeof newCycleValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<FormValues>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      subject: '',
      minutes: 30,
    },
  })

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [active, setActive] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === active)

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  function handleCreateNewCycle(data: FormValues) {
    const id = String(new Date().getTime())
    setCycles((state) => [
      ...state,
      {
        id,
        subject: data.subject,
        minutes: data.minutes,
        startDate: new Date(),
      },
    ])
    setActive(id)
    reset()
    setAmountSecondsPassed(0)
  }

  const subject = watch('subject')
  const isSubmitDisabled = !subject

  const minutesInSeconds = activeCycle ? activeCycle.minutes * 60 : 0
  const currentSeconds = activeCycle
    ? minutesInSeconds - amountSecondsPassed
    : 0

  const cycleMinutes = Math.floor(currentSeconds / 60)
  const cycleSeconds = currentSeconds % 60

  const minutes = String(cycleMinutes).padStart(2, '0')
  const seconds = String(cycleSeconds).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="subject">Vou trabalhar em</label>
          <SubjectInput
            type="text"
            id="subject"
            placeholder="Insira o nome da sua tarefa"
            list="suggestions"
            {...register('subject')}
          />

          <datalist id="suggestions">
            <option value="Design" />
            <option value="Develop" />
            <option value="Test" />
            <option value="Merge" />
            <option value="Build" />
            <option value="Deploy" />
          </datalist>
          <label htmlFor="minutes">durante</label>
          <MinutesInput
            type="number"
            id="minutes"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutes', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <CountDownNumbers>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
          </CountDownNumbers>
          <DividerContainer>:</DividerContainer>
          <CountDownNumbers>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
          </CountDownNumbers>
        </CountDownContainer>

        <CountDownStarterButton disabled={isSubmitDisabled} type="submit">
          <Play /> Começar
        </CountDownStarterButton>
      </form>
    </HomeContainer>
  )
}
