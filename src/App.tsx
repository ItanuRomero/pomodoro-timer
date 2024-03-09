import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CycleContextProvider } from './pages/Home/Context/cycles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CycleContextProvider>
        <Router />
      </CycleContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
