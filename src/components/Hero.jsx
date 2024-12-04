"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center min-h-screen px-4 py-16"
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white text-center leading-tight mb-4 tracking-tight">
            Step into a World of Opportunities
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-neutral-200 text-center font-light mb-8 max-w-3xl mx-auto">
            Discover your potential and connect with the career you've been waiting for.
          </p>
        </div>
        
        <div className="flex gap-4 items-center">
          <Link 
            to="/search" 
            className="group relative inline-flex items-center justify-center"
          >
            
            <button className="relative px-6 py-3 hover:bg-gray-400 bg-white text-black rounded-xl font-semibold 
              transform transition-all duration-300 
              hover:scale-105 hover:shadow-xl 
              focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Explore Jobs
            </button>
          </Link>
          
          <Link 
            to="/search" 
            className="group relative inline-flex items-center justify-center"
          >
            
            <button className="relative px-6 py-3 bg-white hover:bg-gray-400 text-black rounded-xl font-semibold 
              transform transition-all duration-300 
              hover:scale-105 hover:shadow-xl 
              focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              ResumeAI
            </button>
          </Link>
        </div>
      </motion.div>
  );
}