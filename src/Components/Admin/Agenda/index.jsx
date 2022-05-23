/****
 * In this component we declare all functionlities for Agenda Page
 * We retrieve data from our server
 */

 import { useDispatch } from "react-redux";
 import { setAgendaState } from "../../../features/MenuSlice";
 import React from "react";
 import { Container } from "@mui/material";
 import StyledTable from "../Table";
 import AgendaBodyData from "./bodyData";
 import AgendaLabels  from "./Labels";
 import { RegisterButton } from "../Category/styled";
 import Register  from "./Register";
 
 export default function index() {
   return (
     <Container maxWidth="xl">
       <StyledTable
         TableTitle = "Cadastro de Categorias"
         Component = {<RegisterBtn />}
         Labels = {<AgendaLabels/>}
         TableData = {<AgendaBodyData/>}
       />
       <Register/>
     </Container>
   );
 }
 
 
 /***
  * ==================CADASTRE_SE BUTTON===============
  *
  */
 
 function RegisterBtn() {
   //=> OPEN REGISTRAR Agenda CULTURAL
   const dispatch = useDispatch();
   return (
     <>
       <RegisterButton onClick={() => dispatch(setAgendaState(true))}>
         Cadastrar Novo
       </RegisterButton>
     </>
   );
 }
 