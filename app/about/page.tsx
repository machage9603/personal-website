"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <Navbar />
      <div className="w-full max-w-2xl flex flex-col items-center">
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-4">
          Hi, I am Mike Machage, a Software Engineer with a strong passion for
          creating scalable, efficient, and user-centric web applications. I
          specialize in full-stack development, particularly in JavaScript
          technologies such as Next.js, React, Node.js, and TypeScript.
        </p>
        <p className="mb-4">
          Whether you are a startup looking to bring your business idea to life
          or an established company aiming to enhance your digital presence, I
          am here to help turn your vision into a reality. Let us collaborate to
          build solutions that not only meet your needs today but scale for
          tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <motion.a
            href="/resumeupdate.pdf"
            download
            className="flex items-center justify-center px-6 py-3 text-current border border-current rounded-full transition-all duration-300 hover:outline hover:outline-2 hover:outline-blue-300 focus:outline focus:outline-2 focus:outline-blue-600 active:outline active:outline-2 active:outline-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            My CV
          </motion.a>
        </div>
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mt-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>

        <p className="text-center mt-8 mb-4 text-xl font-semibold">Hobbies</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://mikemachage.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/Man%20Bouncing%20Ball%20Medium-Dark%20Skin%20Tone.png?raw=true"
              alt="Basketball"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://mikemachage.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/jrohitofficial/jrohitofficial/master/Soccer%20Ball.webp"
              alt="Soccer"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://mikemachage.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/jrohitofficial/jrohitofficial/master/Video%20Game.webp"
              alt="Video Games"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://mikemachage.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/Musical%20Notes.png?raw=true"
              alt="Music"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://mikemachage.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/Man%20Technologist%20Medium-Dark%20Skin%20Tone.png?raw=true"
              alt="Technology"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://mikemachage.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/globe.gif?raw=true"
              alt="Travel"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://mikemachage.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/book.gif?raw=true"
              alt="Reading"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://mikemachage.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.com/jrohitofficial/jrohitofficial/blob/master/music.gif?raw=true"
              alt="Music"
              width="40"
              height="40"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
