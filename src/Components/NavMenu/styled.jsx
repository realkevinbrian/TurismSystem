import styled from "styled-components";

export const NavContainer = styled.div`
  //default
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding: 20px 20px;
  color: white;
  font-size: 1rem;
  position: sticky;


  //image
  img {
    width: 100%;
    max-width: 250px;
  }
  //mobile
  @media screen and (max-width: 768px) {
    padding: 15px 10px;

    img {
      max-width: 150px;
    }
  }
`;
export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 100%;
    height: auto;
    max-height: 150px;
    max-width: 250px;
  }
`;

export const NavSide = styled.div`
  //default
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  //SPAN INSIDE
  span {
    word-break: keep-all;
    word-wrap: normal;
  }

  //link

  a {
    color: inherit;
    text-decoration: none;
  }
`;

/***
 * Side menu Component Style Rules
 */

export const MenuContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
`;
export const SideMenuContainer = styled.div`
  width: 150px;
  max-width: 200px;
  min-width: 100px;
  display: grid;
  align-items: center;

  ul {
    margin-top: 5rem;
    display: grid;
    gap: 20px;
    background-color: white;
    box-shadow:1px 1px 10px 2px #97979792;
    border-radius: 0 20px 20px 0px;
    position: fixed;
    top: 0;
    z-index: 30;
    li {
      display: grid;
      place-items: center;
      padding: 1rem 1rem;
      cursor:pointer;
      transition:all 0.3s linear;
      

      //on hover
      &:hover{
        background-color: ${({theme})=>theme.colors.primary};
        color: ${({theme})=>theme.colors.white};
        
      }

      svg {
        font-size: 4rem;
      }
    }
  }
`;

export const SideMenuViewer = styled.div`
  background-color: #ffffff;
  width : 300px;
  max-width: 350px;
  min-width: 250px;
  transform: translateX(70px) translateY(9px);
  top:0;
  border-radius: 10px;
  height: 80%;
  padding-left: 5rem;
  z-index: 29;
  box-shadow:1px 1px 10px 2px #97979792;
  padding-top: 1rem;

  ul{
    display: grid;
    gap:10px;

    li{

      &:hover{
        color:${({theme})=>theme.colors.primary};
      }
    }
  }





`;
