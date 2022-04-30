import React from 'react'
import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { H5,H4 } from '../Global'


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
   
   export function SearchbyNumber() {
    const [num, setNum] = React.useState('');

    const handleChange = (event) => {
      setNum(event.target.value);
    };
  
    return (
      <>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Mostrar</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={num}
          label="Mostrar"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>1</em>
          </MenuItem>
          <MenuItem value={10}>2</MenuItem>
          <MenuItem value={20}>3</MenuItem>
          <MenuItem value={30}>5</MenuItem>
        </Select>
      </FormControl>
      </>
    );
  }


  // /***
  //  * SHOW TOTAL
  //  * 
  //  */

  // export function ShowTotal(){
    
  //   return(
  //     <>
  //       <S.ShowTotalWrapper>
  //         <H4>Total</H4>
  //         <H5>R$ 1250</H5>
  //       </S.ShowTotalWrapper>
  //     </>

  //   )

  // }