import React, {useState,useEffect} from 'react'
import Login from "../Components/Login"
import Navbar from '../Components/Navbar'
import Home from "../Components/Indicadores"
import Finance from "../Components/Finance"
import Category, {CreateCategory} from "../Components/Category"
import Agenda from "../Components/Agenda"
import { useParams } from 'react-router-dom'

function Admin() {

  //get params
  const getUrl = useParams().page;
  console.log(getUrl)

  //initialize state for page Display
  const [PAGE,SETPAGE] = useState(<Home/>)

  useEffect((getUrl) => {

      //SWITCH CASE METHOD TO SWITCH TO PAGES ACCORDING TO PARAMETERS
    switch (getUrl) {

      case "agenda":
        SETPAGE(<Agenda/>)
        console.log("Agenda")
        break;

      case "financeiro":
        SETPAGE(<Finance/>)
        console.log("Financeiro")
        break;

      case "categoria":
        SETPAGE(<Category/>)
        console.log("Categorias")
        break;
    
      default:
        SETPAGE(<Home/>)
        console.log("Home")
        break;
    }
  
  }, [])
  
  return(
    <>
      <Navbar/>
      {PAGE}
    </>
  )
  
}

export default Admin