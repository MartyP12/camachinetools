/* Martin Plaskon 261078218 - 100% */

import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/invite/:token" element={<Booking />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
