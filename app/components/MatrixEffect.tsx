"use client";

import React, { useRef, useEffect } from "react";

const MatrixEffect: React.FC<{ className?: string; quantity?: number; speed?: number }> = ({
  className = "",
  quantity = 20,  
  speed = 1,    
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const columns = useRef<number[]>([]);
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  const initCanvas = () => {
    resizeCanvas();
    createColumns();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      if (context.current) {
        context.current.scale(dpr, dpr);
      }
    }
  };

  const createColumns = () => {
    const columnCount = Math.floor(canvasSize.current.w / 20); 
    columns.current = Array(columnCount).fill(0);
  };

  const drawMatrix = () => {
    if (!context.current) return;

    context.current.fillStyle = "rgba(0, 0, 0, 0.05)"; 
    context.current.fillRect(0, 0, canvasSize.current.w, canvasSize.current.h);

    context.current.fillStyle = "rgba(255, 255, 255, 0.8)"; 
    context.current.font = "15pt Arial"; 

    columns.current.forEach((yPos, index) => {
      const text = Math.random() > 0.5 ? "0" : "1";
      const xPos = index * 20;

      if (xPos < canvasSize.current.w * 0.25 || xPos > canvasSize.current.w * 0.75) {

        if (yPos > canvasSize.current.h + Math.random() * 10000) {
          columns.current[index] = 0;
        } else {
          columns.current[index] = yPos + 20 * speed;
        }
      }
    });
  };

  const animate = () => {
    drawMatrix();
    window.requestAnimationFrame(animate);
  };

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} style={{ background: 'transparent' }} />
    </div>
  );
};

export default MatrixEffect;
