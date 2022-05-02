import React from 'react'
import Login from "../Components/Login"
import Navbar from '../Components/Navbar'
import Home from "../Components/Indicadores"
import Finance from "../Components/Finance"
import Category, {CreateCategory} from "../Components/Category"
import Agenda from "../Components/Agenda"
import { useParams } from 'react-router-dom'

function Admin() {

  //get params
  const getUrl = useParams();
  console.log("Url paramas",getUrl)
  //routers
  // switch()

  return(
    <a href='/admin/categoria'>Click Me</a>
  )
}

export default Admin