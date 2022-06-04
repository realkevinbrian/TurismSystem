/****
 * In this component we declare all functionlities for Category Page
 * We retrieve data from our server
 */

import { useDispatch } from "react-redux";
import { setCategoryState, setPlanRegisterState } from "../../../features/MenuSlice";
import React from "react";
import { Container } from "@mui/material";
import StyledTable from "../../../Components/Table/index";
import TableData from "./bodyData";
import TableLabels from "./Labels";
import RegisterTrends from "./Register/RegisterTrends"
import RegisterPlans from "./Register/RegisterPlans"
import { PrimaryButton } from "../../../Components/Button";

export default function index() {
  const dispatch = useDispatch();
  return (
    <Container maxWidth="xl">
      <StyledTable
        TableTitle = "Planos de Assinaturas"
        Component = {<PrimaryButton onClick={ () => dispatch(setCategoryState())}>Cadastrar Destaques</PrimaryButton>}
        SecondComponent = {<PrimaryButton onClick={ () => dispatch(setPlanRegisterState())}>Cadastrar Planos</PrimaryButton>}
        Labels = {<TableLabels/>}
        TableData = {<TableData/>}
      />
      <RegisterTrends/>
      <RegisterPlans/>
    </Container>
  );
}

