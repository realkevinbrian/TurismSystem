import { ArrowBack } from "@mui/icons-material";
import { Box, MenuItem, Select, LinearProgress } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateCategory, selectAll } from "../../../features/CategorySlice";
import { setCategoryState } from "../../../features/MenuSlice";
import * as S from "./styled";
import colorPickerImg from "../../../Assets/ColorPicker.png";

/**
 * Category Register component
 * Here we define Register Category funcionality
 *
 */
export function Register() {
  const CategoryState = useSelector((state) => state.menu.CategoryState);
  const dispatch = useDispatch();

  return (
    <>
      {CategoryState && (
        <S.OverlayContainer>
          <S.RegisterContainer>
            <S.RegisterHeader>
              <ArrowBack onClick={() => dispatch(setCategoryState())} />
              <h3>Cadastro de Categorias</h3>
            </S.RegisterHeader>

            <S.RegisterBody>
              <CreateForm />
            </S.RegisterBody>
          </S.RegisterContainer>
        </S.OverlayContainer>
      )}
    </>
  );
}

/***
 * Register Form
 */

function CreateForm() {
  /**
   * Declare Dispth method and UseSelector to retrieve data from redux store
   */
  const categoryType = useSelector(selectAll).map(item => item.type);
  console.log("🚀 ~ file: Register.jsx ~ line 48 ~ CreateForm ~ categoryType", categoryType)
  const dispatch = useDispatch();

  /****
   * Fetch from Form All Input Data
   */
  const [color, setColor] = useState("#181764");
  const [progress, setProgress] = useState(false);
  const [name, setName] = useState(null);
  const [type, setType] = useState("Selecione categoria");

  //at this point we concat our data into Object
  const data = { name, type, color };

  /**
   * Declare Submit function to dispatch our data
   * @param {self}
   */

  const handleSubmit = (self) => {
    self.preventDefault();

    /** Send data to redux store */
    dispatch(
      CreateCategory({
        id:  categoryType.length++,
        ...data,
      })
    );
    setTimeout(() => {
      setProgress(true);
      setTimeout(() => {
        dispatch(setCategoryState());
        setProgress(false);
      }, 200);
    }, 500);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box>
          <S.InputGroup>
            <label htmlFor="name">Nome</label>
            <input type="text" required onChange={(self) => setName(self.target.value)} />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="name">Tipo</label>
            <Select value={type} onChange={(self)=>setType(self.target.value)}>
              <MenuItem value={type}><em>{type}</em></MenuItem>
              {categoryType.map((item,index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
            </Select>
          </S.InputGroup>
        </Box>

        <S.ColorPicker>
          <img src={colorPickerImg} alt="colorpickerimage" />
          <input type="color" required onChange={(self) => setColor(self.target.value)} />
          <S.SelectedColor color={color} />
        </S.ColorPicker>
        <S.RegisterButton type="submit">Cadastrar</S.RegisterButton>
        {progress && <LinearProgress/>}
      </form>
    </>
  );
}
