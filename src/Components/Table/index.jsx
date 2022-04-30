import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { H5 } from '../Global'
import "../../App.css"
import "./styles.css"
import StyledSearch, { SearchbyNumber, ShowTotal } from '../Search'
import * as S from "./styled"

function StyledTable() {
  return (
    <S.StyledTableContainer>
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead className='removeBorder'>
                        <TableRow>
                            <TableCell>
                                <S.TableTitle>Financeiro</S.TableTitle>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <StyledSearch/>
                            </TableCell>

                            <TableCell>
                                <StyledSearch/>
                            </TableCell>

                            <TableCell>
                                <SearchbyNumber/>
                            </TableCell>

                            <TableCell align='left'>
                                <ShowTotal/>
                            </TableCell>
                        </TableRow>

                        <TableRow>

                            <TableCell>
                                <H5>Financeiro</H5>
                            </TableCell>

                            <TableCell>
                                <H5>Financeiro</H5>
                            </TableCell>

                            <TableCell>
                                <H5>Financeiro</H5>
                            </TableCell>

                            <TableCell>
                                <H5>Financeiro</H5>
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>
                        <TableRow>

                            <TableCell>
                                Kevin
                            </TableCell>
                            <TableCell>
                                Kevin
                            </TableCell>
                            <TableCell>
                                Kevin
                            </TableCell>
                            <TableCell>
                                Kevin
                            </TableCell>

                        </TableRow>

                        <TableRow>

                            <TableCell>
                                Kevin
                            </TableCell>
                            <TableCell>
                                Kevin
                            </TableCell>
                            <TableCell>
                                Kevin
                            </TableCell>
                            <TableCell>
                                Kevin
                            </TableCell>
                            
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </S.StyledTableContainer>
  )
}

export default StyledTable