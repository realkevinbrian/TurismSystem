/****
 * In this component we declare all functionlities for Category Page
 * We retrieve data from our server
 */

import React from "react";
import { useDispatch } from "react-redux";
import StyledTable from "../../../Components/Table/index";
import { setCategoryState } from "../../../features/MenuSlice";
import CategoryData from "./bodyData";
import { CategoryLabels } from "./Labels";
import { Register } from "./Register";
import { PrimaryButton } from "../../../Components/Button";
import { AppContainer } from "../../../Components/Global/Reusable";


export default function index() {
  const dispatch = useDispatch();
  return (
    <AppContainer maxWidth="xl">
      <StyledTable
        TableTitle="Cadastro de Categorias"
        Component={<PrimaryButton onClick={() => dispatch(setCategoryState())}>Cadastrar Categorias</PrimaryButton>}
        Labels={<CategoryLabels />}
        TableData={<CategoryData />}
      />
      <Register />
    </AppContainer>
  );
}
