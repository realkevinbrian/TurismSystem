import styled from "styled-components";



/**
 * STYLED MENU COMPONENT
 */

export const MenuContainer = styled.div`
    display: ${({menuState})=> (menuState) ? "grid" : "none"};
    height: 100vh;
    width: 150px;
    align-items: center;
    position: fixed;
    z-index: 50;
`;
export const MenuListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    padding:10px;
    box-shadow: 1px 1px 10px 4px #dbdbdb;
    border-radius: 5px;
    gap: 20px;
    background-color: ${({theme})=>theme.colors.white};



    li{
        padding: 10px;

        svg{
            font-size: 3rem;
        }
    }

`;
export const MenuItem = styled.li`
`;
export const MenuLink = styled.a`
    font-size:.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

`;

/****
 * 
 */