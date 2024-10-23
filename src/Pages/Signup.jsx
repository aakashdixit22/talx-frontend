import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await axios.post('https://job-portal-backend-nm6k.onrender.com/api/auth/signup', {
        email,
        password,
      });
      toast.success('Successfully signed up! Redirecting to login...');
      navigate('/login');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error('User already exists: Please login');
      } else {
        toast.error('Error during signup');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Toaster component here */}
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="w-full max-w-lg p-10 space-y-8 bg-white bg-opacity-10 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-black">Sign Up</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-6" onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 text-black bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-black bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 text-black bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black"
            required
          />
          <button
            type="submit"
            className="w-full py-2 text-xl font-semibold text-black bg-blue rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 placeholder:text-black"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
