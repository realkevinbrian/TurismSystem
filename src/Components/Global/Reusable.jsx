import styled from "styled-components";
import React from "react";
import { Dialog, Select } from "@mui/material";
import { PrimaryButton } from "../Button";

//InputGroup
export const InputGroup = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 5px 10px;

  //label inside
  label {
    position: absolute;
    top: -10px;
    background-color: white;
    padding: 0 5px;
    font-size: 0.8rem;
  }

  div {
    height: 30px;
    max-height: 30px;
    min-height: 10px;
    border: 1px solid transparent !important;
    outline: none !important;
  }
`;

//TILTLE
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: medium;
`;
//InputGroup type 2
export const InputGroupExtended = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2px 10px;

  //label inside
  label {
    position: absolute;
    top: -10px;
    background-color: white;
    padding: 0 5px;
    font-size: 0.8rem;
  }

  div {
    height: 30px;
    max-height: 30px;
    min-height: 10px;
    border: 1px solid transparent !important;
    outline: none !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

//TextArea
export const TextAreaGroup = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 5px 10px;
  margin-top: 5px;
  //label inside
  label {
    position: absolute;
    top: -10px;
    background-color: white;
    padding: 0 5px;
  }

  //textarea
  textarea {
    border: 1px solid transparent;
    outline: none;
    padding-top: 10px;
    background-color: transparent;
    max-height: 150px;
  }
`;

/****
 * Overlay Styled Component
 */
export const OverlayContainer = styled.div`
  background-color: #000000af;
  height: 100vh;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  display: grid;
  justify-content: end;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
//Overlay Component Child
export const OverlayChild = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 360px;
  max-width: 400px;
  min-width: 300px;
  box-shadow: 1px 1px 5px 5px #00000028;
  display: flex;
  flex-direction: column;
  padding: 0px;
`;

//Overlay Component Header
export const OverlayHeader = styled.div`
  padding: 15px 10px;
  border: 1px solid transparent;
  border-bottom-color: #151515;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
  }

  //svg
  svg {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 50px;
  }
`;

//Overlay Component Body
export const OverlayBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 25px;
    font-size: 0.9rem;

    button {
      align-self: center;
      justify-self: center;
      padding: 7px 30px;
      margin-top: 10px;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary}!important;
        color: ${({ theme }) => theme.colors.primary}!important;
      }
    }
  }
`;

export const ShowTotalWrapper = styled.div`
  text-align: center;
  padding: 0.5rem 1rem;
  box-shadow: 1px 1px 10px 2px #d8d6d695;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;

  h4 {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  h5 {
    word-break: keep-all;
    word-wrap: normal;
    font-weight: 400;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
  }
`;

//Display Total
export function ShowTotal({ total }) {
  return (
    <>
      <ShowTotalWrapper>
        <h4>Total</h4>
        <h5>R$ {total ? total : " 12,500000 "}</h5>
      </ShowTotalWrapper>
    </>
  );
}

/***
 * Modal
 */

export const Modal = styled(Dialog)`
  p {
    padding: 0;
    margin: 0;
  }

  span {
    font-weight: bold;
  }

  strong {
    cursor: pointer;
    font-variant: small-caps;

    &:nth-child(1) {
      :hover {
        color: ${({ theme }) => theme.colors.green};
      }
    }

    &:nth-child(2) {
      :hover {
        color: #910404;
      }
    }
  }
`;

//Display Address
export const Address = ({ address }) => {
  return (
    <div>
      <h5 style={{ margin: "5px 0 0 0" }}>Endereço</h5>

      <p
        style={{
          margin: "5px 0 0 0",
          display: "grid",
          gap: "5px",
          color: "#949494",
          fontSize: ".8rem",
        }}
      >
        {address.split(",").map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
    </div>
  );
};

//Album Images
export const ImagesAlbum = ({ photos }) => {
  return (
    <div>
      <div>
        <Title style={{ margin: "5px 0 0 0" }}>Fotos</Title>
        <span style={{ color: "#949494", fontSize: ".8rem" }}>
          Clique nas imagens para expandir
        </span>
      </div>

      <div
        style={{
          width: "100%",
          display: "grid",
          gap: "4px",
          gridTemplateColumns : "repeat(3,1fr)",
          
        }}
      >
        {photos.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="previewImage"
            style={{ width: "100%" }}
          />
        ))}
      </div>
    </div>
  );
};

//Description

export const Description = ({ desc }) => {
  return (
    <div>
      <Title>Descrição</Title>
      <p style={{ margin: "5px 0 0 0", color: "#949494", fontSize: ".7rem" }}>
        {desc}
      </p>
    </div>
  );
};

//Action Buttons
export const ActionButtons = ({ active, block, id }) => {
  /**
   * In this component we declare Approve and Disapprove Functionality
   * @params (__active , _block, __id)
   * */

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <PrimaryButton
          style={{ backgroundColor: "#079784" }}
          onClick={() => active({ id })}
        >
          Approvar
        </PrimaryButton>
        <PrimaryButton
          style={{ backgroundColor: "#ec0202" }}
          onClick={() => block({ id })}
        >
          Reprovar
        </PrimaryButton>
      </div>
    </>
  );
};

//ContactInfo
export const ContactInfo = ({ contact }) => {
  return (
    <>
      <div style={{ display: "grid", gap: "7px" }}>
        <Title>Dados Cadastrais</Title>
        <ul style={{ color: "#949494", fontSize: ".8rem" }}>
          {contact.map((item, index) => (
            <li key={index}>Telefone : {item.tel}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

//Plano Vigente
export const Plan = ({ plans }) => {
  return (
    <div style={{ display: "grid", gap: "7px" }}>
      <Title>Plano Vigente</Title>
      {plans.map((item, index) => (
        <ul style={{ color: "#949494", fontSize: ".8rem" }} key={index}>
          <li>{item.title}</li>
          <li>{item.price}</li>
        </ul>
      ))}
    </div>
  );
};

//Spoken Languages
export const SpokenLang = ({ languages }) => {
  return (
    <>
      <div style={{ display: "grid", gap: "7px" }}>
        <Title>Idiomas Falados</Title>
        <ul style={{ color: "#949494", fontSize: ".8rem" }}>
          {languages.split(",").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

/*****
 * Styled Components
 */

export const StyledProfile = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 0.8rem;
  }
`;
