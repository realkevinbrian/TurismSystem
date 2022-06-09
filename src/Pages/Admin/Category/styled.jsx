import styled from "styled-components";

/***
 * Register Button
 */

export const RegisterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.4rem 1.2rem;
  border-radius: 50px;
  transition: all 0.2s linear;
  font-size: 0.9rem;
  font-weight: 400;

  //on hover
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/***
 * This styled component declares the styles for Side Dispaly color
 */

export const Ball = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${({ bColor }) => bColor};
  border-radius: 50%;
`;

export const styledCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  //change color input
  input[type="color"] {
    border: 1px solid transparent;
    outline-style: none;
    border-radius: 50px;
  }
`;

/***
 * Here I declare a styled Buttons the @edit and @Delete
 */

/****
 * CreateCategory Styled Component
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
export const RegisterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 360px;
  max-width: 400px;
  min-width: 300px;
  box-shadow: 1px 1px 5px 5px #00000028;
  display: flex;
  flex-direction: column;
  padding: 0px;
`;
export const RegisterHeader = styled.div`
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
export const RegisterBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap:10px;
    /* > * {border: 1px dashed red;} */
    /* border: 2px dashed green; */

    div:nth-child(1){
      margin: 20px 0;
    }

    button {
      align-self: center;
      justify-self: center;
      padding: 10px 30px;
      margin-top: 50px;
      

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary}!important;
        color: ${({ theme }) => theme.colors.primary}!important;
      }
    }
  }
`;

export const InputGroup = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;

  //label inside
  label{
    position: absolute;
    top: -10px;
    background-color: white;
    padding: 0 5px;
  }

  div{
    height: 30px;
    max-height: 30px;
    min-height: 10px;
    border: 1px solid transparent!important;
    outline: none !important;

  }
`;

export const ColorPicker = styled.div`
  position: relative;

  //color picker input
  input[type="color"] {
    border: 2px solid blue;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
  }

  //image to represent the color picker
  img {
    position: initial;
    width: 200px;
    max-width: 250px;
    min-width: 100px;
  }
`;
export const SelectedColor = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  top: 0;
  right: 0;
  position: absolute;
  border-radius: 50%;
  border: 5px solid white;
  transform: translateX(-120px) translateY(30px);
`;
/**
 * Table Row Input to Edit table
 */

export const EditColorInput = styled.input``;

export const StyledEditInput = styled.input`
  width: 100%;
  border-bottom-color: #e9e9e9;
`;
