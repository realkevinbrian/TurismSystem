/***
 * Register Form Component
 */
import { Flag, House, Map } from "@mui/icons-material";
import {
  Box,
  Grid,
  Input,
  InputLabel,
  LinearProgress,
  MenuItem,
  Radio,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PrimaryButton } from "../../../../Components/Button";
import { InputGroup } from "../../../../Components/Global/Reusable";
import { CreateCategory } from "../../../../features/CategorySlice";
import { setCategoryState } from "../../../../features/MenuSlice";
import { DisplayBox } from "../styled";

export default function index() {
  /**
   * Declare Dispatch method
   * Retrieve CategotyTypes from redux store
   */
  const dispatch = useDispatch();

  /****
   * Form Data
   */
  const [progress, setProgress] = useState(false);
  const [name, setName] = useState(null);
  const [type, setType] = useState("Selecione o tipo de usuario");
  const categoryType = [
    { id: 1, name: "Sou um guia" },
    { id: 2, name: "Avançada" },
  ];

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
          <label htmlFor="name">Tipo</label>
          <Select
            sx={{ fontSize: ".9rem" }}
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

        <DisplayBox sx={{ fontSize: ".9rem" }}>
          <ul>
            <li>
              <Flag />
              <span>Guia Turistica</span>
            </li>

            <li>
              <House />
              <span>Estabelecimentos</span>
            </li>

            <li>
              <Map />
              <span>Roteiro</span>
            </li>
          </ul>
        </DisplayBox>

        <RadioForm />
        <MultiInputs />

        <PrimaryButton type="submit">Cadastrar</PrimaryButton>
        {progress && <LinearProgress />}
      </form>
    </>
  );
}

function RadioForm() {
  return (
    <>
      <Box>
        <Grid container direction="column">
          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <Radio style={{ color: "#006875" }} />
            <InputLabel sx={{ fontSize: ".9rem" }}>Tela Principal</InputLabel>
          </Grid>

          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <Radio style={{ color: "#006875" }} />
            <InputLabel sx={{ fontSize: ".9rem" }}>
              Tela de Categoria
            </InputLabel>
          </Grid>

          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <Radio style={{ color: "#006875" }} />
            <InputLabel sx={{ fontSize: ".9rem" }}>
              Tela Principal + Categoria
            </InputLabel>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

function MultiInputs() {
  return (
    <Box sx={{ marginTop: "15px" }}>
      <Grid container spacing={2}>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <InputGroup>
                <label>Dias</label>
                <input type="text" placeholder="05" />
              </InputGroup>
            </Grid>

            <Grid item xs={7}>
              <InputGroup>
                <label>Valor</label>
                <input type="text" placeholder="R$" />
              </InputGroup>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <InputGroup>
                <label>Dias</label>
                <input type="text" placeholder="10" />
              </InputGroup>
            </Grid>

            <Grid item xs={7}>
              <InputGroup>
                <label>Valor</label>
                <input type="text" placeholder="R$" />
              </InputGroup>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <InputGroup>
                <label>Dias</label>
                <input type="text" placeholder="15" />
              </InputGroup>
            </Grid>

            <Grid item xs={7}>
              <InputGroup>
                <label>Valor</label>
                <input type="text" placeholder="R$" />
              </InputGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
