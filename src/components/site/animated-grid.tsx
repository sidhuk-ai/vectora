"use client"

import { useEffect, useState } from "react";

export function AnimatedGrid() {
    const [particles, setParticles] = useState<
    { left: string; top: string; delay: string; duration: string }[]
  >([]);

  useEffect(() => {
    const generated = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${15 + Math.random() * 10}s`,
    }));
    setParticles(generated);
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid-pattern"></div>
      </div>

      {/* Circular Gradient Mask */}
      <div className="absolute inset-0">
        <div className="circular-gradient-mask"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((style, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: style.left,
              top: style.top,
              animationDelay: style.delay,
              animationDuration: style.duration,
            }}
          />
        ))}
      </div>
    </div>
  )
}
