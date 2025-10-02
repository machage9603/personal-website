"use client";

import { motion } from "framer-motion";
import Navbar from "../Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <Navbar />
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Article 1 */}
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="text-center mb-8">
          <p className="text-md mb-4">
            The Rise of AI Agents and Personal Supercomputers.
          </p>
          <motion.a
            href="https://medium.com/@machage_/the-rise-of-ai-agents-and-personal-supercomputers-3d7d797b9c4f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#00AB6C] text-white rounded-full hover:bg-opacity-80 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Article
          </motion.a>
        </div>
        <div className="w-16 h-px bg-[#2B2B2B] dark:bg-white my-4"></div>
        {/* Article 2 */}
        <div className="text-center mb-8">
          <p className="text-md mb-4">
          The Operator:Is This The End Of Virtual Assistants As We Know Them?
          </p>
          <motion.a
            href="https://medium.com/@machage_/the-operator-is-this-the-end-of-virtual-assistants-as-we-know-them-5de7d25ff188"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#00AB6C] text-white rounded-full hover:bg-opacity-80 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Article
          </motion.a>
        </div>
        <div className="w-16 h-px bg-[#2B2B2B] dark:bg-white my-4"></div>
        {/* Article 3 */}
        <div className="text-center mb-8">
          <p className="text-md mb-4">
          The Journey to ReadMeaker: A Personal Story.
          </p>
          <motion.a
            href="https://medium.com/@machage_/the-journey-to-readmeaker-a-personal-story-b54b4ec9f1c3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#00AB6C] text-white rounded-full hover:bg-opacity-80 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Article
          </motion.a>
        </div>
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </div>
  );
}