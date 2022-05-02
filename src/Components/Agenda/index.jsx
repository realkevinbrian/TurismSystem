import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import StyledTable from '../Table'
import AgendaData from '././AgendaData'
import * as S from "./styled"

/***
 * At this point we are fetching table data in AgendaData Function created
 * THIS IS Agenda PAGE THOU...
 */
function Agenda() {

  //At this point we read our data from @@AgendaData function 
  const Columns = AgendaData().columns;
  const Rows = AgendaData().rows;

  // =>DEBUGGING ROWS
  console.log(Rows)

  return (
    <>
        <StyledTable 
        tableTitle = "Agenda Cultural" 
        switchComponent = {<RegisterBtn/>} 
        labels={<AgendaLabels Columns={Columns}/>}
        bodyData = {<AgendaBodyData Rows={Rows} Columns={Columns}/>}
        
        />
    </>
  )
}
export default Agenda

/***
   * CADASTRE_SE BUTTON
   * 
   */

 export function RegisterBtn(){
  return(
    <>
      <S.CadastroBtn>Cadastrar Novo</S.CadastroBtn>
    </>
  )

}


/****
 * LABELS FOR Agenda TABLE TO MAKE OUR TABLE REUSABLE
 */

export function AgendaLabels({Columns}){

  return(
      <>
          {//=>Here we looping through our received data from the props
            Columns.map((column)=>{
              return(
                  <TableCell key={column.id} align={column.align}>
                      {column.label}
                  </TableCell>
              )
          })
        }
      </>
  )
}

/****
 * BODY DATA FOR Agenda TABLE TO MAKE OUR TABLE REUSABLE
 */
export function AgendaBodyData({Rows : rows,Columns : columns}){
    
      return (
        <>
            {
                // rows.filter(row => row.nome)
                rows.map((row)=>{
                // console.log(columns);
                return(
                    <TableRow key={row.id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.start}</TableCell>
                        <TableCell>{row.entrance}</TableCell>
                        <TableCell>{row.local}</TableCell>
                        <TableCell align = "right"><S.Edit href={`/Agenda/${row.id}`} className='text-cyan-900'><FontAwesomeIcon icon={faEdit}/></S.Edit></TableCell>
                        <TableCell align = "right"><S.Edit href={`/Agenda/${row.id}`} className='text-red-500'><FontAwesomeIcon icon={faDeleteLeft}/></S.Edit></TableCell>
                    </TableRow>
                )
                })
            }
        </>
      )
    
}