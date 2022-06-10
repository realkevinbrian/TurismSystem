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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
  margin: 3rem 0;
`;

export const Card = styled(CardMUI)`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s linear;
  cursor: pointer;
  width: 100%;
  max-width: clamp(150px, 180px, 100vw);
  height: 100%;
  max-height: clamp(190px, 190px, 100vh);
  border-radius: 12px;
  justify-content: space-around;
  
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
  //header
  h4 {
    font-size: 1rem;
    color: black;
    font-weight: lighter;
  }

  //span
  span {
    color: ${({ theme }) => theme.colors.primary};
    svg {
      font-size: 4rem;
      color: inherit;
    }
  }
`;
