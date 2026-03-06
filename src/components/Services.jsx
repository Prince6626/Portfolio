import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description:
      'From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.',
    items: [
      'React, Node.js, Express.js',
      'REST APIs, Firebase, Docker',
      'Git, GitHub, Postman',
    ],
    bg: '#000000ff',
  },
  {
    number: '02',
    title: 'UI/UX & Frontend',
    description:
      'Pixel-perfect, responsive interfaces with smooth animations and performance-first thinking. Every interaction is intentional.',
    items: [
      'Responsive & Accessible Design',
      'Tailwind CSS & Component Systems',
      'Framer Motion Animations',
    ],
    bg: '#000000ff',
  },
  {
    number: '03',
    title: 'Optimization',
    description:
      'I focus on building systems that stay reliable as things scale. Core computer science principles applied to keep applications fast, stable, and future-ready.',
    items: [
      'Data Structures & Algorithms',
      'DBMS, OOP, OS Fundamentals',
      'Clean code & architecture',
    ],
    bg: '#000000ff',
  },
];

// Height of the title row (number + title text + padding). Must match card pt/pb.
const TITLE_ROW_HEIGHT = 130; // px
const NAVBAR_HEIGHT = 40;     // px

function StackCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const stickyTop = NAVBAR_HEIGHT + index * TITLE_ROW_HEIGHT;

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${stickyTop}px`, zIndex: 10 + index }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: service.bg }}
      >
        {/* Card inner: number on left, content on right */}
        <div className="flex py-10 md:py-14">
          {/* Left: number column — sits at far left edge */}
          <div className="shrink-0 w-32 md:w-48 pl-8 md:pl-12 pt-1">
            <span
              className="text-xl md:text-2xl font-light text-[#3a3a3a] tracking-widest"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              ({service.number})
            </span>
          </div>

          {/* Right: title + description + items */}
          <div className="flex-1 min-w-0">
            <h3
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {service.title}
            </h3>

            <p className="text-[#888] text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              {service.description}
            </p>

            <ul className="flex flex-col">
              {service.items.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-5 border-b border-[#1e1e1e] py-4 last:border-b-0"
                >
                  <span className="text-xs text-[#444] font-mono shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-white text-base md:text-lg font-bold tracking-tight"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-28 px-8 md:px-20 lg:px-32 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={headingRef} className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] uppercase text-[#555] mb-4 block"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            What I Do
          </motion.h2>
        </div>

        {/*
          Each card is sticky at an incremental top.
          The wrapper has extra bottom padding equal to one full card body height
          so Card 03's body scrolls off before the next section begins —
          leaving all 3 titles pinned as a clean staircase.
        */}
        <div
          className="flex flex-col gap-5"
          style={{ paddingBottom: '240px' }}
        >
          {services.map((service, i) => (
            <StackCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
