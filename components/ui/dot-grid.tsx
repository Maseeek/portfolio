"use client";
import React, { useEffect, useRef } from "react";

interface DotGridProps {
    dotSize?: number;
    gap?: number;
    baseColor?: string;
    activeColor?: string;
    shockRadius?: number;
    shockStrength?: number;
    returnDuration?: number;
}

export const DotGrid = ({
    dotSize = 2,
    gap = 40,
    baseColor = "rgba(255, 255, 255, 0.03)",
    activeColor = "rgba(168, 85, 247, 0.2)",
    shockRadius = 200,
    shockStrength = 2,
    returnDuration = 1.2,
}: DotGridProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let dots: Dot[] = [];
        let mouse = { x: -1000, y: -1000 };

        const inertia = 0.95;

        class Dot {
            originX: number;
            originY: number;
            x: number;
            y: number;
            vx: number;
            vy: number;
            color: string;

            constructor(x: number, y: number) {
                this.originX = x;
                this.originY = y;
                this.x = x;
                this.y = y;
                this.vx = 0;
                this.vy = 0;
                this.color = baseColor;
            }

            update() {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < shockRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (shockRadius - dist) / shockRadius;
                    const push = force * shockStrength;

                    this.vx -= Math.cos(angle) * push;
                    this.vy -= Math.sin(angle) * push;
                    this.color = activeColor;
                } else {
                    this.color = baseColor;
                }

                const ox = this.originX - this.x;
                const oy = this.originY - this.y;

                this.vx += ox * (1 / returnDuration) * 0.03;
                this.vy += oy * (1 / returnDuration) * 0.03;

                this.vx *= inertia;
                this.vy *= inertia;

                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, dotSize / 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            dots = [];
            const cols = Math.ceil(width / gap);
            const rows = Math.ceil(height / gap);

            const offsetX = (width - ((cols - 1) * gap)) / 2;
            const offsetY = (height - ((rows - 1) * gap)) / 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dots.push(new Dot(offsetX + i * gap, offsetY + j * gap));
                }
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            dots.forEach(dot => {
                dot.update();
                dot.draw();
            });
            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        init();
        window.addEventListener("resize", init);
        window.addEventListener("mousemove", handleMouseMove);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", init);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, [dotSize, gap, baseColor, activeColor, shockRadius, shockStrength, returnDuration]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-20 w-full h-full pointer-events-none"
        />
    );
};

