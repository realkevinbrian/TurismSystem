import { ArrowBack } from "@mui/icons-material";
import { Box, LinearProgress, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileInputImage from "../../../Assets/fileInputImage.svg";
import { CreateAgenda, selectAll } from "../../../features/AgendaSlice";
import { setAgendaState } from "../../../features/MenuSlice";
import { useFetch } from "../../../Hooks/useFetch";
import {
  InputGroup,
  OverlayContainer,
  RegisterButton,
  RegisterContainer,
  RegisterHeader
} from "../Category/styled";
import * as S from "./styled";

/**
 * 
 *
 */

export default function index() {
  const AgendaState = useSelector((state) => state.menu.AgendaState);
  const dispatch = useDispatch();
  return (
    <>
      {AgendaState && (
        <OverlayContainer>
          <RegisterContainer>
            <RegisterHeader>
              <ArrowBack onClick={() => dispatch(setAgendaState())} />
              <h3>Cadastro de Agenda Cultural</h3>
            </RegisterHeader>

            <S.RegisterBody>
              <CreateForm />
            </S.RegisterBody>
          </RegisterContainer>
        </OverlayContainer>
      )}
    </>
  );
}

/***
 * Form
 */
export function CreateForm() {
  const agendaAll = useSelector(selectAll);
  const dispatch = useDispatch();
  //Grap our form edit values
  const [progress, setProgress] = useState(false);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [start, setStartTime] = useState(null);
  const [entrance, setEntrance] = useState(null);
  const data = { name, date, start, entrance };

  //SUBMIT DATA
  const handleSubmit = (self) => {
    //disable default submit
    self.preventDefault();

    dispatch(
      CreateAgenda({ id: agendaAll[agendaAll.length - 1].id + 1, ...data })
    );

    setTimeout(() => {
      setProgress(true);
      setTimeout(() => {
        dispatch(setAgendaState(false));
        setProgress(false);
      }, 200);
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label>Nome</label>
          <input
            onChange={(self) => setName(self.target.value)}
            type="text"
            placeholder="digite o nome do evento"
          />
        </InputGroup>

        <InputGroup>
          <label>Inicio</label>
          <input
            onChange={(self) => setStartTime(self.target.value)}
            type="time"
            placeholder="selecione a hora de inicio"
          />
        </InputGroup>

        <InputGroup>
          <label>Valor da Entrada</label>
          <input
            onChange={(self) => setEntrance(self.target.value)}
            type="text"
            placeholder="digite o valor da entrada"
          />
        </InputGroup>

        <CustomMultiSelectWrapper/>

        <InputGroup>
          <label>Data</label>
          <input
            onChange={(self) => setDate(self.target.value)}
            type="date"
            placeholder="selecione a data do evento"
          />
        </InputGroup>

        <S.FileInputWrapper>
          <Box>
            <img src={FileInputImage} alt="fileInputImage" />
            <input type="file" />
          </Box>
        </S.FileInputWrapper>

        <RegisterButton>Cadastrar</RegisterButton>

        {progress && <LinearProgress />}
      </form>
    </>
  );
}

/**
 * This component is responsible for multiple select
 */
export function CustomMultiSelectWrapper() {
  const [city, setCity] = useState("selecione cidade");
  // const [region, setRegion] = useState("selecione região");
  const [country, setCountry] = useState("selecione país");

  /***
   * In this component we declare the city and states
   * Im Imprementing an Algorithm to only show the select city once country is selected
   * I will be using filter method
   */

  const fetchedData = useFetch("http://localhost:4000/countries");
  
  const data = fetchedData.data;

  //Declare data
  const countries = data.map(item => item.country);
  const country_states = data.filter(item => item.country === country).map(item => item.states)
  



  return(
    <>
      <S.MultipleSelect>
        <strong>Selecione o Local</strong>
        {<ReusableComponent trigger={setCountry} title={country} data={countries}/>}
        {<ReusableComponent trigger={setCity} title={city} data={country_states}/>}
      </S.MultipleSelect>
    </>
  );
}

/***
 * Select Component
 */

function ReusableComponent({ data, title, trigger}) {
    
  return (
    <S.CustomSelect value={title} onChange={(self) => {trigger(self.target.value)}}>
      <MenuItem value={title}>
        <em>{title}</em>
      </MenuItem>
      {data.map( (item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
    </S.CustomSelect>
  );
}
