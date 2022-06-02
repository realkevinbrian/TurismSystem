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
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Admin/Login";
import UserLogin from "./Pages/User/Login";
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
                <Route path="admin" element={<Home />} />
                <Route path="admin/finance" element={<Finance />} />
                <Route path="admin/category" element={<Category />} />
                <Route path="admin/agenda" element={<Agenda />} />
                <Route path="admin/Approved" element={<Approved />} />
                <Route path="admin/login" element={<Login />} />
                <Route path="/" element={<UserPage />} />
                <Route path="user/login" element={<UserLogin/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </>
    );
}

export default App;