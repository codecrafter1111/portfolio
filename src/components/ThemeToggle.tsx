'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check initial theme
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.classList.contains('dark') || !htmlElement.classList.contains('light');
    setIsDark(isDarkMode);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDarkMode = htmlElement.classList.contains('dark') || !htmlElement.classList.contains('light');
          setIsDark(isDarkMode);
        }
      });
    });

    observer.observe(htmlElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const newIsDark = !isDark;
    
    if (newIsDark) {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
    } else {
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    setIsDark(newIsDark);
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-secondary/50 border border-border-primary hover:border-border-hover transition duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Sun size={20} className="text-accent-cyan" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Moon size={20} className="text-accent-blue" />
        </motion.div>
      )}
    </motion.button>
  );
}
