import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from './paginas/Login';


function App() {
    return ( 
    
    <Router>
        <div className = "App" >
            <Routes>
                <Route path='*' element={<Login/>}/>
            </Routes>
        </div>
    </Router>
    );
}

export default App;