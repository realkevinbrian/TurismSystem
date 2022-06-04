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
import UsersReport from "./Pages/Admin/UsersReport";
import GuideReport from "./Pages/Admin/GuideReport";
import ShopsReport from "./Pages/Admin/ShopsReport";
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
            <NavMenu />
            <Routes>
                
                <Route path = "/admin">
                    <Route index element={<Home />} />
                    <Route path="relatorio_de_usuario" element={<UsersReport/>} />
                    <Route path="relatorio_de_guias_turisticas" element={<GuideReport/>}/>
                    <Route path="relatorio_de_estabelecimentos" element={<ShopsReport/>}/>
                    <Route path="relatorio_financeiro" element={<Finance/>} />
                    <Route path="category" element={<Category />} />
                    <Route path="agenda" element={<Agenda />} />
                    <Route path="Approved" element={<Approved />} />
                    <Route path="login" element={<Login />} />
                </Route>

                <Route path="/" element={<UserPage />} />

                <Route path = "/user">
                    <Route index element={<UserPage />} />
                    <Route path="login" element={<UserLogin/>} />
                </Route>
                    <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </>
    );
}

export default App;