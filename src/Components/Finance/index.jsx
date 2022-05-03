import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import * as G from '../Global'
import StyledTable from '../Table'
import FinanceData from "./financeData"
import * as S from "./styled"


/***
 * At this point we are fetching table data in FinanceData Function created
 * THIS IS FINANCE PAGE THOU...
 */
function FinanceMain() {

  //At this point we read our data from @@financeData function 
  const Columns = FinanceData().columns;
  const Rows = FinanceData().rows;

  return (
    <G.Container>
        <StyledTable 
        tableTitle = "Financeiro" 
        switchComponent = {<ShowTotal/>} 
        labels={<FinanceLabels Columns={Columns}/>}
        bodyData = {<FinanceBodyData Rows={Rows} Columns={Columns}/>}
        
        />
    </G.Container>
  )
}

export default FinanceMain



/***
   * SHOW TOTAL
   * 
   */

 export function ShowTotal(){
    
  return(
    <>
      <S.ShowTotalWrapper>
        <G.H4>Total</G.H4>
        <G.H5>R$ 1250</G.H5>
      </S.ShowTotalWrapper>
    </>

  )

}


/****
 * LABELS FOR FINANCE TABLE TO MAKE OUR TABLE REUSABLE
 */

export function FinanceLabels ({Columns}){

  return(
      <>
          {//=>Here we looping through our received data from the props
            Columns.map((column)=>{
              return(
                  <TableCell key={column.id}>
                      {column.label}
                  </TableCell>
              )
          })
        }
      </>
  )
}



/****
 * BODY DATA FOR FINANCE TABLE TO MAKE OUR TABLE REUSABLE
 */
export function FinanceBodyData({Rows : rows,Columns : columns}){
    return(
      <>
          {rows
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
              // .filter(row => row.name.toLowerCase().includes(query))
              .map((row) => {

                return (
                  <TableRow hover tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      // console.log(value)

                      return (
                        
                        <TableCell key={column.id}
                        >
                          {
                            // column.format && typeof value === 'number' ? column.format(value) : value
                          value == "Pago" ? <span className='text-green-600'>Pago</span> : 
                          value && value == "Pendente" ? 
                          <span className='text-orange-600'>Pendente</span> :
                          value
                          }
                        </TableCell>

                      );
                    })}
                  </TableRow>
                );

              })}
      </>
    )
}