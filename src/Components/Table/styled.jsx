import styled from "styled-components";
import { TableCell, TableRow } from '@mui/material'



export const StyledTableContainer = styled.div`
    padding: 60px;

    //table paper
    & .MuiPaper-root, 
    .MuiPaper-elevation, 
    .MuiPaper-rounded, .MuiPaper-elevation1, 
    .css-1ps6pg7-MuiPaper-root{
        padding: 20px;
    }

    //table header
`

export const TableTitle = styled.h4`
    font-size:2rem;
    padding-top: 30px;
`


///customize table

export const CustomTableCell = styled(TableCell)`
    
    border:1px solid transparent!important;

    h1,h2,h3,h4,h5{
        padding:0;
        font-size: 1.5rem;
        font-weight: bold;
    }
`

///customize table

export const CustomTableHeader = styled(TableCell)`
    /* border:1px solid transparent!important; */
    /* border-bottom-color: black!important; */
`

export const HeadCustomTableRow = styled(TableRow)`
    padding: 0px;
    margin: 0px;
`