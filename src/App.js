import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Admin from './Pages/Admin';

function App() {
    return ( 
    <Router>
        <div className = "App" >
            <Routes>
                <Route path='/' element={<Admin/>}/>
            </Routes>
        </div>
    </Router>
    );
}

export default App;