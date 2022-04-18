import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu/Menu';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  //Esta funcao serve para abrir e fechar o menu
  const [status, setStatus] = useState(false)

  //navigate hooks
  const navigate = useNavigate();

  //Logout Function
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  }

  
  return (
    <div className='border grid grid-cols-2 bg-cyan-800 p-5 text-white fixed w-full z-50'>

        <div className="pl-5 text-xl">
            <FontAwesomeIcon icon={faBars} onClick={ ()=> setStatus(true)}/>
        </div>

        <div className="flex justify-end gap-16 font-medium">
            <h2 className='uppercase'>
                Ola, {"Kevin Brian"}
            </h2>
            <button className='test-slate-400 hover:bg-white px-4 hover:text-black rounded-full' onClick={()=> Logout()}>Sair</button>
        </div>
        <Menu visibility = {status}/>
    </div>
  )
}

export default Navbar