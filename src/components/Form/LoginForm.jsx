/*
======LOGIN FORM COMPONENT REUSABLE=============== 
Neste component inclui functionalidade de fazer login e podemos usar 
em muitas partes (Reusable component), por isso separei do Login Page
por que podemos voltar a precisar usar o mesmo component e separar 
das paginas seria melhor...
*/

import { ArrowBackRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from "../../Assets/bgImage.png";
import { StyledInput } from "../Category/ReusableComponents";


export default function LoginForm() {

  /*
  usamos esta Hook para redirecionar 
  */
  const navigate = useNavigate();

  /*
  ===Stado para pegar os Erros do Login
  */
  const [errors,setErrors] = useState(null);


  /**
   * Armazenar os dados do Formulario do Login
   */
  const [email,setEmail] = useState(""); //dados do email
  const [password,setPassword] = useState(""); //dados da password


  /**
   * Esta funcao serve para verificar o usario se existe no database
   * Fazer Authetication no Database
   */

  const Login = (self) => {
  
    self.preventDefault(); //Prevent Deafult Form submit

    /**
     * Este codigo serve para autheticar o usuario
     */
    if(email === "admin@company.com" && password === "12345"){

      /***
       * Se a senha e o Email Estiver no Database ! Vamos armazenar no LocalStorage
       */
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/admin"); //=>Redireccione para Admin (true);
    }
    
    /***
     * Se Email ou Password nao estiver Corecto vamos monstar errors 
     * usando o State (setErrors)
     */
    else if(email === "admin@company.com" && password !== "12345"){
    
      setErrors("Senha incorrecta");

    }else if(email !== "admin@company.com" && password === "12345"){
    
      setErrors("Email incorrecta");
    
    }
    else{
      setErrors("Senha Incorrecta e Email");
    }
  }

  return (

        <div className='wrapper grid grid-cols-2 rounded-3xl lg:mx-32 md:mx-4 sm:mx-4 sm:grid-cols-1 bg-white sm:bg-transparent'>

            <span className='hidden sm:block'>
            <ArrowBackRounded className='text-cyan-800 bg-white p-1 w-6 rounded-full m-4'/>  
            </span>
            

            <div className='bannerSide sm:py-0 sm:h-60 sm:bg-transparent'>
                <img src={banner} alt="sideImage" 
                className='object-contain rounded-3xl'
                />
            </div>

            <div className='formSide flex flex-col p-6 bg-white rounded-3xl  z-50'>
              
              <div className='flex flex-col flex-1 text-right text-sm'>
                <p>
                  Não possui cadastro
                </p>
                <a href="/cadastrar_usuario" className='text-cyan-800 underline'>Cadastre-se</a>
              </div>
            
              <form className='flex-auto flex flex-col justify-center mx-4 gap-1' onSubmit={Login}>
              
                <div className='grid grid-cols-1 gap-5'>

                      <div className='text-bold pb-2 pl-2'>
                        <h1 className='font-semibold'>Login</h1>
                      </div>
                      
                      <StyledInput>
                        <label>Email</label>
                        <input 
                        type="text" 
                        placeholder='ex : abc@company.xz'
                        onChange={(self)=>setEmail(self.target.value)}
                        />
                      </StyledInput>

                      <StyledInput>
                        <label>Password</label>
                        <input 
                        type="text" 
                        placeholder='Digite a sua password'
                        onChange={(self)=>setPassword(self.target.value)}

                        />
                      </StyledInput>

                </div>

                
                <div className='error'>
                  {(errors) ? <span className='text-red-500 font-medium'>{errors}</span> : ""}
                </div>
                
                <div className='flex justify-between pt-8'>
                  <p className='self-center text-sm underline'><a href="/">Esquece a minha senha</a></p>
                    <button className='bg-cyan-800 text-white px-12 py-1 rounded-full hover:bg-cyan-600'>Login</button>
                </div>

              </form>

            </div>

        </div>
  )
}
