"use client";
import { cn } from "/lib/utils";
import { motion, useMotionValue, useSpring } from "motion/react";
import React, { useState, useEffect } from "react";

export const NightSkyBackground = ({
  children,
  className
}) => {
  const [stars, setStars] = useState([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Generate random stars
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      twinkleDuration: Math.random() * 2 + 1,
    }));
    setStars(generatedStars);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#141b3d] to-[#1a1f3a]",
        className
      )}
    >
      {/* Stars */}
      {stars.map((star) => (
        <Star
          key={star.id}
          star={star}
          mouseX={mouseXSpring}
          mouseY={mouseYSpring}
        />
      ))}

      {/* Shooting stars */}
      <ShootingStar delay={3} />
      <ShootingStar delay={8} />
      <ShootingStar delay={15} />

      {/* Moon */}
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 shadow-[0_0_60px_rgba(226,232,240,0.4)]"
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Moon craters */}
        <div className="absolute top-6 left-4 w-3 h-3 rounded-full bg-slate-300/40" />
        <div className="absolute top-12 right-6 w-4 h-4 rounded-full bg-slate-300/30" />
        <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-slate-300/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const Star = ({ star, mouseX, mouseY }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        x: useSpring(
          useMotionValue(0),
          { damping: 50, stiffness: 100 }
        ),
        y: useSpring(
          useMotionValue(0),
          { damping: 50, stiffness: 100 }
        ),
      }}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: star.twinkleDuration,
        repeat: Infinity,
        delay: star.delay,
        ease: "easeInOut",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(2)';
        e.currentTarget.style.transition = 'transform 0.2s ease';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      whileHover={{
        scale: 2.5,
        boxShadow: "0 0 20px rgba(255,255,255,0.8)",
      }}
    />
  );
};

const ShootingStar = ({ delay }) => {
  const [mounted, setMounted] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [endX, setEndX] = React.useState(0);
  const [endY, setEndY] = React.useState(0);

  React.useEffect(() => {
    setMounted(true);

    const width = window.innerWidth;
    const height = window.innerHeight;

    setStartX(Math.random() * width);
    setEndX(Math.random() * width + 300);
    setEndY(height + 50);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      initial={{
        x: startX,
        y: -50,
        opacity: 0,
      }}
      animate={{
        x: endX,
        y: endY,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        repeatDelay: 10,
        ease: "easeIn",
      }}
    >
      <div className="absolute w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent -rotate-45 blur-sm" />
    </motion.div>
  );
};


// Demo usage
export default function Demo() {
  return (
    <NightSkyBackground>
      <div className="flex min-h-screen items-center justify-center">
        <div className="max-w-4xl px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Reach for the Stars
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-slate-300"
          >
            Move your cursor to interact with the stars ✨
          </motion.p>
        </div>
      </div>
    </NightSkyBackground>
  );
}