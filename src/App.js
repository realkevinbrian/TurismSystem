/***
 * In this Component we delcare all route funcionality
 * All the routes we going declare in this Component
 */

import React from "react";
import {Routes, Route} from "react-router-dom"
import NavMenu from "./Components/NavMenu"
import Login from "./Pages/Login"

//Admin Pages
import Home from "./Pages/Admin/Home"
import Finance from "./Pages/Admin/Finance"
import Category from "./Pages/Admin/Category"
import Agenda from "./Pages/Admin/Agenda"
import Approved from "./Pages/Admin/Approved"


//User Pages

function App() {
    return ( 
        <>
        <NavMenu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/finance" element={<Finance/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/agenda" element={<Agenda/>}/>
                <Route path="/Approved" element={<Approved/>}/>
                {/* <Route path="/login" element={<Login/>}/> */}
            </Routes>
        </>
    );
}

export default App;