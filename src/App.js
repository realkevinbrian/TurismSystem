import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Agenda from './Pages/Agenda';
import Category from './Pages/Category';
import Finance from './Pages/Finance';
import Login from './Components/Login';
import Navbar from "./Components/Navbar";

function App() {
    return ( 
    <Router>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<Home/>}/>
            <Route path='/admin/agenda' element={<Agenda/>}/>
            <Route path='/admin/categoria' element={<Category/>}/>
            <Route path='/admin/financeiro' element={<Finance/>}/>
        </Routes>
    </Router>
    );
}

export default App;