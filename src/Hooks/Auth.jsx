import { useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const Auth = () =>{

    const navigate = useNavigate();

    useEffect(() => {

        //validate authetication
        const email = localStorage.getItem("email");
        const senha = localStorage.getItem("senha");
    
        if(email === null && senha === null){
            navigate("/");
        }

    })
}