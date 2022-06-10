/****
 * In this component we declare all functionlities for Agenda Page
 * We retrieve data from our server
 */

import { AppContainer } from "../../../Components/Global/Reusable";
import React from "react";
import { useDispatch } from "react-redux";
import { setAgendaState } from "../../../features/MenuSlice";
import { RegisterButton } from "../Category/styled";
import StyledTable from "../../../Components/Table";
import AgendaBodyData from "./bodyData";
import AgendaLabels from "./Labels";
import Register from "./Register";

export default function index() {
  return (
    <AppContainer maxWidth="xl">
      <StyledTable
        TableTitle="Cadastro de Agenda Cultural"
        Component={<RegisterBtn />}
        Labels={<AgendaLabels />}
        TableData={<AgendaBodyData />}
      />
      <Register />
    </AppContainer>
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
