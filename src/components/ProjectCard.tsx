'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  shortDescription: string;
  technologies: string[];
  liveLink?: string;
  githubLink: string;
  imageUrl: string;
  index?: number;
}

export function ProjectCard({
  title,
  shortDescription,
  liveLink,
  imageUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-900/40 dark:from-gray-900/80 dark:to-gray-900/40 light:from-white light:to-slate-50 border border-gray-700 dark:border-gray-700 light:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 light:hover:border-blue-400 transition-all duration-300 shadow-lg dark:hover:shadow-cyan-500/20 light:hover:shadow-blue-500/10 hover:shadow-xl">
        {/* Image container */}
        <div className="relative h-48 overflow-hidden bg-gray-800 dark:bg-gray-800 light:bg-gray-200">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent dark:from-gray-900 dark:via-gray-900/40 light:from-slate-900/40 light:via-slate-900/20 opacity-80" />
        </div>

        {/* Content section */}
        <div className="p-4 flex flex-col h-[50%]">
          {/* Title and description */}
          <div className="flex-grow mb-3">
            <motion.h3
              className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-1.5 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 light:group-hover:text-blue-600 transition-colors duration-300 line-clamp-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.1 }}
            >
              {title}
            </motion.h3>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs leading-relaxed line-clamp-2">
              {shortDescription}
            </p>
          </div>

        
          {/* Action buttons */}
          <motion.div
            className="flex gap-4 mb-3 mt-4 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {liveLink && (
              <motion.a
                href={liveLink}
                // target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1 p-3 text-xs font-semibold text-white dark:text-white light:text-white bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-500 dark:to-blue-500 light:from-blue-600 light:to-cyan-600 border border-cyan-400/50 dark:border-cyan-400/50 light:border-blue-400/50 rounded dark:hover:shadow-cyan-500/50 light:hover:shadow-blue-500/30 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={12} />
                <span>Live</span>
              </motion.a>
            )}
            <motion.a
              href="/projects"
            //   target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1 p-3 text-xs font-semibold text-gray-300 dark:text-gray-300 light:text-slate-700 border border-gray-600 dark:border-gray-600 light:border-slate-300 rounded dark:hover:border-gray-400 light:hover:border-blue-600 dark:hover:text-white light:hover:text-slate-900 dark:hover:bg-gray-800/50 light:hover:bg-slate-100 transition-all duration-300"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <Github size={12} /> */}
              <span>Details</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Animated border effect */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background:
              'radial-gradient(circle at center, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}
