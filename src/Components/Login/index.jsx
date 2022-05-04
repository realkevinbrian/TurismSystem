import { ArrowBack } from '@mui/icons-material';
import {LinearProgress } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import bannerImg from "../../Assets/bgImage.png";
import LOGO from "../../Assets/LOGO.png";
import { Logo, LogoWrapper } from '../../Components/Navbar/styled';
import useAuth from "../../Hooks/useAuth";
import { MenuActions } from "../../Redux/MenuSlice";
import { Anchor, H1, H5, StyledInput, StyledLabel, SubmitBtn } from '../Global';
import * as S from './styled';

function Login() {

    useAuth();
    //=>SETUP DATA IN FORM
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [getErrors,setErrors] = useState("");
    const [isLoading,setLoading] = useState(false);
    //=>SETUP NAVIGATE
    const Navigate = useNavigate();

    //=>DISPATCH navbar state @@Close the navbar
    const dispatch = useDispatch();
    // dispatch(MenuActions.setNavbarState(false))

    useEffect(()=>{
        //authetication
    if(localStorage.length !== 0){
        Navigate("/admin")
    }
    },)
    
    //Authetication
    function handleSubmit(self){
        //prevent from reloading
        self.preventDefault();

        /***
         * THIS WOULD BE OUR DATABASE DATA IN THAT CASE
         */
        let db_email = "admin@company.com";
        let db_password = "12345";
        
        if(email === db_email && password === db_password){
            setErrors("");
                setTimeout(() => {
                    setLoading(true)
                    setTimeout(()=>{
                        setLoading(false);
                        Navigate("/admin");
                        //store LocalStorage
                        localStorage.setItem("email", email)
                        localStorage.setItem("password", password)
                        dispatch(MenuActions.setNavbarState(true))
                    },1000)
                }, 1);   
        }else{
            setErrors("Email ou Senha Incorrecta! Tente de Novo");
        }
        
    }

  return (
    <>
        <S.LoginContainer>
            
            <S.LoginWrapper>
                <S.backButtonWrapper>
                    <ArrowBack/>
                </S.backButtonWrapper>                
                <S.LoginBanner>
                    <S.BannerImage src={bannerImg}/>
                </S.LoginBanner>

                <S.LoginContent>

                    <S.LoginHeader>
                        <H5>Não possui cadastro?</H5>
                        <Anchor href="#">Cadastre-se</Anchor>
                    </S.LoginHeader>

                    <LogoWrapper>
                        <Logo src={LOGO}/>
                    </LogoWrapper>

                    <S.LoginBody>
                        <S.FormWrapper>
                            <H1>Login</H1>
                            <S.Form onSubmit = {handleSubmit}>
                                <S.InputGroup>
                                    <StyledLabel>E-mail</StyledLabel>
                                    <StyledInput type="email" autocomplete onChange={(self)=>setEmail(self.target.value)} required/>
                                </S.InputGroup>

                                <S.InputGroup>
                                    <StyledLabel>Senha</StyledLabel>
                                    <StyledInput type="password" autocomplete onChange={(self)=>setPassword(self.target.value)} required/>
                                </S.InputGroup>
                                
                                {getErrors && <S.customAlert variant="outlined" severity="error">{getErrors}</S.customAlert>}

                                <S.FormOptionWrapper>
                                    <Anchor href='#'>Esqueci minha senha</Anchor>
                                    <SubmitBtn type="submit">Login</SubmitBtn>
                                </S.FormOptionWrapper>
                            
                            </S.Form>
                                
                                {isLoading && <LinearProgress/>}

                        </S.FormWrapper>
                    </S.LoginBody>

                </S.LoginContent>
            
            </S.LoginWrapper>
        
        </S.LoginContainer>
    </>
  )
}

export default Login


export function Logout(){
    
    //=>SETUP NAVIGATE
    const Navigate = useNavigate();
    useEffect(() => {
        localStorage.clear();
        Navigate("/login");
    })
}