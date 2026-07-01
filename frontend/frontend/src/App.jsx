
import './App.css'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Landing/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Analytics from './pages/Dashboard/Analytics';
import { AuthProvider } from './components/common/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import ReportLostCat from './pages/Reports/ReportLostCat';
import Volunteers from './pages/Volunteers/Volunteers';
import Messages from './pages/Messages/Messages';
import Settings from './pages/Settings/Settings';
import RecentCatReports from './pages/Reports/RecentCatReports';
import Reports from './pages/Reports/Reports';


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
          
            <Route path="/my-cats" element={<Dashboard/>}/>
            <Route path="/map" element={<Dashboard/>}/>
            <Route path="/volunteers" element={<Volunteers/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/notifications" element={<Dashboard/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/reportLostCat" element={<ReportLostCat/>}/>
            <Route path="/recent-cat-reports" element={<RecentCatReports/>}/>
            <Route path="/reports" element={<Reports/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
