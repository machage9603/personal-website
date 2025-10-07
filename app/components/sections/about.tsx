"use client";

import { motion } from "framer-motion";
import Navbar from "../Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="relative min-h-screen flex items-center px-6 py-32 lg:px-12 xl:px-20 2xl:px-32"
      >
        <div className="w-full max-w-[1600px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-green-400 text-lg font-mono font-semibold">01.</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                About Me
              </h2>
              <div className="flex-1 h-px bg-gray-800 ml-6"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="space-y-5 text-base md:text-lg text-gray-400 leading-relaxed">
              <p>
                {"I'm"} <span className="text-white font-semibold">Mike Machage</span>, a top-tier software engineer passionate about turning bold ideas into reality with modern JavaScript powerhouses like{" "}
                <span className="text-green-400 font-medium">Next.js</span>,{" "}
                <span className="text-green-400 font-medium">React</span>,{" "}
                <span className="text-green-400 font-medium">Node.js</span> &{" "}
                <span className="text-green-400 font-medium">TypeScript</span>.
              </p>

              <p>
                My process is fast and founder-friendly: from first contact to coding in just{" "}
                <span className="text-white font-semibold">48 hours</span>, I eliminate hiring bottlenecks and accelerate your project—whether {"it's"} a sleek frontend, robust backend, or a{" "}
                <span className="text-white font-semibold">30-day MVP</span>.
              </p>

              <p>
                What sets me apart is my commitment to partnership. I {"don't"} just code—I strategize, lead, and take ownership, ensuring your solution evolves with your needs. With a risk-free guarantee and{" "}
                <span className="text-white font-semibold">30 days of free post-launch support</span>.
              </p>

              <p>
                Whether {"you're"} a startup founder with a bold vision or a company leveling up your tech, {"I'm"} here to make it happen. Ready to bring your ideas to life?{" "}
                <span className="text-green-400 font-semibold">{"Let's"} chat about your next step!</span>
              </p>
            </div>
          </motion.div>

          {/* Bottom Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-20 origin-center"
          ></motion.div>
        </div>
      </section>
    </>
  );
}