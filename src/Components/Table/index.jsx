import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import StyledSearch from '../Search'
import { SearchbyNumber } from "../Search/SearchbyNumber"
import * as S from "./styled"
import "./styles.css"

/********************************************\
*********REUSABLE TABLE COMPONENT*************\
***********************************************\
\**********************************************/

function StyledTable({tableTitle,switchComponent,labels,bodyData}) {
  return (
    <S.StyledTableContainer>
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>

                        <TableRow>
                            <S.CustomTableCell>
                                <S.TableTitle>{tableTitle}</S.TableTitle>
                            </S.CustomTableCell>
                        </TableRow>

                        <TableRow>

                            <TableCell align='left'>
                                <StyledSearch placeholder="pesquise por nome"/>
                            </TableCell>

                            <TableCell>
                                <StyledSearch placeholder="pesquise"/>
                            </TableCell>

                            <TableCell>
                                <SearchbyNumber/>
                            </TableCell>

                            <TableCell>
                            </TableCell>

                            <TableCell colSpan={1}>
                                {switchComponent}
                            </TableCell>
                            
                        </TableRow>
                    <TableRow>{labels}</TableRow>
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