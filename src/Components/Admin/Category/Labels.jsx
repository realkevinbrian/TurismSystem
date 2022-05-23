import { TableCell } from '@mui/material';
import React from 'react';

/****
 * LABELS FOR Category TABLE TO MAKE OUR TABLE REUSABLE
 */
export function CategoryLabels() {
  
  /*Este sao dados para monstrar na tabela (COLUMNS)! 
Como estamos na fase de teste, usei estes dados como amostra
*/
  const columns = [
    { id: 'name', label: 'Nome',align : "left"},
    { id: 'type', label: 'Tipo', align : "left"},
    { id: 'edit', label: 'Editar', align : "right" },
    { id: 'delete', label: 'Excluir', align : "right" }
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
