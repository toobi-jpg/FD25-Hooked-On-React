import ExcelJS from 'exceljs';
import { Button } from '@mui/material';

const UploadFile = () => {
  //En asynkron eventhanterare körs när användaren laddar upp en fil.
  const handleFile = async (e) => {
    //Files är en lista med uppladdade filer. Här hämtas den första (och enda) filen i listan,
    //eftersom endast en fil i taget kan laddas upp i detta fall.
    const file = e.target.files[0];

    //Om filen som laddas upp inte är en xlsx-fil så får användaren ett felmeddelande,
    //och funktionen stoppas här.
    if (!file.name.endsWith('.xlsx')) {
      alert('Endast .xlsx-filer är tillåtna.');
      return;
    }

    //Filen läses in som en ArrayBuffer (en binär representation av innehållet).
    //Hela filen måste läsas (await) in innan nästa rad kod körs,
    //för att hela filen ska kunna parsas.
    const bufferData = await file.arrayBuffer();

    //En "arbetsbok" (xlsx-fil) skapas.
    const workbook = new ExcelJS.Workbook();

    //ExcelJS tolkar strukturen i bufferDatan och "parsar" innehållet.
    //Datan laddas in i arbetsboken.
    await workbook.xlsx.load(bufferData);

    //Det första bladet i arbetsboken hämtas och sparas som "worksheet".
    const worksheet = workbook.getWorksheet(1);

    /*------------- Den här console.loggen kan tas bort sen ------------------ */
    //Varje rad och radnummer i bladet gås igenom.
    //row.values är en array med värden från varje cell i xlsx-bladet.
    //Radnumren och cellvärdena skrivs ut i konsollen.
    worksheet.eachRow((row, rowIndex) => {
      console.log(rowIndex, row.values);
    });
  };

  return (
    <div>
      <h3>Ladda upp en xlsx-fil (Excel/Google Sheet):</h3>
      <label htmlFor="upload-file">
      <input
        style={{ display: 'none' }}
        id="upload-file"
        type="file"
        accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onChange={handleFile}
      />
        <Button variant="outlined" component="span">
          Ladda upp fil
        </Button>
      </label>
    </div>
  );
};

export default UploadFile;
