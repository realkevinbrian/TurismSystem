import styled from "styled-components";

export const NavContainer = styled.div`
  //default
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding: 20px 30px;
  color: white;
  font-size: 1rem;
  position: sticky;
`;
export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    max-height: 250px;
    max-width: 450px;
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
  width: 100%;
  display: flex;
  position: absolute;
  margin-top: 20px;
`;
export const SideMenuContainer = styled.div`
  width: 150px;
  max-width: 200px;
  min-width: 100px;
  display: grid;

  ul {
    display: grid;
    gap: 10px;
    background-color: white;
    box-shadow: 1px 1px 10px 2px #97979792;
    border-radius: 0 20px 20px 0px;

    /* position: absolute; */
    /* top: 0; */
    z-index: 100;
    li {
      display: grid;
      place-items: center;
      padding: 1rem 1rem;
      cursor: pointer;
      transition: all 0.3s linear;

      //on hover
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }

      svg {
        font-size: 4rem;
      }
    }
  }
`;

export const SideMenuViewer = styled.div`
  background-color: #ffffff;
  width: 300px;
  max-width: 350px;
  min-width: 250px;
  border-radius: 10px;
  padding-left: 5rem;
  z-index: 50;
  box-shadow: 1px 1px 10px 2px #97979792;
  padding-top: 1rem;
  position: relative;
  transform: translateX(-60px);

  ul {
    display: grid;
    gap: 10px;

    li {
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
