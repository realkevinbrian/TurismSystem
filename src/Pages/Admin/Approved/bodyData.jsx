import * as MICON from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAll } from '../../../features/ApprovedSlice';

/****
 * In this component we declare body data
 */

export default function ApprovedBodyData() {

  //Retrieve search states from our redux store
  const query = useSelector(state => state.query.query_string);
  const queryNum = useSelector(state => state.query.queryByNumber);
  const AprovedData = useSelector(selectAll);
  
  return (
    <>
      {
        AprovedData.filter(row => row.name.toLowerCase().includes(query))
        .slice(0,queryNum)
        .map((row, index) => {
          return (
            <React.Fragment key={index}>
              <ReadOnlyRow data={row}/>
            </React.Fragment>
          );
        })}
    </>
  );

}


/***
 * Read Only Row
 */
export const ReadOnlyRow = ({data:row}) =>{
  return(
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.type}</TableCell>
        <TableCell>{row.data}</TableCell>
        <TableCell align="right"><MICON.Visibility className='text-cyan-800'/></TableCell>
      </TableRow>
  )
}
