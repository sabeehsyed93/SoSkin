'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ccab82] to-white rounded-2xl transform scale-105" />
              <h1 className="relative px-6 py-4 text-4xl md:text-6xl lg:text-7xl font-medium text-black leading-tight">
                SóSkin
                <br />
                Aesthetics
              </h1>
            </div>
            
            <div className="space-y-1 text-xl text-gray-700 md:ml-6">
              <p>So Confident</p>
              <p>So Natural</p>
              <p>So You</p>
            </div>

            <div className="relative mt-12 md:ml-6 inline-block">
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#E8DCD1] rounded-2xl" />
              <Link 
                href="/book" 
                className="relative block px-10 py-4 bg-black text-white text-xl rounded-2xl hover:translate-y-0.5 hover:translate-x-0.5 transition-transform"
              >
                Book Now <span className="ml-2 inline-block">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(92,64,51,0.3)]"
        >
          <Image
            src="/images/hero_section.jpg"
            alt="Aesthetic Treatment"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
