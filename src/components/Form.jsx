import axios from 'axios';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';

const baseURL = "";

export default function Form() {



  
  //Form data useState Values 
  const [name, setName] = useState("");
  const [inicio, setInicio] = useState("");
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setLoader] = useState(false);

  //
  const [post, setPost] = useState(null);

  //useEffect to init once window is initialized
  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);



  //Form register
  const Register = (self) =>{
    self.preventDefault();

    //data corrected from the form
    const data = { name,inicio,value,location,country};

    console.log(JSON.stringify(data))//testing 


    //usando AXIOS
  //   axios({
  //     method: 'post',
  //     url : baseURL,
  //     data : JSON.stringify(data)
  
  // })

  //USANDO FETCH API
  fetch(baseURL, {
    method : 'POST',
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify(data)
  }).then(()=>{
    console.log("Registered");
    setLoader(true);
  })

    
    
  }


  return (
    
    <div className='Form'>
      {/* Container FORM */}


      {/* loader */}
      {isLoading ? swal("registed Successfully") : "" };

      <div className='Form__container'>

        <div className='Form__container--title'> 
          {/* Form Header */}
          <h1>Cadastrar Agenda Cultural</h1>
        </div>

        <div className='Form__container--body'>
          {/* In this div it contains the user form */}

        

          <form className='Form__container--main' onSubmit={Register}>
            
            <h1>Preenche todos Dados </h1>

            <div>
              <label>Nome</label>
              <input type="text" 
              name='Name'
              required
              onChange={(self)=>setName(self.target.value)}
              />
            </div>

            <div>
              <label>Inicio</label>
              <input type="text" 
              name='Inicio'
              required
              onChange={(self)=>setInicio(self.target.value)}
              />

            </div>

            <div>
              <label>Valor da Entrada</label>
              <input type="text" 
              name='Valor de Entrada'
              required

              onChange={(self)=>setValue(self.target.value)}
              />
            </div>

            <div>
              <label>Local</label>
              <input type="text" 
              name='Local'
              required
              onChange={(self)=>setLocation(self.target.value)}
              />
            </div>

            <div>
              <label>Pais</label>
              <input type="text" 
              required
              onChange={(self)=>setCountry(self.target.value)}
              />
            </div>

              {/* submit Button */}
              <button type='submit'>Cadastre-se</button>

          </form>

        </div>


      </div>
      
    </div>
  )
}
