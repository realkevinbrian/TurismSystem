import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
//***GLOBAL STYLED */
const GlobalStyles = createGlobalStyle`

    section{
        /* padding-top: 100px; */
    }

     
    //body
    body{
        margin:0px;
        padding:0px;
        box-sizing: border-box;
        *{
            /* border:1px dashed red; */
        }

        h1,h2,h3,h4,h5{
        margin:0px;
        padding:0px;
        box-sizing: border-box;
        }

        img{
            width: 100%;
            max-width:100%;
        }

        input{
            outline:none;
            border:1px solid transparent; 
            background-color:transparent;
        }
    }

    th{
        
    }


`


//HEADERS
export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
export const H6 = styled.h6``;

//LInk
export const Anchor = styled.a``;


//==========BUTTON=====\\
export const button = styled.button``;
export const SubmitBtn = styled(button)``;



//===============form inputs=====\\\
export const StyledInput = styled.input``;
export const StyledLabel = styled.label``;

export const Icon = styled.img``;
export default GlobalStyles;


/***
 * PAGE CONTAINER
 */


 export const PAGECONTAINER = styled.section`
 padding-top: 4rem;
`

/**
 * Container theme
 */

export const Container = styled.section`
        padding-top:5rem;
`

/**
 * Error Page
 */

export const NotFound = styled.div`
    /* background:red; */
    height:100vh;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;

    h5{
        font-size:4rem;
        background-color:#bb0a30;
        color:white;
        padding: 10px;
    }

    a{
        text-decoration: underline;
        font-size:2rem;

        & :hover{
            color:#065fa8;
        }
        
    }
    
`