import React from 'react'
import { Anchor,StyledInput, StyledLabel, SubmitBtn } from '../Global'
import * as S from './styled'

function Login() {
  return (
    <>
        <S.LoginContainer>
            <S.LoginWrapper>
                
                <S.LoginBanner>
                    <S.BannerImage/>
                </S.LoginBanner>

                <S.LoginContainer>

                    <S.LoginHeader>

                    </S.LoginHeader>

                    <S.LoginBody>
                        <S.FormWrapper>
                            <S.Form>

                                <S.InputGroup>
                                    <StyledLabel/>
                                    <StyledInput/>
                                </S.InputGroup>

                                <S.InputGroup>
                                    <StyledLabel/>
                                    <StyledInput/>
                                </S.InputGroup>

                                <S.FormOptionWrapper>
                                    <Anchor>Esqueci minha senha</Anchor>
                                    <SubmitBtn>Login</SubmitBtn>
                                </S.FormOptionWrapper>

                            </S.Form>
                        </S.FormWrapper>
                    </S.LoginBody>

                </S.LoginContainer>
            </S.LoginWrapper>
        </S.LoginContainer>
    </>
  )
}

export default Login