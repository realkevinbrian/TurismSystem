import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import React from "react"
import Home from "./Pages/Home";
import Agenda from './Pages/Agenda';
import Category from './Pages/Category';
import Finance from './Pages/Finance';
import Login,{Logout} from './Components/Login';
import NotFound from "./Pages/ErrorPage"
import {CadastrarCategoria} from "./Components/Category/CadastrarCategoria"

function App() {
    return ( 
    <Router>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<Home/>}/>
            <Route path='/admin/agenda' element={<Agenda/>}/>
            <Route path='/admin/categoria' element={<Category/>}/>
            <Route path='/admin/categoria/:id' element={<CadastrarCategoria/>}/>
            <Route path='/admin/financeiro' element={<Finance/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
    </Router>
    );
}

export default App;