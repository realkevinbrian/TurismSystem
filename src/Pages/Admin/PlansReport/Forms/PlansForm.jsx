/***
 * Register Form Component
 */
import { Flag, House } from "@mui/icons-material";
import { Box, LinearProgress, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../../../../Components/Button";
import {
  InputGroup,
  InputGroupExtended,
  TextAreaGroup,
  StyledSelect
} from "../../../../Components/Global/Reusable";
import { CreateCategory, selectAll } from "../../../../features/CategorySlice";
import { setCategoryState } from "../../../../features/MenuSlice";
import { DisplayBox } from "../styled";

export default function index() {
  /**
   * Declare Dispatch method
   * Retrieve CategotyTypes from redux store
   */
  const categoryType = [{id  : 1, name : "Sou um guia"},{id  : 2, name : "Avançada"}];
  const dispatch = useDispatch();

  /****
   * Form Data
   */
  const [progress, setProgress] = useState(false);
  const [name, setName] = useState(null);
  const [type, setType] = useState("Selecione o tipo de usuario");

  //Join data for submission
  const data = { name, type };

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
        
          <InputGroup>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              placeholder="Seja um guia"
              required
              onChange={(self) => setName(self.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="name">Tipo</label>
            <Select
            variant="standard"
              value={type}
              onChange={(self) => setType(self.target.value)}
            >
              <MenuItem value={type}>
                <em>{type}</em>
              </MenuItem>
              {categoryType.map((item, index) => (
                <MenuItem key={index} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </InputGroup>

          <DisplayBox>
            <ul>
              <li>
                <Flag />
                <span>Guia Turistica</span>
              </li>

              <li>
                <House />
                <span>Estabelecimentos</span>
              </li>
            </ul>
          </DisplayBox>
       

        <InputGroupExtended>
          <label htmlFor="Valor">Valor</label>
          <div>
            <input
              type="text"
              placeholder="R$ 10,00"
              required
              onChange={(self) => setName(self.target.value)}
            />
            <small>mês</small>
          </div>
        </InputGroupExtended>

        <TextAreaGroup>
          <label htmlFor="rules">Regras</label>
          <textarea name="rules" cols="20" rows="10"></textarea>
        </TextAreaGroup>

        <PrimaryButton type="submit">Cadastrar</PrimaryButton>
        {progress && <LinearProgress />}
      </form>
    </>
  );
}
