/**
 * Login Component
 * In this component we write all the Login Funcionalities 
 * We are going to include Authetication 
 * As In our Sysytem we have two types of Clients (Admin and Standard User)
 * We will have to Autheticate for both Clients
 * 
 * ********************LOGIC****************
 * As we stored in our database a key => user role
 * So we are going to use that key (user_role) to verify user role , 
 * and we are going to redirect to admin Dashboard if role is Admin else to Standard User Page
 */




import React from "react";
import {
  InputGroup,
  LoginContainer,
  LoginLeft,
  LoginRight,
  LinkContainer,
  StyledContainer,
} from "./styled";
import LoginBanner from "../../Assets/bgImage.png";
import { Link } from "react-router-dom";

function index() {
  return (
    <StyledContainer>
      <LoginContainer>
        <LoginLeft>
          <img src={LoginBanner} alt="Login Banner" />
        </LoginLeft>
        <LoginRight>
          <form>
            <h5>Login</h5>
            <InputGroup>
              <label>Email</label>
              <input type="email" name="email" required />
            </InputGroup>

            <InputGroup>
              <label>Senha</label>
              <input type="password" name="password" required />
            </InputGroup>

            <LinkContainer>
              <Link to="/">Esquece minha senha</Link>
              <button type="submit">Login</button>
            </LinkContainer>
          </form>
        </LoginRight>
      </LoginContainer>
    </StyledContainer>
  );
}
export default index;
