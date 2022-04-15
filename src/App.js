import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from './paginas/Login';
import AdminPanel from './paginas/AdminPanel';


function App() {
    return ( 
    <Router>
        <div className = "App" >
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Admin' element={<AdminPanel/>}/>
                <Route path='/Admin/:category' element={<AdminPanel/>}/>
            </Routes>
        </div>
    </Router>
    );
}

export default App;