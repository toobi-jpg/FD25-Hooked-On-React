import ExcelJS from 'exceljs';

//En asynkron eventhanterare körs när användaren laddar upp en fil.
const UploadXLSX = async (e) => {
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

  // gör om exceljs object till enklare arrays
  const columns = worksheet._columns.map((col) => col.key || col.header || '');

  // gör om exceljs object till enklare arrays
  const rows = worksheet._rows
    .filter((r) => r && r.values)
    .map((r) => r.values.slice(1));

  const data = { columns, rows };

  return data;
};

export default UploadXLSX;
