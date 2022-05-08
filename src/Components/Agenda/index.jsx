import React from 'react'
import { useDispatch } from "react-redux"
import {setAgendaState} from "../../features/MenuSlice"
import * as G from "../../Components/Global/index"
import StyledTable from '../Table'
import AgendaData from '././AgendaData'
import { AgendaBodyData } from './AgendaBodyData'
import AgendaLabels from "./AgendaLabels"
import { CadastrarAgenda } from './CadastrarAgenda'
import * as S from "./styled"


function AgendaCultural() {

  //At this point we read our columns from @@AgendaData function 
  const Columns = AgendaData().columns;
  return (
    <G.Container>
        <StyledTable 
        tableTitle = "Agenda Cultural" 
        switchComponent = {<RegisterBtn/>} 
        labels={<AgendaLabels/>}
        bodyData = {<AgendaBodyData Columns={Columns}/>}
        />
        <CadastrarAgenda/>
    </G.Container>
  )
}
export default AgendaCultural


/***
   * ==================CADASTRE_SE BUTTON===============
   * 
   */

 export function RegisterBtn(){
  //=> OPEN REGISTRAR AGENDA CULTURAL
  const dispatch = useDispatch();
  return(
    <>
      <S.CadastroBtn onClick={()=>dispatch(setAgendaState(true))}>Cadastrar_Novo</S.CadastroBtn>
    </>
  )

}






