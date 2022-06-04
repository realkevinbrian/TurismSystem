import styled from "styled-components";

/*****
 * LOGIN PAGE
 */

export const StyledContainer = styled.div`
  @media screen and (min-width: 768px) {
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    place-items: center;
    place-content: center;
  }

  //on mobile devicess
  @media screen and (max-width: 767px) {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    place-content: center;
    place-items: center;
  }
`;

export const LoginContainer = styled.div`
  //ON DESKTOP
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-wrap: wrap;
    border-radius: 20px;
    background-color: white;
  }

  //ON MOBILE
  @media screen and (max-width: 767px) {
    margin: 0.5rem 5rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const LoginLeft = styled.div`
  display: grid;
  place-items: center;
  width: 400px;
  border-radius: 60px;

  img {
    border-radius: 20px;
  }

  //ON MOBILE
  @media screen and (max-width: 767px) {
    position: relative;
    transform: translateY(70px);
    img {
      width: 100%;
      z-index: 1;
      max-width: 100%;
      border-radius: 20px;
    }
  }
`;
export const LoginRight = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;

  /* *{border:1px solid red} */
  /* *{border : 1px dashed red} */

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

  //ON MOBILE
  @media screen and (max-width: 767px) {
    z-index: 20;
    transform: translateY(-90px);
    position: relative;
    border-radius: 20px;
    padding-top: 1.5rem;
    box-shadow: 1px 1px 10px 2px #00000028;
    padding: 15px;

    section {
      padding-top: 1rem;
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

//LinkContainer
export const LinkContainer = styled.section``;
