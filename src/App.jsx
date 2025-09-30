import { useState } from "react";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { LightTheme } from "./Themes/lighttheme.js";
import { DarkTheme } from "./Themes/darktheme.js";
import DummyDemo from "./components/DummyDemo.jsx";
import ExportButton from "./components/ExportButton";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentTheme = isDarkMode ? DarkTheme : LightTheme;

  //Test data i state för export
  const [columns, setColumns] = useState(["Name", "Age", "City"]);
  const [rows, setRows] = useState([
    ["Anna", 25, "Stockholm"],
    ["Karl", 20, "Örebro"],
    ["Sara", 23, "Uppsala"],
  ]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div>
        <Button variant="contained" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "light" : "dark"} mode
        </Button>
      </div>
      <ExportButton columns={columns} rows={rows} />
      <DummyDemo />
    </ThemeProvider>
  );
}

export default App;
