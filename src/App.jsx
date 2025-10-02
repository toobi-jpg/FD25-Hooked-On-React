import UploadFile from './components/UploadFile';
import { useState } from 'react';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { LightTheme } from './Themes/lighttheme.js';
import { DarkTheme } from './Themes/darktheme.js';
import EditableTable from './components/table/EditableTable.jsx';
import ExportButton from './components/ExportButton';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentTheme = isDarkMode ? DarkTheme : LightTheme;

  const [tableData, setTableData] = useState(null);

  //Test data i state för export
  const [columns, setColumns] = useState(['Name', 'Age', 'City']);
  const [rows, setRows] = useState([
    ['Anna', 25, 'Stockholm'],
    ['Karl', 20, 'Örebro'],
    ['Sara', 23, 'Uppsala'],
  ]);

  return (
    <>
    
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />

      <div>
          <Button
            variant="contained"
            onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? 'light' : 'dark'} mode
          </Button>
        </div>

        <UploadFile />
        <ExportButton columns={columns} rows={rows} />
          {tableData ? (
          <div>
            <EditableTable tableData={tableData} onSave={setTableData} />
          </div>

        ) : (
          <p>
            Ladda upp en .xlsx via import-delen så visas tabellen här.
          </p>
        )}


        {/*skicka in setTableData hit:
        <Upload onLoaded={setTableData} />*/}


      </ThemeProvider>
    </>
  );
}

export default App;
