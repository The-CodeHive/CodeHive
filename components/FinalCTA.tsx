"use client";
import React, { useEffect, useRef } from "react";
import "./finalcta.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".finalcta-container",
      { opacity: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="finalcta-section" ref={ref}>
      <div className="finalcta-container">
        <h2 className="playfair">Ready to Code Smarter?</h2>
        <p className="dm-sans">
          Jump into your first collaborative coding session today — it’s free, fast, and fun.
        </p>
        <a href="https://codehive-8ilf.onrender.com/" target='_blank'>
          <button className="finalcta-button quicksand">
            Start Developing
          </button>
        </a>
      </div>
    </section>
  );
}
