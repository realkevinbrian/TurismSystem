/****
 * In this component we declare all functionlities for Category Page
 * We retrieve data from our server
 */

import { useDispatch } from "react-redux";
import { setCategoryState } from "../../../features/MenuSlice";
import React from "react";
import { Container } from "@mui/material";
import StyledTable from "../Table";
import CategoryData from "./bodyData";
import { CategoryLabels } from "./Labels";
import * as S from "./styled";
import { Register } from "./Register";

export default function index() {
  return (
    <Container maxWidth="xl">
      <StyledTable
        TableTitle = "Cadastro de Categorias"
        Component = {<RegisterBtn />}
        Labels = {<CategoryLabels/>}
        TableData = {<CategoryData/>}
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
  //=> OPEN REGISTRAR Category CULTURAL
  const dispatch = useDispatch();
  return (
    <>
      <S.RegisterButton onClick={() => dispatch(setCategoryState(true))}>
        Cadastrar Novo
      </S.RegisterButton>
    </>
  );
}
