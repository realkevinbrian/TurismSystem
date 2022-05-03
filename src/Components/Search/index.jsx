import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import * as S from './styled';


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
            <em>Mostrar Registos</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
      </>
    );
  }
  