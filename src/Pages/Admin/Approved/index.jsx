/****
 * In this component we declare all functionlities for Approved Page
 * We retrieve data from our server
 */

import { AppContainer } from "../../../Components/Global/Reusable";
import React from "react";
import StyledTable from "../../../Components/Table";
import ApprovedBodyData from "./bodyData";
import ApprovedLabels from "./Labels";

 export default function index() {
   return (
     <AppContainer maxWidth="xl">
       <StyledTable
         TableTitle = "Aprovações"
         Labels = {<ApprovedLabels/>}
         TableData = {<ApprovedBodyData/>}
       />
     </AppContainer>
   );
 }
 