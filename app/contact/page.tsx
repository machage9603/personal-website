"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <Navbar />
      <div className="w-full max-w-md flex flex-col items-center">
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Contact Me
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
          <motion.a
            href="tel:+254707800048"
            className="flex items-center justify-center space-x-2 px-6 py-3 text-current border border-current rounded-full transition-all duration-300 hover:bg-green-500 hover:border-green-500 hover:text-white active:bg-green-600 active:border-green-600 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg">+254707800048</span>
          </motion.a>
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
      </div>
    </div>
  );
}
