// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sender from './components/Sender';
import Receiver from './components/Receiver';
import Register from './components/Register';
import Login from './components/Login';
import Layout from './components/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route
          path="/"
          element={
            <Layout isAuthenticated={isAuthenticated} handleLogout={handleLogout}>
              {isAuthenticated ? <Sender /> : <Navigate to="/login" />}
            </Layout>
          }
        />
        <Route
          path="/receiver"
          element={
            <Layout isAuthenticated={isAuthenticated} handleLogout={handleLogout}>
              {isAuthenticated ? <Receiver /> : <Navigate to="/login" />}
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout isAuthenticated={false} handleLogout={handleLogout}>
              <Register onSwitchToLogin={() => setTimeout(() => window.location.href = '/login', 500)} />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout isAuthenticated={false} handleLogout={handleLogout}>
              <Login onLogin={() => setIsAuthenticated(true)} />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
