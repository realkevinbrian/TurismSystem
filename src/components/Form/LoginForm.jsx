/*
======LOGIN FORM COMPONENT REUSABLE=============== 
Neste component inclui functionalidade de fazer login e podemos usar 
em muitas partes (Reusable component), por isso separei do Login Page
por que podemos voltar a precisar usar o mesmo component e separar 
das paginas seria melhor...
*/

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import banner from "../../Assets/bgImage.png";


export default function LoginForm() {

  //usamos esta funcao para redirecionar 
  const navigate = useNavigate();

  //state for Errors
  const [errors,setErrors] = useState(null);


  //Correct all data users
  const [email,setEmail] = useState(""); //dados do email
  const [senha,setSenha] = useState(""); //dados da senha


  //Esta funcao serve para verificar o usario se existe no database
  const Login = (self) => {
    self.preventDefault(); //Prevent Deafult Form submit

    //Este codigo serve para autheticar o usuario
    if(email === "admin@company.com" && senha === "12345"){
      //set sessions
      localStorage.setItem("email", email);
      localStorage.setItem("password", senha);
      navigate("/admin");

    }else if(email === "admin@company.com" && senha !== "12345"){
    
      setErrors("Incorrect Password");
    
    }else if(email !== "admin@company.com" && senha === "12345"){
    
      setErrors("Incorrect Email");
    
    }
    else{
      setErrors("Incorrect Email e Senha");
    }
  }

  return (
        <div className='wrapper grid grid-cols-2 bg-white border rounded-3xl mx-64 md:mx-10 md:grid-cols-1'>
            
            {/* codigo do banner */}
            <div className='bannerSide py-24 flex flex-col md:hidden rounded-3xl bg-slate-100'>
                <img src={banner} alt="sideImage" 
                className='object-fit'
                />
            </div>

            <div className='formSide flex flex-col p-6'>
            {/* este codigo serve para correcionar informacoes do login */}
                <form className='flex-auto flex flex-col justify-center mx-4 gap-1' onSubmit={Login}>
                   
                  <div className='text-bold pb-2 pl-2'>
                    <h1 className='font-semibold'>Login</h1>
                  </div>

                  {/* este codigo serve para correcionar o email na tela do login */}
                  <div className='border border-black p-1 rounded-md flex flex-row'>
                    <label 
                    htmlFor="user email"
                    className='text-sm bg-white absolute -translate-y-4 translate-x-2 px-4'
                    >E-mail</label>
                    <input type="email" 
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className='border border-none  outline outline-none flex-auto font-medium text-sm p-1'
                    />
                  </div>

                  
                  {/* este codigo serve para correcionar a senha na tela do login */}
                  <div className='border border-black p-1 rounded-md my-4 flex flex-row'>
                    
                      <label 
                      htmlFor="usersenha"
                      className='text-sm bg-white absolute -translate-y-4 translate-x-2 px-4'
                      >Senha</label>

                      <input type="password" 
                      required
                      onChange={(e) => setSenha(e.target.value)}
                      className='border border-none  outline outline-none flex-auto'
                      />

                  </div>


                  {/* este codigo serve para mostrar errors */}
                  <div className='error'>
                    {
                      (errors) ? <span className='text-red-500 font-medium'>{errors}</span> : ""
                    }
                  </div>
                  
                  {/* O botao de Login */}
                  <div className='flex justify-end'>
                    <button type='submit' className='bg-cyan-800 text-white px-8 p-1 rounded-full shadow-md shadow-slate-400'>
                    Login
                    </button>
                  </div>

                </form>
            </div>

        </div>
  )
}
