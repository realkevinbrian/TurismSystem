import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { faSearch, faArrowDownZA } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {columns} from "../data";


function TableData({data : rows , other}) {
  
  /***
   * Get data passed in the props
   */
   const page = other[0];
   const rowsPerPage = other[1];
   const query = other[2];
   const columns = other[3];
   
  return (
    <>
        {
            rows.filter(row => row.name.toLowerCase().includes(query))
            .map((row)=>{
            // console.log(row[columns.id]);
            return(
                <TableRow key={columns.label}>
                  {
                    columns.map(column =>{
                      // console.log(row[column.id]) =>DEBUG
                      return(
                      <TableCell key={column.id} align={column.align}>
                        {row[column.id]}
                      </TableCell>
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

export default TableData