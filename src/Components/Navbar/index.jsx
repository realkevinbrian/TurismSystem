import React from 'react'
import { Anchor, H4 } from '../Global'
import { Bars, Logo, LogoWrapper, MenuIconWrapper, NavbarContainer, NavMenuLinksWrapper } from './styled'
import Menu from "../Menu/index";
import { useDispatch, useSelector } from 'react-redux';
import {MenuActions} from "../../Redux/MenuSlice"

function Navbar() {

  //get menuState and add dispatch methods
  const dispatch = useDispatch();

  return (
    <>
        <NavbarContainer>
            
            <MenuIconWrapper onClick={()=>dispatch(MenuActions.setMenuState(true))}>
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