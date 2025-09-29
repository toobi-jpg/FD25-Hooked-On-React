import { createTheme } from "@mui/material/styles";
import { baseThemeOptions } from "./basetheme.js";

// steg 1: skapa dark theme
export const DarkTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#4436686e",
    },
    text: {
      primary: "#E0E0E0",
      secondary: "#070707ff",
    },
    primary: {
      main: "#66bde69f",  
    },
    secondary: {
      main: "#8bd88fff",  
    },
    warning: {
      main: "#ffa928e7",  
    },
    divider: "#969696ff",  
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 24px",
          border: "1px solid #9b9b9bff",
        },
        contained: {
          backgroundColor: "#9d6fc2bb",
          color: "rgba(255, 255, 255, 0.72)",
          "&:hover": {
          backgroundColor: "#caa4e9ec",
          color: "#f7f7f7ff"
          },
        },
        outlined: {
          backgroundColor: "#583361e1",
          color: "#f7f7f7ec",
          "&:hover": {
            backgroundColor: "#d9afe4b0",
            color: "#d9afe4b0",
          },
        },
      },
    },
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0,0,0,0.3)",   // shadow[1]
    "0px 3px 6px rgba(0,0,0,0.3)",   // shadow[2]
    "0px 4px 8px rgba(0,0,0,0.35)",  // shadow[3]
    "0px 6px 12px rgba(0,0,0,0.35)", // shadow[4]
    // ... fortsätt upp till shadow[24] om du vill
  ],
});


DarkTheme.typography.h1 = {
  ...DarkTheme.typography.h1,
  color: "#E0E0E0", 
};

DarkTheme.typography.h2 = {
  ...DarkTheme.typography.h2,
  color: "#52df9dde", 
};

DarkTheme.typography.h3 = {
  ...DarkTheme.typography.h3,
  color: "#b25dc4d7", 
};

DarkTheme.typography.h4 = {
  ...DarkTheme.typography.h4,
  color: "#3f8675e8", 
};


DarkTheme.typography.h5= {
  ...DarkTheme.typography.h5,
  color: "#ffffffc4", 
};


DarkTheme.typography.body1 = {
  ...DarkTheme.typography.body1,
  color: "#fdfdfdce", // medelgrå
};

DarkTheme.typography.body2 = {
  ...DarkTheme.typography.body2,
  color: "#9E9E9E", // mörkare grå
};