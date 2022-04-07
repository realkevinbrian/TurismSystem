import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Finance from '../components/Finance/Finance';
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'

function AdminPanel() {

    //get URL PArameters
    const Params = useParams();

    //use Navigate
    const navigate = useNavigate();
    useEffect(() => {
    //validate authetication
    const email = localStorage.getItem("email");
    const senha = localStorage.getItem("senha");

    if(email === null && senha === null){
        navigate("/");
    }
    }, [])
    

  return (
    <div className='h-screen bg-slate-50'>
        <Navbar/>
        
        <div className="wrapper p-16">
            {
                <Home/>
            }
        </div>
        
    </div>
  )
}

export default AdminPanel