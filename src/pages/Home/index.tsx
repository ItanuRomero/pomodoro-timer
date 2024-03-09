import { HandPalm, Play } from '@phosphor-icons/react'
import {
  CountDownStartButton,
  CountDownStopButton,
  HomeContainer,
} from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { useContext } from 'react'
import { CycleContext } from './Context/cycles'

const newCycleValidationSchema = zod.object({
  subject: zod.string().min(1, 'A tarefa não pode estar em branco'),
  minutes: zod.number().min(5).max(50),
})

export type FormValues = zod.infer<typeof newCycleValidationSchema>

export function Home() {
  const cyclesForm = useForm<FormValues>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      subject: '',
      minutes: 5,
    },
  })
  const { handleSubmit, watch, reset } = cyclesForm
  const { activeCycle, createNewCycle, stopCountDown } =
    useContext(CycleContext)

  const subject = watch('subject')
  const isSubmitDisabled = !subject

  function handleCreateNewCycle(data: FormValues) {
    createNewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...cyclesForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <CountDownStopButton onClick={stopCountDown} type="button">
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
