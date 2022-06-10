import styled from "styled-components";
import { Card as CardMUI} from "@mui/material";

export const Home = styled.div`
  h3 {
    font-size: 1.3rem;
  }

  padding-top: 2rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

export const Card = styled(CardMUI)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2;
  border-radius: 8px;
  transition: all 0.4s linear;
  cursor: pointer;

  //on hover
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    
    h4{
    color: white;
    }

    span{
    color: white;

    }

  }
  //h1
  h4 {
    font-size: 1.4rem;
    color: black;
    font-weight: lighter;
  }

  //span
  span {
    color: ${({ theme }) => theme.colors.primary};
    svg {
      font-size: 6rem;
      color: inherit;
    }
  }
`;
