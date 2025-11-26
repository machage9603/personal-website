"use client";

import { useState, useEffect } from "react";
import { SiBluesky, SiGithub, SiX, SiGmail } from '@icons-pack/react-simple-icons';
import { AiFillLinkedin } from "react-icons/ai";
import Hero from "./hero";

const socialIcons = [
  {
    icon: SiGithub,
    href: "https://github.com/machage9603",
    label: "GitHub",
  },
  {
    icon: SiX,
    href: "https://twitter.com/sermachage",
    label: "Twitter",
  },
  {
    icon: SiBluesky,
    href: "https://bsky.app/profile/sermachage.bsky.social",
    label: "Bluesky",
  },
  {
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/mikemachage/",
    label: "LinkedIn",
  },
  {
    icon: SiGmail,
    href: "mailto:mikemachage@gmail.com",
    label: "Email",
  },
];

const skills = ["Go/Gin/GoFr", "Python/Django", "NextJS/TypeScript", "Google Cloud", "PostgreSQL"];

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