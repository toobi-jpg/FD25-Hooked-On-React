import ExportPDF from "../utils/exportPDF";

export default function ExportButton(columns, rows) {
  return <button onClick={() => ExportPDF(columns, rows)}>Export Table</button>;
}
