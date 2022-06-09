/***
 *
 * In this Component we Display details for TuristicPointReport
 */

import { ArrowBack } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import image from "../../../Assets/Images/avatar1.webp";
import {
  OverlayBody,
  OverlayChild,
  OverlayContainer,
  OverlayHeader,
  Title
} from "../../../Components/Global/Reusable";
import { selectAll } from "../../../features/UsersReportSlice";

export default function index({ CloseDetails, detailsID }) {
  const reportData = useSelector(selectAll);
  return (
    <OverlayContainer>
      <OverlayChild style={{ width: "400px" }}>
        <OverlayHeader>
          <ArrowBack onClick={() => CloseDetails()} />
          <Title>Detalhes</Title>
        </OverlayHeader>
        {reportData
          .filter((item) => item.id === detailsID)
          .map((item, index) => (
            <OverlayBody
              style={{ gap: "15px", paddingTop: "40px" }}
              key={index}
            >
              <Profile />
              <Description />
            </OverlayBody>
          ))}
      </OverlayChild>
    </OverlayContainer>
  );
}

export const Description = ({ desc }) => {
  return (
    <div>
      <div style={{display : "flex", flexDirection : "column" , gap : "10px"}}>
        <Title>Denuncias</Title>

        <div>
          <Title>Recebidas</Title>
          <ul style={{fontSize : ".8rem"}}>
            <li>Excluidas : 0</li>
            <li>Reactivadas : 2</li>
          </ul>
        </div>

        <div>
          <Title>Efetuadas</Title>
          <ul style={{fontSize : ".8rem"}}>
            <li>Excluidas : 0</li>
            <li>Reactivadas : 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Profile = ({ photos }) => {
  return (
    <StyledProfile>
      <div style={{display : "grid", gap : "5px"}}>
        <Title style={{ margin: "5px 0 0 0" }}>Marcos Paulo</Title>
        <div style={{display : "grid", gap : "7px"}}>
          <Title>Dados Cadastrais</Title>
          <ul>
            <li>
              Telefone : <span>(47) 123456789</span>
            </li>
            <li>
              E-mail : <span>paulomachado@gmail.com</span>
            </li>
            <li>
              Pais : <span> Italia</span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={image}
          alt="profileImage"
          style={{
            objectFit : "cover",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid #006875",
          }}
        />
      </div>
    </StyledProfile>
  );
};

/*****
 * Styled Components
 */

const StyledProfile = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 0.8rem;

  }
`;
