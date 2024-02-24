import { UseFormRegister } from 'react-hook-form'
import { FormContainer, MinutesInput, SubjectInput } from './styles'
import { FormValues } from '../..'

export function NewCycleForm({
  register,
}: {
  register: UseFormRegister<FormValues>
}) {
  return (
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
  )
}
