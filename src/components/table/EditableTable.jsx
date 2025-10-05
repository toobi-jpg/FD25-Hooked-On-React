import React, { useMemo, useRef } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import Box from '@mui/material/Box';
/** Wrapper utan hooks (så vi får returnera tidigt utan hook-varningar) */
export default function EditableTable({ tableData, onSave }) {
  if (!tableData || !tableData.columns?.length) {
    return <p>Import a .xlsx to start</p>;
  }
  return <EditableTableCore tableData={tableData} onSave={onSave} />;
}
function EditableTableCore({ tableData, onSave }) {
  const { columns, rows } = tableData;
  const currentDataRef = useRef(rows);

  const mrtColumns = useMemo(
    () =>
      columns.map((label, i) => ({
        accessorKey: `c${i}`,
        header: label || `Col ${i + 1}`,
        muiEditTextFieldProps: ({ cell, row }) => ({
          onBlur: (e) => {
            const colIndex = Number(cell.column.id.slice(1));
            const rowIndex = row.index;

            if (!currentDataRef.current[rowIndex]) {
              currentDataRef.current[rowIndex] = [...rows[rowIndex]];
            }
            currentDataRef.current[rowIndex][colIndex] = e.target.value;

            onSave({ columns, rows: currentDataRef.current });
          },
        }),
      })),
    [columns, rows, onSave]
  );

  const mrtData = useMemo(
    () =>
      rows.map((r) =>
        Object.fromEntries(columns.map((_, i) => [`c${i}`, r[i] ?? '']))
      ),
    [columns, rows]
  );

  const table = useMaterialReactTable({
    columns: mrtColumns,
    data: mrtData,
    enableEditing: true,
    editDisplayMode: 'cell', //enkel cell-edit (Excel-känsla)
    //Spara på blur/Enter
    //enkel UX
    enableColumnResizing: true,
    enableStickyHeader: true,
    /*initialState: { density: 'compact', pagination: { pageSize: 50 } }, */
  });

  return (
    <Box
      sx={{
        minHeight: 480,
        margin: 5,
        boxShadow: 2,
        borderRadius: 3,
        backgroundColor: (theme) => theme.palette.customDefault.main,
        color: (theme) => theme.palette.text.secondary,
      }}
    >
      <MaterialReactTable table={table} />
    </Box>
  );
}
