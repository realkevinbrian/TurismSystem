import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import * as S from "./styled";

/****
 * BODY DATA FOR Category TABLE TO MAKE OUR TABLE REUSABLE
 */

export function CategoryBodyData({ Rows: rows }) {

  return (
    <>
      {
        // rows.filter(row => row.nome)
        rows.map((row) => {
          // console.log(columns);
          return (
            <TableRow key={row.id}>
              <TableCell>
                {(row.name === "restaurante") ? <S.styledCell><S.Ball className='bg-cyan-900' /><span>{row.name}</span></S.styledCell>
                  : (row.name === "comercio") ? <S.styledCell><S.Ball className='bg-red-900' /><span>{row.name}</span></S.styledCell>
                    : (row.name === "balada") ? <S.styledCell><S.Ball className='bg-green-900' /><span>{row.name}</span></S.styledCell>
                      : (row.name === "livraria") ? <S.styledCell><S.Ball className='bg-green-900' /><span>{row.name}</span></S.styledCell>
                        : (row.name === "lazer") ? <S.styledCell><S.Ball className='bg-blue-900' /><span>{row.name}</span></S.styledCell>
                          : (row.name === "bar") ? <S.styledCell><S.Ball className='bg-yellow-900' /><span>{row.name}</span></S.styledCell>
                            : (row.name === "cultural") ? <S.styledCell><S.Ball className='bg-orange-900' /><span>{row.name}</span></S.styledCell> : ""}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell align="right"><S.Edit href={`/category/${row.id}`} className='text-cyan-900'><FontAwesomeIcon icon={faEdit} /></S.Edit></TableCell>
              <TableCell align="right"><S.Edit href={`/category/${row.id}`} className='text-red-500'><FontAwesomeIcon icon={faDeleteLeft} /></S.Edit></TableCell>
            </TableRow>
          );
        })}
    </>
  );

}
