import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Admin from './Pages/Admin';
import Login from "./Components/Login"
import Home from "./Components/Indicadores"
import Finance from "./Components/Finance"
import Category, {CreateCategory} from "./Components/Category"
import Agenda from "./Components/Agenda"

function App() {
    return ( 
    <Router>
        <div className = "App" >
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/admin/indicadores' element={<Home/>}/>
                <Route path='/admin/finance' element={<Finance/>}/>
                <Route path='/admin/categorias' element={<Category/>}/>
                <Route path='/admin/agenda' element={<Agenda/>}/>
            </Routes>
        </div>
    </Router>
    );
}

export default App;