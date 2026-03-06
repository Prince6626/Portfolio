import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#111] py-10 px-8 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Name */}
        <span
          className="text-[#555] text-sm"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          © 2026 <span className="text-white font-medium">Prince Patel</span>. Built with React &amp; Tailwind CSS.
        </span>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/princepatel6626', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/prince-patel-b95b43289', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:princepatel6626@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 border border-[#222] rounded-lg flex items-center justify-center text-[#555] hover:text-white hover:border-white/30 transition-all duration-300"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
