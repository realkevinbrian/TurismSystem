import { faCashRegister, faPieChart, faRegistered, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {setMenuState} from "../../features/MenuSlice";
import * as S from './styled';


function Menu() {

     /***
   * DADOS PARA LINKS (CATEGORIAS)
   */
  const [data] = useState([
    {id:1, label : "Indicadores", link : "/admin", icon : faPieChart},
    {id:2, label : "Financeiro", link : "/admin/financeiro", icon : faCashRegister},
    {id:3, label : "Categoria", link : "/admin/categoria", icon : faStoreAlt},
    {id:4, label : "Agenda Cultural", link : "/admin/agenda", icon : faRegistered}
  ]);

  //get menuState and add dispatch methods
  const menuState = useSelector((state)=>state.menu.menuState)
  const dispatch = useDispatch();


  return (
    <>
        <S.MenuContainer menuState={menuState}>
            <S.MenuListWrapper>
                {
                    data.map((item)=>(
                        <S.MenuItem key={item.id} onClick={()=>dispatch(setMenuState(false))}>
                            <S.MenuLink href={item.link}>
                              <FontAwesomeIcon icon={item.icon}/>
                                <span>{item.label}</span>
                            </S.MenuLink>
                        </S.MenuItem>
                    )) 
                }
            </S.MenuListWrapper>
        </S.MenuContainer>
    </>
  )
}

export default Menu