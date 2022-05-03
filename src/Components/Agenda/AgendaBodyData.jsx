import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import * as S from "./styled";

/****
 * BODY DATA FOR Agenda TABLE TO MAKE OUR TABLE REUSABLE
 */



export function AgendaBodyData({ Rows: rows }) {

  return (
    <>
      {
        // rows.filter(row => row.nome)
        rows.map((row) => {
          // console.log(columns);
          return (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.start}</TableCell>
              <TableCell>{row.entrance}</TableCell>
              <TableCell>{row.local}</TableCell>
              <TableCell align="right"><S.Edit href={`/Agenda/${row.id}`} className='text-cyan-900'><FontAwesomeIcon icon={faEdit} /></S.Edit></TableCell>
              <TableCell align="right"><S.Edit href={`/Agenda/${row.id}`} className='text-red-500'><FontAwesomeIcon icon={faDeleteLeft} /></S.Edit></TableCell>
            </TableRow>
          );
        })}
    </>
  );

}
