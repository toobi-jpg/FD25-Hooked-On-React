import { useState } from "react";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { LightTheme } from "./Themes/lighttheme.js";
import { DarkTheme } from "./Themes/darktheme.js";
import DummyDemo from "./components/DummyDemo.jsx";

import EditableTable from "./components/table/EditableTable.jsx";

function App(){
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentTheme = isDarkMode ? DarkTheme : LightTheme;

  const [tableData, setTableData] = useState(null);

  return (
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
      {tableData ? (
        <div style={{ padding: 16 }}>
          <EditableTable tableData={tableData} onSave={setTableData} />
        </div>
      ) : (
        <p style={{ padding: 16, color: "#666" }}>
          Ladda upp en .xlsx via import-delen så visas tabellen här.
        </p>
      )}
      {
      /*skicka in setTableData hit:
        <Upload onLoaded={setTableData} />*/}
    </ThemeProvider>
  );
}

export default App;
