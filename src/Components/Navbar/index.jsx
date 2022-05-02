import React from 'react'
import { Anchor, H4 } from '../Global'
import { Bars, Logo, LogoWrapper, MenuIconWrapper, NavbarContainer, NavMenuLinksWrapper } from './styled'
import Menu from "../Menu/index";

function Navbar() {
  return (
    <>
        <NavbarContainer>
            
            <MenuIconWrapper>
                <Bars/>
                <Bars/>
                <Bars/>
            </MenuIconWrapper>

            <LogoWrapper>
                <Logo/>
            </LogoWrapper>

            <NavMenuLinksWrapper>
                <H4>Ola, Administrador</H4>
                <Anchor href="#">Sair</Anchor>
            </NavMenuLinksWrapper>

        </NavbarContainer>
        <Menu/>
    </>
  )
}

export default Navbar