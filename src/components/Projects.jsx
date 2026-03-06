import React, { useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'DevConnect',
    description:
      'Full-stack developer platform for connecting and networking. Built with the MERN stack featuring secure JWT & bcrypt authentication, user profiles, connection requests, real-time chat, and RESTful APIs.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    github: 'https://github.com/princepatel6626',
    live: '#',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    links: [
      { label: 'Frontend Repo', href: 'https://github.com/princepatel6626' },
      { label: 'Backend Repo', href: 'https://github.com/princepatel6626' },
      { label: 'Live Preview', href: '#' },
    ],
  },
  {
    id: 2,
    title: 'CareNavigator',
    description:
      'AI-powered healthcare decision support system using the Gemini API to analyze patient symptoms, recommend disease-specific hospitals & medical specialists, and predict treatment costs.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'REST APIs'],
    github: 'https://github.com/princepatel6626',
    live: '#',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/princepatel6626' },
    ],
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="bg-[#050505] min-h-screen py-32 px-6 md:px-12 lg:px-20 border-t border-[#111]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter uppercase"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Selected Works <span className="text-[#333]">/</span>
          </motion.h2>
        </div>

        {/* Timeline Projects Container */}
        <div className="flex flex-col gap-32 relative">
          {projects.map((project, index) => {
            const number = (index + 1).toString().padStart(2, '0');
            return (
              <div 
                key={project.id} 
                className="flex justify-start pt-10 md:pt-40 md:gap-20"
              >
                {/* Left Sticky Column */}
                <div className="sticky top-40 self-start max-w-xs md:w-1/3 z-10 hidden md:block">
                  <h3 
                    className="text-[10rem] lg:text-[14rem] font-bold leading-none text-[#1a1a1a] tracking-tighter select-none mix-blend-difference"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {number}
                  </h3>
                </div>

                {/* Right Scrolling Content */}
                <div className="relative w-full md:w-2/3">
                  {/* Mobile Number header */}
                  <h3 
                    className="block md:hidden text-6xl font-bold text-[#222] mb-6 tracking-tighter"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {number}
                  </h3>

                  {/* Project Image Box */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative rounded-3xl overflow-hidden bg-[#111] border border-[#222] aspect-[4/3] w-full cursor-pointer hover:border-[#444] transition-colors duration-500"
                  >
                    {/* Inner image */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                    
                    {/* Hover link pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-[#eee] transition-colors"
                      >
                        Visit Project <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </motion.div>

                  {/* Project Metadata below image */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 flex flex-col gap-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 
                        className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {project.title}
                      </h4>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#888] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                    
                    <p className="text-[#888] text-lg leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs font-medium uppercase tracking-wider text-[#aaa] border border-[#2a2a2a] bg-[#111] px-3 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project links */}
                    <div className="flex flex-wrap gap-3 mt-2">
                      {project.links.map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#888] hover:text-white border-b border-[#333] hover:border-white pb-0.5 transition-all duration-300"
                        >
                          {label} <ArrowUpRight size={12} />
                        </a>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </div>
            );
          })}
        </div>

        {/* More Projects Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 md:mt-32 flex justify-center w-full"
        >
          <a
            href="https://github.com/princepatel6626"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#111] hover:bg-white text-white hover:text-black border border-[#333] hover:border-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <Github size={22} className="group-hover:scale-110 transition-transform duration-300" />
            <span>More projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
