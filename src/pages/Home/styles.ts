import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    font-size: 1.125rem;

    flex-wrap: wrap;
  }
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  gap: 0.4rem;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;

  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const SubjectInput = styled(BaseInput)`
  flex: 1;
`

export const MinutesInput = styled(BaseInput)`
  width: 4rem;
`

export const CountDownContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;

  flex-wrap: wrap;

  gap: 1.75rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 1rem;
    border-radius: 8px;
  }
`

export const CountDownNumbers = styled.div`
  display: flex;
  gap: 1rem;
`

export const DividerContainer = styled.div`
  color: ${(props) => props.theme['green-500']};
`

export const CountDownStarterButton = styled.button`
  width: 100%;
  max-width: 700px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  font-family: 'Roboto Mono';

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  border: none;
  padding: 0.75rem;
  border-radius: 8px;

  cursor: pointer;

  transition: all ease 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
