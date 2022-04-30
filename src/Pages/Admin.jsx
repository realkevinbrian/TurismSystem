import React from 'react'
import Login from "../Components/Login"
import Navbar from '../Components/Navbar'
import Home from "../Components/Indicadores"
import Finance from "../Components/Finance"
function Admin() {
  return (
    <div>
        <Navbar/>
        {/* <Home/> */}
        <Finance/>
    </div>
  )
}

export default Admin