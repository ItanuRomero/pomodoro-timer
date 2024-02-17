import { ThemeProvider } from 'styled-components'
import { Button } from './components/button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>pomodoro timer</h1>
      <Button variant="primary" />
      <Button variant="secondary" />
    </ThemeProvider>
  )
}
