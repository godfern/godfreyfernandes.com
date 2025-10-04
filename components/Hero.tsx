"use client";
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import { useTypewriter } from '../hooks';
import { motion } from 'framer-motion';

const Hero = () => {
  const typedText = useTypewriter("Hey, I'm Godfrey Fernandes.", 100);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log('Current typed text:', typedText);
  }, [typedText]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    let offset = 0;
    const waveSpeed = 0.02;
    const beachHeightRatio = 0.3;
    let animationId: number;

    // Animated elements state
    let boatX = -150;
    const boatSpeed = 0.3;
    const numFishes = 4;
    const fishes: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      phase: number;
    }> = [];

    const waves = [
      { color: 'rgba(63, 185, 198, 0.5)', amplitude: 15, frequency: 0.015, phase: 0 },
      { color: 'rgba(63, 185, 198, 0.7)', amplitude: 10, frequency: 0.012, phase: 10 },
      { color: 'rgba(63, 185, 198, 1.0)', amplitude: 5, frequency: 0.01, phase: 20 }
    ];

    function resizeCanvas() {
      const section = canvas?.parentElement;
      if (section && canvas) {
        width = section.clientWidth;
        height = section.clientHeight;
        canvas.width = width;
        canvas.height = height;

        const waterLevel = height * (1 - beachHeightRatio);

        // Reset boat position
        boatX = -150;

        // Initialize fishes on first run
        if (fishes.length === 0) {
          for (let i = 0; i < numFishes; i++) {
            fishes.push({
              x: Math.random() * width,
              y: waterLevel + (Math.random() * (height - waterLevel - 30)) + 20,
              size: 2 + Math.random() * 2,
              speed: 0.2 + Math.random() * 0.2,
              phase: Math.random() * 100
            });
          }
        }
      }
    }

    function draw() {
      if (!ctx || !canvas) return;

      // Calculate constant dimensions for this frame
      const sandHeight = height * beachHeightRatio;
      const waterLevel = height - sandHeight;

      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // Draw the Sand
      ctx.fillStyle = '#F4D3A1';
      ctx.fillRect(0, waterLevel, width, sandHeight);

      // Draw the Water and Waves
      waves.forEach((wave) => {
        ctx.fillStyle = wave.color;
        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, waterLevel);

        for (let x = 0; x <= width; x++) {
          const y = waterLevel + wave.amplitude * Math.sin(x * wave.frequency + offset + wave.phase);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.fill();
      });

      // Draw Boat (using ⛵ emoji)
      const waveY = waterLevel + waves[2].amplitude * Math.sin(boatX * waves[2].frequency + offset + waves[2].phase);

      ctx.save();
      ctx.translate(boatX, 0);

      // Draw Sailboat Emoji
      const emoji = '⛵';
      const emojiSize = 45;
      const boatWidth = 45;

      const emojiY = waveY + emojiSize * 0.2;

      ctx.font = `${emojiSize}px sans-serif`;
      ctx.fillText(emoji, 0, emojiY);

      ctx.restore();

      // Update boat position
      boatX += boatSpeed;
      if (boatX > width + boatWidth + 100) {
        boatX = -boatWidth - 100;
      }

      // Draw Fishes
      fishes.forEach((fish) => {
        const fishBob = Math.sin(offset * 5 + fish.phase) * 3;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';

        // Body
        ctx.beginPath();
        ctx.ellipse(fish.x, fish.y + fishBob, fish.size * 2, fish.size, 0, 0, Math.PI * 2);
        ctx.fill();

        // Tail
        ctx.beginPath();
        ctx.moveTo(fish.x + fish.size * 2, fish.y + fishBob);
        ctx.lineTo(fish.x + fish.size * 3, fish.y + fishBob - fish.size);
        ctx.lineTo(fish.x + fish.size * 3, fish.y + fishBob + fish.size);
        ctx.closePath();
        ctx.fill();

        // Update fish position
        fish.x -= fish.speed;

        if (fish.x < -10) {
          fish.x = width + 10;
          fish.y = waterLevel + (Math.random() * (height - waterLevel - 30)) + 20;
        }
      });

      offset += waveSpeed;
      animationId = requestAnimationFrame(draw);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen bg-white overflow-hidden" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative flex flex-col text-center px-4 min-h-screen z-10">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            // className="text-5xl font-bold mb-4 text-black min-h-[3rem]"
            className="text-5xl sm:text-7xl font-bold tracking-tight mb-4 text-brand-navy"
          >
            {typedText || ' '}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // className="text-xl md:text-2xl text-black max-w-2xl"
            className="text-xl md:text-4xl font-light text-brand-aqua mb-6"
          >
            Frontend Developer - Crafting Modern UI Experiences.
            {/* I love creating pixel-perfect, performant interfaces and exploring new technologies. */}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            // className="mt-4 text-lg text-black max-w-2xl"
            className="text-lg font-light sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Passionate about entrepreneurship. Obsessed with crafting performant user experiences and exploring innovative solutions for the future of the web.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
