import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import { useDispatch} from 'react-redux';
import {MenuActions} from "../Redux/MenuSlice"


export default function useAuth() {

    const Navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {

        let email = localStorage.getItem("email");
        let password = localStorage.getItem("password");

        console.log("email", email);
        console.log("password",password);

        if(!email && !password){
            Navigate("/login")
        }


        
    }, [])
    

}