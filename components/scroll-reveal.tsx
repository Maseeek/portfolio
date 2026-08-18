"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  width = "100%",
  delay = 0,
  className = "",
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={className} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {children}
      </motion.div>
    </div>
  );
};


