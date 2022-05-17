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
        width: 30px;
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

    //=> MOBILE VERSION
    @media (min-width : 200px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
    padding:0 10px;
    
        img{
        width: 100%;
        max-width: 150px;
        height: auto;
        }
    }

    img{
        width: 100%;
        max-width: 200px;
        height: auto;
    }
    
`;

export const Logo = styled.img``;
export const NavMenuLinksWrapper = styled.div`
    display: flex;
    font-size:.9rem;
    
    a{
        text-decoration: inherit;
        color:inherit;
        margin:0 20px;
        padding:0 10px;
        border: 1px solid transparent;
        background-color: transparent;
        
        :hover{
            color : "#042d35";
            background-color: "#ffffff";
        }

    }
    //=> MOBILE VERSION
    @media (min-width : 200px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
        font-size:.8rem;
        a{
        margin:0 5px;
        padding:0 0px;
        }
        span{
            padding:0 10px;
        }
    }
`;