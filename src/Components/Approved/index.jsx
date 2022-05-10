import React from 'react'
import * as G from "../Global/index"
import StyledTable from '../Table'
import ApprovedBodyData from './ApprovedBodyData'
import ApprovedLabels from './ApprovedLabels'

/***
 * At this point we are fetching table data in ApprovedData Function created
 * THIS IS Approved PAGE THOU...
 */
function ApprovedMain() {

  //At this point we read our data from @@ApprovedData function 

  return (
    <G.Container>
        <StyledTable 
        tableTitle = "Aprovações"
        labels={<ApprovedLabels/>}
        bodyData = {<ApprovedBodyData/>}
        />
    </G.Container>
  )
}

export default ApprovedMain




