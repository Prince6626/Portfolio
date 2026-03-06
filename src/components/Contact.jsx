import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Send, ArrowRight } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Prince6626', text: 'github.com/princepatel6626' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/princepatelgecvgecictdte/', text: 'linkedin.com/in/prince-patel' },
  { icon: Mail, label: 'Email', href: 'mailto:princepatel6626@gmail.com', text: 'princepatel6626@gmail.com' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-28 px-8 md:px-20 lg:px-32 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
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
              className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Let's Work
              <br />
              Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-[#666] leading-relaxed mb-12"
            >
              Have a project in mind? Open to discussing freelance opportunities, 
              collaborations, or full-time roles. Just reach out — I'd love to connect.
            </motion.p>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              {socials.map(({ icon: Icon, label, href, text }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="group flex items-center gap-4 border border-[#222] rounded-xl px-5 py-4 hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300"
                >
                  <div className="w-9 h-9 border border-[#333] rounded-lg flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                    <Icon size={16} className="text-[#888] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-xs text-[#555] uppercase tracking-widest mb-0.5">{label}</div>
                    <div className="text-sm text-[#aaa] group-hover:text-white transition-colors duration-300">{text}</div>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-[#333] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="text-xs tracking-widest uppercase text-[#555] mb-2 block">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border border-[#222] text-white placeholder-[#444] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-[#555] mb-2 block">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent border border-[#222] text-white placeholder-[#444] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-[#555] mb-2 block">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border border-[#222] text-white placeholder-[#444] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                id="contact-submit"
                className="group flex items-center justify-center gap-3 bg-white text-black font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#e5e5e5] transition-all duration-300 mt-2"
              >
                {sent ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
