import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { isAuthenticated, logout } from "../services/authServices.js";
import Login from "../pages/login.js";
import Register from "../pages/Register.js";
import Dashboard from "../pages/Dashboard.js";
import Navbar from "../components/Navbar.js";

const App = () => {
  const [auth, setAuth] = useState(isAuthenticated());

  useEffect(() => {
    setAuth(isAuthenticated());
  }, []);

  const handleLogout = () => {
    logout();
    setAuth(false);
  };

  return (
    <>
      <Router>
        <Navbar auth={auth} onLogout={handleLogout} />
        <Routes>
          <Route
            path="/login"
            element={
              !auth ? <Login setAuth={setAuth} /> : <Navigate to="/dashboard" />
            }
          />
          <Route
            path="/register"
            element={!auth ? <Register /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/dashboard"
            element={auth ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
