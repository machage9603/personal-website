import React from 'react';
import { Montserrat } from "next/font/google";
import HeroWrapper from './components/sections/herowrapper';
import About from './components/sections/about';
import Blog from './components/sections/blog';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`w-full min-h-screen bg-gray-950 text-gray-100 ${montserrat.className} font-mono flex flex-col`}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <Navbar />

      <main>
        <HeroWrapper />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <Footer />

      <div className="fixed top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
    </div>
  );
}