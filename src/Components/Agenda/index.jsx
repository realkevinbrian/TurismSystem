import React from 'react'
import { useDispatch } from "react-redux"
import * as G from "../../Components/Global/index"
import { MenuActions } from "../../Redux/MenuSlice"
import StyledTable from '../Table'
import AgendaData from '././AgendaData'
import { AgendaBodyData } from './AgendaBodyData'
import AgendaLabels from "./AgendaLabels"
import { CadastrarAgenda } from './CadastrarAgenda'
import * as S from "./styled"


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
        labels={<AgendaLabels/>}
        bodyData = {<AgendaBodyData Rows={Rows} Columns={Columns}/>}
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
      <S.CadastroBtn onClick={()=>dispatch(MenuActions.setAgendaState(true))}>Cadastrar Novo</S.CadastroBtn>
    </>
  )

}






