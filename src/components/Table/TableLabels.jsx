import React from 'react'
import { faSearch, faArrowDownZA } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TableCell from '@mui/material/TableCell';



function TableLabels({data : columns}) {
  return (
      <>
          {
            columns.map((column) => (

              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
                <FontAwesomeIcon icon={faArrowDownZA} className="px-1 text-xs"/>
              </TableCell>  
            ))
          }
      </>
  )
}

export default TableLabels