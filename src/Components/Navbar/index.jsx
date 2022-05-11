import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import LOGO from "../../Assets/LOGO.png";
import useAuth from "../../Hooks/useAuth";
import {setMenuState} from "../../features/MenuSlice";
import { Anchor, H4 } from '../Global';
import Menu from "../Menu/index";
import {Logo, LogoWrapper, MenuIconWrapper, NavbarContainer, NavMenuLinksWrapper } from './styled';


function Navbar() {
  //get menuState and add dispatch methods
  const dispatch = useDispatch();
            useAuth();


  //NAVBAR STATE CHECK

  return (
    <>
        <NavbarContainer>
            <MenuIconWrapper onClick={()=>dispatch(setMenuState(true))}>
            <MenuIcon/>
            </MenuIconWrapper>
            <LogoWrapper>
                <Logo src={LOGO}/>
            </LogoWrapper>
            <NavMenuLinksWrapper>
                <span>Ola,Administrador</span>
                <Anchor href="/logout">Sair</Anchor>
            </NavMenuLinksWrapper>
        </NavbarContainer>
        <Menu/>
    </>
  )
}

export default Navbar