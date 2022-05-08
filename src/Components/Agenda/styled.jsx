import styled from "styled-components";
import { InputGroup } from "../../Components/Login/styled";
import { button } from "../Global/index";


/***
 * CADASTRE ME BUTTON
 */

export const CadastroBtn = styled(button)`
    background-color: ${({theme})=>theme.colors.dark_cyan};
    color:${({theme})=>theme.colors.white};
    padding:.4rem 1rem;
    border-radius:50px;
    transition:all 0.2s linear;
    font-size:.9rem;
    font-weight: 400;
    word-break: keep-all;

    //on hover
    &:hover{
        background-color: #03657e;
    }

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
    cursor :pointer;
`;
export const Delete = styled.a`
    cursor :pointer;
`;


/****
 * CreateCategory StyledCompoent
 * 
 */
//1 -> Containers
export const styledCreateCategoryContainer = styled.div`
        height:100vh;
        display: ${({AgendaState})=> (AgendaState) ? "flex" : "none"};
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
    padding:3px 15px;
    border:1.5px solid ${({theme}) => theme.colors.dark_cyan};

    label{
        font-size:.8rem;
        font-weight: 400;
        margin:0px 4px;
    }

    input{
        font-size:.8rem;

    }




`

//SPECIAL IMAGE IMPUT
export const styledFileInputWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom: 50px;
`;
export const styledFileInputBox = styled.div`
            display:flex;
            flex-direction:column;
            align-items:center;
            border:2px solid ${({theme}) => theme.colors.dark_cyan};
            cursor:pointer;
            padding:10px;
            border-radius: 50%;

            input[type="file"]{
                opacity:0;
                width:90px;
                border-radius: 50%;
                padding:30px;
                z-index: 10;
                /* display:none; */
            }

            &.MuiSvgIcon-root, .MuiSvgIcon-fontSizeMedium, .css-i4bv87-MuiSvgIcon-root{
                    font-size:4rem;
                    transform:translateY(15px);
                    z-index: 5;    
                    position: absolute;
                    color : ${({theme}) => theme.colors.dark_cyan};

                }

            &.svg-inline--fa, .fa-plus {
                position: absolute;
                font-size:3rem;
                transform:translateY(35px) translateX(26px);
                z-index: 5; 
                color:#fa770b;
            }

`;
// export const styledFileInput = styled.div``;
