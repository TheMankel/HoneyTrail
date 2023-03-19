import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#162315',
      paper: '#1c2c1a',
      olive: '#313f1c',
    },
    primary: {
      main: '#677117',
    },
    secondary: {
      main: '#677117',
    },
    text: {
      primary: '#f7ce0c',
      secondary: '#ffbc03',
    },
  },
  typography: {
    fontFamily: ['Gluten'],
  },
});

export default theme;
