import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Finance from '../components/Finance/Finance';
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar';
import Category from '../components/Category/Category';
import Agenda from '../components/AgendaCultural/Agenda';
import Cadastar from '../components/Category/Cadastar';



function AdminPanel() {

    //get URL PArameters
    const Params = useParams();
    const category = Params.category;
    const [getpage, setPage] = useState(<Home/>);
    console.log(category)




    //use Navigate
    const navigate = useNavigate();

    useEffect(() => {

    //validate authetication
    const email = localStorage.getItem("email");
    const senha = localStorage.getItem("senha");

    if(email === null && senha === null){
        navigate("/");
    }

    //useEffect

    //set page
    switch (category) {
        case "home":
            setPage(<Home/>)
            break;
        case "finance":
            setPage(<Finance/>)
            break;
        case "category":
            setPage(<Category/>)
            break;
        case "agenda":
        setPage(<Agenda/>)
        break;
        
        default:
            setPage(<Home/>)
            break;
    }

    }, [])

        

  return (
    <div className='h-full bg-slate-50'>
        <Navbar/>
        <div className="wrapper p-16">
            {
                getpage
            }
        </div>
        
    </div>
  )
}

export default AdminPanel