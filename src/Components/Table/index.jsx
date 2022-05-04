import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import "../../App.css"
import StyledSearch from '../Search'
import { SearchbyNumber } from "../Search/SearchbyNumber"
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
                    <TableHead>
                        <TableRow>
                            <S.CustomTableCell>
                                <S.TableTitle>{tableTitle}</S.TableTitle>
                            </S.CustomTableCell>
                        </TableRow>

                        <S.HeadCustomTableRow>
                            <S.CustomTableHeader>
                                <StyledSearch/>
                            </S.CustomTableHeader>
                            
                            {/* 
                            <S.CustomTableHeader>
                                <StyledSearch/>
                            </S.CustomTableHeader> */}

                            <S.CustomTableHeader align="right">
                                <SearchbyNumber/>
                            </S.CustomTableHeader>

                            <S.CustomTableHeader align="right">
                                {switchComponent}
                            </S.CustomTableHeader>
                            
                        </S.HeadCustomTableRow>
                        
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