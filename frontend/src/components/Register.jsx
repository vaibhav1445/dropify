// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/auth/register', {
        username,
        password
      });
      toast.success("Registration successful! Please login.");
      onSwitchToLogin();
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent px-4">
      <div className="w-full max-w-sm bg-white/5 backdrop-blur-md rounded-lg shadow-2xl p-6 text-white">
        <h2 className="text-2xl font-bold text-center text-indigo-400 mb-1">Create Account</h2>
        <p className="text-center text-gray-300 mb-6 text-sm">Register to use Dropify</p>

        <form onSubmit={handleRegister}>
          <label className="block mb-2 text-sm text-gray-200">Username</label>
          <input
            className="mb-4 w-full px-3 py-2 bg-transparent border border-white/20 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="block mb-2 text-sm text-gray-200">Password</label>
          <div className="relative mb-4">
            <input
              className="w-full px-3 py-2 bg-transparent border border-white/20 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-xs text-indigo-300 hover:text-yellow-300"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
