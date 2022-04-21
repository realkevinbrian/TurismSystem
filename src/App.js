import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from './paginas/Login';
import AdminPanel from './paginas/AdminPanel';
import Cadastar from './components/Category/Cadastar';


function App() {
    return ( 
    <Router>
        <div className = "App" >
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Admin' element={<AdminPanel/>}/>
                <Route path='/Admin/:category' element={<AdminPanel/>}/>
                <Route path='/Admin/category/cadastrar' element={<Cadastar/>}/>
            </Routes>
        </div>
    </Router>
    );
}

export default App;