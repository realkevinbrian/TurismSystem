import { SearchOutlined } from "@mui/icons-material";
import { InputLabel, MenuItem } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { QueryActions } from "../../../features/QuerySlice";
import * as S from "./styled";

function QueryByString({ placeholder }) {
  //set qeury data
  const dispatch = useDispatch();
  return (
    <>
      <S.SearchWrapper>
        <S.SearchInput
          placeholder={placeholder}
          onChange={(self) =>
            dispatch(QueryActions.QueryData(self.target.value.toLowerCase()))
          }
        />
        <SearchOutlined />
      </S.SearchWrapper>
    </>
  );
}

function QueryByNumber() {
  //set qeury data
  const num = useSelector((state) => state.query.queryByNumber);
  const dispatch = useDispatch();

  return (
    <>
      <S.CustomSelectContainer>
        <InputLabel>Mostrar :</InputLabel>
        <S.CustomSelect
          value={num}
          onChange={(self) =>
            dispatch(QueryActions.QueryByNum(self.target.value))
          }
        >
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

function QueryBySelect() {
  return (
    <>
      <S.SearchWrapper></S.SearchWrapper>
    </>
  );
}

export { QueryByString, QueryByNumber, QueryBySelect };
