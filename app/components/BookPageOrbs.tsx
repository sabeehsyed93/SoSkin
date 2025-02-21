'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BookPageOrbs() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const orbs = [
    { size: 400, color: '#ccab82', speed: 0.3, opacity: 0.046 },
    { size: 300, color: '#ccab82', speed: 0.5, opacity: 0.04 },
    { size: 250, color: '#ccab82', speed: 0.7, opacity: 0.046 },
    { size: 400, color: '#ccab82', speed: 0.2, opacity: 0.035 },
    { size: 350, color: '#ccab82', speed: 0.4, opacity: 0.04 },
    { size: 450, color: '#ccab82', speed: 0.6, opacity: 0.046 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" style={{ minHeight: '100vh' }}>
      {orbs.map((orb, index) => {
        // Calculate position relative to viewport center
        const x = ((mousePosition.x - 50) * orb.speed * 20);
        const y = ((mousePosition.y - 50) * orb.speed * 20);
        
        return (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              backgroundColor: orb.color,
              opacity: orb.opacity,
              left: `${index % 2 ? 20 : 60}%`,
              top: `${(index * 20) % 80}%`,
              transform: `translate(-50%, -50%)`,
            }}
            animate={{
              x,
              y,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              mass: 2,
            }}
          />
        );
      })}
    </div>
  );
}
