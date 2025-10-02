import ExportPDF from '../utils/exportPDF';
import { Button } from '@mui/material';

export default function ExportButton({ tableData }) {
  return (
    <Button variant="outlined" onClick={() => ExportPDF(tableData)}>
      Export Table
    </Button>
  );
}
