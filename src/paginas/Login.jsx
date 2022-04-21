import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Form/LoginForm';



export default function Login() {

  /***
   * Hook para Redirecionar 
   */
  const navigate = useNavigate();

  /***
   * BASIC AUTHETICATION
   * Se o usuario tiver feito Login avamos redirecionar para o admin
   */
  useEffect(() => {
    //validate authetication
    const email = localStorage.getItem("email");
    const senha = localStorage.getItem("senha");

    if(email !== null || senha !== null){
      navigate("/admin");
    }
  },[])

  
  return (
    <div className='border bg-cyan-800 h-screen flex flex-col justify-center'>
        <LoginForm/>
    </div>
  )
}
