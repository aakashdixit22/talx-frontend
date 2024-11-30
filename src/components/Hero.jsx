"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import {Link} from "react-router-dom"



export default function Hero() {

  return (
    (<AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
        Step into a World of Opportunities
        </div>
        <div
          className="font-extralight text-base md:text-4xl text-neutral-200 py-4 text-center">
         Discover your potential and connect with the career you've been waiting.
        </div>
        <Link to="/search">
        <button
          
          className="bg-white rounded-md w-fit text-black px-4 py-2">
          Explore Jobs
        </button>
        </Link>
      </motion.div>
    </AuroraBackground>)
  );
}
