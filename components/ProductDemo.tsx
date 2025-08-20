"use client";
import React, { useEffect, useRef } from "react";
import "./productdemo.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductDemo() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".demo-media",
      { opacity: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="demo-section" ref={ref}>
      <h2 className="demo-heading playfair">See CodeHive in Action</h2>
      <p className="demo-subtext dm-sans">
        Experience the sleek, collaborative environment that makes coding with your team effortless.
      </p>
      <div className="demo-media">
        {/* Replace with real UI video or screenshots */}
        <img src="/demo-placeholder.png" alt="CodeHive Demo" />
      </div>
    </section>
  );
}
