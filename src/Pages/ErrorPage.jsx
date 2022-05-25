import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../Assets/LOGO.png"

function ErrorPage() {
  return (
    <div sx = {{height : "100vh", margin : "0 auto"}}>
        <img src={Logo} alt="Official Logo"/>
        <h5>404 Página não encontrada.</h5>
        <Link to="/admin">Retorne à página anterior</Link>
    </div>
  )
}

export default ErrorPage;
