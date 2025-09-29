import { createTheme } from "@mui/material/styles";
import { baseThemeOptions } from "./basetheme.js";

// steg 1: skapa theme baserat på basetheme + palette
export const LightTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: "light",
      background: {
      default: "#a2c59bff",
      paper: "#3f4d40b7",
      },

    primary: {
      main: "#5fa365ff",   
    },

    secondary: {
      main: "#c7c7c7ff", 
    },

    warning: {
      main: "#FFB74D",    
    },
    
    divider: "#1b1b1bff",
  },

  components: {
    MuiButton: {
      styleOverrides: {

        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 24px",
          border: "1px solid #2C2C2C",
        },

        contained: {
          backgroundColor: "#8570acff",
          color: "#020202ef",
          "&:hover": {
            backgroundColor: "#282135e5",
            color: "#ccccccff",
          },
        },

        outlined: {
        backgroundColor: "#bc66d1d0",
            color: "#050505ec",
          "&:hover": {
            backgroundColor: "#bc66d1d0",
            color: "#bc66d1d0",
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
  ],
});

// muterar typografi från baseTheme
LightTheme.typography.h1 = {
  ...LightTheme.typography.h1,
  color: "#212121",
};

LightTheme.typography.h2 = {
  ...LightTheme.typography.h2,
  color: "#fffffff1",
};

LightTheme.typography.h3 = {
  ...LightTheme.typography.h3,
  color: "#5b5a94e5", 
};

LightTheme.typography.h4 = {
  ...LightTheme.typography.h4,
  color: "#53be7cdc", 
};


LightTheme.typography.h5= {
  ...LightTheme.typography.h5,
  color: "#000000c4", 
};


LightTheme.typography.body1 = {
  ...LightTheme.typography.body1,
  color: "#000000ea",
};

LightTheme.typography.body2 = {
  ...LightTheme.typography.body2,
  color: "#ffffffe1",
};