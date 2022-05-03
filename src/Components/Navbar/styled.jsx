import styled from "styled-components";


/**************************************\
 * *************NAVBAR STYLES***********\
 ****************************************\*/  


export const NavbarContainer = styled.nav`
        display: flex;
        align-items: center;
        background-color:${({theme}) => theme.colors.dark_cyan};
        color:${({theme}) => theme.colors.white};
        justify-content: space-between;
        padding: 1.5rem 3rem;
        position: fixed;
        width: 100%;
        top: 0;
        //=> MOBILE VERSION
        @media (min-width : 200px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
        padding: 1.5rem 1rem;
        
        }
`;


export const MenuIconWrapper = styled.div`
        display: grid;
        align-items: center;
        justify-items: end;
        transition: all 0.1s linear;
        cursor: pointer;
        //hover
        &:hover{
        justify-items: start;
        
        }

`;

export const Bars = styled.div`
        background-color: ${({theme}) => theme.colors.white};
        width: 35px;
        height: 4px;
        margin:3px;
        border-radius: 10px;

        //
        &:nth-child(2){
        width: 20px;
        }
`;


export const LogoWrapper = styled.div`
    display: flex;
    justify-content: row;
    align-items: center;
    justify-content: center;
    align-content: center;
    
`;

export const Logo = styled.img``;
export const NavMenuLinksWrapper = styled.div`
    display: flex;
    font-size:.9rem;
    gap: 30px;
`;