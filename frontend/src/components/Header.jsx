// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';
import { FaSignOutAlt, FaSignInAlt, FaUserPlus, FaUpload, FaDownload } from 'react-icons/fa';

const Header = ({ isAuthenticated, handleLogout }) => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <ArrowUpTrayIcon className="h-6 w-6 text-white" />
        <span className="text-xl font-bold tracking-wide">Dropify</span>
      </div>

      <nav className="space-x-4 flex items-center">
        {isAuthenticated ? (
          <>
            <Link to="/" className="hover:text-yellow-300 flex items-center space-x-1 transition">
              <FaUpload />
              <span>Sender</span>
            </Link>
            <Link to="/receiver" className="hover:text-yellow-300 flex items-center space-x-1 transition">
              <FaDownload />
              <span>Receiver</span>
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-yellow-300 flex items-center space-x-1 transition"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-yellow-300 flex items-center space-x-1 transition">
              <FaSignInAlt />
              <span>Login</span>
            </Link>
            <Link to="/register" className="hover:text-yellow-300 flex items-center space-x-1 transition">
              <FaUserPlus />
              <span>Register</span>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
