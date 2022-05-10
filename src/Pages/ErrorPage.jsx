import React from 'react'
import * as G from "../Components/Global"
import {Link} from "react-router-dom"
function ErrorPage() {
  return (
    <G.NotFound>
        <G.H5>404 Página não encontrada.</G.H5>
        <Link to="/">Retorne à página anterior</Link>
    </G.NotFound>
  )
}

export default ErrorPage;
