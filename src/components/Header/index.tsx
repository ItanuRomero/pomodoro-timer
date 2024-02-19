import { Scroll, Timer } from '@phosphor-icons/react'
import { HeaderContainer, IconsContainer, Title } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Title>pomodoro-timer</Title>
      <IconsContainer>
        <NavLink to={'/'} title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to={'/history'} title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </IconsContainer>
    </HeaderContainer>
  )
}
