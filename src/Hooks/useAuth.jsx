import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import { useDispatch} from 'react-redux';
import {MenuActions} from "../Redux/MenuSlice"


export default function useAuth() {

    const Navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if(!localStorage.length){
            Navigate("/login")
        }
    }, [])
    

}