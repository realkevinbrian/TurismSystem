/****
 * In this component we declare all functionlities for Category Page
 * We retrieve data from our server
 */

import { Container } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import StyledTable from "../../../Components/Table/index";
import { setCategoryState } from "../../../features/MenuSlice";
import CategoryData from "./bodyData";
import { CategoryLabels } from "./Labels";
import { Register } from "./Register";
import { PrimaryButton } from "../../../Components/Buttons/styled";


export default function index() {
  const dispatch = useDispatch();
  return (
    <Container maxWidth="xl">
      <StyledTable
        TableTitle="Cadastro de Categorias"
        Component={<PrimaryButton onClick={() => dispatch(setCategoryState())}>Cadastrar Categorias</PrimaryButton>}
        Labels={<CategoryLabels />}
        TableData={<CategoryData />}
      />
      <Register />
    </Container>
  );
}
