'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingOrbs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [autoAnimate, setAutoAnimate] = useState(true);
  const [time, setTime] = useState(0);

  // Animation loop for mobile
  useEffect(() => {
    if (autoAnimate) {
      const interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [autoAnimate]);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (event: MouseEvent) => {
        setAutoAnimate(false);
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    } else {
      setAutoAnimate(true);
    }
  }, [isMobile]);

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
        let x, y;
        if (autoAnimate) {
          // Create a floating animation pattern
          const t = time * 0.05;
          x = Math.sin(t * orb.speed + index * Math.PI * 2/3) * 100;
          y = Math.cos(t * orb.speed + index * Math.PI * 2/3) * 50;
        } else {
          // Mouse-based movement
          x = ((mousePosition.x - 50) * orb.speed * 20);
          y = ((mousePosition.y - 50) * orb.speed * 20);
        }

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
            animate={{
              x: x - (parseInt(orb.size) / 2),
              y: y - (parseInt(orb.size) / 2),
              transition: {
                type: autoAnimate ? "tween" : "spring",
                duration: autoAnimate ? 0.5 : undefined,
                ease: autoAnimate ? "linear" : undefined,
                stiffness: autoAnimate ? undefined : 50,
                damping: autoAnimate ? undefined : 30,
                mass: autoAnimate ? undefined : 0.8,
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingOrbs;
