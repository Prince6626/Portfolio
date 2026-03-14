import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full bg-white text-[#111111] overflow-hidden flex flex-col pt-24 sm:pt-32 px-4 sm:px-6 md:px-12 lg:px-16 pb-12"
    >
      {/* Top Tagline for Desktop */}
      <div className="hidden md:flex justify-between items-center w-full mb-10 text-sm font-medium text-black/60">
        <p>Full-Stack Developer | AI Explorer</p>
      </div>

      {/* Big Name */}
      <div className="w-full relative z-10 flex flex-col mt-4 md:mt-0 items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[13vw] sm:text-[14vw] md:text-[clamp(4rem,13vw,16rem)] leading-[0.85] font-black tracking-tighter uppercase whitespace-nowrap text-center text-[#111]"
        >
          Prince  Patel
        </motion.h1>
      </div>

      {/* Bottom Layout Container */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 md:mt-24 flex-1 gap-10 md:gap-6 relative z-10">
        
        {/* Left: Text & Button */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-[30%] flex flex-col items-start gap-6 md:gap-8 order-2 md:order-1"
        >
          {/* Custom Arrow Icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
            <path d="M6 18L18 6M18 6H8M18 6V16" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <p className="text-base sm:text-xl md:text-2xl text-black/80 leading-snug font-medium">
            Engineering student building modern web applications — focused on the MERN stack, AI exploration, and real-world problem solving.
          </p>
          
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-[#1f1e1c] text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-black transition-all duration-300"
          >
            CONTACT <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Center: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-[35%] flex justify-center aspect-[4/3] md:aspect-auto md:h-auto md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-0 md:top-8 order-1 md:order-2"
        >
          <img 
            src="/src/assets/image.png" 
            alt="Workspace" 
            className="w-full md:w-[280px] lg:w-[360px] h-full object-cover rounded-3xl md:rounded-xl grayscale opacity-90 object-center shadow-lg md:shadow-none"
          />
        </motion.div>

        {/* Right: Availability */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-[30%] flex flex-col items-start md:items-end text-left md:text-right order-3 md:order-3"
        >
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-black/50 mb-2">Actively Building</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold uppercase tracking-tighter text-[#2a2a2a]">
            Modern Web Apps
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
