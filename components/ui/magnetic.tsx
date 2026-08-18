"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isFinePointerRef = useRef(false);
  const rectRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    isFinePointerRef.current = window.matchMedia("(pointer: fine)").matches;
  }, []);

  const handleMouseEnter = () => {
    if (!isFinePointerRef.current || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    rectRef.current = { left, top, width, height };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isFinePointerRef.current || !rectRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = rectRef.current;
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.35);
    y.set(middleY * 0.35);
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.div>
  );
}
