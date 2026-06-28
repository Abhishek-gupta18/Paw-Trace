
import './App.css'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Landing/Home';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
         <Route path="/resetPassword" element={<ResetPassword/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
