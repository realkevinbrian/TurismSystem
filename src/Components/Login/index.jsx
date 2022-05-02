import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import bannerImg from "../../Assets/bgImage.png";
import { Anchor, H1, H5, StyledInput, StyledLabel, SubmitBtn } from '../Global';
import * as S from './styled';

function Login() {
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

                    <S.LoginBody>
                        <S.FormWrapper>
                            <H1>Login</H1>
                            <S.Form>
                                <S.InputGroup>
                                    <StyledLabel>E-mail</StyledLabel>
                                    <StyledInput/>
                                </S.InputGroup>

                                <S.InputGroup>
                                    <StyledLabel>Senha</StyledLabel>
                                    <StyledInput/>
                                </S.InputGroup>

                                <S.FormOptionWrapper>
                                    <Anchor href='#'>Esqueci minha senha</Anchor>
                                    <SubmitBtn>Login</SubmitBtn>
                                </S.FormOptionWrapper>

                            </S.Form>
                        </S.FormWrapper>
                    </S.LoginBody>

                </S.LoginContent>
            
            </S.LoginWrapper>
        
        </S.LoginContainer>
    </>
  )
}

export default Login