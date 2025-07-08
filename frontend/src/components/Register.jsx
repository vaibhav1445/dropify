// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-1">Join Dropify</h2>
        <p className="text-center text-gray-500 mb-6 text-sm">Create a new account</p>

        <form onSubmit={handleRegister}>
          <label className="block mb-2 text-sm text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Choose a username"
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="block mb-2 text-sm text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
