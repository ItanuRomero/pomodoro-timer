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

type FormValues = {
  subject: string
  minutes: number
}

const newCycleValidationSchema = zod.object({
  subject: zod.string().min(1, 'A tarefa não pode estar em branco'),
  minutes: zod.number().min(5).max(50),
})

export function Home() {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    resolver: zodResolver(newCycleValidationSchema),
  })

  function handleFormSubmit(data: FormValues) {
    console.log(data)
  }

  const subject = watch('subject')
  const isSubmitDisabled = !subject

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
            <span>0</span>
            <span>0</span>
          </CountDownNumbers>
          <DividerContainer>:</DividerContainer>
          <CountDownNumbers>
            <span>0</span>
            <span>0</span>
          </CountDownNumbers>
        </CountDownContainer>

        <CountDownStarterButton disabled={isSubmitDisabled} type="submit">
          <Play /> Começar
        </CountDownStarterButton>
      </form>
    </HomeContainer>
  )
}
