
import './App.css'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Landing/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import { AuthProvider } from './components/common/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import ReportLostCat from './pages/Reports/ReportLostCat';


function App() {
  const showDevPreviewRoutes = import.meta.env.DEV;

  return (
    <>
     <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="/resetPassword" element={<ResetPassword/>}/>
          {showDevPreviewRoutes && (
            <Route path="/dashboard-preview" element={<Dashboard/>}/>
          )}

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/reports" element={<Dashboard/>}/>
            <Route path="/my-cats" element={<Dashboard/>}/>
            <Route path="/map" element={<Dashboard/>}/>
            <Route path="/volunteers" element={<Dashboard/>}/>
            <Route path="/messages" element={<Dashboard/>}/>
            <Route path="/notifications" element={<Dashboard/>}/>
            <Route path="/analytics" element={<Dashboard/>}/>
            <Route path="/settings" element={<Dashboard/>}/>
            <Route path="/reportLostCat" element={<ReportLostCat/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
