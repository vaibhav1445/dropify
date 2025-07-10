
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://dropify-6.onrender.com/api/auth/login', {
        username,
        password
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      toast.success("Login successful");
      onLogin();
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent px-4">
      <div className="w-full max-w-sm bg-white/5 backdrop-blur-md rounded-lg shadow-2xl p-6 text-white">
        <h2 className="text-2xl font-bold text-center text-indigo-400 mb-1">Welcome Back to Dropify</h2>
        <p className="text-center text-gray-300 mb-6 text-sm">Login to continue</p>

        <form onSubmit={handleLogin}>
          <label className="block mb-2 text-sm text-gray-200">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full mb-4 px-3 py-2 bg-transparent border border-white/20 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="block mb-2 text-sm text-gray-200">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full px-3 py-2 bg-transparent border border-white/20 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
