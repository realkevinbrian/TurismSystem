import styled from "styled-components";
import { Container } from "@mui/material";

/**
 * Users Login  Page
 */

 export const UserContainer = styled(Container)`
    background : red;
    height : 100vh;
    position : initial;
 `
 export const UserLoginContainer = styled(Container)`
    border : 1px solid green;
    position : relative;
    display : grid;
    place-items : center;
 `
 export const LoginUpSide = styled.div`
 position : relative;
  display: grid;
  place-items: center;
  border-radius: 60px;
  img {
    border-radius: 20px;
  }


`;
export const LoginDownSide = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  position : absolute;
  top:0;

  h5 {
    /* flex: 1; */
    display: flex;
    align-items: flex-end;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  //STYLE FORM
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0.5px;
    
    //section link
    section {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;

      a {
        text-decoration: underline !important;

        &:hover {
          color: #ff004c;
        }
      }

      button {
        background-color: ${({ theme }) => theme.colors.primary};
        padding: 5px 30px;
        border-radius: 50px;
        font-weight: bold;
        transition: all 0.5s ease-in-out;

        &:hover {
          background-color: #054d52;
          color: #ffae00;
        }
      }

      a {
        color: inherit;
        text-decoration: inherit;
      }
    }
  }

`;

export const FormHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 40px;

  img {
    justify-self: center;
    width: 100%;
    max-width: 200px;
  }

  h5 {
    align-self: flex-start;
    padding: 0;
    margin: 0;
    padding-bottom: 1.5rem;
  }
`;

//input Group
export const InputGroup = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding: 6px;
  border-radius: 3px;

  label {
    font-size: 0.8rem;
    position: absolute;
    transform: translateY(-15px) translateX(10px);
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0 4px;
  }
  input {
    border: 1px solid transparent;
    outline: none;
    background-color: transparent;
  }
`;