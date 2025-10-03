import UploadXLSX from '../utils/UploadXLSX';
import Button from '@mui/material/Button';

const UploadButton = ({ setTableData }) => {
  const handleUpload = async (e) => {
    let data = await UploadXLSX(e);

    setTableData(data);
  };

  return (
    <div>
      <h4>Upload a .xlsx file (Excel/Google Sheet):</h4>
      <label htmlFor="upload-file">
        <input
          style={{ display: 'none' }}
          id="upload-file"
          type="file"
          accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          onChange={handleUpload}
        />
        <Button variant="outlined" component="span">
          Upload file
        </Button>
      </label>
    </div>
  );
};

export default UploadButton;
