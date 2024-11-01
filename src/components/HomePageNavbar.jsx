import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "../libs/utils";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };

  // Get initial from email
  const emailInitial = email ? email.charAt(0).toUpperCase() : "";

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-30 px-4", className)}>
      <div className="flex justify-between items-center bg-black/30 border border-white/50 shadow-input px-8 py-4 rounded-full backdrop-blur-md w-full overflow-hidden">
        
        {/* Logo on the left */}
        <a href="/" className="text-2xl font-bold text-white whitespace-nowrap">
          JobFinder
        </a>

        {/* Center Menu for Large Screens */}
        <div className="justify-center space-x-8 text-white hidden lg:flex">
          <a href="/" className="cursor-pointer hover:opacity-[0.9]">Home</a>
          <a href="/search" className="cursor-pointer hover:opacity-[0.9]">Find Job</a>
          <a href="/news" className="cursor-pointer hover:opacity-[0.9]">BulletinBuzz</a>
          <a href="/post-job" className="cursor-pointer hover:opacity-[0.9]">Post A Job</a>
        </div>

        {/* Profile Icon and Auth Links */}
        <div className="flex items-center space-x-4">
          {token ? (
            <div className="flex items-center space-x-4">
              {/* Profile Icon */}
              <div
                className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer text-black font-semibold flex items-center justify-center"
              >
                {emailInitial}
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="py-2 px-4 text-white font-semibold bg-red-500 hover:bg-red-600 rounded"
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              <a href="/login" className="p-2 text-white rounded hover:bg-white hover:text-black">
                Login
              </a>
              <a href="/signup" className="p-2 text-white rounded hover:bg-white hover:text-black">
                SignUp
              </a>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <button onClick={handleMenuToggler} className="lg:hidden">
            {isMenuOpen ? <FaTimes size={25} className="text-white" /> : <FaBars size={25} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="bg-white border rounded-lg shadow-lg py-4 mt-2 lg:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-4 text-center">
            <li><a href="/" className="text-gray-600 hover:text-black">Home</a></li>
            <li><a href="/search" className="text-gray-600 hover:text-black">Find Job</a></li>
            <li><a href="/news" className="text-gray-600 hover:text-black">BulletinBuzz</a></li>
            <li><a href="/post-job" className="text-gray-600 hover:text-black">Post A Job</a></li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}