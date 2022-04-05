/*
======LOGIN FORM COMPONENT REUSABLE=============== 
Neste component inclui functionalidade de fazer login e podemos usar 
em muitas partes (Reusable component), por isso separei do Login Page
por que podemos voltar a precisar usar o mesmo component e separar 
das paginas seria melhor...
*/

import React, { useState, useEffect } from 'react'
import banner from "../../Assets/bgImage.jpg";
// import data from "../../Database/data.json"

export default function LoginForm() {

  //esta funcao que faz o fetch do database dos usuarios


  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
  
    // return dados;
  }, [])

  

  //Esta funcao serve para verificar o usario se existe no database

  const Login = (self) => {

    self.preventDefault(); //Prevent Deafult Form submit

    //Correct all data users
    const [email,setEmail] = useState(""); //dados do email
    const [senha,setSenha] = useState(""); //dados da senha

    //Agrupar os dados e transformar em json


  
  }



  return (
        <div className='wrapper grid grid-cols-2 bg-white border rounded-3xl mx-64 '>
            
            <div className='bannerSide py-24 flex flex-col sm:hidden'>
                <img src={banner} alt="sideImage" 
                className='object-fit'
                />
            </div>

            <div className='formSide flex flex-col p-6'>

                <form className='flex-auto flex flex-col justify-center mx-4 gap-1' onSubmit={Login}>
                  <div className='text-bold pb-2 pl-2'>
                    <h1 className='font-semibold'>Login</h1>
                  </div>

                  <div className='border border-black p-1 rounded-md flex flex-row'>
                    
                    <label 
                    htmlFor="user email"
                    className='text-sm bg-white absolute -translate-y-4 translate-x-2 px-4'
                    >E-mail</label>
                    
                    <input type="text" 
                    required
                    className='border border-none  outline outline-none flex-auto font-medium text-sm p-1'
                    />
                  
                  </div>

                  
                  <div className='border border-black p-1 rounded-md my-4 flex flex-row'>
                    
                      <label 
                      htmlFor="userPassword"
                      className='text-sm bg-white absolute -translate-y-4 translate-x-2 px-4'
                      >Senha</label>

                      <input type="password" 
                      required
                      className='border border-none  outline outline-none flex-auto'
                      />

                  </div>

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
