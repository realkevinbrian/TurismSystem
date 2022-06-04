/***
 * Register Form Component
 */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import colorPickerImg from "../../../../Assets/ColorPicker.png";
import { Box, MenuItem, Select, LinearProgress } from "@mui/material";
import { CreateCategory, selectAll } from "../../../../features/CategorySlice";
import { setCategoryState } from "../../../../features/MenuSlice";
import { PrimaryButton } from "../../../../Components/Buttons/styled";
import * as S from "../styled";
import { InputGroup } from "../../../../Components/Global/Reusable";

export default function index() {
  /**
   * Declare Dispatch method
   * Retrieve CategotyTypes from redux store
   */
  const categoryType = useSelector(selectAll).map((item) => item.type);
  const dispatch = useDispatch();

  /****
   * Form Data
   */
  const [color, setColor] = useState("#181764");
  const [progress, setProgress] = useState(false);
  const [name, setName] = useState(null);
  const [type, setType] = useState("Selecione categoria");

  //Join data for submission
  const data = { name, type, color };

  /**
   * Declare Submit function to dispatch our data
   */
  const handleSubmit = (self) => {
    self.preventDefault();

    // Send data to redux store
    dispatch(
      CreateCategory({
        id: categoryType.length++,
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
          <InputGroup>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              required
              onChange={(self) => setName(self.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="name">Tipo</label>
            <Select
              value={type}
              onChange={(self) => setType(self.target.value)}
            >
              <MenuItem value={type}>
                <em>{type}</em>
              </MenuItem>
              {categoryType.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </InputGroup>
        </Box>

        <S.ColorPicker>
          <img src={colorPickerImg} alt="colorpickerimage" />
          <input
            type="color"
            required
            onChange={(self) => setColor(self.target.value)}
          />
          <S.SelectedColor color={color} />
        </S.ColorPicker>
        <PrimaryButton type="submit">Cadastrar</PrimaryButton>
        {progress && <LinearProgress />}
      </form>
    </>
  );
}
