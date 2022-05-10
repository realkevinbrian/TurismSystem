import styled from "styled-components";


/***
 * Este component serve para A pagina de Indicadores
 */


//Container
export const Indicadores = styled.div`
        /* border: 2px dashed red; */
        height: auto;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        align-content: center;
        margin: 1rem 5rem;

        //=> MOBILE VERSION
        @media (min-width : 200px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
            margin: 1rem;
        }


`;
export const IndicadoresWrapper = styled.div`
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        align-items: center;
        gap: 2rem;
        cursor: pointer;

        /* //=> MOBILE VERSION
        @media (min-width : 200px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
            grid-template-columns: repeat(1,1fr);
        } */
`;

export const Header = styled.div`  
        
        h5{
            font-size: 1.6rem;
            font-weight: 500;
            align-self: center;
            padding: 15px 0px;
        }
`


// Child components
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme})=>theme.colors.white};
    padding:1.1rem .8rem;
    box-shadow: 1px 1px 6px 2px #e2e2e2;
    border-radius: 10px;
    gap: 15px;
    border: 2px solid transparent;
    transition: all 0.2s linear;


    //on hover card

    &:hover{
        border: 2px solid ${({theme})=>theme.colors.dark_cyan};
    }
`;
export const CardHeader = styled.div`
            font-size: 1.3rem;
            font-weight: 400;
`
export const CardBody = styled.div`
        svg{
            font-size: 4rem;
            color: ${({theme})=>theme.colors.dark_cyan};
        }
`;
export const CardFooter = styled.div`
        h5{
            font-size:1.4rem;
        }
`;