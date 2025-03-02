"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Phone, Mail } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl flex flex-col items-center">
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-4">
        I’m Mike Machage, a top-tier software engineer passionate about turning bold ideas into reality with modern technologies like JavaScript Powerhouses: Next.js, React, Node.js, TypeScript, Python,AWS, Kubernetes, Docker,Flutter
        </p>
        <p className="mb-4">
        My process is fast and founder-friendly: from first contact to coding in just 48 hours, I eliminate hiring headaches and accelerate your project—whether it’s a sleek frontend, robust backend, or a 30-day MVP.
        </p>
        <p className="mb-4">
        My process is fast and founder-friendly: from first contact to coding in just 48 hours, I eliminate hiring bottlenecks and accelerate your project—whether it’s a sleek frontend, robust backend, or a 30-day MVP.
        </p>
        <p className="mb-4">
        My mission? To deliver Silicon Valley-grade web and software solutions—scalable, efficient, and user-focused—at half the cost. I empower startups and businesses globally by saving you up to 50% compared to traditional agencies, all while maintaining top-tier quality.
        </p>
        <p className="mb-4">
        What sets me apart is my commitment to partnership. I don’t just code—I strategize, lead, and take ownership, ensuring your solution evolves with your needs. With a risk-free guarantee and 30 days of free post-launch support.
        </p>
        <p className="mb-4">
        Whether you’re a startup founder with a bold vision or a company leveling up your tech, I’m here to make it happen. Ready to bring your ideas to life? Let’s chat about your next step!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
          <motion.a
            href="tel:+254707800048"
            className="group relative flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg transition-all duration-300 hover:from-green-600 hover:to-emerald-700 hover:shadow-xl active:scale-95 w-full sm:w-auto overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gradient overlay for hover effect */}
            <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <Phone className="w-5 h-5 relative z-10" />
            <span className="text-lg font-medium relative z-10">+254707800048</span>
            {/* Subtle shine effect */}
            <span className="absolute inset-0 -top-1/2 w-1/4 bg-white/20 transform -skew-x-12 transition-all duration-300 group-hover:left-full -left-1/4"></span>
          </motion.a>

          {/* Keeping the email button as is for this example */}
          <motion.a
            href="mailto:mikemachage@gmail.com"
            className="flex items-center justify-center space-x-2 px-6 py-3 text-current border border-current rounded-full transition-all duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white active:bg-[#DB4437] active:border-[#DB4437] w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span className="text-lg">mikemachage@gmail.com</span>
          </motion.a>
        </div>
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mt-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>

        <p className="text-center mt-8 mb-4 text-xl font-semibold">Recreation</p>
        <div className="flex flex-wrap justify-center gap-4">

            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/Man%20Bouncing%20Ball%20Medium-Dark%20Skin%20Tone.png?raw=true"
              alt="Basketball"
              width="40"
              height="40"
            />

            <img
              src="https://raw.githubusercontent.com/jrohitofficial/jrohitofficial/master/Soccer%20Ball.webp"
              alt="Soccer"
              width="40"
              height="40"
            />

            <img
              src="https://raw.githubusercontent.com/jrohitofficial/jrohitofficial/master/Video%20Game.webp"
              alt="Video Games"
              width="40"
              height="40"
            />

            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/Musical%20Notes.png?raw=true"
              alt="Music"
              width="40"
              height="40"
            />

            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/Man%20Technologist%20Medium-Dark%20Skin%20Tone.png?raw=true"
              alt="Technology"
              width="40"
              height="40"
            />

            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/globe.gif?raw=true"
              alt="Travel"
              width="40"
              height="40"
            />

            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/book.gif?raw=true"
              alt="Reading"
              width="40"
              height="40"
            />

            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/music.gif?raw=true"
              alt="Music"
              width="40"
              height="40"
            />
        </div>
      </div>
    </div>
  );
}
