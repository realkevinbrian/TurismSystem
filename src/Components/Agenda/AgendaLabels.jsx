import React from 'react';
import AgendaData from '././AgendaData';
import { TableCell } from '@mui/material'


/****
 * LABELS FOR Agenda TABLE TO MAKE OUR TABLE REUSABLE
 */


export default function AgendaLabels() {
  const Columns = AgendaData().columns;

  return (
    <>
      {//=>Here we looping through our received data from the props
        Columns.map((column) => {
          return (
            <TableCell key={column.id} align={column.align}>
              {column.label}
            </TableCell>
          );
        })}
    </>
  );
}
