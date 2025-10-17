"use client";

import { useState, useEffect } from "react";
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { SiBluesky } from '@icons-pack/react-simple-icons';
import Hero from "./hero";

const socialIcons = [
  {
    icon: Github,
    href: "https://github.com/machage9603",
    label: "GitHub",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/sermachage",
    label: "Twitter",
  },
  {
    icon: SiBluesky,
    href: "https://bsky.app/profile/sermachage.bsky.social",
    label: "Bluesky",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mikemachage/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:machage@example.com",
    label: "Email",
  },
];

const skills = ["Go", "Python", "TypeScript", "Rust"];

export default function HeroWrapper() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Hero
      isVisible={isVisible}
      skills={skills}
      currentSkill={currentSkill}
      socialIcons={socialIcons}
    />
  );
}