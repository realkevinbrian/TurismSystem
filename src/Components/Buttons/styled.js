import styled from "styled-components";

/***
 * Register Button
 */

 export const PrimaryButton = styled.button`
 background-color: ${({ theme }) => theme.colors.primary};
 color: ${({ theme }) => theme.colors.white};
 padding: 0.4rem 1.2rem;
 border-radius: 50px;
 transition: all 0.2s linear;
 font-size: 0.9rem;
 font-weight: 400;

 //on hover
 &:hover {
   background-color: ${({ theme }) => theme.colors.secondary};
   color: ${({ theme }) => theme.colors.primary};
 }
`;
