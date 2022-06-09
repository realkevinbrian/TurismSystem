/****
 * In this component we declare all functionlities for Category Page
 * We retrieve data from our server
 */

import { Container } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { PrimaryButton } from "../../../Components/Button";
import StyledTable from "../../../Components/Table/index";
import {
  setCategoryState,
  setPlanRegisterState,
} from "../../../features/MenuSlice";
import TableData from "./bodyData";
import TableLabels from "./Labels";
import RegisterPlans from "./Register/RegisterPlans";
import RegisterTrends from "./Register/RegisterTrends";

export default function index() {
  const dispatch = useDispatch();
  return (
    <Container maxWidth="xl">
      <StyledTable
        TableTitle="Planos de Assinaturas"
        Component={
          <PrimaryButton onClick={() => dispatch(setCategoryState())}>
            Cadastrar Destaques
          </PrimaryButton>
        }
        SecondComponent={
          <PrimaryButton onClick={() => dispatch(setPlanRegisterState())}>
            Cadastrar Planos
          </PrimaryButton>
        }
        Labels={<TableLabels />}
        TableData={<TableData />}
      />
      <RegisterTrends />
      <RegisterPlans />
    </Container>
  );
}
