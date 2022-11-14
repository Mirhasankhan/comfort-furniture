import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateAccount from './Components/CreateAccount/CreateAccount/CreateAccount';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';


function App() {
  return (
    <div className="App">     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/createAccount" element={<CreateAccount></CreateAccount>}></Route>

        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
