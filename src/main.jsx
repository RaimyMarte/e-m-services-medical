import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material';
import { LandingPage } from './components/LandingPage'
import './styles.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#117255',
    },
    secondary: {
      main: '#198e6f',
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
)
