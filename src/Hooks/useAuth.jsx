import {useEffect} from "react";
import {useNavigate} from "react-router-dom"


export default function useAuth() {

    const Navigate = useNavigate();
    useEffect((Navigate) => {
        if(!localStorage.length){
            Navigate("/login")
        }
    }, [])
    

}