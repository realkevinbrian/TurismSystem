import styled from "styled-components"
/**
 * ************************************\
 * ========STYLED COMPONENTS============\
 * ********LOGIN PAGE *****==============\
 * ********COMPONENTE PARA LOGIN PAGE=====\
 */

//===============CONTAINER===========\\
export const LoginContainer = styled.section`
        display: grid;
        grid-template-columns: 1fr;
        height: 100vh;
        align-items:center;
        justify-items: center;
        background-color:${({theme}) => theme.colors.dark_cyan};
        
`

export const backButtonWrapper = styled.div``


//===============Login Wrapper===========\\
export const LoginWrapper = styled.div`
        display: grid;
        grid-template-columns: repeat(2,1fr);
        background-color:${({theme}) => theme.colors.white};
        border-radius:30px;
         

        //=> MOBILE VERSION
        @media (min-width : 200px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
                grid-template-columns: repeat(1,1fr);
                border-radius:0px;
                background-color: transparent;


                
        }



    `;

//===============Side Wrapper=============\\
export const LoginBanner = styled.div`
        object-fit: contain;

        @media (min-width : 100px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
                position: absolute;
                transform: translateY(-150px);
                z-index:1;
        }
        

`;
export const BannerImage = styled.img`
        width:100%;
        height:400px;
        object-fit: contain;
        border-radius:30px 0px 0px 30px;
        //=> MOBILE VERSION
        @media (min-width : 100px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
                width:100%;
                height:300px;
                object-fit: contain;
                border-radius:0;
        }
        
        

`;

//===============Right Side Wrapper=============\\
export const LoginContent = styled.div`
        /* border:5px dashed green; */
        display: grid;
        grid-template-columns: 1fr;
        flex-direction: column;
        justify-content: space-between;
        padding:2rem;

        @media (min-width : 100px) and (max-width : ${({theme}) => theme.Layout.Mobile}){
                z-index:2;
                background-color:${({theme}) => theme.colors.white};
        }

`;

            //LOGIN HEADER\\
export const LoginHeader = styled.div`
        /* border:1px solid red; */
        display:flex;
        flex-direction:column;
        font-size: .8rem;
        align-items: end;

        //anchor tag
        a{
            color:${({theme}) => theme.colors.dark_cyan};
            text-decoration: underline;
        }
`

            //LOGIN BODY\\
export const LoginBody = styled.div``;
            //FORM\\
export const FormWrapper = styled.div`
        /* * {border:1px dashed red;} */
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius:20px;

`;
export const Form = styled.form`
        display:flex;
        flex-direction:column;
        gap:15px;
`;
export const InputGroup = styled.div`
        display: flex;
        flex-direction: column;
        background-color:transparent;
        padding: 6px;
        border: 1px solid black;
        font-size:.8rem;
        border-radius:5px;

        //labels
        label{
            font-size: .9rem;
            position: absolute;
            transform: translateY(-16px) translateX(15px);
            background-color:${({theme}) => theme.colors.white};
            padding:0px 5px;
        }

        //input
    
`;
export const FormOptionWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding-top: 30px;

        a{
            text-decoration: underline;
            font-size:.8rem;
        }

        button{
            background-color:${({theme}) => theme.colors.dark_cyan};
            padding:5px 40px;
            color:#ffff;
            border-radius:20px;
            font-size:.9rem;
            transition: all 0.2s linear;

            //onhover
            &:hover{
            background-color:#00a1e6;
            }
        }
`;

 