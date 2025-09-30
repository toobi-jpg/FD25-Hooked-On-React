
import UploadFile from "./components/UploadFile";
import { useState } from "react";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { LightTheme } from "./Themes/lighttheme.js";
import { DarkTheme } from "./Themes/darktheme.js";
import DummyDemo from "./components/DummyDemo.jsx";

import EditableTable from "./components/table/EditableTable.jsx";
import ExportButton from "./components/ExportButton";

function App(){
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentTheme = isDarkMode ? DarkTheme : LightTheme;

  const [tableData, setTableData] = useState(null);

  //Test data i state för export
  const [columns, setColumns] = useState(["Name", "Age", "City"]);
  const [rows, setRows] = useState([
    ["Anna", 25, "Stockholm"],
    ["Karl", 20, "Örebro"],
    ["Sara", 23, "Uppsala"],
  ]);

  return (
    <>
      <UploadFile/>
    
    
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div>
        <Button variant="contained" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "light" : "dark"} mode
        </Button>
      </div>
      <ExportButton columns={columns} rows={rows} />
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
    </>
  );
}

export default App;
