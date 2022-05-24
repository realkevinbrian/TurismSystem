/****
 * At this component declare the (Indicadores) Funcionalities
 *
 * */
import {
  Assignment, Flag, Map, Person,
  Shop, ZoomInMap
} from "@mui/icons-material";
import React from "react";
import { Card, Wrapper } from "./styled";
import {Container} from "@mui/material"




export default function index() {

  const Data = [
    { id: 1, title: "Usuario", value: "1200", icon: <Person/> },
    { id: 2, title: "Guia Turisticos", value: "300", icon: <Flag/> },
    { id: 5, title: "Estabelecimentos", value: "540", icon: <Shop/> },
    { id: 3, title: "Roteiros", value: "400", icon: <Map/> },
    { id: 4, title: "Pontos Turisticos", value: "540", icon: <ZoomInMap/> },
    { id: 6, title: "Assinatura", value: "540", icon: <Assignment/> },
    { id: 7, title: "Assinatura", value: "540", icon: <Assignment/> },
    { id: 8, title: "Assinatura", value: "540", icon: <Assignment/> },
  ];

  return (
     <Container maxWidth = "lg">
      <h3>Indicadores</h3>
      <Wrapper>
        {Data.map( item => <IndicatorCard key={item.id} item={item}/>)}
      </Wrapper>
     </Container>
  );
}

/***
 * Here we are going to create card component to display in our Home Component
 */

const IndicatorCard = ({item}) =>{  
  return(
    <>
      <Card>
        <h4>{item.title}</h4>
        <span>{item.icon}</span>
        <h5>{item.value}</h5>
      </Card>
    </>
  )
}