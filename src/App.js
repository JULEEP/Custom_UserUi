import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Register from './user/Signup.jsx';
import VerifyEmail from './user/VerifyOtp.jsx'
import Login from './user/Signin.jsx';
import Home from './Pages/Home.jsx';
import NavBar from './Components/Navbar.jsx';
function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for Register and VerifyEmail pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/" element={<NavBar />} />
      </Routes>
    </Router>
  );
}

export default App;
