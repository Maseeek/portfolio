"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view">("default");
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the outer ring
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.6 });

  // Fast springs for the inner dot
  const dotX = useSpring(mouseX, { damping: 20, stiffness: 800, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 20, stiffness: 800, mass: 0.1 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [mouseX, mouseY, isVisible]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isView = target.closest(".p-card, .svc-card, [data-cursor='view']");
    const isInteractive = target.closest("a, button, .exp-item, .interactive");

    if (isView) {
      setCursorType("view");
    } else if (isInteractive) {
      setCursorType("hover");
    } else {
      setCursorType("default");
    }
  }, []);

  const handleMouseDown = useCallback(() => setIsClicked(true), []);
  const handleMouseUp = useCallback(() => setIsClicked(false), []);
  const handleMouseLeaveWindow = useCallback(() => setIsVisible(false), []);
  const handleMouseEnterWindow = useCallback(() => setIsVisible(true), []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp, handleMouseLeaveWindow, handleMouseEnterWindow]);

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderWidth: "1.5px",
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    hover: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: "1px",
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderWidth: "0px",
      borderColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "normal" as const,
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Outer Ring */}
            <motion.div
              style={{
                x: ringX,
                y: ringY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                ...variants[cursorType],
                scale: isClicked ? 0.9 : 1,
                opacity: 1,
              }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute rounded-full mix-blend-difference will-change-transform flex items-center justify-center overflow-hidden"
            >
              <AnimatePresence>
                {cursorType === "view" && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-[10px] font-black uppercase tracking-widest text-black"
                  >
                    View
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Inner Dot */}
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
              className="absolute w-1.5 h-1.5 rounded-full bg-white mix-blend-difference will-change-transform"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
