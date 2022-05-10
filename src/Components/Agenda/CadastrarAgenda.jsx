import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowBack, Image } from "@mui/icons-material";
import React,{useState} from 'react';
import { Form } from "../../Components/Login/styled";
import * as S from "./styled";
import * as G from "../../Components/Global/index";
import { useSelector, useDispatch } from "react-redux";
import { selectAll, CreateAgenda} from '../../features/AgendaSlice';
import { setAgendaState} from '../../features/MenuSlice';
import { LinearProgress } from '@mui/material';


/**
 * CADASTRO DE CATEGORIAS  PAGE
 *
 */



export function CadastrarAgenda() {
  const AgendaState = useSelector((state) => state.menu.AgendaState);
  const agendaAll = useSelector(selectAll);
  const dispatch = useDispatch();
  //Grap our form edit values
  const [progress, setProgress] = useState(false);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [start, setStartTime] = useState(null);
  const [entrance, setEntrance] = useState(null);
  const [city, setCity] = useState("Cidade");
  const [region, setRegion] = useState("região");
  const [country, setCountry] = useState("país");
  const data = {name,date,start,entrance}

  //SUBMIT DATA
  const handleSubmit = (self) =>{
    //disable default submit
    self.preventDefault();

    dispatch(CreateAgenda({id: agendaAll[agendaAll.length - 1].id + 1, ...data}))

    setTimeout(() => {
      setProgress(true)
        setTimeout(()=>{
          dispatch(setAgendaState(false));
          setProgress(false)
        },200)    
    }, 1000);
  }


  return (
    <S.styledCreateCategoryContainer AgendaState={AgendaState}>
      <S.styledCreateCategory>

        <S.createCategoryHeader>
          <G.Anchor href="/admin"><ArrowBack /></G.Anchor>
          <G.H5>Cadastro de Agenda Cultural</G.H5>
        </S.createCategoryHeader>

        <S.createCategoryFormWrapper>
          <Form onSubmit={handleSubmit}>

            <S.styledInputGroup>
              <G.StyledLabel>Nome</G.StyledLabel>
              <G.StyledInput
                onChange={(self) => setName(self.target.value)}
                type="text"
                placeholder='digite o nome do evento' />
            </S.styledInputGroup>

            <S.styledInputGroup>
              <G.StyledLabel>Inicio</G.StyledLabel>
              <G.StyledInput
                onChange={(self) => setStartTime(self.target.value)}
                type="time"
                placeholder='selecione a hora de inicio' />
            </S.styledInputGroup>

            <S.styledInputGroup>
              <G.StyledLabel>Valor da Entrada</G.StyledLabel>
              <G.StyledInput
                onChange={(self) => setEntrance(self.target.value)}
                type="text"
                placeholder='digite o valor da entrada' />
            </S.styledInputGroup>

            <CustomMultiSelectWrapper 
            city ={city}
            region = {region} 
            country = {country}
            setCity={setCity} 
            setRegion={setRegion} 
            setCountry={setCountry}
            />

            <S.styledInputGroup>
              <G.StyledLabel>Data</G.StyledLabel>
              <G.StyledInput
                onChange={(self) => setDate(self.target.value)}
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
            {progress && <LinearProgress/>}
            <S.CadastroBtn>Cadastrar</S.CadastroBtn>
          </Form>
        </S.createCategoryFormWrapper>
      </S.styledCreateCategory>
    </S.styledCreateCategoryContainer>
  );
}


/***
 * Componente para Selecionar o Local do evento
 * O componente inclui O select de {Cidade , regiao e Pais}
 */

export function CustomMultiSelectWrapper({setCity,setRegion,setCountry,city,region,country}){

  return(
    <>
      <S.styledSelectContainer>
        <S.styledSelectButton>Selecione o Local</S.styledSelectButton>
        <S.styledSelectWrapper>

          {/**City Select */}
          <S.styledSelect value={city} onChange={(self)=>setCity(self.target.value)}>
            <S.styledMenuItem value={"Cidade"}><em>Cidade</em></S.styledMenuItem>
            <S.styledMenuItem value={"Brazilia"}>Brazilia</S.styledMenuItem>
            <S.styledMenuItem value={"Mexico"}>Mexico</S.styledMenuItem>
          </S.styledSelect>

          {/** Region Select */}
          <S.styledSelect value={region} onChange={(self)=>setRegion(self.target.value)}>
            <S.styledMenuItem value={"região"}><em>Região</em></S.styledMenuItem>
            <S.styledMenuItem value={"Brazilia"}>Brazilia</S.styledMenuItem>
            <S.styledMenuItem value={"Mexico"}>Mexico</S.styledMenuItem>
          </S.styledSelect>
          
          {/** Country Select */}
          <S.styledSelect value={country} onChange={(self)=>setCountry(self.target.value)}>
            <S.styledMenuItem value={"país"}><em>Pais</em></S.styledMenuItem>
            <S.styledMenuItem value={"Brazilia"}>Brazilia</S.styledMenuItem>
            <S.styledMenuItem value={"Mexico"}>Mexico</S.styledMenuItem>
          </S.styledSelect>

        </S.styledSelectWrapper>
      </S.styledSelectContainer>
    </>
  )
}

