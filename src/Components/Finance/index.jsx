import React from 'react'
import StyledTable from '../Table'
import { H5,H4 } from '../Global'
import * as S from "./styled"

function Finance() {
  return (
    <>
        <StyledTable tableTitle = "Financeiro" switchComponent = {<ShowTotal/>}/>
    </>
  )
}

export default Finance



/***
   * SHOW TOTAL
   * 
   */

 export function ShowTotal(){
    
  return(
    <>
      <S.ShowTotalWrapper>
        <H4>Total</H4>
        <H5>R$ 1250</H5>
      </S.ShowTotalWrapper>
    </>

  )

}