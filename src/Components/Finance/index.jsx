import React from 'react'
import * as G from '../Global'
import StyledTable from '../Table'
import { FinanceBodyData } from './FinanceBodyData'
import FinanceData from "./financeData"
import { FinanceLabels } from './FinanceLabels'
import * as S from "./styled"


/***
 * At this point we are fetching table data in FinanceData Function created
 * THIS IS FINANCE PAGE THOU...
 */
function FinanceMain() {

  //At this point we read our data from @@financeData function 
  const Columns = FinanceData().columns;
  const Rows = FinanceData().rows;

  return (
    <G.Container>
        <StyledTable 
        tableTitle = "Financeiro" 
        switchComponent = {<ShowTotal/>} 
        labels={<FinanceLabels Columns={Columns}/>}
        bodyData = {<FinanceBodyData Rows={Rows} Columns={Columns}/>}
        
        />
    </G.Container>
  )
}

export default FinanceMain



/***
   * SHOW TOTAL
   * 
   */

 export function ShowTotal(){
    
  return(
    <>
      <S.ShowTotalWrapper>
        <G.H4>Total</G.H4>
        <G.H5>R$ 1250</G.H5>
      </S.ShowTotalWrapper>
    </>

  )

}



