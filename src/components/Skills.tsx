'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['JavaScript','TypeScript','React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Gsap', 'React Native (Basic)'],
    color: 'from-cyan-400 to-blue-400',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgresSql', 'Multer' ,'REST APIs'],
    color: 'from-blue-400 to-purple-400',
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Github','Figma' ,'Excalidraw','AWS','VS Code','Multer', 'Redis',],
    color: 'from-purple-400 to-pink-400',
  },
  {
    category: 'Specializations',
    skills: ['Responsive Web Design','System Design' ,'Scalable Web Applications', 'Clean Code'],
    color: 'from-pink-400 to-orange-400',
  },
];

interface SkillGroup {
  category: string;
  skills: string[];
  color: string;
}

function SkillBadge({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="relative group"
    >
      <div className="px-4 py-2 rounded-lg bg-gradient-to-br from-gray-900/60 to-gray-900/30 dark:from-gray-900/60 dark:to-gray-900/30 light:from-blue-50 light:to-slate-50 border border-gray-700 dark:border-gray-700 light:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 light:hover:border-blue-400 transition duration-300 cursor-pointer">
        <span className="text-sm font-medium text-gray-300 dark:text-gray-300 light:text-slate-700 dark:group-hover:text-cyan-300 light:group-hover:text-blue-600 group-hover:text-cyan-300 transition">
          {skill}
        </span>
      </div>
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 light:from-blue-200/30 light:to-cyan-200/30 opacity-0 group-hover:opacity-100 blur transition duration-300 -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
}

function SkillCategory({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/20 dark:from-gray-900/50 dark:to-gray-900/20 light:from-white light:to-slate-50 border border-gray-700 dark:border-gray-700 light:border-gray-200 dark:hover:border-cyan-500/30 light:hover:border-blue-400 hover:border-cyan-500/30 transition duration-300">
        {/* Category title */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${group.color}`} />
          <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900">{group.category}</h3>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, idx) => (
            <SkillBadge key={skill} skill={skill} index={idx} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm sm:text-base md:text-lg">
            Comprehensive skill set across the full MERN stack
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skillGroups.map((group, index) => (
            <SkillCategory key={group.category} group={group} index={index} />
          ))}
        </div>

        {/* Summary stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 light:from-blue-100/50 light:to-cyan-100/50 border border-cyan-500/20 dark:border-cyan-500/20 light:border-blue-300/50"
        >
          <p className="text-gray-300 dark:text-gray-300 light:text-slate-800">
            <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-bold text-xl sm:text-2xl">20+</span>
            <span className="ml-2">technologies and tools in my toolkit</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
