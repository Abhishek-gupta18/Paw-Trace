
import './App.css'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Landing/Home';


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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
