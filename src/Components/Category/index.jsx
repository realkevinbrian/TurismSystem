import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { H4, H5 } from '../Global'
import StyledTable from '../Table'
import * as S from "./styled"
import CategoryData from './CategoryData'


/***
 * At this point we are fetching table data in CategoryData Function created
 * THIS IS Category PAGE THOU...
 */
function Category() {

  //At this point we read our data from @@CategoryData function 
  const Columns = CategoryData().columns;
  const Rows = CategoryData().rows;

  console.log(Rows)

  return (
    <>
        <StyledTable 
        tableTitle = "Cadastro de Categorias" 
        switchComponent = {<RegisterBtn/>} 
        labels={<CategoryLabels Columns={Columns}/>}
        bodyData = {<CategoryBodyData Rows={Rows} Columns={Columns}/>}
        
        />
    </>
  )
}

export default Category



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
 * LABELS FOR Category TABLE TO MAKE OUR TABLE REUSABLE
 */

export function CategoryLabels({Columns}){

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
 * BODY DATA FOR Category TABLE TO MAKE OUR TABLE REUSABLE
 */
export function CategoryBodyData({Rows : rows,Columns : columns}){
    return(
      <>
          {rows
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
              // .filter(row => row.name.toLowerCase().includes(query))
              .map((row) => {

                return (
                  <TableRow hover tabIndex={-1} key={row.name}>
                    {
                    columns.map((column) => {
                      const value = row[column.id];

                      // //Switch case
                      // switch(value){
                      //     case "restaurante":
                      //       return <TableCell key={column.id}><S.styledCell><S.Ball className='bg-red-500'/><span>{value}</span></S.styledCell></TableCell>

                      //     default:
                      //       return <TableCell key={column.id}>{value}</TableCell>;
                      //   }

                        // <TableCell>Edit</TableCell>

                      return (
                        <TableCell key={column.id}>{value}</TableCell>
                      );
                    })}
                  </TableRow>
                );

              })}
      </>
    )
}