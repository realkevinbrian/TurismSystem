import React from 'react'
import Login from "../Components/Login"
import Navbar from '../Components/Navbar'
import Home from "../Components/Indicadores"
import Finance from "../Components/Finance"
import Category from "../Components/Category"
function Admin() {
  return (
    <div>
        <Navbar/>
        {/* <Home/> */}
        {/* <Finance/> */}
        <Category/>
    </div>
  )
}

export default Admin