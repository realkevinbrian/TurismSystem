import { TableCell } from '@mui/material';
import React from 'react';

/****
 * LABELS FOR Category TABLE TO MAKE OUR TABLE REUSABLE
 */


export function CategoryLabels({ Columns }) {

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
