import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import * as S from "./styled";
import data from "../../Api/server"
import { useSelector } from 'react-redux';

/****
 * BODY DATA FOR Agenda TABLE TO MAKE OUR TABLE REUSABLE
 */


export function AgendaBodyData() {
  //query databystring and byNumber
  const query = useSelector(state => state.query.query_string);
  const queryNum = useSelector(state => state.query.queryByNumber);




  // => AgendaData
  const [agendaData, setAgendaData] = useState(data.agenda);

  //Handle on Click
  const handleDelete = (agendaId) =>{
    let newData = agendaData.filter(item => item.id !== agendaId);
    setAgendaData(newData);
  }

  
  
  return (
    <>
      {
        agendaData.filter(row => row.name.toLowerCase().includes(query))
        .slice(0,queryNum)
        .map((row) => {
          return (
            <TableRow hover tabIndex={-1} key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.start}</TableCell>
              <TableCell>{row.entrance}</TableCell>
              <TableCell>{row.local}</TableCell>
              <TableCell align="right"><S.Edit className='text-cyan-900'><FontAwesomeIcon icon={faEdit} /></S.Edit></TableCell>
              <TableCell align="right"><S.Edit className='text-red-500'><FontAwesomeIcon icon={faDeleteLeft} onClick={()=> handleDelete(row.id)}/></S.Edit></TableCell>
            </TableRow>
          );
        })}
    </>
  );

}
