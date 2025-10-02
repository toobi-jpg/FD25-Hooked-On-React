import UploadXLSX from '../utils/UploadXLSX';
import { Button } from '@mui/material';

const UploadButton = ({ setTableData }) => {
  const handleUpload = async (e) => {
    let data = await UploadXLSX(e);

    setTableData(data);
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
          onChange={handleUpload}
        />
        <Button variant="outlined" component="span">
          Ladda upp fil
        </Button>
      </label>
    </div>
  );
};

export default UploadButton;
