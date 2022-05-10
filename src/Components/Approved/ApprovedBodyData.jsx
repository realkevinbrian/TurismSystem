import { TableCell, TableRow } from '@mui/material';
import * as MICON from '@mui/icons-material';
import React, {useState} from 'react';
import * as S from "./styled";
// import data from "../../Api/Approved";
import { useSelector,useDispatch } from 'react-redux';
import { selectAll, DeleteRow, UpdateRow } from '../../features/ApprovedSlice';

/****
 * BODY DATA FOR Aproved TABLE TO MAKE OUR TABLE REUSABLE
 */

export default function ApprovedBodyData() {

  //get QUERY_BYSTRING AND QUERY_BYNUM
  const query = useSelector(state => state.query.query_string);
  const queryNum = useSelector(state => state.query.queryByNumber);
  const AprovedData = useSelector(selectAll);
  const [editRowId, setEditId] = useState(null)
  

  return (
    <>
      {
        AprovedData.filter(row => row.name.toLowerCase().includes(query))
        .slice(0,queryNum)
        .map((row) => {
          return (
            <React.Fragment>
              <ReadOnlyRow data={row} setEditId={setEditId}/>
            </React.Fragment>
          );
        })}
    </>
  );

}


/***
 * Read Only Row
 */

export const ReadOnlyRow = ({data:row,handleDelete,setEditId}) =>{
  const dispatch = useDispatch();

  return(
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.type}</TableCell>
        <TableCell>{row.data}</TableCell>
        <TableCell align="right"><MICON.Visibility className='text-cyan-800'/></TableCell>
      </TableRow>
  )
}
