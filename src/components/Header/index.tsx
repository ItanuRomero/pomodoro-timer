import { Scroll, Timer } from '@phosphor-icons/react'
import { HeaderContainer, IconsContainer, Title } from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Title>pomodoro-timer</Title>
      <IconsContainer>
        <Link to={'/'}>
          <Timer size={24} />
        </Link>
        <Link to={'/history'}>
          <Scroll size={24} />
        </Link>
      </IconsContainer>
    </HeaderContainer>
  )
}
