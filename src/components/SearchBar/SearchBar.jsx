import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar({handleQuery}) {
  return (
    <div>
        <form className='border border-none'>
            <div className="border border-black rounded-full flex justify-around p-0">
                <input 
                type="text"
                className='border border-none outline outline-none bg-transparent pl-2 m-0'
                placeholder='Pesquisar'
                onChange={(self)=>handleQuery(self.target.value.toLowerCase())}
                />
                <button className='text-lg' type='submit'>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
        </form>
    </div>
  )
}
