import {useEffect} from "react";
import {useNavigate} from "react-router-dom"


export default function useAuth() {

    const Navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.length){
            Navigate("/login")
        }
    }, [])
    

}