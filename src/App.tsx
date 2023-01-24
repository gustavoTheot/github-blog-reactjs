import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ProfileProvider } from './context/ProfileContext'

import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProfileProvider>
          <Router />
        </ProfileProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
