import UploadButton from './components/UploadButton.jsx';
import { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { LightTheme } from './Themes/lighttheme.js';
import { DarkTheme } from './Themes/darktheme.js';
import EditableTable from './components/table/EditableTable.jsx';
import ExportButton from './components/ExportButton';
import SimpleNavbar from './components/NavBar.jsx';
import Box from '@mui/material/Box';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentTheme = isDarkMode ? DarkTheme : LightTheme;
  const [tableData, setTableData] = useState(null);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />

        <SimpleNavbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <UploadButton setTableData={setTableData} />
          {tableData ? (
          <>
            <Box
              sx={{
                maxWidth: 960,
                margin: '2rem auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: (theme) => theme.palette.customDefault2.main,
                borderRadius: 3,
              }}
            >
              <EditableTable tableData={tableData} onSave={setTableData} />
            </Box>
              <ExportButton tableData={tableData} />
              </>
              ) : (
            <Box
              sx={{
              boxShadow: 2,
              maxWidth: 950,
              margin: '2rem auto',
              minHeight: 480,
              backgroundColor: (theme) => theme.palette.customDefault2.main,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 3,
              color: (theme) => theme.palette.text.secondary,
              }}
            >
              <h4>Upload a .xlsx file to make the data show up here</h4>
            </Box>
        )}
        
      </ThemeProvider>
    </>
  ); 
}

export default App;
