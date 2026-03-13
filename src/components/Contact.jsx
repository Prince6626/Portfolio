import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Prince6626', text: 'github.com/princepatel6626' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/princepatelgecvgecictdte/', text: 'linkedin.com/in/prince-patel' },
  { icon: Mail, label: 'Email', href: 'mailto:princepatel6626@gmail.com', text: 'princepatel6626@gmail.com' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-16 md:py-28 px-4 sm:px-8 md:px-20 lg:px-32 border-t border-[#111]">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          {/* Left: Heading & Description */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.2em] uppercase text-[#555] mb-4 block"
            >
              Get in touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Let’s Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-[#888] text-base sm:text-xl leading-relaxed max-w-lg"
            >
              Have a project idea or collaboration in mind? I'm always open to discussing interesting projects and new opportunities. Let's connect.
            </motion.p>
          </div>

          {/* Right: Contact Boxes */}
          <div className="flex flex-col gap-4 w-full">
            {socials.map(({ icon: Icon, label, href, text }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-6 md:p-8 hover:border-[#444] transition-all duration-300 flex items-center group w-full"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 md:w-14 md:h-14 border border-[#222] rounded-xl flex items-center justify-center bg-[#050505] group-hover:border-[#444] transition-colors shrink-0">
                  <Icon size={20} className="text-[#888] group-hover:text-white transition-colors" />
                </div>

                {/* Text Content */}
                <div className="ml-6 flex flex-col flex-1 min-w-0">
                  <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#555] mb-1 font-bold">
                    {label}
                  </span>
                  <div
                    className="text-lg md:text-xl font-bold text-[#f5f5f5] tracking-tight truncate"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {text}
                  </div>
                </div>

                {/* Right Arrow */}
                <div className="ml-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  <ArrowRight size={20} className="text-[#888] group-hover:text-white" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
