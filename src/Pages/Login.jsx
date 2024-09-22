import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-white">Login</h1>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full py-2 text-xl font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
