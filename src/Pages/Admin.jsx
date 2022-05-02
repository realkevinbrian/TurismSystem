import React, {useState,useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Home from "../Components/Indicadores"
import Finance from "../Components/Finance"
import Category from "../Components/Category"
import Agenda from "../Components/Agenda"
import { useParams } from 'react-router-dom'

function Admin() {

  //get params
  const getUrl = useParams().page;

  //initialize state for page Display
  const [PAGE,SETPAGE] = useState(<Home/>)

  useEffect(() => {

      //SWITCH CASE METHOD TO SWITCH TO PAGES ACCORDING TO PARAMETERS
    switch (getUrl) {

      case "agenda":
        SETPAGE(<Agenda/>)
        break;

      case "financeiro":
        SETPAGE(<Finance/>)
        break;

      case "categoria":
        SETPAGE(<Category/>)
        break;
    
      default:
        SETPAGE(<Home/>)
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