import React from 'react';

//table imports
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


import { Link } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';


function AgendaData({data : rows, other}) {
    
    //define all data
    const page = other[0];
    const rowsPerPage = other[1];
    const query = other[2];
    const columns = other[3];

  return (
    <>
        {
            rows.filter(row => row.Nome.toLowerCase().includes(query))
            .map((row)=>{

            const label = columns[2];

            return(

                <TableRow key={row.Id}>
                    
                    <TableCell  align={label.align}>{row.Nome}</TableCell>
                    <TableCell  align={label.align}>{row.Data}</TableCell>
                    <TableCell  align={label.align}>{row.Inicio}</TableCell>
                    <TableCell  align={label.align}>{row.Entrada}</TableCell>
                    <TableCell  align="right">{row.Local}</TableCell>
                    <TableCell  align = "right"><Edit className='text-cyan-900'/></TableCell>
                    <TableCell  align = "right"><Delete className='text-red-500'/></TableCell>
                </TableRow>
            )
            })
        }
    </>
  )
}

export default AgendaData