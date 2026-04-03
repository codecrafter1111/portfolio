'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  technologies: string[];
  liveLink?: string;
  githubLink: string;
  imageUrl: string;
}

interface ProjectGridProps {
  projects: Project[];
  columns?: number;
}

export function ProjectGrid({ projects, columns = 3 }: ProjectGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`grid gap-6 lg:gap-8 grid-cols-1 ${
        columns === 3
          ? 'md:grid-cols-2 lg:grid-cols-3'
          : 'md:grid-cols-2 lg:grid-cols-2'
      }`}
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} {...project} index={index} />
      ))}
    </motion.div>
  );
}
