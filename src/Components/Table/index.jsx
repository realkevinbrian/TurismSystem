import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Box } from '@mui/material'
import React from 'react'
import StyledSearch from '../Search'
import { SearchbyNumber } from "../Search/SearchbyNumber"
import * as S from "./styled"


/********************************************\
*********REUSABLE TABLE COMPONENT*************\
***********************************************\
\**********************************************/

function StyledTable({tableTitle,switchComponent,labels,bodyData}) {
  return (
    <S.StyledTableContainer>
         <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
                <TableCell sx={{borderBottomColor:"transparent", padding:"10px", paddingLeft:"20px", fontSize:"19px"}}>{tableTitle}</TableCell>
            </TableRow>
            <TableRow>

              <TableCell align="justify" colSpan={3}>

                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <StyledSearch placeholder={"Pesquise por nome"}/>
                    </Grid>

                    <Grid item xs={4}>
                        <StyledSearch placeholder={"Pesquise"}/>
                    </Grid>
                    <Grid item xs={4}>
                        <SearchbyNumber/>
                    </Grid>
                </Grid>
              </TableCell>

               <TableCell align="right" colSpan={4}>
                 <Box>
                    {switchComponent}
                 </Box>
              </TableCell>

            </TableRow>
            <TableRow>
                {labels}
            </TableRow>
          </TableHead>
          <TableBody>
              {bodyData}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </S.StyledTableContainer>
  )
}

export default StyledTable