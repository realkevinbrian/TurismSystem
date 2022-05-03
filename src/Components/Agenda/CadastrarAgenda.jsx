import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowBack, Image } from "@mui/icons-material";
import React from 'react';
import { Form } from "../../Components/Login/styled";
import * as S from "./styled";
import * as G from "../../Components/Global/index";
import { useSelector } from "react-redux";

/**
 * CADASTRO DE CATEGORIAS  PAGE
 *
 */



export function CadastrarAgenda() {
  const AgendaState = useSelector((state) => state.menu.AgendaState);

  return (
    <S.styledCreateCategoryContainer AgendaState={AgendaState}>
      <S.styledCreateCategory>

        <S.createCategoryHeader>
          <G.Anchor href="/admin"><ArrowBack /></G.Anchor>
          <G.H5>Cadastro de Agenda Cultural</G.H5>
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
                <input type="file"/>
                <Image/>
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
