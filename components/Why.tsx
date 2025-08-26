"use client";

import React from "react";
import OptimizedSpline from "@/components/OptimizedSpline";
import "./why.css";

export default function Why() {
  

  return (
    <section className="why-section">
      <div className="why-corner-div" />
      <div className="why-spline-wrapper">
        <OptimizedSpline
                  scene="https://prod.spline.design/wytpSYfK3JJfFXOV/scene.splinecode"
                  fallback=""
                  scale={1} 
          />
      </div>
      <div className="why-text-container">
        <h1 className="why-heading bitmap-single">Why CodeHive?</h1>
        <h3 className="why-subheading playfair">Code smarter. Together.</h3>
        <p className="why-description dm-sans">
           · Real-time collaboration, blazing-fast UI, and seamless GitHub integration — all in one sleek workspace.
        </p>
        <p className="why-description dm-sans">
           · Build projects, share ideas, and prototype faster without the setup overhead.
        </p>
        <p className="why-description dm-sans">
           · Whether you're solo or in a team, CodeHive makes coding feel effortless.
        </p>
      </div>

    </section>
  );
}
