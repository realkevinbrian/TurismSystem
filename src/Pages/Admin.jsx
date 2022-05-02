import React from 'react'
import Login from "../Components/Login"
import Navbar from '../Components/Navbar'
import Home from "../Components/Indicadores"
import Finance from "../Components/Finance"
import Category, {CreateCategory} from "../Components/Category"
import Agenda from "../Components/Agenda"

function Admin() {
  return (
    <div>
        {/* <Navbar/> */}
        {/* <Home/> */}
        {/* <Finance/> */}
        {/* <Category/> */}
        {/* <Agenda/> */}
        <CreateCategory/>
    </div>
  )
}

export default Admin