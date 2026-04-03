'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const educationList = [
  {
    id: 1,
    institution: 'Veer Madho Singh Bhandari Uttarakhand Technical University (UTU)',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering (CSE)',
    period: 'August 2024 - June 2028',
    icon: GraduationCap,
  },
  {
    id: 2,
    institution: "Tula's Institute",
    degree: 'Bachelor of Technology',
    field: 'Computer Engineering',
    period: 'July 2024 - June 2028',
    icon: GraduationCap,
  },
  {
    id: 3,
    institution: 'Gyanti Devi balika inter college',
    degree: '12th Grade',
    field: 'Senior Secondary',
    period: 'April 2023 - February 2024',
    icon: BookOpen,
  },
];

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  icon: any;
}

function EducationCard({ education, index }: { education: Education; index: number }) {
  const Icon = education.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ x: 8 }}
    >
      <div className="relative flex gap-6">
        {/* Timeline dot */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600 flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <Icon size={24} className="text-dark" />
          </motion.div>
          {index !== educationList.length - 1 && (
            <div className="w-0.5 h-24 bg-gradient-to-b from-cyan-500/50 to-transparent dark:from-cyan-500/50 light:from-blue-400/30 mt-2" />
          )}
        </div>

        {/* Content */}
        <motion.div
          className="pb-8 pt-2 flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-5 rounded-lg bg-gradient-to-br from-gray-900/50 to-gray-900/20 dark:from-gray-900/50 dark:to-gray-900/20 light:from-white light:to-slate-50 border border-gray-700 dark:border-gray-700 light:border-gray-200 dark:hover:border-cyan-500/30 light:hover:border-blue-400 hover:border-cyan-500/30 transition duration-300">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-cyan-300 dark:text-cyan-300 light:text-blue-600">
                {education.degree}
              </h3>
              <span className="text-xs bg-blue-500/20 dark:bg-blue-500/20 light:bg-blue-100 text-blue-300 dark:text-blue-300 light:text-blue-700 px-3 py-1 rounded-full">
                {education.period}
              </span>
            </div>

            <p className="text-gray-300 dark:text-gray-300 light:text-slate-800 font-medium mb-1">
              {education.institution}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-600">{education.field}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Education() {
  return (
    <section
      id="education"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600">
              Education
            </span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg">
            Academic foundation and learning journey
          </p>
        </motion.div>

        {/* Education timeline */}
        <div className="pl-4">
          {educationList.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
