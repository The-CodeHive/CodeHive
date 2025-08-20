"use client";
import React, { useState, useEffect, useRef } from "react";
import "./faq.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Is CodeHive free?",
    a: "Yes! Our Free Forever plan includes unlimited public rooms, real-time collaboration, and GitHub integration."
  },
  {
    q: "Do I need to install anything?",
    a: "Nope. CodeHive runs entirely in your browser — just open a room link and start coding."
  },
  {
    q: "Which programming languages are supported?",
    a: "We support Python, JavaScript, C++, C, and Java. More coming soon!"
  },
  {
    q: "Can I make private rooms?",
    a: "Private rooms will be available in our upcoming Pro plan."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".faq-item",
      { opacity: 0, y: 40 },
      {
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out"
      }
    );
  }, []);

  return (
    <section className="faq-section" ref={ref}>
      <h2 className="faq-heading playfair">FAQ</h2>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div key={i} className="faq-item">
            <button
              className="faq-question quicksand"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.q}
              <ChevronDown
                className={`faq-icon ${openIndex === i ? "open" : ""}`}
                size={18}
              />
            </button>
            <div
              className={`faq-answer dm-sans ${
                openIndex === i ? "open" : ""
              }`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
