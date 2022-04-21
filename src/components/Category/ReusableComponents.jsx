import styled from "styled-components"

export const StyledInput = styled.div`
        background-color: #ffffff;
        padding: 5px 10px;
        /* width : 300px; */
        border : 1.2px solid #004b58;
        border-radius: 7px;
        display:flex;

        > label{
        position: absolute;
        background-color: white;
        transform: translateY(-20px) translateX(10px);
        padding: 0px 10px;
        font-size :0.8rem;
    }

        input{
            border: 1px dashed transparent;
            outline: none;
            outline-style: none;
            flex:1;
            font-size :0.9rem;
            background-color: transparent;

            
        }

        svg{
            color : #004b58;
        }

`

export const Container = styled.div`
        display : flex;
        flex-direction : column;
        align-items: center;
        padding:0px;    
`

export const CustomFileInput = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

    div{
        display: grid;
        border: 2px solid #0b8b8b;
        border-radius: 50%;
        padding: 20px;


        & :nth-child(2){
            position: absolute;
        }
    }
    


`

export const RegisterBtn = styled.button`

    border : 1px solid transparent;
    background-color: #0b8b8b;
    margin : 10px 50px;
    padding: 10px;
    color : white;
    border-radius : 50px;
    transition: all 0.5s linear;

    :hover{
    background-color: #054242;
    }

`

export const FormHeader = styled.div`

    display: flex;
    flex-direction: row;
    background-color: white;
    padding:20px;
    border:1px solid transparent;
    border-bottom-color: #a8a7a7;
    justify-content: space-between;

    h1{
        font-size : 16px;
    }

    svg{
        
    }
`
export const FormBody = styled.div`
        display : flex;
        flex-direction : column;
        align-items: center;
        

        form{
            background-color: white;
            display: grid;
            /* grid-template-columns: 1fr 1fr; */
            gap :20px;
            padding:25px;
            padding-top: 50px;
        }
        


        
`

export const Grid = styled.div`
    
    display : grid;
    grid-template-columns: 1fr 1fr;
`