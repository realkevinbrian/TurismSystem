import styled from "styled-components"
import {button} from "../Global/index"

/***
 * CADASTRE ME BUTTON
 */

export const CadastroBtn = styled(button)`
    background-color: ${({theme})=>theme.colors.dark_cyan};
    color:${({theme})=>theme.colors.white};
    padding:.8rem 2rem;
    border-radius:50px;
    transition:all 0.2s linear;
    font-size:1.2rem;
    font-weight: 400;

    //on hover
    &:hover{
        background-color: #03657e;
    }

` 


/***
 * Customize ball
 */

export const Ball = styled.div`

        width : 15px;
        height :15px;
        /* background-color: #7a7979; */
        border-radius:50%;
`

export const styledCell = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`
