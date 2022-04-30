import styled from "styled-components";


/***
 * Search Bar
 */

export const SearchWrapper = styled.div`
    border: 1px solid black;
    width:250px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-radius:50px;
    padding: 0 15px;

    svg{
        font-size: 1rem;
    }

`;
export const SearchInput = styled.input`
    padding: 3px 0px;
    flex:1;
    font-weight: 400;
    color : ${({theme}) => theme.colors.dark_cyan}
`;



/***
**TOTAL COMPONENT IN TABLE
*/

export const ShowTotalWrapper = styled.div`
    box-shadow: 1px 1px 1px 1px #a09f9f;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding:10px;
    border-radius:5px;
    gap:5px;

    //h4,h5
    h4{
        font-size: 1.5rem;
        font-weight: bold;
    }

    h5{
        font-size: 1rem;
    }
`
