'use client';
import { useState, useEffect } from 'react';

const titles = ['<godfrey/>', '<dev/>'];

function morphCharacters(from: string, to: string, progress: number) {
    let result = '';
    const length = Math.max(from.length, to.length);
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        const fromChar = from[i] || '';
        const toChar = to[i] || '';
        if (progress >= 1) {
            result += toChar;
        } else if (progress > i / length) {
            result += toChar;
        } else if (fromChar) {
            const randChar = charset[Math.floor(Math.random() * charset.length)];
            result += randChar;
        } else {
            result += '';
        }
    }

    return result;
}

export default function HoverMorphingLogo() {
    const [displayText, setDisplayText] = useState(titles[0]);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) return;

        let frame = 0;
        let index = 0;
        const totalFrames = 20;
        let timeout: NodeJS.Timeout;

        const animate = () => {
            frame++;
            const current = titles[index];
            const next = titles[(index + 1) % titles.length];
            const progress = frame / totalFrames;
            const morphed = morphCharacters(current, next, progress);
            setDisplayText(morphed);

            if (frame < totalFrames) {
                timeout = setTimeout(animate, 40);
            } else {
                frame = 0;
                index = (index + 1) % titles.length;
                if (index !== 0) {
                    timeout = setTimeout(animate, 1000); // wait a bit before next morph
                } else {
                    setIsHovered(false); // stop when full cycle ends
                    setDisplayText(titles[0]);
                }
            }
        };

        animate();

        return () => clearTimeout(timeout);
    }, [isHovered]);

    return (
        <div
            className="text-2xl font-mono font-bold text-white-600 hover:cursor-pointer"
            // className={`${pacifico.variable} font-[var(--font-pacifico)] font-bold text-white-600 hover:cursor-pointer`}
            onMouseEnter={() => setIsHovered(true)}
        >
            {displayText}
        </div>
    );
}
