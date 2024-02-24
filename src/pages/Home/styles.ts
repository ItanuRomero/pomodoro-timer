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

export const CountDownBaseButton = styled.button`
  width: 100%;
  max-width: 700px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  font-family: 'Roboto Mono';

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
`

export const CountDownStartButton = styled(CountDownBaseButton)`
  background-color: ${(props) => props.theme['green-500']};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const CountDownStopButton = styled(CountDownBaseButton)`
  background-color: ${(props) => props.theme['red-500']};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
