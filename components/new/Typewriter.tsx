"use client";
import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  style?: React.CSSProperties;
  className?: string;
}

export function Typewriter({
  words,
  speed = 90,
  deleteSpeed = 55,
  pauseTime = 2000,
  style,
  className,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[wordIndex % words.length];

    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return;
    }

    if (isDeleting) {
      if (displayed.length === 0) {
        setIsDeleting(false);
        setWordIndex(i => i + 1);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        setDisplayed(prev => prev.slice(0, -1));
      }, deleteSpeed);
    } else {
      if (displayed === current) {
        setIsPaused(true);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, speed);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, isPaused, wordIndex, words, speed, deleteSpeed, pauseTime]);

  return (
    <span style={{ ...style, whiteSpace: "nowrap" }} className={className}>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "0.85em",
          background: style?.color ?? "#9B5DE5",
          marginLeft: "2px",
          verticalAlign: "middle",
          animation: "tw-blink 1s step-end infinite",
        }}
      />
      <style>{`
        @keyframes tw-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
