"use client";
import { useEffect, useState, useRef } from 'react';

export const useTypewriter = (text: string, speed = 60) => {
  const [displayed, setDisplayed] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    let i = 0;
    setDisplayed(''); // Reset displayed text when text prop changes

    intervalRef.current = setInterval(() => {
      setDisplayed(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(intervalRef.current);
      }
    }, speed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, speed]);

  return displayed;
};