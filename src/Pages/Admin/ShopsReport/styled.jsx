import style from "styled-components";
import { styled } from "@mui/material/styles";
import { TableCell } from "@mui/material";

export const ShowTotalWrapper = style.div`
        text-align: center;
        padding:.5rem 1rem;
        box-shadow: 1px 1px 10px 2px #d8d6d695;
        border-radius: 5px;
        display: grid;
        grid-template-columns: 1fr;
        gap:5px;


        h4{
            font-size: 1.3rem;
            font-weight: bold;
            margin: 0;
            padding:0;
        }
        h5{
            word-break: keep-all;
            word-wrap: normal;
            font-weight: 400;
            font-size: 1.2rem;
            margin: 0;
            padding:0;
        }
`;

export const CustomTableCellHead = styled(TableCell)``;

/***
 * Display Cateogry
 *
 */
export const StyledDisplayCat = style.div`
        display : flex;
        font-variant: all-small-caps;
        
        div{
            display : flex;
            border : 1px solid red;
            padding : 5px 10px 5px 5px;
            gap : 10px;
            border-radius : 50px;
            align-items : center;

            span{
                width : 25px;
                height : 25px;
                border-radius : 50%;
            }
        }
`;
