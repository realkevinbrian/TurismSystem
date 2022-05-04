import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { QueryActions } from "../../Redux/QuerySlice";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled"

/***
 * filter rows
 */

export function SearchbyNumber() {
  //set qeury data
  const num = useSelector(state => state.query.queryByNumber);
  const dispatch = useDispatch();

  return (
    <>
        <S.CustomSelectContainer>
            <InputLabel>Mostrar :</InputLabel>
            <S.CustomSelect value={num} onChange = {(self)=> dispatch(QueryActions.QueryByNum(self.target.value))}>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </S.CustomSelect>
            <InputLabel>: registos</InputLabel>
        </S.CustomSelectContainer>
    </>
  );
}
