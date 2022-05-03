import React from 'react'
import * as G from "../../Components/Global/index"
import StyledTable from '../Table'
import { CategoryBodyData } from './CategoryBodyData'
import CategoryData from './CategoryData'
import { CategoryLabels } from './CategoryLabels'
import * as S from "./styled"

/***
 * At this point we are fetching table data in CategoryData Function created
 * THIS IS Category PAGE THOU...
 */
function CategoryMain() {

  //At this point we read our data from @@CategoryData function 
  const Columns = CategoryData().columns;
  const Rows = CategoryData().rows;

  // =>DEBUGGING ROWS console.log(Rows)

  return (
    <G.Container>
        <StyledTable 
        tableTitle = "Cadastro de Categorias" 
        switchComponent = {<RegisterBtn/>} 
        labels={<CategoryLabels Columns={Columns}/>}
        bodyData = {<CategoryBodyData Rows={Rows} Columns={Columns}/>}
        />
    </G.Container>
  )
}

export default CategoryMain

/***
   * CADASTRE_SE BUTTON
   * 
   */

 export function RegisterBtn(){
  return(
    <>
      <S.CadastroBtn href='/admin/categorias/cadastrar'>Cadastrar Novo</S.CadastroBtn>
    </>
  )

}



