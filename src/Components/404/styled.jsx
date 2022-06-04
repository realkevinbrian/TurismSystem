import styled from "styled-components";

export const ErrorPageWrapper = styled.div`

display : grid;
place-items : center;
place-content : center;
height : 100vh;
background-color : "#ffe342#";

div{
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 10px;

    a{
        color : black;
    }
    
    img{
        width : 100%;
        max-width : 350px;
    }

}

`