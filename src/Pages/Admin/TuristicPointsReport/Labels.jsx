import { TableCell } from '@mui/material';
import React from 'react';

/****
 * LABELS FOR Category TABLE TO MAKE OUR TABLE REUSABLE
 */
export default function index() {
  
  /*Este sao dados para monstrar na tabela (COLUMNS)! 
Como estamos na fase de teste, usei estes dados como amostra
*/
  const columns = [
    { id: 'code', label: 'Codigo',align : "left"},
    { id: 'name', label: 'Nome', align : "left"},
    { id: 'date', label: 'Data', align : "left"},
    { id: 'details', label: 'Detalhes', align : "center" },
    { id: 'block', label: 'Bloquear', align : "right" }
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
