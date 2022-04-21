import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '../Menu/Menu';

function Navbar() {

  /***
   * iniciamos um State para Pegar o stado do Menu se 
   * Se acha Aberto ou Fechado
   */
  const [status, setStatus] = useState(false)

  /***
   *  INITIALIZE THE NAVIGATE HOOK
   */
  const navigate = useNavigate();

  /****
   *  BASIC LOGOUT FUNCTIONALITY
   * UM SIMPLES LOGOUT
   */
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  }

  
  return (
    <div className='flex flex-row bg-cyan-800 p-4 text-white fixed w-full z-50'>
        <FontAwesomeIcon icon={faBars} className='self-center text-3xl' onClick={()=> (status) ? setStatus(false) : setStatus(true)}/>
        <ul className='flex flex-row flex-1 justify-end justify-items-center gap-10 font-bold'>
          <li className='self-center'>Ola, Administrador</li>
          <li className='px-4 py-1' onClick={()=>Logout()}>Sair</li>
        </ul>
        <Menu visibility = {status}/>
    </div>
  )
}

export default Navbar