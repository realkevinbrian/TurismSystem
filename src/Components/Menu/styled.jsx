import styled from "styled-components";



/**
 * STYLED MENU COMPONENT
 */

export const MenuContainer = styled.div`
    display: ${({menuState})=> (menuState) ? "grid" : "none"};
    height: 100vh;
    width: 100%;
    align-items: center;
    position: fixed;
    z-index: 50;
    background-color: #0808088f;
    border:1px solid red;
`;
export const MenuListWrapper = styled.ul`
    display: flex;
    width: 150px;
    flex-direction: column;
    padding:10px;
    box-shadow: 1px 1px 10px 4px #00000014;
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
export const MenuLink = styled.span`
    font-size:.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

`;

/****
 * 
 */

export const MenuViewerWrapper = styled.div`
    display: flex;
    min-width: 200px;
    width: 400px;
    max-width: 500px;
    height: 90%;
    z-index: -40;
    flex-direction: column;
    transform: translateX(30px);
    box-shadow: 1px 1px 10px 4px #dbdbdb22;
    border-radius: 5px;
    gap: 20px;
    padding-left: 150px;
    position: absolute;
    padding-top: 40px;
    background-color: ${({theme})=>theme.colors.white};
    /* background-color: red; */

    h4{
        font-size: 1.2rem;
        font-weight: bold;
    }
    ul{
        list-style-type: initial;
        padding-left: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 30px;
        font-size: .9rem;
        li{
            cursor: pointer;
        }
    }
`