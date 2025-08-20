'use client';
import React, { useEffect, useRef } from 'react';
import './features.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Sparkles, Code2, GitBranch, Languages } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Code Collaboration',
    description: 'Work together in real-time. Edit, review, and debug code with your team, all in one place.',
    icon: <Sparkles size={18} color="#ff4da6" />,
    status: 'Live',
    tags: ['Teamwork', 'Live Edit'],
    colSpan: 'span-2',
  },
  {
    title: 'Real-Time Editing',
    description: 'See changes instantly as they happen. Stay in sync and boost team efficiency.',
    icon: <CheckCircle size={18} color="#4ade80" />,
    status: 'Beta',
    tags: ['Sync', 'Productivity'],
    colSpan: 'span-2',
  },
  {
    title: 'Syntax Highlighting',
    description: 'Clean, color-coded code that’s easier to read and helps you catch mistakes faster.',
    icon: <Code2 size={18} color="#60a5fa" />,
    tags: ['Clarity', 'Debugging'],
    colSpan: 'span-4',
  },
  {
    title: 'Version Control',
    description: 'Track changes, compare revisions, and revert with ease — all without leaving the editor.',
    icon: <GitBranch size={18} color="#facc15" />,
    status: 'Stable',
    tags: ['Git', 'Revisions'],
    colSpan: 'span-2',
  },
  {
    title: 'Multi-Language Support',
    description: 'Code in Python, JavaScript, C++, C, or Java — all within a unified workspace.',
    icon: <Languages size={18} color="#a78bfa" />,
    tags: ['Python', 'JavaScript', 'C++'],
    colSpan: 'span-2',
  },
];

const Features = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiles = gsap.utils.toArray('.feature-tile');

    gsap.set(tiles, { opacity: 0, y: 60 });

    gsap.to(tiles, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.15,
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="features-section">
      <div className="features-grid" ref={gridRef}>
        {features.map((feature, i) => (
          <div key={i} className={`feature-tile ${feature.colSpan}`}>
            <div className="tile-content">
              <div className="tile-header">
                <div className="tile-icon">{feature.icon}</div>
                {feature.status && <span className="tile-status">{feature.status}</span>}
              </div>
              <h3 className="quicksand">{feature.title}</h3>
              <p className="dm-sans">{feature.description}</p>
              {feature.tags && (
                <div className="tile-tags">
                  {feature.tags.map((tag, j) => (
                    <span key={j} className="tile-tag">#{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
