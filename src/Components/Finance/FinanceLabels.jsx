import { TableCell } from '@mui/material';
import React from 'react';
import * as M from "@mui/icons-material"


/****
 * LABELS FOR FINANCE TABLE TO MAKE OUR TABLE REUSABLE
 */


export function FinanceLabels({ Columns }) {

  return (
    <>
      {//=>Here we looping through our received data from the props
        Columns.map((column) => {
          return (
            <TableCell key={column.id}>
              {column.label}
              <M.ArrowUpwardTwoTone/>
              <M.ArrowDownwardTwoTone/>
            </TableCell>
          );
        })}
    </>
  );
}
