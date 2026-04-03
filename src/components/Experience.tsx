'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    id: 1,
    company: 'Kryolabs',
    role: ' Freelance Full-Stack Developer',
    dates: 'Now',
    location: 'Dehradun, Uttarakhand, India',
    description: 'Actively seeking opportunities to apply MERN stack expertise in building scalable web applications.',
    highlights: [
      'Expert in React.js, Next.js, Node.js, and MongoDB',
      'Making scalable system and Exploring the AWS cloude',
      'Strong foundation in TypeScript and clean code practices',
      'Experience with RESTful APIs and authentication systems',
      'Proficient in TailwindCSS for modern UI design',
    ],
  },
  {
    id: 2,
    company: 'Open to Opportunities',
    role: ' MERN Developer',
    dates: 'Now',
    location: 'Dehradun, Uttarakhand, India',
    description: 'Actively seeking opportunities to apply MERN stack expertise in building scalable web applications.',
    highlights: [
      'Expert in React.js, Node.js, and MongoDB',
      'Strong foundation in TypeScript and clean code practices',
      'Experience with RESTful APIs and authentication systems',
      'Proficient in TailwindCSS for modern UI design',
    ],
  },
];

interface Experience {
  id: number;
  company: string;
  role: string;
  dates: string;
  location: string;
  description: string;
  highlights: string[];
}

function ExperienceCard({ experience, isOpen, onToggle }: {
  experience: Experience;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      className="mb-6 cursor-pointer"
      onClick={onToggle}
    >
      <motion.div
        className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/20 dark:from-gray-900/50 dark:to-gray-900/20 light:from-white light:to-slate-50 border border-cyan-500/20 dark:border-cyan-500/20 light:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 light:hover:border-blue-400 rounded-xl p-6 transition duration-300"
        whileHover={{ borderColor: 'rgba(0, 217, 255, 0.5)' }}
      >
        {/* Timeline dot */}
        <div className="absolute -left-6 top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600 rounded-full" />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-cyan-300 dark:text-cyan-300 light:text-blue-600 mb-1">
              {experience.role}
            </h3>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 flex items-center gap-2">
              <span>{experience.company}</span>
              <span className="text-xs bg-blue-500/20 dark:bg-blue-500/20 light:bg-blue-100 text-blue-300 dark:text-blue-300 light:text-blue-700 px-2 py-1 rounded">
                {experience.dates}
              </span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-600 mt-1">📍 {experience.location}</p>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4"
          >
            <ChevronDown className="text-cyan-400 dark:text-cyan-400 light:text-blue-600" size={24} />
          </motion.div>
        </div>

        {/* Expanded content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-gray-700 dark:border-gray-700 light:border-gray-200">
            <p className="text-gray-300 dark:text-gray-300 light:text-slate-800 mb-4">{experience.description}</p>
            <div className="space-y-2">
              {experience.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="relative w-2 h-2 bg-cyan-400 dark:bg-cyan-400 light:bg-blue-600 rounded-full mt-2 shrink-0" />
                  <span className="text-gray-400 dark:text-gray-400 light:text-gray-700 text-sm">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(experiences[0].id);

  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600">
              Experience & Opportunities
            </span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm sm:text-base md:text-lg">
            Actively seeking roles to leverage my MERN stack expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent dark:from-cyan-500/50 dark:via-blue-500/30 light:from-blue-400/30 light:via-cyan-400/20" />

          {/* Experience cards */}
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ExperienceCard
                experience={exp}
                isOpen={expandedId === exp.id}
                onToggle={() =>
                  setExpandedId(expandedId === exp.id ? null : exp.id)
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
