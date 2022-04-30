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




