import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowBack, Image } from "@mui/icons-material";
import React from 'react';
import { Form } from "../Login/styled";
import * as S from "./styled";
import * as G from "../Global/index";
import { useSelector } from "react-redux";

/**
 * CADASTRO DE CATEGORIAS  PAGE
 *
 */



export function CadastrarCategoria() {
  const CategoryState = useSelector((state) => state.menu.CategoryState);
  console.log("Cat state", CategoryState)
  return (
    <S.styledCreateCategoryContainer CategoryState={CategoryState}>
      <S.styledCreateCategory>

        <S.createCategoryHeader>
          <G.Anchor href="/admin"><ArrowBack /></G.Anchor>
          <G.H5>Cadastro de Category Cultural</G.H5>
        </S.createCategoryHeader>

        <S.createCategoryFormWrapper>
          <Form>

            <S.styledInputGroup>
              <G.StyledLabel>Nome</G.StyledLabel>
              <G.StyledInput
                type="text"
                placeholder='digite o nome do evento' />
            </S.styledInputGroup>

            <S.styledInputGroup>
              <G.StyledLabel>Inicio</G.StyledLabel>
              <G.StyledInput
                type="time"
                placeholder='selecione a hora de inicio' />
            </S.styledInputGroup>

            <S.CadastroBtn>Cadastrar</S.CadastroBtn>
          </Form>
        </S.createCategoryFormWrapper>
      </S.styledCreateCategory>
    </S.styledCreateCategoryContainer>
  );
}
