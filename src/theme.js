import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light', //swtich mode
    primary: {
      main: red[500]
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme