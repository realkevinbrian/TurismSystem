/***
 * In this Component we delcare all route funcionality
 * All the routes we going declare in this Component
 */

import React from "react";
import {Routes, Route} from "react-router-dom"
import NavMenu from "./Components/Admin/NavMenu"
import Login from "./Components/Login"
import AdminHome from "./Components/Admin/Home"
import Finance from "./Components/Admin/Finance"
import Category from "./Components/Admin/Category"
import Agenda from "./Components/Admin/Agenda"
import Approved from "./Components/Admin/Approved"



function App() {
    return ( 
        <>
        <NavMenu/>
            <Routes>
                <Route path="/" element={<AdminHome/>}/>
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