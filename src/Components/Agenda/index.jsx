import { faDeleteLeft, faEdit,faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TableCell, TableRow } from '@mui/material'
import { ArrowBack, Image } from "@mui/icons-material"
import React from 'react'
import StyledTable from '../Table'
import { Form } from "../../Components/Login/styled"
import AgendaData from '././AgendaData'
import * as S from "./styled"
import * as G from "../../Components/Global/index"
import {useNavigate} from "react-router-dom"
import {MenuActions} from "../../Redux/MenuSlice"
import {useSelector, useDispatch} from "react-redux"



/***
 * At this point we are fetching table data in AgendaData Function created
 * THIS IS Agenda PAGE THOU...
 */
function AgendaCultural() {

  //At this point we read our data from @@AgendaData function 
  const Columns = AgendaData().columns;
  const Rows = AgendaData().rows;

  

  return (
    <G.Container>
        <StyledTable 
        tableTitle = "Agenda Cultural" 
        switchComponent = {<RegisterBtn/>} 
        labels={<AgendaLabels Columns={Columns}/>}
        bodyData = {<AgendaBodyData Rows={Rows} Columns={Columns}/>}
        />
        <CadastrarAgenda/>
    </G.Container>
  )
}
export default AgendaCultural

/***
   * CADASTRE_SE BUTTON
   * 
   */

 export function RegisterBtn(){

  //=> OPEN REGISTRAR AGENDA CULTURAL
  const dispatch = useDispatch();
  return(
    <>
      <S.CadastroBtn onClick={()=>dispatch(MenuActions.setAgendaState(true))}>Cadastrar Novo</S.CadastroBtn>
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


/**
 * CADASTRO DE CATEGORIAS  PAGE
 * 
 */

export function CadastrarAgenda(){
  const navigate = useNavigate();
  const AgendaState = useSelector((state)=>state.menu.AgendaState);

  return(
    <S.styledCreateCategoryContainer AgendaState={AgendaState}>
      <S.styledCreateCategory>

        <S.createCategoryHeader>
          <G.Anchor href="/admin"><ArrowBack/></G.Anchor>
          <G.H5>Cadastro de Agenda Cultural</G.H5>
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