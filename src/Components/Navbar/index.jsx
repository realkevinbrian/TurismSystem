import React from 'react'
import { Anchor, H4 } from '../Global'
import { Bars, Logo, LogoWrapper, MenuIconWrapper, NavbarContainer, NavMenuLinksWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  library  from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
    
    </>
  )
}

export default Navbar