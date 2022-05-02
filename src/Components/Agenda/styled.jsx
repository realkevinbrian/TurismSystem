import styled from "styled-components"
import {button} from "../Global/index"
import {InputGroup} from "../../Components/Login/styled";


/***
 * CADASTRE ME BUTTON
 */

export const CadastroBtn = styled(button)`
    background-color: ${({theme})=>theme.colors.dark_cyan};
    color:${({theme})=>theme.colors.white};
    padding:.4rem 2rem;
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



/***
 * EDIT AND DELETE BTNS
 */


export const Edit = styled.a``;
export const Delete = styled.a``;




/****
 * CreateCategory StyledCompoent
 * 
 */


//1 -> Containers
export const styledCreateCategoryContainer = styled.div`
        height:100vh;
        display: ${({AgendaState})=> (AgendaState) ? "flex" : "none"};
        align-items: center;
        justify-items: center;
        justify-content:center;
        align-content:center;
        position:fixed;
        top:0px;
        right:0px;
        z-index:100px;
        /* transform: translateY(40px); */

        img,svg{
            cursor:pointer;
        }


        //ON MOBILE DEVICES
        //=> MOBILE VERSION
        @media (min-width : 200px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
        margin:0rem 1rem;
        
        }
`;

export const styledCreateCategory = styled.section`
        flex:1;
        background-color:white;
        box-shadow:1px 1px 20px 5px #e2e2e2;
        padding:10px;
        display:grid;
`;
export const createCategoryHeader = styled.div`
        display:flex;
        justify-content: space-between;
        padding:30px 20px;
        border:1px solid transparent;
        border-bottom-color: #808080;
        font-weight:bold;

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
            padding:30px;
            border-radius: 50%;

            svg{

                :nth-child(1){
                    color:${({theme}) => theme.colors.dark_cyan};
                    font-size:3rem;
                }

                :nth-child(2){
                    position: absolute;
                    color:#f5721a;
                    transform:translateX(20px) translateY(20px);
                    font-size:2rem;

                    
                }
            }
`;
// export const styledFileInput = styled.div``;
