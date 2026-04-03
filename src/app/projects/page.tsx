'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';


interface Project {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  features: string[];
  liveLink?: string;
  githubLink: string;
  imageUrl: string;
}

const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Airbnb Clone",
    shortDescription: "Full-stack Airbnb-inspired booking platform with listings, authentication, and image hosting",
    description: "Built a full-stack Airbnb clone with property listing flows, authentication middleware, cloud image handling, and server-side rendered views. The project includes backend route/controller architecture, schema validation, and listing management features.",
    technologies: ["Node.js", "Express", "MongoDB", "EJS", "JavaScript", "CSS", "Cloudinary"],
    features: [
      "Property listing creation and management",
      "Authentication and protected routes",
      "MVC-style backend structure (controllers, routers, models)",
      "Cloud image upload integration",
      "Template-rendered UI with EJS",
      "Validation with schema and middleware",
      "Responsive listing pages"
    ],
    liveLink: "https://airbnb-clone-demo.vercel.app",
    githubLink: "https://github.com/codecrafter1111/Airbnb-clone",
    imageUrl: "/projectImg/airbnb.png"
  },
  {
    id: 2,
    title: "Automated Attendance",
    shortDescription: "Modern React attendance application with dashboard UI and responsive workflow",
    description: "Developed an attendance-focused frontend application using React and Vite with modern tooling. The project emphasizes responsive UI, organized component structure, and scalable frontend architecture for attendance management workflows.",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
    features: [
      "Attendance-centric interface and flows",
      "Responsive UI built with Tailwind CSS",
      "Modern React component architecture",
      "Fast dev/build with Vite",
      "Routing-ready structure for scalable screens",
      "Animation-friendly UX patterns",
      "Production build setup"
    ],
    liveLink: "https://automated-attendance.vercel.app",
    githubLink: "https://github.com/codecrafter1111/Automated-Attendance",
    imageUrl: "https://opengraph.githubassets.com/1/codecrafter1111/Automated-Attendance"
  },
  {
    id: 3,
    title: "Admin Dashboard",
    shortDescription: "Feature-rich admin dashboard for orders, sales analytics, and product/client management",
    description: "Built a feature-rich admin dashboard to monitor orders, track product sales, manage client data, and add new products. Implemented interactive chart visualizations and real-time style dashboard updates with a responsive interface.",
    technologies: ["React", "Vite", "JavaScript", "CSS", "Charting Libraries"],
    features: [
      "Admin panel for product and client management",
      "Order monitoring dashboard",
      "Sales tracking and analytics views",
      "Interactive graph and pie chart visualizations",
      "Clean, responsive dashboard layout",
      "CRUD-friendly management workflows",
      "Scalable React component structure"
    ],
    liveLink: "https://admin-dashboard-demo.vercel.app",
    githubLink: "https://github.com/codecrafter1111/Admin-Deskboard",
    imageUrl: "/projectImg/admin.png"
  },
  {
    id: 4,
    title: "Sunset Website",
    shortDescription: "Beautiful and responsive sunset-themed portfolio website with modern design and smooth animations",
    description: "Created a stunning sunset-themed portfolio website showcasing modern web design principles. Features smooth animations, responsive layout, and beautiful gradient backgrounds that create an immersive visual experience. Perfect for showcasing creative work and projects.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "CSS Animations"],
    features: [
      "Beautiful gradient sunset color scheme",
      "Fully responsive design for all devices",
      "Smooth scroll animations and transitions",
      "Interactive hover effects",
      "Portfolio gallery section",
      "Contact form integration",
      "Mobile-optimized performance"
    ],
    liveLink: "https://sunset-w.netlify.app/",
    githubLink: "https://github.com/codecrafter1111/sunset_website",
    imageUrl: "/projectImg/sunset4.png"
  },
  {
    id: 5,
    title: "Burgers Zone",
    shortDescription: "Modern food restaurant website featuring burger menu, online ordering, and delivery tracking",
    description: "Developed a fully functional food restaurant website with comprehensive menu management, online ordering system, and real-time delivery tracking. Features user authentication, payment processing, and admin dashboard for restaurant management.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase", "Payment API"],
    features: [
      "Dynamic burger menu with filtering",
      "Online ordering system with cart",
      "User authentication and profiles",
      "Payment gateway integration",
      "Order tracking and history",
      "Admin restaurant management panel",
      "Responsive mobile-first design"
    ],
    liveLink: "https://burgur-zone.netlify.app/",
    githubLink: "https://github.com/codecrafter1111/food_website",
    imageUrl: "/projectImg/burgur.png"
  }
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/resume-data.json');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        if (data.projects && data.projects.length > 0) {
          setProjects(data.projects);
        } else {
          setProjects(FALLBACK_PROJECTS);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(FALLBACK_PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="bg-primary text-text-primary min-h-screen overflow-x-hidden flex items-center justify-center transition-colors duration-300">
        <AnimatedBackground />
        <div className="relative z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary text-text-primary min-h-screen overflow-x-hidden transition-colors duration-300">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Header Section */}
        <div className="pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-500/10 to-transparent">
          <div className="max-w-6xl mx-auto">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Link href="/#projects">
                <motion.button
                  className="group flex items-center gap-2 px-3 py-1.5 text-cyan-400 hover:text-cyan-300 transition duration-300 rounded-lg hover:bg-cyan-500/10"
                  whileHover={{ x: -3 }}
                >
                  <ArrowLeft size={20} />
                  <span className="text-md font-medium">Back</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Page header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 pb-6"
            >

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-blue-400">
                  All Projects
                </span>
              </h1>

              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                Complete collection of my projects built with modern technologies.
              </p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 gap-3 mt-6 max-w-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="px-3 py-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg">
                  <div className="text-lg font-bold text-cyan-400">
                    {projects.length}+
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">Projects</p>
                </div>
                <div className="px-3 py-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
                  <div className="text-lg font-bold text-purple-400">MERN</div>
                  <p className="text-xs text-gray-400 mt-0.5">Stack</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Projects Grid */}
            <div className="space-y-10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  id={`project-${project.id}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="group"
                >
                  {/* Project Card */}
                  <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 shadow-lg hover:shadow-cyan-500/25">
                    {/* Alternating layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Image */}
                      <motion.div
                        className={`relative h-full md:h-full overflow-hidden ${
                          index % 2 === 1 ? 'md:order-2' : ''
                        }`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-transparent to-gray-900/40" />
                      </motion.div>

                      {/* Content */}
                      <div
                        className={`p-6 md:p-8 flex flex-col justify-between ${
                          index % 2 === 1 ? 'md:order-1' : ''
                        }`}
                      >
                        {/* Project info */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {project.title}
                          </h2>
                          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                            {project.description}
                          </p>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                          className="mb-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.25 }}
                        >
                          <h3 className="text-xs font-bold text-cyan-400 mb-2">
                            Key Features
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                            {project.features.slice(0, 4).map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25 + idx * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-1.5 text-gray-300 text-xs"
                              >
                                <span className="text-cyan-400 font-bold mt-0.5">
                                  ✓
                                </span>
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </div>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                          className="mb-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h3 className="text-xs font-bold text-blue-400 mb-2">
                            Tech Stack
                          </h3>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, idx) => (
                              <motion.span
                                key={idx}
                                className="inline-block px-2 py-0.5 text-xs font-medium text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 rounded hover:border-cyan-400/60 hover:bg-cyan-500/25 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                          className="flex gap-5 flex-wrap"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.35 }}
                        >
                          {project.liveLink && (
                            <motion.a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn flex items-center gap-1.5 px-4 py-2 font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded hover:shadow-lg hover:shadow-cyan-500/50 text-xs"
                              whileHover={{ y: -1, scale: 1.02 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink size={14} />
                              Live Demo
                            </motion.a>
                          )}
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 font-medium text-white border border-gray-600 rounded hover:border-cyan-400 hover:bg-gray-800/50 transition-all duration-300 text-xs"
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={14} />
                            View Code
                          </motion.a>
                        </motion.div>
                      </div>
                    </div>

                    {/* Gradient border effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background:
                          'radial-gradient(800px at 50% 50%, rgba(34, 211, 238, 0.05) 0%, transparent 80%)',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gray-700"
            >
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Interested in collaborating?
                </h2>
                <p className="text-gray-400 text-sm md:text-base mb-6 max-w-2xl mx-auto">
                  I&apos;m open to new opportunities and exciting projects.
                </p>
                <Link href="/#contact">
                  <motion.button
                    className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg shadow-cyan-500/30 text-md"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
