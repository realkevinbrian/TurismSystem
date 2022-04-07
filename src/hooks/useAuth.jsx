import React from "react";
import { useState } from "react";

export default function useAuth(dados,email, senha) {
    
    const [response, setResponse] = useState(null);

    for(let dado of dados){

        //validation dado credentials
        if(dado.email !== email && dado.password !== senha ){
            return setResponse("You entered Wrong Informations");
        
        }else if(dado.email === email && dado.password !== senha){
            return setResponse("You entered A wrong Email");

        }else if(dado.email !== email && dado.password === senha){
            return setResponse("You entered A wrong Password");
        }
        else{
            return setResponse("Logged in Successfully");
        }
    }

    return response;
 
}
