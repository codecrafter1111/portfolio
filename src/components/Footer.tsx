'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M16 11.37A4 4 0 1112.63 8A4 4 0 0116 11.37Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:codecrafter432@gmail.com',
      label: 'Email',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/prabhat-yadav-0b1222334',
      label: 'LinkedIn',
    },
    {
      icon: InstagramIcon,
      href: 'https://www.instagram.com/prabhatyadav8796',
      label: 'Instagram',
    },
    {
      icon: Github,
      href: 'https://github.com/codecrafter1111',
      label: 'GitHub',
    },
  ];

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-darker/80 to-transparent border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex-shrink-0 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600"
              // whileHover={{ scale: 1.05 }}
            >
              PK
            </motion.div>

            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-3">Prabhat kr Yadav</h3>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
              MERN Stack Developer building scalable and responsive web applications.
            </p>
          </motion.div>

          {/* Center: Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white dark:text-white light:text-slate-900 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Experience', href: '#experience' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 dark:text-gray-400 light:text-gray-600 dark:hover:text-cyan-400 light:hover:text-blue-600 hover:text-cyan-400 transition duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white dark:text-white light:text-slate-900 mb-3">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-900/50 dark:bg-gray-900/50 light:bg-slate-100 border border-gray-700 dark:border-gray-700 light:border-gray-300 flex items-center justify-center text-gray-400 dark:text-gray-400 light:text-gray-600 dark:hover:text-cyan-400 dark:hover:border-cyan-400/50 light:hover:text-blue-600 light:hover:border-blue-400 hover:text-cyan-400 hover:border-cyan-400/50 transition duration-300"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 dark:border-gray-800 light:border-gray-200"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-500 light:text-gray-600">
            <p>© {currentYear} Prabhat Yadav. All rights reserved.</p>
            <p>Designed & Built with <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">✨</span> using Next.js + React + Tailwind</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
