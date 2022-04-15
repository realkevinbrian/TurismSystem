import React from 'react'
import {useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom'

import LoginForm from '../components/Form/LoginForm';


export default function Login() {

  //navigate hook
  const navigate = useNavigate();

  // Se o usuario tiver feito login avamos redirecionar para o admin
  useEffect(() => {
    //validate authetication
    const email = localStorage.getItem("email");
    const senha = localStorage.getItem("senha");
    
    console.log(email)

    if(email !== null || senha !== null){
      
        navigate("/admin");
        // console.log("logged in");
    }
  },[])

  return (
    <div className='border bg-cyan-800 h-screen flex flex-col justify-center'>
        <LoginForm/>
    </div>
  )
}
