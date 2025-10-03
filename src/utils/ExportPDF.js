import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const ExportPDF = (tableData) => {
  console.log(tableData);

  const { columns, rows } = tableData;

  const doc = new jsPDF();

  autoTable(doc, {
    // head: columns,
    body: rows,
  });

  doc.save('table.pdf');
};

export default ExportPDF;
