import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AtSign, Lock, ArrowRight } from "lucide-react";
import { toast, Toaster } from 'react-hot-toast';
import SignUpBg from "../assets/signupbg.jpg";
import ClipLoader from "react-spinners/ClipLoader";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token') && localStorage.getItem('email')) {
      navigate('/search');
    }
  }, [navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
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
        setError('User already exists');
      } else {
        setError('Error during signup');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center flex items-center justify-center p-4" 
      style={{
        backgroundImage: `url(${SignUpBg})`,
        backgroundBlendMode: 'overlay'
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      
      <div className="w-full mt-20 max-w-5xl bg-white bg-opacity-90 shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 relative z-10">
        {/* Left Side - Illustration */}
        <div className="hidden md:flex bg-navy p-12 items-center justify-center">
          <div className="text-white text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">Welcome to Talx</h1>
            <p className="text-xl text-indigo-100 mb-8">
              Your gateway to transformative career opportunities
            </p>
            
            <div className="space-y-6 text-left">
              {[
                { icon: '🚀', text: 'Smart Job Matching' },
                { icon: '🤖', text: 'AI-Powered Career Insights' },
                { icon: '🌐', text: 'Global Network Connections' },
                { icon: '📊', text: 'Comprehensive Profile Analysis' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="text-lg text-indigo-200">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
              Create Your Account
            </h2>
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r-lg">
                <p>{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 group"
                disabled={loading}
              >
                {loading ? (
                  <ClipLoader size={20} color={"#fff"} loading={loading} />
                ) : (
                  <>
                    Sign Up
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
                  </>
                )}
              </button>
            </form>
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;