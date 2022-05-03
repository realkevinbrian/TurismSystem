import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowBack, Image } from "@mui/icons-material";
import React from 'react';
import { useNavigate } from "react-router-dom";
import * as G from "../../Components/Global/index";
import { Form } from "../../Components/Login/styled";
import * as S from "./styled";

/***
 * CADASTRO DE CATEGORIAS  PAGE
 */

export function CreateCategory() {
  const navigate = useNavigate();
  return (
    <S.styledCreateCategoryContainer>
      <S.styledCreateCategory>

        <S.createCategoryHeader>
          <ArrowBack onClick={() => navigate("/admin/categorias")} />
          <G.H5>Cadastro de Categorias</G.H5>
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

            <S.styledInputGroup>
              <G.StyledLabel>Valor da Entrada</G.StyledLabel>
              <G.StyledInput
                type="text"
                placeholder='digite o valor da entrada' />
            </S.styledInputGroup>

            <S.styledInputGroup>
              <G.StyledLabel>Local</G.StyledLabel>
              <G.StyledInput
                type="text"
                placeholder='digite o local do evento' />
            </S.styledInputGroup>

            <S.styledInputGroup>
              <G.StyledLabel>Data</G.StyledLabel>
              <G.StyledInput
                type="date"
                placeholder='selecione a data do evento' />
            </S.styledInputGroup>

            <S.styledFileInputWrapper>
              <S.styledFileInputBox>
                {/* <FontAwesomeIcon icon={faFileImage}/> */}
                <Image />
                <FontAwesomeIcon icon={faPlus} />
              </S.styledFileInputBox>
            </S.styledFileInputWrapper>

            <S.CadastroBtn>Cadastrar</S.CadastroBtn>
          </Form>
        </S.createCategoryFormWrapper>
      </S.styledCreateCategory>
    </S.styledCreateCategoryContainer>
  );
}
