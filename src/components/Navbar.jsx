import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  // { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [inHero, setInHero] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect when hero section leaves/enters viewport
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInHero(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // When user scrolls back into hero, close the menu
  useEffect(() => {
    if (inHero) setMenuOpen(false);
  }, [inHero]);

  // Show hamburger when: outside hero OR menu is open OR on mobile (always)
  const showHamburger = !inHero || menuOpen;

  const burgerBg   = inHero && !menuOpen ? 'bg-black/10 border-black/30' : 'bg-[#1a1a1a]/80 border-white/30';
  const burgerLine = inHero && !menuOpen ? 'bg-black' : 'bg-white';

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 z-[60] px-8 py-5 flex items-center justify-between"
      >
        {/* Logo — only when in hero and menu is closed */}
        <AnimatePresence>
          {inHero && !menuOpen && (
            <motion.a
              key="logo"
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="font-bold text-lg tracking-wide text-black"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              PS<span className="text-black/50">.</span>
            </motion.a>
          )}
        </AnimatePresence>

        {/* Desktop Nav links — only in hero */}
        <AnimatePresence>
          {inHero && !menuOpen && (
            <motion.ul
              key="desktop-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="hidden md:flex gap-8 items-center"
            >
              {navLinks.slice(1).map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 tracking-wide text-black/60 hover:text-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>


      </motion.nav>

      {/* 
        Circular Hamburger Button Wrapper:
        - Fixed position so it floats when scrolling down, even though links scroll away.
      */}
      <div className="fixed top-0 left-0 right-0 z-[70] px-8 py-5 pointer-events-none flex items-center justify-end">
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className={`
            w-14 h-14 rounded-full border flex items-center justify-center
            transition-colors duration-300 cursor-pointer ml-auto pointer-events-auto
            ${burgerBg}
            ${inHero && !menuOpen ? 'md:hidden' : ''}
          `}
          whileTap={{ scale: 0.93 }}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="2" y1="2" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="18" y1="2" x2="2" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <div className="flex flex-col gap-[7px]">
              <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${burgerLine}`} />
              <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${burgerLine}`} />
            </div>
          )}
        </motion.button>
      </div>

      {/* Full-screen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col overflow-hidden"
          >
            {/* Depth blobs — match reference */}
            <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
            <div className="absolute -top-20 right-0 w-[420px] h-[420px] rounded-full bg-[#2a2a2a]/60 blur-2xl pointer-events-none" />

            {/* Nav Links — start at ~42% from left, vertically centered */}
            <nav className="flex-1 flex flex-col justify-center pl-[10%] md:pl-[42%]">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold uppercase tracking-tighter text-white/85 hover:text-white leading-[1.1] transition-all duration-300 hover:translate-x-3"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom: Email + Socials — same left indent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.42 }}
              className="pl-[10%] md:pl-[42%] pr-10 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-white/10 pt-6"
            >
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#555] mb-1">Email Address</p>
                <a
                  href="mailto:princepatel6626@gmail.com"
                  className="text-[#aaa] hover:text-white transition-colors duration-300 text-sm"
                >
                  princepatel6626@gmail.com
                </a>
              </div>

            <div className="flex items-center gap-6">
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/princepatelgecvgecictdte/', icon: <Linkedin size={16} /> },
                { label: 'Github', href: 'https://github.com/Prince6626', icon: <Github size={16} /> },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#666] hover:text-white tracking-wide transition-colors duration-300"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
