'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  technologies: string[];
  liveLink?: string;
  githubLink: string;
  imageUrl: string;
}

const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Airbnb Clone",
    shortDescription: "Full-stack Airbnb-inspired booking platform with listings, authentication, and image hosting",
    technologies: ["Node.js", "Express", "MongoDB", "EJS", "JavaScript", "CSS", "Cloudinary"],
    liveLink: "https://airbnb-clone-demo.vercel.app",
    githubLink: "https://github.com/codecrafter1111/Airbnb-clone",
    imageUrl: "/projectImg/airbnb.png"
  },
  {
    id: 2,
    title: "Automated Attendance",
    shortDescription: "Modern React attendance application with dashboard UI and responsive workflow",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
    liveLink: "https://automated-attendance.vercel.app",
    githubLink: "https://github.com/codecrafter1111/Automated-Attendance",
    imageUrl: "https://opengraph.githubassets.com/1/codecrafter1111/Automated-Attendance"
  },
  {
    id: 3,
    title: "Admin Dashboard",
    shortDescription: "Feature-rich admin dashboard for orders, sales analytics, and product/client management",
    technologies: ["React", "Vite", "JavaScript", "CSS", "Charting Libraries"],
    liveLink: "https://admin-dashboard-demo.vercel.app",
    githubLink: "https://github.com/codecrafter1111/Admin-Deskboard",
    imageUrl: "/projectImg/admin.png"
  },
  // {
  //   id: 4,
  //   title: "Sunset Website",
  //   shortDescription: "Beautiful and responsive sunset-themed portfolio website with modern design and smooth animations",
  //   technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Animations"],
  //   liveLink: "https://sunset-website-demo.vercel.app",
  //   githubLink: "https://github.com/codecrafter1111/sunset_website",
  //   imageUrl: "https://opengraph.githubassets.com/1/codecrafter1111/sunset_website"
  // },
  // {
  //   id: 5,
  //   title: "Burgers Zone",
  //   shortDescription: "Modern food restaurant website featuring burger menu, online ordering, and delivery tracking",
  //   technologies: ["React", "JavaScript", "Tailwind CSS", "Fast API", "Payment Integration"],
  //   liveLink: "https://burgers-zone-demo.vercel.app",
  //   githubLink: "https://github.com/codecrafter1111/food_website",
  //   imageUrl: "https://opengraph.githubassets.com/1/codecrafter1111/food_website"
  // }
];

export function Projects() {
  const projects = FALLBACK_PROJECTS;

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600 rounded-full" />
            <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-700 font-semibold">Featured Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600">
              My Latest Work
            </span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg max-w-2xl">
            Explore some of my recent projects built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full">
          {projects && projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group w-full"
            >
              <div className="relative h-full rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-900/40 dark:from-gray-900/80 dark:to-gray-900/40 light:from-white light:to-slate-50 border border-gray-700 dark:border-gray-700 light:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 light:hover:border-blue-400 transition-all duration-300 shadow-lg dark:hover:shadow-cyan-500/20 light:hover:shadow-blue-500/10 hover:shadow-xl flex flex-col">
                {/* Image container */}
                <div className="relative h-48 overflow-hidden bg-gray-800 dark:bg-gray-800 light:bg-gray-200 flex-shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23374151" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="18" fill="%239CA3AF" text-anchor="middle" dy=".3em"%3E' + project.title + '%3C/text%3E%3C/svg%3E';
                    }}
                  
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent dark:from-gray-900 dark:via-gray-900/40 light:from-slate-900/40 light:via-slate-900/20 opacity-80" />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 light:group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs mb-3 line-clamp-2 flex-grow">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies && project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 py-0.5 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-blue-700 bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-blue-100 border border-cyan-500/20 dark:border-cyan-500/20 light:border-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 flex-wrap">
                    {project.liveLink && project.liveLink.trim() !== '' && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-white dark:text-white light:text-white bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-500 dark:to-blue-500 light:from-blue-600 light:to-cyan-600 border border-cyan-400/50 dark:border-cyan-400/50 light:border-blue-400/50 rounded dark:hover:shadow-cyan-500/50 light:hover:shadow-blue-500/30 hover:shadow-lg transition-all duration-300"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={14} />
                        <span>Live</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={`/projects#project-${project.id}`}
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-gray-300 dark:text-gray-300 light:text-slate-700 border border-gray-600 dark:border-gray-600 light:border-slate-300 rounded-lg dark:hover:border-cyan-400 light:hover:border-blue-600 dark:hover:text-white light:hover:text-slate-900 dark:hover:bg-gray-800/50 light:hover:bg-slate-100 transition-all duration-300"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Details</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/?view=projects">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-dark dark:text-dark light:text-white bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600 rounded-lg dark:hover:shadow-cyan-500/50 light:hover:shadow-blue-500/30 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
