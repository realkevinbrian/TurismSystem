import React from 'react'
import { useDispatch } from "react-redux"
import {setAgendaState} from "../../features/MenuSlice"
import * as G from "../../Components/Global/index"
import StyledTable from '../Table'
import { AgendaBodyData } from './AgendaBodyData'
import AgendaLabels from "./AgendaLabels"
import { CadastrarAgenda } from './CadastrarAgenda'
import * as S from "./styled"


function AgendaCultural() {
  return (
    <G.Container>
        <StyledTable 
        tableTitle = "Agenda Cultural" 
        switchComponent = {<RegisterBtn/>} 
        labels={<AgendaLabels/>}
        bodyData = {<AgendaBodyData/>}
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
      <S.CadastroBtn onClick={()=>dispatch(setAgendaState(true))}>Cadastrar Novo</S.CadastroBtn>
    </>
  )

}






