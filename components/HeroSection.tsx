'use client';

import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import './herosection.css';

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

      tl.from(".spline-wrapper", { opacity: 0, duration: 1 }) 
        .from(".top-left-logo", { opacity: 0, y: -30 }, "+=0.2")
        .from(".hero-heading", { opacity: 0, y: -40 }, "+=0.2")
        .from(".hero-description", { opacity: 0, y: -20 }, "+=0.2")
        .from(".hero-subtext", { opacity: 0, y: -10 }, "+=0.2")
        .from(".hero-button", {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "back.out(1.7)",
        }, "+=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section playfair" ref={sectionRef}>
      <div className="spline-wrapper">
        <Spline scene="https://draft.spline.design/6cHvFqPmrPGeyMNE/scene.splinecode" />
      </div>

      <img src="/logo.png" alt="Logo" className="top-left-logo" />
      <div className="corner-div" />

      <h1 className="hero-heading bitmap-single">CodeHive</h1>

      <div className="hero-text-container">
        <h2 className="hero-description quicksand">Collaborative Code Editor</h2>
        <p className="hero-subtext dm-sans">Build, Share, and Collaborate in Real-Time</p>
        <a href="https://codehive-8ilf.onrender.com/" target='_blank'>
          <button className="hero-button quicksand">Start Developing</button>
        </a>
      </div>
    </section>
  );
}
