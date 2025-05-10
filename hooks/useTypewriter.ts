"use client";
import { useEffect, useState, useRef } from 'react';

export const useTypewriter = (text: string, speed = 60) => {
  const [displayed, setDisplayed] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const indexRef = useRef(0);

  useEffect(() => {
    console.log('useTypewriter effect triggered with text:', text); // Debug log
    indexRef.current = 0;
    setDisplayed(''); // Reset displayed text when text prop changes

    const typeNextChar = () => {
      if (indexRef.current < text.length) {
        setDisplayed(text.substring(0, indexRef.current + 1));
        indexRef.current += 1;
        intervalRef.current = setTimeout(typeNextChar, speed);
      }
    };

    // Start typing
    typeNextChar();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [text, speed]);

  return displayed;
};