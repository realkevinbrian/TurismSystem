import { ArrowBack } from "@mui/icons-material";
import { LinearProgress, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ColorPickerImg from "../../Assets/ColorPicker.png";
import { CreateCategory, selectAll } from '../../features/CategorySlice';
import { setCategoryState } from "../../features/MenuSlice";
import * as G from "../Global/index";
import { Form } from "../Login/styled";
import * as S from "./styled";

/**
 * CADASTRO DE CATEGORIAS  PAGE
 *
 */
export function CadastrarCategoria() {
  //initialize dispathc
  const dispatch = useDispatch();

  //get Category State and get cateogy exisiting types
  const categoryType = useSelector(selectAll);
  const CategoryState = useSelector((state) => state.menu.CategoryState);
  
  //get form data
  const [color,setColor] = useState("#181764");
  const [progress, setProgress] = useState(false);
  // const [category,setCategory] = useState("Selecione uma ou mais categorias")
  const [name, setName] = useState(null);
  const [type, setType] = useState("Selecione uma ou mais categorias");
  const data = {name, type, color};

  //SUBMIT DATA
  const handleSubmit = (self) =>{
    //disable default submit
    self.preventDefault();
    dispatch(CreateCategory({id: categoryType[categoryType.length - 1].id + 1, ...data}))

    setTimeout(() => {
      setProgress(true)
        setTimeout(()=>{
          dispatch(setCategoryState(false));
          setProgress(false)
        },200)    
    }, 500);
  }




  return (
    <S.styledCreateCategoryContainer CategoryState={CategoryState}>
      <S.styledCreateCategory>

        <S.createCategoryHeader>
          <G.Anchor href="/admin"><ArrowBack /></G.Anchor>
          <G.H5>Cadastro de Categoria</G.H5>
        </S.createCategoryHeader>

        <S.createCategoryFormWrapper>

          <Form onSubmit={handleSubmit}>

            <S.styledInputGroup>
              <G.StyledLabel>Nome</G.StyledLabel>
              <G.StyledInput
                onChange={(self) => setName(self.target.value)}
                type="text"
                required
                placeholder='digite o nome do evento' />
            </S.styledInputGroup>

           <S.styledInputGroup>
           <G.StyledLabel>Tipo</G.StyledLabel>             
             <S.CustomSelect 
             autoWidth={true} 
             variant="standard"
             required
             value={type}
             onChange={(self)=>setType(self.target.value)}
             >
               <MenuItem value={"Selecione uma ou mais categorias"} disabled={true}><small>Selecione uma ou mais categorias</small></MenuItem>
               {
                   categoryType.map(item => (
                        <MenuItem value={item.type} key={item.id}>{item.type}</MenuItem>
                  ))
               }
               
             
             </S.CustomSelect>
           </S.styledInputGroup>

            <S.ColorPickerContainer>
              <G.H6>Selecione a cor para categoria</G.H6>
              <input required type="color" onChange={(self)=> setColor(self.target.value)}/>
              <S.ColorPickerIcon src={ColorPickerImg} />
              <S.SelectedColor color={color}/>
            </S.ColorPickerContainer>
            {progress && <LinearProgress/>}
            <S.CadastroBtn>Cadastrar</S.CadastroBtn>
          </Form>
        </S.createCategoryFormWrapper>
      </S.styledCreateCategory>
    </S.styledCreateCategoryContainer>
  );
}
