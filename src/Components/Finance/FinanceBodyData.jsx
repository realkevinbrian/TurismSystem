import { TableCell, TableRow } from '@mui/material';
import React, {useState} from 'react';
import data from "../../Api/server"
import { useSelector } from 'react-redux';


/****
 * BODY DATA FOR FINANCE TABLE TO MAKE OUR TABLE REUSABLE
 */

export function FinanceBodyData({Columns: columns }) {

  //=>QUERY DATA SEARCHING FUNCTIONALITY
  const query = useSelector(state => state.query.query_string);
  const queryNum = useSelector(state => state.query.queryByNumber);

  //dados financeiros do Database
  const [dadosFinanceiros, setDadosFinanceiros] = useState(data.finance);

  return (
    <>
      {dadosFinanceiros
        // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
        .slice(0,queryNum)
        .filter(row => row.name.toLowerCase().includes(query))
        .map((row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.tipo}</TableCell>
            <TableCell>{row.data}</TableCell>
            <TableCell>{row.transaction}</TableCell>
            <TableCell>
              {(row.status === "Pendente") ? 
                <span className='text-red-500'>{row.status}</span> : 
                <span className='text-green-600'>{row.status}</span>
              }
            </TableCell>
            <TableCell>{row.total}</TableCell>
          </TableRow>
        )
        )}
    </>
  );
}
