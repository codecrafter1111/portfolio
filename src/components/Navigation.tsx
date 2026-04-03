'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
// import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Education', id: 'education' },
  { name: 'Projects', id: 'projects' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Contact', id: 'contact' },
];

export function Navigation({ scrollToSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-primary/80 backdrop-blur-md border-b border-border-primary transition-colors duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 font-bold lg:text-3xl  text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('hero')}
            >
              PK
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-0.80">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 relative ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-text-tertiary hover:text-text-primary'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right side: Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center lg:hidden  gap-3">
              {/* <ThemeToggle /> */}
              <motion.button
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? (
                  <X className="text-cyan-400 dark:text-cyan-400 light:text-blue-600" size={24} />
                ) : (
                  <Menu className="text-text-tertiary" size={24} />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-secondary/95 border-t border-border-primary transition-colors duration-300"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition duration-300 ${
                  activeSection === item.id
                    ? 'bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-blue-100 text-cyan-400 dark:text-cyan-400 light:text-blue-600 border-l-2 border-cyan-400 dark:border-cyan-400 light:border-blue-600'
                    : 'text-text-tertiary hover:text-text-primary'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Progress indicator on scroll */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600 origin-left z-40"
        style={{
          scaleX: typeof window !== 'undefined' 
            ? Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) || 0, 1)
            : 0,
        }}
      />
    </>
  );
}
