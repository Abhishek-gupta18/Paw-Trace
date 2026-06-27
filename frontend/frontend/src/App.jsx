
import './App.css'
import Login from './Login'
import SignUp from './SignUp';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
