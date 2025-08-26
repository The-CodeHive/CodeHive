"use client";

import React, { Suspense, CSSProperties } from "react";
import "./herosection.css";

// Lazy load Spline to reduce initial bundle size
const LazySpline = React.lazy(() => import("@splinetool/react-spline"));

interface OptimizedSplineProps {
  scene: string;
  fallback?: React.ReactNode;
  scale?: number;
  className?: string;
  style?: CSSProperties;
  fallbackImage?: string; // new prop for fallback image
  fallbackAlt?: string;
}

export default function OptimizedSpline({
  scene,
  fallbackImage,
  fallbackAlt = "Loading 3D scene...",
  fallback = null,
  scale = 1,
  className = "",
  style = {},
}: OptimizedSplineProps) {
  const resolvedFallback =
    fallback ??
    (fallbackImage ? (
      <img
        src={fallbackImage}
        alt={fallbackAlt}
        className="spline-fallback-image"
      />
    ) : (
      <div className="spline-fallback">Loading...</div>
    ));

  return (
    <div
      className={`optimized-spline ${className}`.trim()}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "center",
        ...style,
      }}
    >
      <Suspense fallback={resolvedFallback}>
        <LazySpline scene={scene} />
      </Suspense>
      <div className="corner-div" />
    </div>
  );
}
