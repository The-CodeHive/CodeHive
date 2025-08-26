"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline/next"), { ssr: false });

interface OptimizedSplineProps {
  scene: string;          // link to Spline scene
  fallback?: string;      // optional fallback image
  scale?: number;         // render scale 
  className?: string;     // wrapper styling
}

export default function OptimizedSpline({
  scene,
  fallback = "/spline-fallback.png",
  scale = 0.7,
  className = "",
}: OptimizedSplineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observe visibility of the component
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Apply resolution scaling when Spline is mounted
  useEffect(() => {
    if (!isVisible) return;
    const canvas = containerRef.current?.querySelector("canvas");
    if (canvas) {
      const ctx =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (ctx) {
        canvas.width = canvas.clientWidth * scale;
        canvas.height = canvas.clientHeight * scale;
        canvas.style.imageRendering = "auto";
        canvas.style.willChange = "transform";
      }
    }
  }, [isVisible, scale]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {isVisible ? (
        <Spline scene={scene} />
      ) : (
        <img
          src={fallback}
          alt="3D Preview"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
