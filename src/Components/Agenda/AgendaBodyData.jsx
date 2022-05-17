import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import * as S from "./styled";
import {StyledEditInput} from "../Category/styled"
import { useSelector, useDispatch } from 'react-redux';
import { selectAll, DeleteRow, UpdateRow } from '../../features/AgendaSlice';


/****
 * BODY DATA FOR Agenda TABLE TO MAKE OUR TABLE REUSABLE
 */


export function AgendaBodyData() {
  //query databystring and byNumber
  const query = useSelector(state => state.query.query_string);
  const queryNum = useSelector(state => state.query.queryByNumber);
  const agendaData = useSelector(selectAll);
  const [editRowId, setEditId] = useState(null)
  
  
  return (
    <>
      {
        agendaData.filter(row => row.name.toLowerCase().includes(query))
        .slice(0,queryNum)
        .map((row) => {
          return (
            <React.Fragment>
              { (row.id === editRowId) ? <EditableRow data={row} setEditId={setEditId}/>
              : <ReadOnlyRow data={row} setEditId={setEditId}/>
              }
            </React.Fragment>
          );
        })}
    </>
  );

}



/***
 * Read Only Row
 */

 export const ReadOnlyRow = ({data:row,setEditId}) =>{
  const dispatch = useDispatch();

  return(
    <TableRow hover tabIndex={-1} key={row.id}>
      <TableCell colSpan={0} sx={{maxWidth:"100px"}}>{row.name}</TableCell>
      <TableCell>{row.date}</TableCell>
      <TableCell>{row.start}</TableCell>
      <TableCell>{row.entrance}</TableCell>
      <TableCell sx={{maxWidth:"450px"}}>{row.local}</TableCell>
      <TableCell align="right"><S.Edit className='text-cyan-900' onClick={()=>setEditId(row.id)}><FontAwesomeIcon icon={faEdit}/></S.Edit></TableCell>
      <TableCell align="right"><S.Edit className='text-red-500'><FontAwesomeIcon icon={faDeleteLeft} onClick={()=>dispatch(DeleteRow({id : row.id}))}/></S.Edit></TableCell>
    </TableRow>
  )
}


/**
 * Editable Row
 */

 export const EditableRow = ({data:row,setEditId}) =>{
   
  const dispatch = useDispatch();
   //Grap our form edit values
   const [name, setName] = useState(null);
   const [date, setDate] = useState(null);
   const [start_time, setStartTime] = useState(null);
   const [entrance, setEntrance] = useState(null);
   const [local, setLocal] = useState(null);

   //Update method
   const handleUpdate = (id) =>{
    dispatch(UpdateRow({id : id, name,date,start_time,entrance,local,}))
    setEditId(null);

  }


  return(
      <TableRow key={row.id}>
        <TableCell>
          <StyledEditInput
          type="text" placeholder='Atualize Nome'
          value={row.name}
          onChange={(self) => setName(self.target.value)}
          />
        </TableCell>
        <TableCell>
          <StyledEditInput
          value={row.date}
          type="text" placeholder='Atualize data'
          onChange={(self) => setDate(self.target.value)}
          />
        </TableCell>
        <TableCell>
          <StyledEditInput
          value={row.start}
          type="text" placeholder='Atualize a hora do inicio'
          onChange={(self) => setStartTime(self.target.value)}
          />
        </TableCell>
        <TableCell>
          <StyledEditInput
          value={row.entrance}
          type="text" placeholder='Atualize Valor da Entrada'
          onChange={(self) => setEntrance(self.target.value)}
          />
        </TableCell>
        <TableCell>
          <StyledEditInput
          value={row.local}
          type="text" placeholder='Atualize o Local'
          onChange={(self) => setLocal(self.target.value)}
          />
        </TableCell>
        <TableCell align="right"><S.Edit className='text-cyan-900' onClick={() => handleUpdate(row.id)}>Atualize</S.Edit></TableCell>
        <TableCell align="right"><S.Edit className='text-red-500' onClick={() => setEditId(null)}>Cancelar</S.Edit></TableCell>
      </TableRow>
  )
}