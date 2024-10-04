"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

export default function Home() {
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
        <Image
          src="/dp.jpeg"
          alt="Mike Machage"
          width={150}
          height={150}
          className="rounded-full mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">MIKE MACHAGE</h1>
        <div className="w-16 h-px bg-[#2B2B2B] dark:bg-white my-4"></div>
        <h2 className="text-lg mb-8">SOFTWARE ENGINEER</h2>
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="flex space-x-8">
          <a
            href="https://github.com/machage9603"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#2B2B2B] dark:text-white hover:text-[#24292e] dark:hover:text-[#ebebeb] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
          </a>
          <a
            href="https://twitter.com/sermachage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-[#1DA1F2] hover:text-[#0c85d0] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} className="w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/mike-machage/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#0077B5] hover:text-[#005885] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10" />
          </a>
          <a
            href="https://medium.com/@machage_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#0077B5] hover:text-[#005885] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faMedium} className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
}
