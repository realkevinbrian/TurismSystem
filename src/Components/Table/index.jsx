import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import "../../App.css"
import StyledSearch, { SearchbyNumber } from '../Search'
import * as S from "./styled"
import "./styles.css"

/***
 * 
 * REUSABLE TABLE COMPONENT
 */

function StyledTable({tableTitle,switchComponent,labels,bodyData}) {
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