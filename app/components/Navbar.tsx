'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-[100]">
      <div className="max-w-6xl mx-auto py-4 px-6 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="text-[#5C4033] text-3xl md:text-4xl font-medium">
          SóSkin Aesthetics
        </Link>

        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#5C4033] p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center space-x-12">
        <Link href="/" className="text-black hover:text-[#5C4033] relative group text-lg">
          <span>Home</span>
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5C4033] origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: pathname === '/' ? 1 : 0 }}
            whileHover={{ scaleX: 1 }}
          />
        </Link>
        <Link href="/about" className="text-black hover:text-[#5C4033] relative group text-lg">
          <span>About us</span>
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5C4033] origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: pathname === '/about' ? 1 : 0 }}
            whileHover={{ scaleX: 1 }}
          />
        </Link>
        <Link href="/services" className="text-black hover:text-[#5C4033] relative group text-lg">
          <span>Services</span>
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5C4033] origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: pathname === '/services' ? 1 : 0 }}
            whileHover={{ scaleX: 1 }}
          />
        </Link>
        
        {/* Book Now Button */}
        <Link 
          href="/book"
          className="bg-[#E8DCD1] text-black px-8 py-3 text-lg rounded flex items-center space-x-2 hover:bg-[#d8ccc1] transition-colors"
        >
          <span>Book Now</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>

      </div>

      {/* Mobile Menu */}
      <div 
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden fixed top-[72px] left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg py-6 z-[100] border-t border-gray-200`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link 
            href="/" 
            className="text-black hover:text-[#5C4033] text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-black hover:text-[#5C4033] text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </Link>
          <Link 
            href="/services" 
            className="text-black hover:text-[#5C4033] text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/book"
            className="bg-[#E8DCD1] text-black px-8 py-3 text-lg rounded flex items-center space-x-2 hover:bg-[#d8ccc1] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
