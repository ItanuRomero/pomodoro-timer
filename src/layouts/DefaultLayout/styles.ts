import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  width: 90%;
  height: calc(100vh - 10rem);
  margin: 5rem auto;

  border-radius: 8px;
`
