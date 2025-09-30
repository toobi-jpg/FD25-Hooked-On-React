
import UploadFile from "./components/UploadFile";
import { useState } from "react";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { LightTheme } from "./Themes/lighttheme.js";
import { DarkTheme } from "./Themes/darktheme.js";
import DummyDemo from "./components/DummyDemo.jsx";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentTheme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <>
      <UploadFile/>
    
    
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div>
        <Button
          variant="contained"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "light" : "dark"} mode
        </Button>
      </div>
      <DummyDemo />
    </ThemeProvider>
    </>
  );
}

export default App;
