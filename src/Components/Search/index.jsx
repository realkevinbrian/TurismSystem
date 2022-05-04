import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormControl from '@mui/material/FormControl';
import React from 'react';
import * as S from './styled';
import {QueryActions} from "../../Redux/QuerySlice";
import {useDispatch} from "react-redux"

function StyledSearch() {
  
  //set qeury data
  const dispatch = useDispatch();
  return (
    <>
        <S.SearchWrapper>
            <S.SearchInput 
            placeholder='Pesquisar'
            onChange={(self)=>dispatch(QueryActions.QueryData(self.target.value.toLowerCase()))}
            />
            <FontAwesomeIcon icon={faSearch}/>
        </S.SearchWrapper>  
    </>
  )
}

export default StyledSearch




