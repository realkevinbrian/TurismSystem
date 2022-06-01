import {Select } from "@mui/material";
import styled from "styled-components";


/***
 * Style Rules for Agenda Component
 */

export const styledCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

/****
 * CreateCategory StyledCompoent
 *
 */

export const RegisterBody = styled.div`
    padding:15px 20px;

    form{
        display: grid;
        gap:15px;

        div{
            border-radius: 5px;
        }
    }
`


/**
 * Styled File Input
 * **/
export const FileInputWrapper = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  padding: .6rem;

  div{
      position: relative;
      display: grid;
      place-items: center;
      border: 2px solid ${({theme})=>theme.colors.primary};
      border-radius: 50%!important;
      padding:1.5rem;

      img{
          min-width: 50px;
          width: 60px;
          max-width: 90px;
      }

      input[type=file]{
          position: absolute;
          left: 0;
          opacity: 0;
          height: 100%;
          width: 100%;
      }
  }
`;


/****
 * Multiple select 
 */

export const MultipleSelect = styled.div`
    display: grid;
    gap: 6px;

`
export const CustomSelect = styled(Select)`
    min-height: 20px;
    height: 35px;
    border: 1px solid ${({theme})=>theme.colors.primary};
    outline-color: ${({theme})=>theme.colors.primary};

`