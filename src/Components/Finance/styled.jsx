import style from "styled-components";
import {styled} from "@mui/material/styles"
import { TableCell } from "@mui/material";

/***
**TOTAL COMPONENT IN TABLE
*/
export const ShowTotalWrapper = style.div`
        text-align: center;
        padding: 10px;
        box-shadow: 1px 1px 10px 2px #d8d6d695;
        border-radius: 5px;
        display: grid;
        grid-template-columns: 1fr;
        h4{
            font-size: 1.2rem;
            font-weight: bold;
            margin: 5px;
        }
        h5{
            word-break: keep-all;
            word-wrap: normal;
            font-weight: 400;
            font-size: 1rem;
        }
`

/***
 * STYLED MUI COMONENTES
 */

export const CustomTableCell = styled(TableCell)`

`
export const CustomTableCellHead = styled(TableCell)`

`