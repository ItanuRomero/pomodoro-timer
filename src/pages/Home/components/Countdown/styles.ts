import styled from 'styled-components'

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
