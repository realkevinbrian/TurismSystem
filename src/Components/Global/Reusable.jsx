import styled from "styled-components";
import React from "react";
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
  }

  div {
    height: 30px;
    max-height: 30px;
    min-height: 10px;
    border: 1px solid transparent !important;
    outline: none !important;
  }
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
  padding: 0 10px;
  border: 1px solid transparent;
  border-bottom-color: #151515;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    gap: 10px;
    /* > * {border: 1px dashed red;} */
    /* border: 2px dashed green; */

    div:nth-child(1) {
      margin: 20px 0;
    }

    button {
      align-self: center;
      justify-self: center;
      padding: 10px 30px;
      margin-top: 1.5rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary}!important;
        color: ${({ theme }) => theme.colors.primary}!important;
      }
    }
  }
`;

export const ShowTotalWrapper = styled.div`
        text-align: center;
        padding:.5rem 1rem;
        box-shadow: 1px 1px 10px 2px #d8d6d695;
        border-radius: 5px;
        display: grid;
        grid-template-columns: 1fr;
        gap:5px;


        h4{
            font-size: 1.3rem;
            font-weight: bold;
            margin: 0;
            padding:0;
        }
        h5{
            word-break: keep-all;
            word-wrap: normal;
            font-weight: 400;
            font-size: 1.2rem;
            margin: 0;
            padding:0;
        }
`;


//Display Total
export function ShowTotal({total}) {
  return (
    <>
      <ShowTotalWrapper>
        <h4>Total</h4>
        <h5>R$ {total ? total : " 12,500000 "}</h5>
      </ShowTotalWrapper>
    </>
  );
}
