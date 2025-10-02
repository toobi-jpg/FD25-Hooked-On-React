import { createTheme } from '@mui/material/styles';
import { baseThemeOptions } from './basetheme.js';

// steg 1: skapa theme baserat på basetheme + palette
export const LightTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'light',
    background: {
      default: '#f5f6f8',
      paper: '#6993c7bd',
    },
    text: {
      primary: '#080808ff',
      secondary: '#eeeeeef1',
    },
    primary: { main: '#76a3daff' },
    secondary: { main: '#42417ce7' },
    divider: '#e0e0e0',
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 24px',
          border: '1px solid #625faca1',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.12)',
          margin: '10px',
        },

        contained: {
          backgroundColor: '#a3c9f7',
          color: '#222',
          padding: '4px 15px',
          display: 'flex',
          justifyContent: 'flex-start',
          '&:hover': {
            backgroundColor: '#202749f1',
            color: '#f1f1f1ff',
          },
        },

        outlined: {
          backgroundColor: '#ffffff',
          color: '#050505ff',
          '&:hover': {
            backgroundColor: '#202749f1',
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
    h2: { ...baseThemeOptions.typography?.h2, color: '#28284ef3' },
    h3: { ...baseThemeOptions.typography?.h3, color: '#2e2e2eff' },
    h4: { ...baseThemeOptions.typography?.h4, color: '#a3c9f7' },
    h5: { ...baseThemeOptions.typography?.h5, color: '#1b1b1bff' },
    body1: { ...baseThemeOptions.typography?.body1, color: '#222' },
    body2: { ...baseThemeOptions.typography?.body2, color: '#ffffffff' },
  },
});
