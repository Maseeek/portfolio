"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view">("default");
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const cursorTypeRef = useRef(cursorType);
  cursorTypeRef.current = cursorType;

  const isVisibleRef = useRef(isVisible);
  isVisibleRef.current = isVisible;

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-performance smooth springs for outer ring
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 350, mass: 0.35 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 350, mass: 0.35 });

  // Fast springs for inner dot
  const dotX = useSpring(mouseX, { damping: 20, stiffness: 1000, mass: 0.05 });
  const dotY = useSpring(mouseY, { damping: 20, stiffness: 1000, mass: 0.05 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setIsEnabled(true);
    document.body.classList.add("custom-cursor-active");

    let mouseOverRaf: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisibleRef.current) {
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (mouseOverRaf) return;
      mouseOverRaf = requestAnimationFrame(() => {
        mouseOverRaf = null;
        const target = e.target as HTMLElement | null;
        if (!target) return;

        const isView = target.closest(".p-card, .svc-card, [data-cursor='view']");
        const isInteractive = target.closest("a, button, .exp-item, .interactive, input, select, textarea, [role='button']");

        let nextType: "default" | "hover" | "view" = "default";
        if (isView) {
          nextType = "view";
        } else if (isInteractive) {
          nextType = "hover";
        }

        if (nextType !== cursorTypeRef.current) {
          setCursorType(nextType);
        }
      });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (mouseOverRaf) cancelAnimationFrame(mouseOverRaf);
    };
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Outer Ring - Hardware Composited */}
            <motion.div
              style={{
                x: ringX,
                y: ringY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isClicked
                  ? 0.8
                  : cursorType === "view"
                  ? 2.1
                  : cursorType === "hover"
                  ? 1.5
                  : 1,
                opacity: 1,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className={`absolute w-8 h-8 rounded-full will-change-transform flex items-center justify-center pointer-events-none border transition-colors duration-200 ${
                cursorType === "view"
                  ? "bg-white text-black border-transparent shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  : cursorType === "hover"
                  ? "bg-accent/15 border-accent/70 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                  : "bg-transparent border-white/40"
              }`}
            >
              {cursorType === "view" && (
                <span className="text-[7px] font-black uppercase tracking-widest text-black select-none">
                  View
                </span>
              )}
            </motion.div>

            {/* Inner Dot - Hardware Composited */}
            <motion.div
              style={{
                x: dotX,
                y: dotY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isClicked ? 1.5 : cursorType === "view" ? 0 : 1,
                opacity: cursorType === "view" ? 0 : 1,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute w-1.5 h-1.5 rounded-full bg-white will-change-transform pointer-events-none shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
