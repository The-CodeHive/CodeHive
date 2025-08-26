"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import OptimizedSpline from "@/components/OptimizedSpline";
import "./herosection.css";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

      tl.from(".spline-wrapper", { opacity: 0, duration: 1 })
        .from(".top-left-logo", { opacity: 0, y: -30 }, "+=0.2")
        .from(".hero-heading", { opacity: 0, y: -40 }, "+=0.2")
        .from(".hero-description", { opacity: 0, y: -20 }, "+=0.2")
        .from(".hero-subtext", { opacity: 0, y: -10 }, "+=0.2")
        .from(
          ".hero-button",
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "+=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setShowSpline(entries[0].isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section playfair" ref={sectionRef}>
      
        {showSpline && (
          
          <OptimizedSpline
            scene="https://draft.spline.design/6cHvFqPmrPGeyMNE/scene.splinecode"
            scale={1}
            className="spline-wrapper"
          />


        )}
      

      <img src="/logo.png" alt="Logo" className="top-left-logo" />
      <div className="corner-div" />

      <h1 className="hero-heading bitmap-single">CodeHive</h1>

      <div className="hero-text-container">
        <h2 className="hero-description quicksand">Collaborative Code Editor</h2>
        <p className="hero-subtext dm-sans">Build, Share, and Collaborate in Real-Time</p>
        <a href="https://codehive-8ilf.onrender.com/" target="_blank">
          <button className="hero-button quicksand">Start Developing</button>
        </a>
      </div>
    </section>
  );
}
