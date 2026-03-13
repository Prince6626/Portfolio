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
    tag: 'Full-Stack Platform',
    githubFrontend: 'https://github.com/Prince6626/devConnect-fe.git',
    githubBackend: 'https://github.com/Prince6626/devConnect-be.git',
    live: 'https://dev-connect-fe.vercel.app/',
    image: '/projects/devConnect2.png',
    links: [
      { label: 'Frontend Repo', href: 'https://github.com/princepatel6626' },
      { label: 'Backend Repo', href: 'https://github.com/princepatel6626' },
      { label: 'Live Preview', href: 'https://dev-connect-fe.vercel.app/' },
    ],
  },
  {
    id: 2,
    title: 'CareNavigator',
    isHackathon: true,
    description:
      'AI-powered healthcare decision support system using the Gemini API to analyze patient symptoms, recommend disease-specific hospitals & medical specialists, and predict treatment costs.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'REST APIs'],
    tag: 'AI Healthcare',
    github: 'https://github.com/Prince6626/CareNavigator.git',
    live: 'https://care-navigator-client.vercel.app/',
    image: '/projects/care.png',
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/princepatel6626' },
    ],
  },
  {
  id: 3,
  title: 'EduSafe',
  isHackathon: true,
  description:
    'Role-based disaster awareness and safety platform where students access learning modules with videos, notes, and quizzes, report incidents with live location, and share experiences. Teachers monitor reports in real time while admins manage modules and quizzes.',
  tags: ['React', 'Node.js', 'JWT', 'Tailwind CSS', 'Maps API', 'REST API'],
  tag: 'Safety Platform',
  github: 'https://github.com/Prince6626/SIH-2025-2.O.git',
  live: 'https://sih-frontend-one-mu.vercel.app/',
  image: '/projects/EduSafe.png',
  links: [
    { label: 'GitHub Repo', href: 'https://github.com/Prince6626/SIH-2025-2.O.git' },
    { label: 'Live Preview', href: 'https://sih-frontend-one-mu.vercel.app/' },
  ],
},
{
  id: 4,
  title: 'ScamShield',
  description:
    'AI-powered job and internship scam detection platform that analyzes text or screenshots of job offers using OCR and machine learning. The system predicts scam probability, classifies risk levels, and generates explainable AI insights with Gemini to highlight scam signals, safety tips, and verification steps for students.',
  tags: [
    'React',
    'Node.js',
    'Express',
    'FastAPI',
    'Python',
    'scikit-learn',
    'EasyOCR',
    'Gemini AI',
    'Docker',
    'Tailwind CSS'
  ],
  tag: 'AI Scam Detection',
  github: 'https://github.com/Prince6626/ScamShield.git',
  // live: '',
  image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
  links: [
    { label: 'GitHub Repo', href: 'https://github.com/Prince6626/ScamShield.git' }
  ],
}
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
      className="bg-[#050505] min-h-screen py-16 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-[#111]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="mb-12 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter uppercase"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Featured Projects <span className="text-[#333]">/</span>
          </motion.h2>
        </div>

        {/* Timeline Projects Container */}
        <div className="flex flex-col gap-16 md:gap-32 relative">
          {projects.map((project, index) => {
            const number = (index + 1).toString().padStart(2, '0');
            return (
              <div 
                key={project.id} 
                className="flex justify-start pt-8 md:pt-40 md:gap-20"
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

                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => {
                      const link = project.live || project.github;
                      if (link) window.open(link, '_blank');
                    }}
                    className="group relative rounded-3xl overflow-hidden bg-[#111] border border-[#222] aspect-[4/3] w-full cursor-pointer hover:border-[#444] transition-colors duration-500"
                  >
                    {/* Inner image */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    
                    {/* Cinematic gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out" />

                    {/* Film grain */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.12] transition-opacity duration-700 mix-blend-overlay pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Bottom text links — slide up */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-7 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">

                      {/* Tag label */}
                      <p className="text-[9px] tracking-[0.3em] uppercase text-white/35 mb-4 font-medium">
                        {project.tag ?? "Project"}
                      </p>

                      {/* Links row */}
                      <div className="flex items-center gap-6">

                        {/* Visit Project */}
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-end gap-1.5 text-white text-sm font-semibold tracking-wide relative"
                        >
                          <span className="relative">
                            View Project
                            {/* Underline that grows left to right */}
                            <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-white group-hover/link:w-full transition-all duration-300 ease-out" />
                          </span>
                          {/* Arrow that drifts up-right on hover */}
                          <ArrowUpRight
                            size={15}
                            strokeWidth={2}
                            className="mb-0.5 translate-x-0 translate-y-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                          />
                        </a>

                        {/* Thin separator */}
                        <span className="h-3 w-px bg-white/20" />

                        {/* GitHub(s) */}
                        {project.githubFrontend && project.githubBackend ? (
                          <>
                            <a
                              href={project.githubFrontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/repo flex items-end gap-1 text-white/50 text-[13px] font-medium tracking-wide hover:text-white/80 transition-colors duration-300 relative"
                            >
                              <span className="relative">
                                Frontend
                                <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-white/60 group-hover/repo:w-full transition-all duration-300 ease-out" />
                              </span>
                              <Github size={12} className="mb-0.5" />
                            </a>
                            <span className="w-1 h-1 rounded-full bg-white/10 mx-[-10px]" />
                            <a
                              href={project.githubBackend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/repo flex items-end gap-1 text-white/50 text-[13px] font-medium tracking-wide hover:text-white/80 transition-colors duration-300 relative"
                            >
                              <span className="relative">
                                Backend
                                <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-white/60 group-hover/repo:w-full transition-all duration-300 ease-out" />
                              </span>
                              <Github size={12} className="mb-0.5" />
                            </a>
                          </>
                        ) : (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/repo flex items-end gap-1.5 text-white/50 text-sm font-medium tracking-wide hover:text-white/80 transition-colors duration-300 relative"
                          >
                            <span className="relative">
                              GitHub
                              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-white/60 group-hover/repo:w-full transition-all duration-300 ease-out" />
                            </span>
                            <Github size={13} strokeWidth={1.8} className="mb-0.5" />
                          </a>
                        )}

                      </div>
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
                      <div className="flex flex-col gap-2">
                        {project.isHackathon && (
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-white/10 w-fit px-3 py-1 rounded-full border border-white/20">
                            Hackathon Project
                          </span>
                        )}
                        <h4 
                          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {project.title}
                        </h4>
                      </div>
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
          className="mt-16 md:mt-32 flex justify-center w-full"
        >
          <a
            href="https://github.com/Prince6626"
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
