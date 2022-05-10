import React from 'react';
import { useDispatch } from 'react-redux';
import LOGO from "../../Assets/LOGO.png";
import useAuth from "../../Hooks/useAuth";
import {setMenuState} from "../../features/MenuSlice";
import { Anchor, H4 } from '../Global';
import Menu from "../Menu/index";
import { Bars, Logo, LogoWrapper, MenuIconWrapper, NavbarContainer, NavMenuLinksWrapper } from './styled';


function Navbar() {
  //get menuState and add dispatch methods
  const dispatch = useDispatch();
            useAuth();


  //NAVBAR STATE CHECK

  return (
    <>
        <NavbarContainer>
            <MenuIconWrapper onClick={()=>dispatch(setMenuState(true))}>
                <Bars/>
                <Bars/>
                <Bars/>
            </MenuIconWrapper>
            <LogoWrapper>
                <Logo src={LOGO}/>
            </LogoWrapper>
            <NavMenuLinksWrapper>
                <H4>Ola, Administrador</H4>
                <Anchor href="/logout">Sair</Anchor>
            </NavMenuLinksWrapper>
        </NavbarContainer>
        <Menu/>
    </>
  )
}

export default Navbar