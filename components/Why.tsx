"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OptimizedSpline from "@/components/OptimizedSpline";
import "./why.css";

gsap.registerPlugin(ScrollTrigger);

export default function Why() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(
        containerRef.current!.querySelectorAll(".animate-text")
      );

      gsap.from(elements, {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // when section enters viewport
          toggleActions: "play none none reset",
        },
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section className="why-section" ref={containerRef}>
      <div className="why-corner-div" />
      <div className="why-spline-wrapper">
        <OptimizedSpline
          scene="https://prod.spline.design/wytpSYfK3JJfFXOV/scene.splinecode"
          fallback=""
          scale={1}
        />
      </div>

      <div className="why-text-container">
        <h1 className="why-heading bitmap-single animate-text">Why CodeHive?</h1>
        <h3 className="why-subheading playfair animate-text">Code smarter. Together.</h3>
        <p className="why-description dm-sans animate-text">
          · Real-time collaboration, blazing-fast UI, and seamless GitHub integration — all in one sleek workspace.
        </p>
        <p className="why-description dm-sans animate-text">
          · Build projects, share ideas, and prototype faster without the setup overhead.
        </p>
        <p className="why-description dm-sans animate-text">
          · Whether you're solo or in a team, CodeHive makes coding feel effortless.
        </p>
      </div>
    </section>
  );
}
