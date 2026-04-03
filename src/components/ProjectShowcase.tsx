'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ProjectGrid } from './ProjectGrid';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  technologies: string[];
  liveLink?: string;
  githubLink: string;
  imageUrl: string;
}

export function ProjectShowcase() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/resume-data.json');
        const data = await response.json();
        // Get first 3 projects for showcase
        setProjects(data.projects.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-96 bg-gradient-to-r from-gray-900/50 to-gray-900/20 rounded-xl animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col lg:flex-row items-start justify-between gap-6"
        >
          {/* Left side content */}
          <div className="flex-1">
            {/* Top badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <Star size={12} className="text-cyan-400" fill="currentColor" />
                <span className="text-xs font-semibold text-cyan-400">
                  Featured Works
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-blue-400">
                  My Latest Works
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A curated selection of my featured projects showcasing modern web development and production-ready solutions.
            </motion.p>
          </div>

          {/* View All Projects Button - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Link href="/projects">
              <motion.button
                className="group relative inline-flex items-center mt-12 gap-2 px-8 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent   via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />

                <span className="relative flex  items-center gap-2 text-sm">
                  <span className='text-md'>View All Project</span>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={14} />
                  </motion.div>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <ProjectGrid projects={projects} columns={3} />
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <span>More than 10 projects completed</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-500/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
