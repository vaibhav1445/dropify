// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Sender from './components/Sender';
import Receiver from './components/Receiver';
import Register from './components/Register';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';
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
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Header */}
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          {/* Logo and App Name */}
          <div className="flex items-center space-x-2">
           <ArrowUpTrayIcon className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-indigo-600">Dropify</span>
          </div>

          <nav className="space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/" className="text-blue-600 font-semibold hover:underline">Sender</Link>
                <Link to="/receiver" className="text-blue-600 font-semibold hover:underline">Receiver</Link>
                <button
                  onClick={handleLogout}
                  className="text-red-600 font-semibold hover:underline"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-green-600 font-semibold hover:underline">Login</Link>
                <Link to="/register" className="text-green-600 font-semibold hover:underline">Register</Link>
              </>
            )}
          </nav>
        </header>

        {/* Routes */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={isAuthenticated ? <Sender /> : <Navigate to="/login" />} />
            <Route path="/receiver" element={isAuthenticated ? <Receiver /> : <Navigate to="/login" />} />
            <Route
              path="/register"
              element={<Register onSwitchToLogin={() => setTimeout(() => window.location.href = '/login', 500)} />}
            />
            <Route
              path="/login"
              element={<Login onLogin={() => setIsAuthenticated(true)} />}
            />
          </Routes>
        </main>

        {/* Toast Notifications */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
};

export default App;
