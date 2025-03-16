import React, { useState, useEffect } from 'react';

interface TypedHeadingProps {
  lines: string[];
  speed?: number;
  pause?: number;
  className?: string;
}

const TypedHeading: React.FC<TypedHeadingProps> = ({
  lines = [],
  speed = 100,
  pause = 1000,
  className = ""
}) => {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (lines.length === 0) return;

    const currentLine = lines[lineIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setText(currentLine.substring(0, text.length + 1));

        // If we've typed the full line, start deleting after a pause
        if (text.length === currentLine.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, pause);
        }
      } else {
        // Deleting
        setText(currentLine.substring(0, text.length - 1));

        // If we've deleted the whole line, move to next line
        if (text.length === 0) {
          setIsDeleting(false);
          setLineIndex((lineIndex + 1) % lines.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, lineIndex, isDeleting, lines, speed, pause]);

  const styles = {
    container: {
      fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 500,
      color: '#2563eb',
      position: 'relative' as 'relative',
      padding: '0.5rem 0',
    },
    cursor: {
      display: 'inline-block',
      width: '3px',
      height: '1.2em',
      backgroundColor: '#2563eb',
      marginLeft: '0.2rem',
      verticalAlign: 'middle',
      animation: 'blink 1s step-end infinite',
    }
  };

  return (
    <div className={`text-center text-2xl ${className}`} style={styles.container}>
      <span>{text}</span>
      <span style={styles.cursor}></span>
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TypedHeading;