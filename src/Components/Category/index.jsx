import { useDispatch } from "react-redux"
import {setCategoryState} from "../../features/MenuSlice"
import React from 'react'
import * as G from "../../Components/Global/index"
import StyledTable from '../Table'
import { CategoryBodyData } from './CategoryBodyData'
import { CategoryLabels } from './CategoryLabels'
import * as S from "./styled"
import {CadastrarCategoria} from "./CadastrarCategoria"

/***
 * At this point we are fetching table data in CategoryData Function created
 * THIS IS Category PAGE THOU...
 */
function CategoryMain() {


  return (
    <G.Container>
        <StyledTable 
        tableTitle = "Cadastro de Categorias" 
        switchComponent = {<RegisterBtn/>} 
        labels={<CategoryLabels/>}
        bodyData = {<CategoryBodyData/>}
        />
        <CadastrarCategoria/>
    </G.Container>
  )
}

export default CategoryMain

/***
   * ==================CADASTRE_SE BUTTON===============
   * 
   */

 export function RegisterBtn(){

  //=> OPEN REGISTRAR Category CULTURAL
  const dispatch = useDispatch();
  return(
    <>
      <S.CadastroBtn 
      onClick={()=>dispatch(setCategoryState(true))}
      >Cadastrar Novo</S.CadastroBtn>
    </>
  )

}



