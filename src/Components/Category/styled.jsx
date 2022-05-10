import styled from "styled-components"
import {button} from "../Global/index"
import {InputGroup} from "../../Components/Login/styled";
import Select from '@mui/material/Select';

/***
 * CADASTRE ME BUTTON
 */

export const CadastroBtn = styled(button)`
    background-color: ${({theme})=>theme.colors.dark_cyan};
    color:${({theme})=>theme.colors.white};
    padding:.4rem 1.2rem;
    border-radius:50px;
    transition:all 0.2s linear;
    font-size:.9rem;
    font-weight: 400;

    //on hover
    &:hover{
        background-color: #03657e;
    }

`


/***
 * SIDE COLORS DISPLAY ON TABLE CATEGORIA
 */

export const Ball = styled.div`

        width : 15px;
        height :15px;
        background-color: ${({bColor}) => bColor};
        border-radius:50%;
`

export const styledCell = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`



/***
 * EDIT AND DELETE BTNS
 */


export const Edit = styled.a`
        cursor: pointer;
`;
export const Delete = styled.a`
        cursor: pointer;
`;


/****
 * CreateCategory StyledCompoent
 * 
 */

/****
 * CreateCategory StyledCompoent
 * 
 */
//1 -> Containers
export const styledCreateCategoryContainer = styled.div`
        height:100vh;
        display: ${({CategoryState})=> (CategoryState) ? "flex" : "none"};
        align-items: end;
        justify-content:end;
        position:fixed;
        top:0px;
        right:0px;
        z-index:100px;
        background-color: #0000006e;
        width: 100%;

        img,svg{
            cursor:pointer;
        }

        


        //ON MOBILE DEVICES
        //=> MOBILE VERSION
        @media (min-width : 200px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
        margin:0rem 0rem;
        align-items: center;
        justify-content:center;
        position:fixed;
        
        }
`;

export const styledCreateCategory = styled.section`
        width:375px;
        display:grid;
        background-color:white;
        box-shadow:1px 1px 5px 5px #00000049;
        transform: translateY(-10px);

        //=> MOBILE VERSION
        @media (min-width : 200px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
        transform: translateY("");
        width:375px;
        margin:1rem;

        }
`;
export const createCategoryHeader = styled.div`
        display:flex;
        justify-content: space-between;
        padding:20px 10px;
        border:1px solid transparent;
        border-bottom-color: #808080;
        font-weight:bold;

        //h5 inside header
        h5{
            font-size: .9rem;
        }

        //svg back button
        svg{
            background-color:${({theme}) => theme.colors.dark_cyan};
            color:${({theme}) => theme.colors.white};
            border-radius:50%;
        }
`;
export const createCategoryFormWrapper = styled.div`
        padding:30px 20px;
        //ON MOBILE DEVICES
        //=> MOBILE VERSION
        @media (min-width : 200px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
        padding:5rem 20px;
        
        }

        
`;

//2 -> Childrens
export const styledInputGroup = styled(InputGroup)`
    /* padding:3px 15px; */
    border:1.5px solid ${({theme}) => theme.colors.dark_cyan};

    label{
        font-size:.8rem;
        font-weight: 400;
        margin:0px 4px;
    }

    input[type="text"]{
        font-size:.8rem;
    }
`


/***
 * COLOR PICKER 
 */

export const ColorPickerContainer = styled.div`
    display:flex;
    flex-direction:column;
    font-size:.8rem!important;
    color:#c4c4c4;
    margin-bottom: 10rem;
    //ON MOBILE DEVICES
        //=> MOBILE VERSION
        @media (min-width : 200px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
        /* padding:5rem 20px; */
        margin-bottom: 2rem;

        
        
        }

    //select color input
    input[type="color"]{
        position:absolute;
        width:135px;
        height:45px;
        transform: translateY(50px) translateX(9px);
        border-radius: 10px;
        opacity:0;
        
    }
`
export const ColorPickerIcon = styled.img`
        width:150px;
`
/***
 * CUSTOM SELECT 
 */
export const CustomSelectContainer = styled.div`
    display: flex;
    gap: 5px;
    height:30px;
`;
export const CustomSelect = styled(Select)`
    height:25px;
    font-size:.8rem!important;
    color: #999999 !important;
`

/**
 * Styled Color
 */
export const SelectedColor = styled.div`
        width: 30px;
        height:30px;
        background-color: ${({color}) => color};
        align-self:center;
        position: relative;
        transform: translateY(-55px) translateX(-30px);
        border-radius: 50%;
        border:5px solid white;

`

/**
 * Table Row Input to Edit table
 */

export const StyledEditInput = styled.input`
        width:100%;
        border-bottom-color: #e9e9e9;
`