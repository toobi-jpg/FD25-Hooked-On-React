import { createTheme } from '@mui/material/styles';
import { baseThemeOptions } from './basetheme.js';

// steg 1: skapa theme baserat på basetheme + palette
export const LightTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'light',
    background: {
      default: '#c2c2c2ff',
      paper: '#485c77',
    },
    text: {
      primary: '#080808',
      secondary: '#fafafaff',
    },
    primary: { main: '#76a3daa1' },
    secondary: { main: '#42417ce7' },
    divider: '#000000ff',
    customDefault: { main: '#1f1f1fff' },    
    customDefault2: { main: '#7c97bbff' },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          margin: '10px',
        },

        contained: {
          backgroundColor: '#a3c9f7',
          color: '#222',
          padding: '4px 15px',
          display: 'flex',
          justifyContent: 'flex-start',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.35)',
          '&:hover': {
            backgroundColor: '#202749f1',
            color: '#f1f1f1ff',
          },
        },

        outlined: {
          backgroundColor: '#ffffffa9',
          color: '#0c0c0cff',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.35)',
          padding: '10px 20px',
          border: '3px solid #42417ce7',
          '&:hover': {
            backgroundColor: '#000000c7',
            color: '#e7e7e7ff',
          },
        },
      },
    },
  },

  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.08)',
    '0px 3px 6px rgba(0,0,0,0.10)',
    '0px 4px 8px rgba(0,0,0,0.12)',
    '0px 6px 12px rgba(0,0,0,0.14)',
  ],

  typography: {
    h1: { ...baseThemeOptions.typography?.h1, color: '#222' },
    h2: { ...baseThemeOptions.typography?.h2, color: '#667fadf3' },
    h3: { ...baseThemeOptions.typography?.h3, color: '#2e2e2eff' },
    h4: { ...baseThemeOptions.typography?.h4, color: '#a3c9f7' },
    h5: { ...baseThemeOptions.typography?.h5, color: '#1d1d1dff' },
    body1: { ...baseThemeOptions.typography?.body1, color: '#494949ff' },
    body2: { ...baseThemeOptions.typography?.body2, color: '#636363ff' },
  },
});
