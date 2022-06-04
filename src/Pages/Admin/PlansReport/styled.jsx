import styled from "styled-components";


//Show Categories
export const DisplayBox = styled.div`
border: 1px solid ${({theme})=>theme.colors.primary};
color: ${({theme})=>theme.colors.primary};
padding: 10px;
margin-top: 10px;

  ul{
    display: grid;
    gap:10px;

    li{
      display: flex;
      gap: 10px;
      align-items: center;

      svg{
        color: inherit;
      }
      
    }
  }

`

/***
 * This styled component declares the styles for Side Dispaly color
 */

export const Ball = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${({ bColor }) => bColor};
  border-radius: 50%;
`;

export const styledCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  //change color input
  input[type="color"] {
    border: 1px solid transparent;
    outline-style: none;
    border-radius: 50px;
  }
`;

export const ColorPicker = styled.div`
  position: relative;

  //color picker input
  input[type="color"] {
    border: 2px solid blue;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
  }

  //image to represent the color picker
  img {
    position: initial;
    width: 200px;
    max-width: 250px;
    min-width: 100px;
  }
`;
export const SelectedColor = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  top: 0;
  right: 0;
  position: absolute;
  border-radius: 50%;
  border: 5px solid white;
  transform: translateX(-120px) translateY(30px);
`;
/**
 * Table Row Input to Edit table
 */

export const EditColorInput = styled.input``;

export const StyledEditInput = styled.input`
  width: 100%;
  border-bottom-color: #e9e9e9;
`;
