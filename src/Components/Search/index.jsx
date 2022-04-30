import React from 'react'
import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function StyledSearch() {
  return (
    <>
        <S.SearchWrapper>
            <S.SearchInput 
            placeholder='Pesquisar'
            />
            <FontAwesomeIcon icon={faSearch}/>
        </S.SearchWrapper>  
    </>
  )
}

export default StyledSearch



/****Search by Name */
export function StyledSearchbyName() {
    return (
      <>
           <S.SearchWrapper>
               {/* <Select>
                   <Option>Select</Option>
               </Select> */}
            </S.SearchWrapper> 
      </>
    )
  }


  /***
   * filter rows
   */

  export function SearchbyNumber(){

    return(
      <>
        <S.SearchByNumber>
          <S.SPAN>Mostrar :</S.SPAN>
          <S.ShowNumsWrapper>
          <S.DropDownWrapper>
            <S.DropDown>
              <S.UL>
                <S.LI>1</S.LI>
                <S.LI>2</S.LI>
                <S.LI>3</S.LI>
                <S.LI>5</S.LI>
                <S.LI>6</S.LI>
              </S.UL>
            </S.DropDown>
          </S.DropDownWrapper>
          <FontAwesomeIcon icon={faCaretDown}/>
          </S.ShowNumsWrapper>
          <S.SPAN>Registos :</S.SPAN>
        </S.SearchByNumber>
      </>
    )
  }
