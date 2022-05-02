import { faCashRegister, faPieChart, faRegistered, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import * as S from './styled';

function Menu() {

     /***
   * DADOS PARA LINKS (CATEGORIAS)
   */
  const [data] = useState([
    {id:1, label : "Indicadores", link : "/admin", icon : faPieChart},
    {id:2, label : "Financeiro", link : "/admin/financeiro", icon : faCashRegister},
    {id:3, label : "Configurações", link : "/admin/categorias", icon : faStoreAlt},
    {id:4, label : "Agenda Cultural", link : "/admin/agenda", icon : faRegistered}
  ]);


  return (
    <>
        <S.MenuContainer>
            <S.MenuListWrapper>
                {
                    data.map((item)=>(
                        <S.MenuItem key={item.id}>
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