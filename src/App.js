/***
 * In this Component we delcare all route funcionality
 * All the routes we going declare in this Component
 */

import React, { useState } from "react";
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
import PlansReport from "./Pages/Admin/PlansReport";
import TuristicPointsReport from "./Pages/Admin/TuristicPointsReport";
//Admin Pages
import Home from "./Pages/Admin/Home";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Admin/Login";
import UserLogin from "./Pages/User/Login";
import UserPage from "./Pages/User";
import TermsOfUse from "./Pages/Admin/TermsOfUse"



function App() {

    const [token, setToken] = useState()

    if(!token){
        return <Login setToken = {setToken}/>
    }

    return (
        <>
            {token &&<NavMenu setToken={setToken}/>}
            <Routes>
                {/* Default */  console.log("App Main")}
                <Route path="/" element={<Login />} />

                {/* Admin Routes */}
                <Route path = "/admin">
                    <Route index element={<Home />} />
                    <Route path="relatorio_de_usuario" element={<UsersReport/>} />
                    <Route path="relatorio_de_guias_turisticas" element={<GuideReport/>}/>
                    <Route path="relatorio_de_estabelecimentos" element={<ShopsReport/>}/>
                    <Route path="relatorio_financeiro" element={<Finance/>} />
                    <Route path="planos_de_assinatura" element={<PlansReport/>} />
                    <Route path="relatorio_de_pontos_turisticos" element={<TuristicPointsReport/>} />
                    <Route path="termos_de_uso" element={<TermsOfUse/>} />
                    <Route path="category" element={<Category />} />
                    <Route path="agenda" element={<Agenda />} />
                    <Route path="Approved" element={<Approved />} />
                </Route>
                {/* USers Routes */}
                <Route path = "/user">
                    <Route index element={<UserPage />} />
                    <Route path="login" element={<UserLogin/>} />
                </Route>
                
                {/* Not Found 404 Page */}
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </>
    );
}

export default App;