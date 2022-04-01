import React from 'react'

export default function Navbar() {
  return (
    <div className='Navbar'>

        <div className='Navbar__logo'>
            <h1>LOGO</h1>
        </div>

        <div className='Navbar__items'>

            <ul>
                <li>Guias Turisticos</li>
                <li>Pontos Turisticos</li>
                <li>Estabeleimento</li>
                <li>Roteiro</li>
            </ul>

        </div>

        <div className='Navbar__buttons'>
            <button>Cadastre-se</button>
            <button>Login</button>
        </div>
      
    </div>
  )
}
