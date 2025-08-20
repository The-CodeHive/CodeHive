"use client";
import React, { useEffect, useRef } from "react";
import "./pricing.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Free Forever",
    price: "$0",
    desc: "Perfect for individuals and small teams just getting started.",
    features: ["Unlimited public rooms", "Real-time collaboration", "GitHub integration", "Multi-language support"],
    highlight: true,
  },
  {
    name: "Pro (Coming Soon)",
    price: "$12/mo",
    desc: "Advanced features for power users and professional teams.",
    features: ["Private rooms", "Version history", "Advanced integrations", "Priority support"],
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".pricing-card",
      { opacity: 0, y: 40 },
      {
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <section className="pricing-section" ref={ref}>
      <h2 className="pricing-heading playfair">Pricing</h2>
      <p className="pricing-subtext dm-sans">
        Simple plans that grow with you.
      </p>
      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div key={i} className={`pricing-card ${plan.highlight ? "highlight" : ""}`}>
            <h3 className="quicksand">{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p className="dm-sans">{plan.desc}</p>
            <ul className="pricing-features">
              {plan.features.map((f, idx) => (
                <li key={idx}>
                  <Check size={16} color="#00ffe0" /> {f}
                </li>
              ))}
            </ul>
            <button className="pricing-btn quicksand">
              {plan.name === "Free Forever" ? "Get Started" : "Join Waitlist"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
