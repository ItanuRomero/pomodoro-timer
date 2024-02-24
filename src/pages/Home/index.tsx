import { HandPalm, Play } from '@phosphor-icons/react'
import {
  CountDownStartButton,
  CountDownStopButton,
  HomeContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'

type Cycle = {
  id: string
  subject: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

const newCycleValidationSchema = zod.object({
  subject: zod.string().min(1, 'A tarefa não pode estar em branco'),
  minutes: zod.number().min(5).max(50),
})

export type FormValues = zod.infer<typeof newCycleValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<FormValues>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      subject: '',
      minutes: 5,
    },
  })

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [active, setActive] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === active)

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
    } else {
      document.title = 'Pomodoro timer'
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        if (secondsDifference >= minutesInSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              return cycle.id === active
                ? {
                    ...cycle,
                    finishedDate: new Date(),
                  }
                : cycle
            }),
          )
          setActive(null)
          setAmountSecondsPassed(0)
        } else setAmountSecondsPassed(secondsDifference)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, active, minutesInSeconds])

  function handleStopCountDown() {
    setCycles((state) =>
      state.map((cycle) => {
        return cycle.id === active
          ? {
              ...cycle,
              interruptedDate: new Date(),
            }
          : cycle
      }),
    )
    setActive(null)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <NewCycleForm register={register} />

        <Countdown minutes={minutes} seconds={seconds} />

        {activeCycle ? (
          <CountDownStopButton onClick={handleStopCountDown} type="button">
            <HandPalm /> Interromper
          </CountDownStopButton>
        ) : (
          <CountDownStartButton disabled={isSubmitDisabled} type="submit">
            <Play /> Começar
          </CountDownStartButton>
        )}
      </form>
    </HomeContainer>
  )
}
