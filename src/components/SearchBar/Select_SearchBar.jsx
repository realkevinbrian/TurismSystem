import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { MultiSelectUnstyled } from '@mui/base';
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu';




function Select_SearchBar() {
  return (
    <div>
        <form className='border border-none'>
            <div className="border border-black rounded-full flex justify-around p-1">
                <select className='bg-transparent flex border border-none focus:bg-transparent focus:outline-none'>
                    <option value="Pesquisar por nome" disabled>Pesquisar por nome</option>
                    <option value="Marcos">Roberto de Jesus</option>
                    <option value="LOunge">Kevin Brian</option>
                    <option value="brianHotel">Valentim</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Select_SearchBar