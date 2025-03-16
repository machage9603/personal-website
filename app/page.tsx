"use client";

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
import Image from "next/image";
import TypedHeading from "./components/TypeHeading";

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const socialIcons = [
  {
    icon: faGithub,
    href: "https://github.com/machage9603",
    label: "GitHub",
    color: "text-[#24292e]",
  },
  {
    icon: faTwitter,
    href: "https://twitter.com/sermachage",
    label: "Twitter",
    color: "text-[#1DA1F2]",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/mikemachage/",
    label: "LinkedIn",
    color: "text-[#0077B5]",
  },
  {
    icon: faMedium,
    href: "https://medium.com/@machage_",
    label: "Medium",
    color: "text-[#00AB6C]",
  },
];

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
          src="/profile.jpg"
          alt="Mike Machage"
          width={150}
          height={150}
          priority
          className="rounded-full mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">MIKE MACHAGE</h1>
        <div className="w-16 h-px bg-[#2B2B2B] dark:bg-white my-4"></div>
        <h2 className="text-lg mb-8">
        <TypedHeading
  lines={[
    "SOFTWARE ENGINEER",
    "DEVOPS ENGINEER",
    "WEB DESIGN & DEVELOPMENT",
    "TECHNICAL WRITER"
  ]}
  speed={100}
  pause={1000}
/>
        </h2>
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
          className="flex space-x-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`${social.color} hover:opacity-80 transition-colors duration-300`}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={social.icon} className="w-18 h-18" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
