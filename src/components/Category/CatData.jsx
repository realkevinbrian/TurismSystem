import React from 'react';

//table imports
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


import { Link } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';


function CatData({data : rows, other}) {
    
    //define all data
    const page = other[0];
    const rowsPerPage = other[1];
    const query = other[2];
    const columns = other[3];

  return (
    <>
        {
            rows.filter(row => row.nome.toLowerCase().includes(query))
            .map((row)=>{
                
            // console.log(columns);

            return(
                <TableRow key={row.id}>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.tipo}</TableCell>
                    <TableCell align = "right"><Edit className='text-cyan-900'/></TableCell>
                    <TableCell align = "right"><Delete className='text-red-500'/></TableCell>
                </TableRow>
            )
            })
        }
    </>
  )
}

export default CatData