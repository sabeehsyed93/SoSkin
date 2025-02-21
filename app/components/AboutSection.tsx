'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContentBlock = ({ title, content, delay }: { title: string; content: string; delay: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
    rootMargin: '-50px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 60 }}
      transition={{
        duration: inView ? 0.6 : 0.3,
        delay: inView ? delay : 0,
        ease: inView ? 'easeOut' : 'easeIn'
      }}
      className="max-w-2xl mx-auto mb-16 last:mb-0"
    >
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ccab82] to-white rounded-2xl transform scale-105" />
        <h2 className="relative px-6 py-3 text-3xl md:text-4xl font-medium">{title}</h2>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ContentBlock
          title="Who Are We?"
          content="We are medically trained and regulated doctors who use a deep understanding of anatomy and an eye for detail to deliver safe non-surgical treatments. Beauty is a personal and individual concept. At SóSkin we work together to enhance your beauty with an elegant and subtle approach."
          delay={0}
        />
        
        <ContentBlock
          title="Our Mission"
          content="Empowering beauty with precision and care. At SóSkin, we redefine confidence through expertise and personalised care, enhancing your journey to radiant, timeless beauty."
          delay={0.2}
        />
        
        <ContentBlock
          title="Why Choose Us?"
          content="We strive to make sure each client receives their desired outcome. Fully trained and insured to deliver injectable treatments and manage potential complications, we place safety at the forefront of our practice."
          delay={0.4}
        />
      </div>
    </section>
  );
};

export default AboutSection;
