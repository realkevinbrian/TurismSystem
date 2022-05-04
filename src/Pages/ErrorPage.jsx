import React from 'react'
import * as G from "../Components/Global"
import {Link} from "react-router-dom"
function ErrorPage() {
  return (
    <G.NotFound>
        <G.H5>404 Page Not Found!</G.H5>
        <Link to="/">Go back to Admin</Link>
    </G.NotFound>
  )
}

export default ErrorPage