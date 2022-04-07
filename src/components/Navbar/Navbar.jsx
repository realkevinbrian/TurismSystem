import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className='border grid grid-cols-2 bg-cyan-800 p-5 text-white'>

        <div className="pl-5 text-xl">
            <FontAwesomeIcon icon={faBars}/>
        </div>

        <div className="flex justify-end gap-16 font-medium">
            <h2 className='uppercase'>
                Ola, {"Kevin Brian"}
            </h2>
            <button className='test-slate-400 hover:bg-white px-4 hover:text-black rounded-full'>Sair</button>
        </div>
    </div>
  )
}

export default Navbar