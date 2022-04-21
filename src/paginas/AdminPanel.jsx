import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Agenda from '../components/AgendaCultural/Agenda';
import Category from '../components/Category/Category';
import Finance from '../components/Finance/Finance';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';



function AdminPanel() {

    /***
     * Aqui usamos o useParams para pegar dados no URL
     */
    const Params = useParams();
    const category = Params.category;
    const [getPage, setPage] = useState(<Home/>);

    /***
     * Aqui usamos o Navigate hook para Redirecionar
     */
    const navigate = useNavigate();

    /***
     * Aqui usamos o useEffect para verificacao imediato de o Usuario
     * Já Fez o Login correctamente
     */
    useEffect(() => {

    //=>GET STORED DATA IN LOCALSTORAGE
    const email = localStorage.getItem("email");
    const senha = localStorage.getItem("senha");

    //=>VERIFICA SE SE A SENHA E EMAIL GUARDADO NO LOCALSTORAGE NAO ESTAO ==>NULL
    if(email === null && senha === null){
        navigate("/");
    }

    /******************************************\
     * ***************PAGINAS*******************\
     ********************************************\
    */
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
        <div className="wrapper p-16 md:px-4 sm:px-4 lg:p-16">
            {getPage}
        </div>
    </div>
  )
}

export default AdminPanel