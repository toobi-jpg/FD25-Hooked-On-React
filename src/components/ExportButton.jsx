import ExportPDF from '../utils/exportPDF';
import { Button } from '@mui/material';

export default function ExportButton({ columns, rows }) {
  return (
    <Button variant="outlined" onClick={() => ExportPDF(columns, rows)}>
      Export Table
    </Button>
  );
}
