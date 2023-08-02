import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import "./style.scss"
import Login from './pages/Login';
import { Home } from './pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
function App() {
  const {currentUser}=useContext(AuthContext)
  const ProtectRoute =({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }
  console.log(currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Route index element={
          <ProtectRoute>
            <Home />
          </ProtectRoute>
          } />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
