import { TableCell, TableRow } from '@mui/material';
import React from 'react';

/****
 * BODY DATA FOR FINANCE TABLE TO MAKE OUR TABLE REUSABLE
 */



export function FinanceBodyData({ Rows: rows, Columns: columns }) {
  return (
    <>
      {rows
        // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
        // .filter(row => row.name.toLowerCase().includes(query))
        .map((row) => {

          return (
            <TableRow hover tabIndex={-1} key={row.name}>
              {columns.map((column) => {
                const value = row[column.id];
                // console.log(value)
                return (

                  <TableCell key={column.id}
                  >
                    {
                      // column.format && typeof value === 'number' ? column.format(value) : value
                      value == "Pago" ? <span className='text-green-600'>Pago</span> :
                        value && value == "Pendente" ?
                          <span className='text-orange-600'>Pendente</span> :
                          value}
                  </TableCell>

                );
              })}
            </TableRow>
          );

        })}
    </>
  );
}
