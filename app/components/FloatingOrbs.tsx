'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingOrbs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate position as percentage of viewport
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    const handleResize = () => {
      // Update position on resize to maintain relative position
      const x = (mousePosition.x * window.innerWidth) / 100;
      const y = (mousePosition.y * window.innerHeight) / 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePosition.x, mousePosition.y]);

  const orbs = [
    {
      size: "550px",
      delay: 0,
      opacity: 0.25,
      speed: 1,
    },
    {
      size: "650px",
      delay: 0.1,
      opacity: 0.2,
      speed: 0.85,
    },
    {
      size: "450px",
      delay: 0.2,
      opacity: 0.3,
      speed: 1.15,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ minHeight: '100vh' }}>
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
              background: `radial-gradient(circle, rgba(204,171,130,${orb.opacity}) 0%, rgba(204,171,130,${orb.opacity * 0.7}) 50%, rgba(204,171,130,0) 100%)`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              x: x - (parseInt(orb.size) / 2),
              y: y - (parseInt(orb.size) / 2),
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 30,
              mass: 0.8,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingOrbs;
