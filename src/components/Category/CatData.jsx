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
            // rows.filter(row => row.name.toLowerCase().includes(query))
            rows.map((row)=>{
                
            console.log(row);

            return(
                <TableRow key={row.id}>
                    {
                        
                        columns.map((column)=>{
                            return(
                                (column.id === 1) ? 
                                <TableCell key={row.id}>{row.nome}</TableCell> : 
                                (column.id === 2) ? 
                                <TableCell>{row.tipo}</TableCell> : 
                                (column.id === 3 ) ? 
                                <TableCell align={column.align} ><Link to={`/admin/${row.id}`} className="text-cyan-600"><Edit/></Link></TableCell> : 
                                <TableCell align={column.align} ><Link to={`/admin/${row.id}`} className="text-red-600"><Delete/></Link></TableCell>
                            )
                        })
                    }
                </TableRow>
            )
            })
        }
    </>
  )
}

export default CatData