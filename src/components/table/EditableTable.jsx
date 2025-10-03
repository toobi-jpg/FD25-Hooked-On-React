import React, { useMemo } from 'react';
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

  const mrtColumns = useMemo(
    () =>
      columns.map((label, i) => ({
        accessorKey: `c${i}`,
        header: label || `Col ${i + 1}`,
      })),
    [columns]
  );

  const mrtData = useMemo(
    () =>
      rows.map((r) =>
        Object.fromEntries(columns.map((_, i) => [`c${i}`, r[i] ?? '']))
      ),
    [columns, rows]
  );

  function commitCell(rowIndex, columnId, newValue) {
    const colIndex = Number(columnId.slice(1));
    const nextRows = [...rows];
    nextRows[rowIndex] = nextRows[rowIndex].map((v, j) =>
      j === colIndex ? newValue : v
    );
    onSave({ columns, rows: nextRows });
  }

  const table = useMaterialReactTable({
    columns: mrtColumns,
    data: mrtData,
    enableEditing: true,
    editDisplayMode: 'cell', //enkel cell-edit (Excel-känsla)

    //Spara på blur/Enter
    muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      onBlur: (e) => commitCell(cell.row.index, cell.column.id, e.target.value),
      onKeyDown: (e) => {
        if (e.key === 'Enter') e.currentTarget.blur();
      },
    }),

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
