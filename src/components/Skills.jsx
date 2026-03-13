import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { VelocityScroll } from './ui/scroll-velocity';

const programmingSkills = [
  { name: 'Java (DSA)', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Data Structures & Algo', icon: '🧩' },
  { name: 'OOP Concepts', icon: '📦' },
];

const frontendSkills = [
  { name: 'HTML & CSS', icon: '</>' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '💨' },
];

const backendSkills = [
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '⚡' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'JWT', icon: '🔐' },
  { name: 'MongoDB', icon: '🍃' },
];

const toolsSkills = [
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'VS Code', icon: '🔷' },
  { name: 'Postman', icon: '📮' },
  { name: 'npm / pnpm', icon: '📦' }
];

const softSkills = [
  { label: 'Team Collaboration', icon: '🤝' },
  { label: 'Research Mindset', icon: '🔬' },
  { label: 'Problem Solving', icon: '💡' },
  { label: 'Leadership', icon: '🚀' },
];

const SkillPill = ({ icon, name }) => (
  <span className="group inline-flex items-center justify-center gap-2 md:gap-3 border border-[#222] text-[#ccc] px-4 py-3 md:px-6 md:py-4 rounded-full text-sm md:text-lg font-medium cursor-default hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 whitespace-nowrap">
    <span className="text-lg sm:text-2xl md:text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">{icon}</span>
    {name}
  </span>
);

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-16 md:py-32 border-t border-[#111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <div ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] uppercase text-[#555] mb-4 block"
          >
            Toolkit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter uppercase mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Skills &amp; Tech <span className="text-[#333]">/</span>
          </motion.h2>
        </div>
      </div>

      {/* Velocity Scroll Rows */}
      <div className="flex flex-col gap-6 md:gap-8 mb-24 relative z-10">
        <VelocityScroll defaultVelocity={0.8} className="py-2">
          {programmingSkills.map((skill) => (
            <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
          {programmingSkills.map((skill) => (
            <SkillPill key={skill.name + '-copy'} name={skill.name} icon={skill.icon} />
          ))}
        </VelocityScroll>
        
        <VelocityScroll defaultVelocity={-0.8} className="py-2">
          {frontendSkills.map((skill) => (
            <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
          {frontendSkills.map((skill) => (
            <SkillPill key={skill.name + '-copy'} name={skill.name} icon={skill.icon} />
          ))}
          {frontendSkills.map((skill) => (
            <SkillPill key={skill.name + '-copy2'} name={skill.name} icon={skill.icon} />
          ))}
        </VelocityScroll>

        <VelocityScroll defaultVelocity={1.0} className="py-2">
          {backendSkills.map((skill) => (
            <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
          {backendSkills.map((skill) => (
            <SkillPill key={skill.name + '-copy'} name={skill.name} icon={skill.icon} />
          ))}
          {backendSkills.map((skill) => (
            <SkillPill key={skill.name + '-copy2'} name={skill.name} icon={skill.icon} />
          ))}
        </VelocityScroll>

        <VelocityScroll defaultVelocity={-0.7} className="py-2">
          {toolsSkills.map((skill) => (
            <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
          {toolsSkills.map((skill) => (
            <SkillPill key={skill.name + '-copy'} name={skill.name} icon={skill.icon} />
          ))}
          {toolsSkills.map((skill) => (
            <SkillPill key={skill.name + '-copy2'} name={skill.name} icon={skill.icon} />
          ))}
        </VelocityScroll>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Soft Skills */}
        <div className="mt-16 text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-2"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Soft Skills
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#888] text-sm max-w-xl mx-auto"
          >
            The interpersonal strengths that help me build great products and work effectively in teams.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {softSkills.map(({ label, icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#555] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <span className="text-4xl md:text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                  {icon}
                </span>
                <span className="text-base md:text-lg font-medium text-[#ccc] group-hover:text-white transition-colors duration-300">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
