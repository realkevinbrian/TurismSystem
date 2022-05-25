/***
 * In this Component we delcare all route funcionality
 * All the routes we going declare in this Component
 */

import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NavMenu from "./Components/NavMenu";
import Agenda from "./Pages/Admin/Agenda";
import Approved from "./Pages/Admin/Approved";
import Category from "./Pages/Admin/Category";
import Finance from "./Pages/Admin/Finance";
//Admin Pages
import Home from "./Pages/Admin/Home";
import Login from "./Pages/Login";
import UserPage from "./Pages/User";



function App() {

    /***
     * Destructure useAuth Merhod to retrive just Userinformation
     */
    const user_status = useSelector(state => state.login.user_status);
    const user_role = useSelector(state => state.login.user_role);

    return (
        <>
            {user_role === "Admin" && user_status && <NavMenu />}
            <Routes>
                <Route path="/admin" element={<Home />} />
                <Route path="/admin/finance" element={<Finance />} />
                <Route path="/admin/category" element={<Category />} />
                <Route path="/admin/agenda" element={<Agenda />} />
                <Route path="/admin/Approved" element={<Approved />} />
                <Route path="login" element={<Login />} />
                <Route path="/" element={<UserPage />} />
            </Routes>
        </>
    );
}

export default App;