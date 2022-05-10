import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from './styled';
import {QueryActions} from "../../features/QuerySlice";
import {useDispatch} from "react-redux"

function StyledSearch({placeholder}) {
  
  //set qeury data
  const dispatch = useDispatch();
  return (
    <>
        <S.SearchWrapper>
            <S.SearchInput 
            placeholder={placeholder}
            onChange={(self)=>dispatch(QueryActions.QueryData(self.target.value.toLowerCase()))}
            />
            <FontAwesomeIcon icon={faSearch}/>
        </S.SearchWrapper>  
    </>
  )
}

export default StyledSearch




