import { faChartPie, faCoins, faGear, faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {setMenuState} from "../../features/MenuSlice";
import * as S from './styled';


function Menu() {

     /***
   * DADOS PARA LINKS (CATEGORIAS)
   */
  const [data] = useState([
    {id:1, label : "Indicadores", 
    otherLinks : {
      title : "Relatório",
      Mainlinks : [
        { id : 1, title : "Relatório de Usuarios", link : "/admin"},
        { id : 2, title : "Relatório de Guias Turisticos", link : "/admin"},
        { id : 3, title : "Relatório de Estabelecimentos", link : "/admin"},
        { id : 4, title : "Relatório de Pontos Turisticos", link : "/admin"}
      ]
    }, icon : faChartPie},

    {id:2, label : "Financeiro", 
    otherLinks : {
      title : "Financeiro",
      Mainlinks : [
        { id : 1, title : "Relatorio Financeiro",link : "/admin/financeiro"},
      ]
    }, icon : faCoins},

    {id:3, label : "Configurações", 
    otherLinks : {
      title : "Configurações Gerais",
      Mainlinks : [
        { id : 1, title : "Termos de Uso",link : "/admin/termsAndContions"},
        { id : 2, title : "Aprovações", link : "/admin/approvados"},
        { id : 3, title : "Denuncias", link : "/admin/denuncias"},
      ]
    }, icon : faGear},


    {id:4, label : "Cadastros", 
    otherLinks : {
      title : "Cadastro",
      Mainlinks : [
        { id : 1, title : "Cadastro de Categorias",link : "/admin/categoria"},
        { id : 2, title : "Cadastro de Plano", link : "/admin/agenda"},
        { id : 3, title : "Agenda Cultural", link : "/admin/agenda"},
      ]
    }, icon : faComputer}

    
  ]);
  const [ClickedId, setClickedId] = useState(null)
  //get menuState and add dispatch methods
  const menuState = useSelector((state)=>state.menu.menuState);
  const dispatch = useDispatch();

  //Funcao para fechar o menu ao clickar ao lado
  function handleCloseMenu (self) {
    try{
      if(self.target.className.includes("MenuContainer")){
        dispatch(setMenuState());
      }
    }catch(e){}
  }

  return (
    <>
        <S.MenuContainer menuState={menuState} onClick={handleCloseMenu} className="MenuContainer">
            <S.MenuListWrapper>
                {
                    data.map((item)=>(
                        <S.MenuItem key={item.id} onClick={(self)=>{setClickedId(item.id)}}>
                            <S.MenuLink>
                                <FontAwesomeIcon icon={item.icon}/>
                                <span>{item.label}</span>
                            </S.MenuLink>
                        </S.MenuItem>
                    )) 
                }
            </S.MenuListWrapper>
            <MenuViewer data={data} ClickedId={ClickedId} dispatch={dispatch}/>
        </S.MenuContainer>
    </>
  )
}

export default Menu


/***
 * Menu Viewer
 */
export function MenuViewer ({data,ClickedId,dispatch}){
  /**
   * Filter the Clicked Link to get specified Link
   */
  const Selected = data.filter(item => item.id === ClickedId).map((item) => item.otherLinks);

  return(
    <>{
      ClickedId && 
      <S.MenuViewerWrapper>

        { Selected.map((item) => (
          <Box key={item.title}>
            <h4>{item.title}</h4>
            <ul>
              {
                item.Mainlinks.map((link)=>(
                  <li key={link.id} 
                  onClick = {()=>dispatch(setMenuState(false))}
                  ><a href={link.link}>{link.title}</a></li>
                ))
              } 
            </ul>
        </Box>
        ))
        }
      </S.MenuViewerWrapper>
      }
    </>
  )
}