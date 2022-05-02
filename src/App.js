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
                <Route path='/admin/:page' element={<Admin/>}/>
            </Routes>
        </div>
    </Router>
    );
}

export default App;