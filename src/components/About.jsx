import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Phone, Target, Sparkles } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-20 border-t border-[#111]">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: label + text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.2em] uppercase text-[#555] mb-4 block"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter uppercase mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Building with{' '}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}
              >
                purpose
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#888] text-xl leading-relaxed mb-6"
            >
              I'm <span className="text-white font-medium">Prince Patel</span>, an enthusiastic and 
              self-driven engineering student with a strong foundation in Data Structures &amp; Algorithms 
              and Full-Stack Web Development.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#888] text-lg leading-relaxed mb-10"
            >
              Actively exploring Artificial Intelligence concepts alongside full-stack development. 
              Passionate about learning emerging technologies and solving real-world problems that 
              make a meaningful impact.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3"
            >
              {[
                { icon: MapPin, text: 'Ahmedabad, India' },
                { icon: Mail, text: 'princepatel6626@gmail.com', href: 'mailto:princepatel6626@gmail.com' },
                { icon: Phone, text: '+91 9265132722', href: 'tel:+919265132722' },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3 text-[#666]">
                  <Icon size={15} className="text-[#555] flex-shrink-0" />
                  {href ? (
                    <a href={href} className="text-sm hover:text-white transition-colors duration-300">{text}</a>
                  ) : (
                    <span className="text-sm">{text}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: stats + education */}
          <div className="flex flex-col gap-6">
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              {[
                { label: 'Focus', value: 'Software Development & Problem Solving', icon: Target },
                { label: 'Currently', value: 'Building, learning, shipping', icon: Sparkles },
              ].map(stat => {
                const Icon = stat.icon;
                return (
                <div
                  key={stat.label}
                  className="border border-[#222] rounded-3xl p-8 hover:border-[#444] hover:bg-[#111] transition-all duration-300 flex flex-col justify-center group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 border border-[#333] rounded-xl flex items-center justify-center group-hover:border-[#555] transition-colors">
                      <Icon size={16} className="text-[#888] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs tracking-[0.15em] uppercase text-[#555]">{stat.label}</span>
                  </div>
                  <div
                    className="text-xl md:text-2xl font-bold text-white tracking-tight"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                </div>
              )})}
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[#222] rounded-3xl p-8 hover:border-[#444] hover:bg-[#111] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 border border-[#333] rounded-xl flex items-center justify-center">
                  <GraduationCap size={16} className="text-[#888]" />
                </div>
                <span className="text-xs tracking-[0.15em] uppercase text-[#555]">Education</span>
              </div>
              <h3
                className="text-xl font-bold text-white tracking-tight mb-1"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                B.E. in Information &amp; Communication Technology
              </h3>
              <p className="text-[#666] text-sm mb-3">Vishwakarma Government Engineering College, Ahmedabad (GTU)</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#555] uppercase tracking-widest">2023 – 2027</span>
                {/* <span className="text-xs font-bold text-white border border-[#333] px-3 py-1 rounded-full">CGPA: 8.04</span> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
