import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Admin from './Pages/Admin';
import Login from "./Components/Login"
import { Logout } from './Components/Login';
import {CreateCategory} from "./Components/Category"


function App() {
    return ( 
    <Router>
        <div className = "App" >
            <Routes>
                <Route path='/login' exact element={<Login/>}/>
                <Route path='/logout' exact element={<Logout/>}/>
                <Route path="/"  element={<Admin/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/admin/:page' element={<Admin/>}/>
                <Route path='/admin/categorias/cadastrar' element={<CreateCategory/>}/>
            </Routes>
        </div>
    </Router>
    );
}

export default App;