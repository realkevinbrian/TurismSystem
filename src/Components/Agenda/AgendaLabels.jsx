import React from 'react';
import { TableCell } from '@mui/material'


/****
 * LABELS FOR Agenda TABLE TO MAKE OUR TABLE REUSABLE
 */


export default function AgendaLabels() {

  /*Este sao dados para monstrar na tabela (COLUMNS)! 
Como estamos na fase de teste, usei estes dados como amostra
*/

const columns = [
  { id: 'name', label: 'Nome',align : "left"},
  { id: 'date', label: 'Data', align : "left"},
  { id: 'start', label: 'Inicio', align : "left"},
  { id: 'entrance', label: 'Entrada', align : "left" },
  { id: 'local', label: 'Local', align : "left" },
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
