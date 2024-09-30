import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/auth/signin', {
  //       email,
  //       password,
  //     });
  //     // Store token in local storage
  //     localStorage.setItem('token', response.data.token);
  //     localStorage.setItem('email', response.data.email)
  //     localStorage.setItem('expiresIn', response.data.expiresIn)
  //     navigate('/'); // Redirect to home or dashboard page
  //   } catch (err) {
  //     setError('Invalid email or password');
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', {
        email,
        password,
      });
  
      // Store token and email in local storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', response.data.email);
  
      // Calculate the expiration timestamp
      const expiresIn = response.data.expiresIn; // e.g., "1h" or "3600s"
      let expirationTime;
  
      if (expiresIn.includes('h')) {
        const hours = parseInt(expiresIn.replace('h', ''), 10);
        expirationTime = new Date().getTime() + hours * 60 * 60 * 1000;
      } else if (expiresIn.includes('s')) {
        const seconds = parseInt(expiresIn.replace('s', ''), 10);
        expirationTime = new Date().getTime() + seconds * 1000;
      }
  
      // Store the calculated expiration time in local storage
      localStorage.setItem('expirationTime', expirationTime.toString());
  
      // Redirect to home or dashboard page
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-10 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-black">Login</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-6" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 text-black bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-black bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            className="w-full py-2 text-xl font-semibold text-black bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
