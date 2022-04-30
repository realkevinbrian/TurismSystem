import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { H5 } from '../Global'
import "../../App.css"
import "./styles.css"
import StyledSearch, { SearchbyNumber } from '../Search'


function StyledTable() {
  return (
    <>
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead className='removeBorder'>
                        <TableRow>
                            <TableCell>
                                <H5>Financeiro</H5>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <StyledSearch/>
                            </TableCell>

                            <TableCell>
                                <SearchbyNumber/>
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
    </>
  )
}

export default StyledTable