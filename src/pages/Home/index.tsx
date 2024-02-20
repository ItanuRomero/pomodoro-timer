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

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="subject">Vou trabalhar em</label>
          <SubjectInput
            type="text"
            name="subject"
            id="subject"
            placeholder="Insira o nome da sua tarefa"
          />
          <label htmlFor="minutes">durante</label>
          <MinutesInput
            type="number  "
            name="minutes"
            id="minutes"
            placeholder="00"
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

        <CountDownStarterButton disabled type="submit">
          <Play /> Começar
        </CountDownStarterButton>
      </form>
    </HomeContainer>
  )
}