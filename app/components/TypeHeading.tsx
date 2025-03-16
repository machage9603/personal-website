import React, { useState, useEffect } from 'react';

interface TypedHeadingProps {
  lines: string[];
  speed?: number;
  pause?: number;
}

const TypedHeading: React.FC<TypedHeadingProps> = ({
  lines = [],
  speed = 100,
  pause = 1000
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    if (lines.length === 0) return;

    const currentLine = lines[currentLineIndex];

    if (isTyping) {
      if (charIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + currentLine[charIndex]);
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
        const timer = setTimeout(() => {
          setIsTyping(true);
          setDisplayText('');
          setCharIndex(0);
          setCurrentLineIndex((currentLineIndex + 1) % lines.length);
        }, pause);
        return () => clearTimeout(timer);
      }
    }
  }, [lines, currentLineIndex, charIndex, isTyping, speed, pause]);

  return (
    <h2 className="text-center font-mono text-2xl font-bold">
      {displayText}<span className="animate-blink">|</span>
    </h2>
  );
};

export default TypedHeading;