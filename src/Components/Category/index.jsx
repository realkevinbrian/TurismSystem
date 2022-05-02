import { faDeleteLeft,faFileImage,faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import StyledTable from '../Table'
import CategoryData from './CategoryData'
import {Form,FormWrapper} from "../../Components/Login/styled";
import * as S from "./styled"
import * as G from "../../Components/Global/index"
import {CarRentalTwoTone, ArrowBack, Image} from "@mui/icons-material"
/***
 * At this point we are fetching table data in CategoryData Function created
 * THIS IS Category PAGE THOU...
 */
function Category() {

  //At this point we read our data from @@CategoryData function 
  const Columns = CategoryData().columns;
  const Rows = CategoryData().rows;

  // =>DEBUGGING ROWS console.log(Rows)

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
    
      return (
        <>
            {
                // rows.filter(row => row.nome)
                rows.map((row)=>{
                // console.log(columns);
    
                return(
                    <TableRow key={row.id}>
                        <TableCell>
                          {
                              (row.name === "restaurante") ? <S.styledCell><S.Ball className='bg-cyan-900'/><span>{row.name}</span></S.styledCell> 
                            : (row.name === "comercio") ? <S.styledCell><S.Ball className='bg-red-900'/><span>{row.name}</span></S.styledCell> 
                            : (row.name === "balada") ? <S.styledCell><S.Ball className='bg-green-900'/><span>{row.name}</span></S.styledCell> 
                            : (row.name === "livraria") ? <S.styledCell><S.Ball className='bg-green-900'/><span>{row.name}</span></S.styledCell> 
                            : (row.name === "lazer") ? <S.styledCell><S.Ball className='bg-blue-900'/><span>{row.name}</span></S.styledCell> 
                            : (row.name === "bar") ? <S.styledCell><S.Ball className='bg-yellow-900'/><span>{row.name}</span></S.styledCell> 
                            : (row.name === "cultural") ? <S.styledCell><S.Ball className='bg-orange-900'/><span>{row.name}</span></S.styledCell>  : ""
                           
                          } 
                        </TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell align = "right"><S.Edit href={`/category/${row.id}`} className='text-cyan-900'><FontAwesomeIcon icon={faEdit}/></S.Edit></TableCell>
                        <TableCell align = "right"><S.Edit href={`/category/${row.id}`} className='text-red-500'><FontAwesomeIcon icon={faDeleteLeft}/></S.Edit></TableCell>
                    </TableRow>
                )
                })
            }
        </>
      )
    
}


/***
 * CADASTRO DE CATEGORIAS  PAGE
 */

export function CreateCategory(){
  return(
    <S.styledCreateCategoryContainer>
      <S.styledCreateCategory>

        <S.createCategoryHeader>
          <ArrowBack/>
          <G.H5>Cadastro de Categorias</G.H5>
        </S.createCategoryHeader>

        <S.createCategoryFormWrapper>
          <Form>

            <S.styledInputGroup>
              <G.StyledLabel>Nome</G.StyledLabel>
              <G.StyledInput 
              type="text"
              placeholder='digite o nome do evento'
              />
            </S.styledInputGroup>

            <S.styledInputGroup>
              <G.StyledLabel>Inicio</G.StyledLabel>
              <G.StyledInput 
              type="time"
              placeholder='selecione a hora de inicio'
              />
            </S.styledInputGroup>

            <S.styledInputGroup>
              <G.StyledLabel>Valor da Entrada</G.StyledLabel>
              <G.StyledInput 
              type="text"
              placeholder='digite o valor da entrada'
              />
            </S.styledInputGroup>

            <S.styledInputGroup>
              <G.StyledLabel>Local</G.StyledLabel>
              <G.StyledInput 
              type="text"
              placeholder='digite o local do evento'
              />
            </S.styledInputGroup>

            <S.styledInputGroup>
              <G.StyledLabel>Data</G.StyledLabel>
              <G.StyledInput 
              type="date"
              placeholder='selecione a data do evento'
              />
            </S.styledInputGroup>

            <S.styledFileInputWrapper>
              <S.styledFileInputBox>
                {/* <FontAwesomeIcon icon={faFileImage}/> */}
                <Image/>
                <FontAwesomeIcon icon={faPlus}/>
              </S.styledFileInputBox>
            </S.styledFileInputWrapper>
          
          <S.CadastroBtn>Cadastrar</S.CadastroBtn>
          </Form>
        </S.createCategoryFormWrapper>
      </S.styledCreateCategory>
    </S.styledCreateCategoryContainer>
  )
}