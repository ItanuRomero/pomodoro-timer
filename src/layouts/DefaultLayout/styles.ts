import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  width: 90%;
  min-height: calc(100vh - 5rem);
  margin: 2.5rem auto;

  border-radius: 8px;
`
