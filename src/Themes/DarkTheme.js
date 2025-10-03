import { createTheme } from '@mui/material/styles';
import { baseThemeOptions } from './basetheme.js';

export const DarkTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'dark',
    background: {
      default: '#23262a',
      paper: '#42417ce7',
    },
    text: {
      primary: '#fff',
      secondary: '#e0e0e0',
    },
    primary: { main: '#76a3da7e' },
    secondary: { main: '#27265375' },
    divider: '#0e0e0eff',
    customDefault: { main: '#000000ff' }, 
    customDefault2: { main: '#537488ff' },
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
          backgroundColor: '#202749f1',
          color: '#e6e6e6ff',
          padding: '4px 15px',
          display: 'grid',
          justifyContent: 'flex-start',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.35)',
          '&:hover': {
            backgroundColor: '#a3c9f7',
            color: '#222',
          },
        },

        outlined: {
          backgroundColor: '#18191b',
          color: '#a3c9f7',
          padding: '10px 20px',
          border: '3px solid #42417ce7',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.35)',
          '&:hover': {
            backgroundColor: '#272653a4',
            color: '#e6e6e6ff',
          },
        },
      },
    },
  },

  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.25)',
    '0px 3px 6px rgba(0,0,0,0.30)',
    '0px 4px 8px rgba(0,0,0,0.35)',
    '0px 6px 12px rgba(0,0,0,0.14)',
  ],
  typography: {
    h1: { ...baseThemeOptions.typography?.h1, color: '#fff' },
    h2: { ...baseThemeOptions.typography?.h2, color: '#557fa1f3' },
    h3: { ...baseThemeOptions.typography?.h3, color: '#e0e0e0' },
    h4: { ...baseThemeOptions.typography?.h4, color: '#a3c9f7' },
    h5: { ...baseThemeOptions.typography?.h5, color: '#e0e0e0' },
    body1: { ...baseThemeOptions.typography?.body1, color: '#fff' },
    body2: { ...baseThemeOptions.typography?.body2, color: '#747474' },
  },
});
