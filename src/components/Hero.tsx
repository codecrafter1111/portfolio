'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import jsPDF from 'jspdf';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  const handleDownloadResume = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 15;

    // Title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('PRABHAT KR YADAV', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 8;

    // Subtitle
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('MERN Full-Stack Developer', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 6;

    // Contact Info
    doc.setFontSize(10);
    doc.text('9889061892 | yprabhat385@gmail.com | LinkedIn | GitHub', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;

    // Section Helper
    const addSection = (title: string) => {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(title, 15, yPosition);
      yPosition += 7;
      doc.setDrawColor(100, 200, 255);
      doc.setLineWidth(0.5);
      doc.line(15, yPosition - 2, pageWidth - 15, yPosition - 2);
      yPosition += 3;
    };

    // Summary
    addSection('SUMMARY');
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const summaryText = 'Full-Stack MERN Developer with hands-on experience building scalable web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Strong in developing responsive user interfaces, REST APIs, and efficient backend logic.';
    const wrappedSummary = doc.splitTextToSize(summaryText, pageWidth - 30);
    doc.text(wrappedSummary, 15, yPosition);
    yPosition += wrappedSummary.length * 4 + 5;

    // Skills
    addSection('SKILLS & EXPERTISE');
    doc.setFontSize(10);
    const skills = [
      'Programming Languages: JavaScript, C++, TypeScript',
      'Frontend: Next.js, React.js, Tailwind CSS, Redux, CSS, HTML',
      'Backend: Node.js, Express.js',
      'Databases: MongoDB, PostgreSQL, Mongoose',
      'Tools: GitHub, Git, Visual Studio Code, Figma',
      'Mobile: React Native',
      'Interests: Full-stack architecture, Scalable systems, Product-based development',
    ];
    skills.forEach(skill => {
      doc.text(`• ${skill}`, 15, yPosition);
      yPosition += 5;
    });
    yPosition += 3;

    // Projects
    addSection('PROJECTS');
    const projects = [
      {
        title: 'Airbnb Clone (Full-Stack Project)',
        date: 'Nov 2025 — Dec 2025',
        desc: 'Built a fully functional Airbnb clone with end-to-end client-server integration, MongoDB database, RESTful APIs, and JWT authentication.',
      },
      {
        title: 'Attendance Management System',
        date: 'Aug 2025 — Oct 2025',
        desc: 'Developed attendance system with QR code marking, camera integration, and dual-role dashboards with real-time analytics.',
      },
      {
        title: 'Admin Dashboard for Sales Tracking',
        date: 'May 2025 — Present',
        desc: 'Built admin dashboard for order monitoring, product sales tracking, and real-time analytics with responsive UI.',
      },
    ];

    projects.forEach(project => {
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = 15;
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(project.title, 15, yPosition);
      yPosition += 5;
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(9);
      doc.text(project.date, 15, yPosition);
      yPosition += 4;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      const wrappedDesc = doc.splitTextToSize(project.desc, pageWidth - 30);
      doc.text(wrappedDesc, 15, yPosition);
      yPosition += wrappedDesc.length * 3.5 + 4;
    });

    yPosition += 2;

    // Awards
    if (yPosition > pageHeight - 30) {
      doc.addPage();
      yPosition = 15;
    }
    addSection('HONORS & AWARDS');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('3× Hackathon Winner – Tula\'s Institute', 15, yPosition);
    yPosition += 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const awards = [
      'CodeFusion: Developed Student Attendance ERP system using MERN stack. Reduced marking time by 80%.',
      'Art of Web: Built responsive web app using React.js and animation libraries.',
      'Appathon: Developed high-performance mobile app for student career growth.',
    ];
    awards.forEach(award => {
      doc.text(`• ${award}`, 15, yPosition);
      yPosition += 5;
    });

    yPosition += 2;

    // Education
    if (yPosition > pageHeight - 20) {
      doc.addPage();
      yPosition = 15;
    }
    addSection('EDUCATION');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('Tula\'s Institute Dehradun – Bachelor of Technology', 15, yPosition);
    yPosition += 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Computer Science & Engineering | Aug 2024 – Present', 15, yPosition);
    yPosition += 5;
    doc.text('Active participant in coding clubs and tech meetups, improving Full-Stack development skills.', 15, yPosition);

    // Download
    doc.save('Prabhat_Yadav_Resume.pdf');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/50 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 w-full max-w-7xl"
      >
        {/* Two Column Layout - Mobile First */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Right side - Profile Image/Visual (appears first on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="lg:order-2 w-full flex justify-center items-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-md aspect-square">
              {/* Glow background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 light:from-blue-200/30 light:to-cyan-200/30 rounded-2xl blur-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Profile card */}
              <motion.div
                className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 dark:from-gray-900/80 dark:to-gray-900/40 light:from-slate-50 light:to-blue-50 border border-gray-700 dark:border-gray-700 light:border-slate-200 rounded-[50%] p-8 backdrop-blur-xl  "
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder for profile image */}
                <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/30 to-blue-500/30 dark:from-cyan-500/30 dark:to-blue-500/30 light:from-blue-100 light:to-cyan-100  rounded-[50%] flex items-center justify-center border   border-cyan-500/20 dark:border-cyan-500/20 light:border-blue-300">
                  <div className="text-center ">
                    <img 
                      src="/profileImg/1.png" 
                      alt="Prabhat Yadav"
                      className="w-full h-full rounded-[50%]"
                    />
                  </div>
                </div>

                {/* Status badge */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 light:from-blue-100/80 light:to-cyan-100/80 border border-cyan-500/30 dark:border-cyan-500/30 light:border-blue-400/50 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-xs font-semibold text-cyan-300 dark:text-cyan-300 light:text-blue-700">Active</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Left side - Content (appears second on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:order-1"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-6xl md:text-6xl font-bold mb-2 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <span className="text-white dark:text-white light:text-slate-900">Prabhat Kr </span>
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600">
                Yadav
              </span>
            </motion.h1>

            {/* Title/Role */}
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 dark:from-cyan-300 dark:to-blue-400 light:from-blue-600 light:to-cyan-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              MERN & React-Native Developer
            </motion.p>

            {/* Summary */}
            <motion.p
              className="text-base sm:text-lg text-gray-300 dark:text-gray-300 light:text-gray-600 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Building scalable, responsive, and modern web applications with the MERN 
              stack. Passionate about clean code, modern UI/UX, and creating seamless user 
              experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('experience')}
                className="group relative px-8 py-3 font-semibold text-dark dark:text-dark light:text-white bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600 rounded-full overflow-hidden hover:shadow-lg dark:hover:shadow-cyan-500/50 light:hover:shadow-blue-500/30 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span className="relative flex items-center justify-center gap-2">
                  View Experience
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown size={18} />
                  </motion.span>
                </motion.span>
              </motion.button>

              <motion.button
                onClick={handleDownloadResume}
                className="group px-8 py-3 font-semibold text-white dark:text-white light:text-slate-800 border-2 border-gray-600 dark:border-gray-600 light:border-slate-400 rounded-full dark:hover:border-cyan-400 light:hover:border-blue-600 dark:hover:bg-gray-800/50 light:hover:bg-slate-100 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download Resume
                </span>
              </motion.button>
            </motion.div>

            {/* Location */}
            <motion.p
              className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-500 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              📍 Dehradun, Uttarakhand, India
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating elements for depth */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-blue-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ pointerEvents: 'none' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/10 light:bg-cyan-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ pointerEvents: 'none' }}
      />
    </section>
  );
}
