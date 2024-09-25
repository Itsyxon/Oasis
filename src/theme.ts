import { createTheme } from '@mui/material'

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    primary: {
      main: '#293f2b',
      contrastText: 'rgba(67, 84, 69, 0.09)',
    },
    secondary: {
      main: '#ffd700',
    },
  },
})

export default lightTheme
