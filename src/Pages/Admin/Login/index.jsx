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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//We get user Data from UserApi
import UserCredentials from "../../../Api/User.json";
import LoginBanner from "../../../Assets/bgImage.png";
import Logo from "../../../Assets/LOGO.png";
import {
  FormHeader, InputGroup,
  LinkContainer,
  LoginContainer,
  LoginLeft,
  LoginRight,
  StyledContainer
} from "./styled";
import { useDispatch } from "react-redux";
import {Login} from "../../../features/LoginSlice"
import {Alert} from "@mui/material"

export default function index({setToken}) {
  return (
    <StyledContainer>
      <LoginContainer>
        <LoginLeft>
          <img src={LoginBanner} alt="Login Banner" />
        </LoginLeft>
        <LoginRight>
          <LoginForm setToken={setToken}/>
        </LoginRight>
      </LoginContainer>
    </StyledContainer>
  );
}

function LoginForm({setToken}) {

  //Decale dispatch
  const dispatch = useDispatch();

  /***
   * Collect all data from the form
   *
   * */
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const user_client = { email, password };
  const { users: user_database } = UserCredentials;
  const navigate = useNavigate();
  const [error, setError] = useState(null)

  /***
 * Autheticate user
 */
const handleLogin = (self) => {
  self.preventDefault();


  //destructure received data
  const { email, password } = user_client;


  /**
   * Match the Specified related to Database Users
   */
  const FoundUser = user_database.find(
    (user) => user.email === email && user.password === password
  );

  //Verify if returned result from @FoundUser is not Empty
  if (FoundUser) {
    /***
     * Validate the User role
     * IF the user is Admin we direct to Admin Page Else to Standard Page
     */
    switch (FoundUser.role) {

      case "Admin":
        // AddUser(FoundUser.role);
        setToken("13243242")
        navigate("/admin");
        break;

      case "Standard":
        setToken("13243242")
        navigate("/user");
        break;

      default:
        break;
    }

    //Autheticate by Context
  } else {
    setError("Email ou Senha Incorrecta, Tente de novo");
  }
};


  return (
    <React.Fragment>
      <FormHeader>
        <img src={Logo} alt="OfficialLogo" />
        <h5>Login</h5>
      </FormHeader>

      <form onSubmit={handleLogin}>
        <InputGroup>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={(self) => setEmail(self.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <label>Senha</label>
          <input
            type="password"
            name="password"
            required
            onChange={(self) => setPassword(self.target.value)}
          />
        </InputGroup>       

        {error && <Alert severity="error">{error}</Alert>}

        <LinkContainer>
          <Link to="/">Esquece minha senha</Link>
          <button type="submit">Login</button>
        </LinkContainer>
      </form>
    </React.Fragment>
  );
}


/***
 * Declare a method to add data to localStorage
 */

function AddUser(user_role) {
  localStorage.setItem("user_token", "12345678");
  localStorage.setItem("user_role", user_role);
}
