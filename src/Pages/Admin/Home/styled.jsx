import styled from "styled-components";

export const Home = styled.div`
  h3{
    font-size: 1.3rem;
  }

  margin-top: 1rem;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(20px, 1fr));
  gap: 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 5px 3px #e6e4e4;
  align-items: center;
  gap: 2;
  border-radius: 3px;
  transition: all 0.4s linear;
  cursor:pointer;

  //on hover
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    * {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  //h1
  h4 {
    font-size: 1.4rem;
  }

  //span
  span {
    color: ${({ theme }) => theme.colors.primary};
    svg {
      font-size: 6rem;
      color: inherit;
    }
  }

  //h5
  h5 {
    font-size: 1.2rem;
  }
`;
