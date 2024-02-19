import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-family: 'Roboto Mono';
  font-size: 32px;
  color: ${(props) => props.theme['gray-300']};
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${(props) => props.theme['gray-300']};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;

    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
  }

  a:hover {
    border-bottom: 3px solid ${(props) => props.theme['green-500']};
  }

  a:active {
    color: ${(props) => props.theme['green-500']};
  }
`
