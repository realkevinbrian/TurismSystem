import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Admin from './Pages/Admin';
import Login from "./Components/Login"


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