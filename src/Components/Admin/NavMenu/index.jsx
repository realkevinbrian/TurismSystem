import React, { useState } from "react";
import {
  NavContainer,
  LogoContainer,
  NavSide,
  SideMenuContainer,
  SideMenuViewer,
  MenuContainer,
} from "./styled";
import {
  MenuOutlined,
  BarChartOutlined,
  AdminPanelSettingsOutlined,
  MoneyOutlined,
  DisplaySettingsOutlined,
  ComputerOutlined,
} from "@mui/icons-material";
import Logo from "../../../Assets/LOGO.png";
import { Link } from "react-router-dom";
import { setMenuState } from "../../../features/MenuSlice";
import { useDispatch, useSelector } from "react-redux";

const MenuData = [
  {
    id: 1,
    title: "Indicadores",
    icon: <BarChartOutlined />,
    sub: {
      id: 1,
      title: "Relatorios",
      Link: [
        {
          id: 1,
          title: "relatorios de Usuario",
          link: "/",
        },
        {
          id: 2,
          title: "relatorios de Guia Turisticos",
          link: "/relatorio de Usuario",
        },
        {
          id: 3,
          title: "relatorios de Estabelecimentos",
          link: "/relatorio de Usuario",
        },
        {
          id: 4,
          title: "relatorios de Pontos Turisticos",
          link: "/relatorio de Usuario",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Financeiro",
    icon: <MoneyOutlined />,
    sub: {
      id: 1,
      title: "Financeiro",
      Link: [
        {
          id: 1,
          title: "Financeiro de Usuario",
          link: "/finance",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Configurações",
    icon: <AdminPanelSettingsOutlined />,
    sub: {
      id: 1,
      title: "Configurações",
      Link: [
        {
          id: 1,
          title: "Termos de Uso",
          link: "/termosdeuso",
        },
        {
          id: 2,
          title: "Aprovações",
          link: "/Approved",
        },
        {
          id: 3,
          title: "Denuncias",
          link: "/relatorio de Usuario",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Cadastro",
    icon: <DisplaySettingsOutlined />,
    sub: {
      id: 1,
      title: "Cadastro",
      Link: [
        {
          id: 1,
          title: "Cadastro de Categorias",
          link: "/category",
        },
        {
          id: 2,
          title: "Cadastro de Planos",
          link: "/Cadastro de Planos",
        },
        {
          id: 3,
          title: "Agenda Cultural",
          link: "/agenda",
        },
      ],
    },
  },
];

function index() {
  
  //get navData
  const data = MenuData;

  //Declare dispatch and useSelector from Redux
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu.menuState);

  return (
    <>
      <NavContainer>
        <MenuOutlined onClick={() => dispatch(setMenuState())} />
        <LogoContainer>
          <img src={Logo} alt="official Logo" />
        </LogoContainer>
        <NavSide>
          <span>Ola, Administrador</span>
          <Link to="/Logout">Sair</Link>
        </NavSide>
      </NavContainer>
      <SideMenu data={data} menuState={menuState} />
    </>
  );
}

export default index;

/**
 * Sidebar component
 * In this component we are going to loop through received data a display as Side Menu Data
 *
 * We have a special funcionality which is dropDown Menu !
 * to add the Dropdown funcionality we are going to use the following logic
 *
 * ****************LOGIC****************
 * 1-We add Evenlistner to each list item
 * 2-then we declare clickedId state to hold
 * --our the clicked id in the list item where we attached an event listener
 * 3-we are going to pass the clickedId state value to viewMenu(DropDown) Child Component
 */

function SideMenu({ data, menuState }) {
  //-> Declare clickedId to hold our state
  const [ClickedId, setClickedId] = useState(null);

  //Declare dispatch and useSelector from Redux
  const dispatch = useDispatch();

  //declare a function to close menuContainer
  function handleClose(self) {
    //check if the trigged element contains a class called (menuContainer)
    try {
      const existClass = self.target.className.includes("menuContainer");
      if (existClass) {
        dispatch(setMenuState());
      }
    } catch (e) {
      return e;
    }
  }

  return (
    <>
      {menuState && (
        <MenuContainer onClick={handleClose} className="menuContainer">
          <SideMenuContainer>
            <ul>
              {data.map((item) => (
                <li key={item.id} onClick={() => setClickedId(item.id)}>
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </SideMenuContainer>
          <DropDownMenuView
            id={ClickedId}
            data={data}
            setClickedId={setClickedId}
            handleClose={dispatch}
          />
        </MenuContainer>
      )}
    </>
  );
}
/**
 * Drop down Menu View
 *
 * in this component we receive the (clicked id & data) values/data
 * So once we received (clicked id) value and data ,
 * now we can filter the data to retrieve just a specified data based on Clicked id
 */

function DropDownMenuView({ id, data, setClickedId, handleClose }) {
  /***
   * filter the data based on the ClickedId from parent component
   * and then display the selected data
   *  */
  const SelectedMenu = data
    .filter((item) => item.id === parseInt(id))
    .map((item) => item.sub);

  return (
    <>
      {SelectedMenu &&
        SelectedMenu.map((item) => {
          return (
            <SideMenuViewer key={item.id}>
              <h1>{item.title}</h1>
              <ul>
                {item.Link.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setClickedId(null);
                      handleClose(setMenuState());
                    }}
                  >
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </SideMenuViewer>
          );
        })}
    </>
  );
}
