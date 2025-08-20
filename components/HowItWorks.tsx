"use client";
import React, { useEffect, useRef } from "react";
import "./howitworks.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Share2, Code, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: <Users size={28} color="#ff4da6" />, title: "Create a Room", desc: "Start a coding session in seconds — no downloads, no setup." },
  { icon: <Share2 size={28} color="#4ade80" />, title: "Invite Your Team", desc: "Share your link and collaborate instantly." },
  { icon: <Code size={28} color="#60a5fa" />, title: "Code Together", desc: "Work in real-time with live edits and chat." },
  { icon: <Rocket size={28} color="#facc15" />, title: "Deploy & Share", desc: "Push to GitHub or share your work directly." },
];

export default function HowItWorks() {
  const ref = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".how-step");
    gsap.set(items, { opacity: 0, y: 40 });

    gsap.to(items, {
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.15
    });
  }, []);

  return (
    <section className="how-section" ref={ref}>
      <h2 className="how-heading playfair">How It Works</h2>
      <div className="how-steps">
        {steps.map((step, i) => (
          <div key={i} className="how-step">
            <div className="how-icon">{step.icon}</div>
            <h3 className="quicksand">{step.title}</h3>
            <p className="dm-sans">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
