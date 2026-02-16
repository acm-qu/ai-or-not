import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core'
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  primaryColor: 'dark-navy',
  colors: {
    'dark-navy': [
      '#E6E9F0',
      '#C1C8D9',
      '#9CB0C2',
      '#7797AB',
      '#52708F',
      '#2D4868',
      '#092F41',
      '#061F2B',
      '#040F15',
      '#020708'
    ]
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
