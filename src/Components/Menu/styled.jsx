import styled from "styled-components";



/**
 * STYLED MENU COMPONENT
 */

export const MenuContainer = styled.div`
    /* border: 1px solid red; */
    height: 100vh;
    width: 150px;
    display: grid;
    align-items: center;
    position: fixed;
    z-index: 50;
`;
export const MenuListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    padding:10px;
    box-shadow: 1px 1px 10px 4px #dbdbdb;
    border-radius: 5px;
    gap: 20px;


    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        /* border: 1px solid black; */
        gap: 10px;

        svg{
            font-size: 3rem;
        }
    }

`;
export const MenuItem = styled.li`
`;
export const MenuLink = styled.a`
    font-size:.9rem;
`;

/****
 * 
 */