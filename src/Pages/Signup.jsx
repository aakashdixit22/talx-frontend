import React from 'react';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
      <div className="w-full max-w-lg p-10 space-y-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-white">Sign Up</h1>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-white"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-white"
          />
          <button
            type="submit"
            className="w-full py-2 text-xl font-semibold text-white bg-blue rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 placeholder:text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
