import { HandPalm, Play } from '@phosphor-icons/react'
import {
  CountDownStartButton,
  CountDownStopButton,
  HomeContainer,
} from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { Cycle } from './Types/Cycle'
import { CyclesContext } from './Context/cycles'

const newCycleValidationSchema = zod.object({
  subject: zod.string().min(1, 'A tarefa não pode estar em branco'),
  minutes: zod.number().min(5).max(50),
})

export type FormValues = zod.infer<typeof newCycleValidationSchema>

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [active, setActive] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const cyclesForm = useForm<FormValues>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      subject: '',
      minutes: 5,
    },
  })
  const { handleSubmit, watch, reset } = cyclesForm

  const activeCycle = cycles.find((cycle) => cycle.id === active)

  function handleFinishActiveCycle() {
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
  }

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
        <CyclesContext.Provider
          value={{
            activeCycle,
            amountSecondsPassed,
            handleFinishActiveCycle,
            setAmountSecondsPassed,
          }}
        >
          <FormProvider {...cyclesForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>
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
