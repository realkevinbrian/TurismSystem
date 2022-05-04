import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowBack, Image } from "@mui/icons-material";
import React, { useState } from 'react';
import { Form } from "../Login/styled";
import * as S from "./styled";
import * as G from "../Global/index";
import { useSelector } from "react-redux";
import ColorPickerImg from "../../Assets/ColorPicker.png"
import { InputLabel,Input, Select, MenuItem } from '@mui/material';

/**
 * CADASTRO DE CATEGORIAS  PAGE
 *
 */



export function CadastrarCategoria() {
  const CategoryState = useSelector((state) => state.menu.CategoryState);
  const [color,setColor] = useState("#181764")
  const [category,setCategory] = useState("Selecione uma ou mais categorias")
  
  return (
    <S.styledCreateCategoryContainer CategoryState={CategoryState}>
      <S.styledCreateCategory>

        <S.createCategoryHeader>
          <G.Anchor href="/admin"><ArrowBack /></G.Anchor>
          <G.H5>Cadastro de Categoria</G.H5>
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
           <G.StyledLabel>Tipo</G.StyledLabel>             
             <S.CustomSelect 
             autoWidth={true} 
             variant="standard"
             value={category}
             onChange={(self)=>setCategory(self.target.value)}
             >
               <MenuItem value={"Selecione uma ou mais categorias"} disabled={true}><small>Selecione uma ou mais categorias</small></MenuItem>
               <MenuItem value={"Estabelecimento"}>Estabelecimento</MenuItem>
               <MenuItem value={"Ponto Turistico"}>Ponto Turistico</MenuItem>
               <MenuItem value={"Roteiro"}>Roteiro</MenuItem>
             </S.CustomSelect>
           </S.styledInputGroup>

            <S.ColorPickerContainer>
              <G.H6>Selecione a cor para categoria</G.H6>
              <input type="color" onChange={(self)=> setColor(self.target.value)}/>
              <S.ColorPickerIcon src={ColorPickerImg} />
              <S.SelectedColor color={color}/>
            </S.ColorPickerContainer>

            <S.CadastroBtn>Cadastrar</S.CadastroBtn>
          </Form>
        </S.createCategoryFormWrapper>
      </S.styledCreateCategory>
    </S.styledCreateCategoryContainer>
  );
}
