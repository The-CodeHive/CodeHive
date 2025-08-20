"use client";
import React, { useEffect, useRef } from "react";
import "./integrations.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const integrations = [
  { name: "GitHub", logo: "/github.png" },
  { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
];


export default function Integrations() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".integration-tile",
      { opacity: 0, y: 40 },
      {
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="integrations-section" ref={ref}>
      <h2 className="integrations-heading playfair">Seamless Integrations</h2>
      <p className="integrations-subtext dm-sans">
        CodeHive works flawlessly with the tools you already love.
      </p>
      <div className="integrations-grid">
        {integrations.map((item, i) => (
          <div className="integration-tile" key={i}>
            <img src={item.logo} alt={item.name} />
            <span className="quicksand">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
