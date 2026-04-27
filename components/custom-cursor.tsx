"use client";
import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ cx: 0, cy: 0, px: 0, py: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      pos.current.cx = e.clientX;
      pos.current.cy = e.clientY;
    };

    let raf: number;
    const loop = () => {
      const p = pos.current;
      p.px += (p.cx - p.px) * 0.15;
      p.py += (p.cy - p.py) * 0.15;
      cursor.style.transform = `translate(${p.px - 8}px, ${p.py - 8}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    // Grow on interactive elements
    const interactives = document.querySelectorAll(
      "a, button, .p-card, .svc-card, .exp-item"
    );
    const enter = () => cursor.classList.add("grow");
    const leave = () => cursor.classList.remove("grow");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return <div ref={cursorRef} id="custom-cursor" />;
};
