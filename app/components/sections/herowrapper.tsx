"use client";

import { useState, useEffect } from 'react';
import Hero from './hero';

interface HeroWrapperProps {
  skills: string[];
  socialIcons: any[];
}

export default function HeroWrapper({ skills, socialIcons }: HeroWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <Hero 
      isVisible={isVisible} 
      skills={skills} 
      currentSkill={currentSkill} 
      socialIcons={socialIcons} 
    />
  );
}