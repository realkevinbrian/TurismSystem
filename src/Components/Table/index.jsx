import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { H5 } from '../Global'
import "../../App.css"
import "./styles.css"
import StyledSearch, { SearchbyNumber} from '../Search'
import * as S from "./styled"

/***
 * 
 * REUSABLE TABLE COMPONENT
 */

function StyledTable({tableTitle,switchComponent}) {
  return (
    <S.StyledTableContainer>
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead className='removeBorder'>
                        <TableRow>
                            <TableCell>
                                <S.TableTitle>{tableTitle}</S.TableTitle>
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
                                {switchComponent}
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