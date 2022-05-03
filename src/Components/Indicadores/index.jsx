import React, { useState } from 'react'
import { H5 } from '../Global'
import * as S from "./styled"

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faFlag,faShop,faMapLocation,faSignature } from '@fortawesome/free-solid-svg-icons'
import * as G from "../../Components/Global/index"


function Indicadores() {

  //loop through icons
  const [indicators] = useState([
    {id:1, title: "Usuario", subTitle : "1200", icon:faUserAlt},
    {id:2, title: "Guia Turisticos", subTitle : "300", icon:faFlag},
    {id:5, title: "Estabelecimentos", subTitle : "540", icon:faShop},
    {id:3, title: "Roteiros", subTitle : "400", icon:faMapLocation},
    {id:4, title: "Pontos Turisticos", subTitle : "540", icon:faSignature},
    {id:6, title: "Assinatura", subTitle : "540", icon:faSignature},
    {id:7, title: "Assinatura", subTitle : "540", icon:faSignature},
    {id:8, title: "Assinatura", subTitle : "540", icon:faSignature}
  ])
  
  return (
    <G.Container>

      <S.Indicadores>
        <S.Header>
          <H5>Indicadores</H5>
        </S.Header>

        <S.IndicadoresWrapper>
          
          {
            indicators.map((item) => {
              return(
              <S.CardWrapper key={item.id}>
                <S.CardHeader>{item.title}</S.CardHeader>
                <S.CardBody>
                  <FontAwesomeIcon icon={item.icon}/>
                </S.CardBody>
                <S.CardFooter>
                  <H5>{item.subTitle}</H5>
                </S.CardFooter>
              </S.CardWrapper>
              )
            })
          }

        </S.IndicadoresWrapper>

      </S.Indicadores>
    
    </G.Container>
  )
}

export default Indicadores