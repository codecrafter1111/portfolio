'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Zap } from 'lucide-react';
import Link from 'next/link';

const achievements = [
  {
    id: 1,
    title: 'Winner of TechFusion Hackathon',
    category: 'Hackathon',
    icon: Trophy,
    description: 'Successfully competed and won at TechFusion Hackathon, demonstrating full-stack development excellence.',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    id: 2,
    title: 'Appathon | The Art of Web',
    category: 'Competition & Award',
    icon: Award,
    description: 'Recognized at Appathon for exceptional web development skills and innovative design approach.',
    color: 'from-purple-400 to-pink-400',
  },
  {
    id: 3,
    title: 'MERN Stack Expertise',
    category: 'Technical Skills',
    icon: Zap,
    description: 'Proficient in MongoDB, Express.js, React, and Node.js. Expert-level knowledge in building scalable applications.',
    color: 'from-cyan-400 to-blue-400',
  },
];

interface Achievement {
  id: number;
  title: string;
  category: string;
  icon: any;
  description: string;
  color: string;
}

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="relative h-full rounded-xl p-6 overflow-hidden group cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.8), rgba(25, 25, 60, 0.6))',
          border: '1px solid rgba(0, 217, 255, 0.2)',
        }}
        whileHover={{
          borderColor: 'rgba(0, 217, 255, 0.6)',
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-br ${achievement.color} blur-2xl transition duration-500`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className={`w-16 h-16 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-lg`}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Icon size={32} className="text-dark" />
          </motion.div>

          {/* Category badge */}
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-dark mb-3`}>
            {achievement.category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
            {achievement.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm mb-4">
            {achievement.description}
          </p>

          {/* Hover indicator */}
          <Link href={`/achievenents?id=${achievement.id}`}>
            <motion.div
              className="flex items-center gap-2 text-cyan-400 dark:text-cyan-400 light:text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <span>See Details</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div>
          </Link>
        </div>

        {/* Border gradient animation */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.5), transparent)`,
            pointerEvents: 'none',
          }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Achievements() {
  return (
    <section
      id="achievements"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400 light:from-blue-600 light:via-blue-500 light:to-cyan-600">
              Top Achievements & Awards
            </span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg max-w-2xl mx-auto">
            Recognition of skills, wins, and memorable moments in my development journey
          </p>
        </motion.div>

        {/* Top 3 Impact strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 light:from-blue-100/50 light:to-cyan-100/50 border border-cyan-500/20 dark:border-cyan-500/20 light:border-blue-300/50"
        >
          <h3 className="text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-semibold mb-3">🌟 Top Highlights</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="text-gray-300 dark:text-gray-300 light:text-slate-800 flex items-start gap-2">
              <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-bold">★</span>
              <span>Hackathon Winner - TechFusion</span>
            </li>
            <li className="text-gray-300 dark:text-gray-300 light:text-slate-800 flex items-start gap-2">
              <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-bold">★</span>
              <span>Recognized at Appathon</span>
            </li>
            <li className="text-gray-300 dark:text-gray-300 light:text-slate-800 flex items-start gap-2">
              <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-bold">★</span>
              <span>Full MERN Stack Expertise</span>
            </li>
          </ul>
        </motion.div>

        {/* Achievement cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
