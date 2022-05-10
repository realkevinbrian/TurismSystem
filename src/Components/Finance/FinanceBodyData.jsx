import { TableRow } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import {selectAll} from "../../features/FinanceSlice"
import * as S from "./styled"


/****
 * BODY DATA FOR FINANCE TABLE TO MAKE OUR TABLE REUSABLE
 */

export function FinanceBodyData({Columns: columns }) {

  //=>QUERY DATA SEARCHING FUNCTIONALITY
  const query = useSelector(state => state.query.query_string);
  const queryNum = useSelector(state => state.query.queryByNumber);

  //dados financeiros do Database
  const dadosFinanceiros = useSelector(selectAll);

  // console.log(finance)

  return (
    <>
      {dadosFinanceiros
        // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
        .slice(0,queryNum)
        .filter(row => row.name.toLowerCase().includes(query))
        .map((row) => (
          <TableRow hover key={row.id}>
            <S.CustomTableCell>{row.name}</S.CustomTableCell>
            <S.CustomTableCell>{row.tipo}</S.CustomTableCell>
            <S.CustomTableCell>{row.data}</S.CustomTableCell>
            <S.CustomTableCell>{row.transaction}</S.CustomTableCell>
            <S.CustomTableCell>
              {(row.status === "Pendente") ? 
                <span className='text-red-500'>{row.status}</span> : 
                <span className='text-green-600'>{row.status}</span>
              }
            </S.CustomTableCell>
            <S.CustomTableCell>{row.total}</S.CustomTableCell>
          </TableRow>
        )
        )}
    </>
  );
}
