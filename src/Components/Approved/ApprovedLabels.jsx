import { TableCell } from '@mui/material';
import React from 'react';


/****
 * LABELS FOR Approved TABLE TO MAKE OUR TABLE REUSABLE
 */


export default function ApprovedLabels() {

   /*Este sao dados para monstrar na tabela (Labels)! 
  Como estamos na fase de teste, usei estes dados como amostra
  */
  const columns = [
    { id: 'name', label: 'Nome',align : "left"},
    { id: 'type', label: 'Tipo', align : "left"},
    { id: 'date', label: 'Data', align : "left" },
    { id: 'details', label: 'Detalhes', align : "right" }
  ];

  return (
    <>
      {//=>Here we looping through our received data from the props
        columns.map((column) => {
          return (
            <TableCell key={column.id} align={column.align}>
              {column.label}
            </TableCell>
          );
        })}
    </>
  );
}

