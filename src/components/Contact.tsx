'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Download, Copy, Check, Github } from 'lucide-react';
import { useState } from 'react';

// SVG Icons for social platforms without lucide-react icons
const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LeetcodeIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M16.102 17.93h-2.995v-5.738h2.995v5.738zM20.738 20.412h-3.994v-5.906h3.994v5.906zM9.663 12.06h3.15V8.922h-3.15v3.138zm5.265-5.996h3.15v3.138h-3.15V6.064zm12.321 3.653a.361.361 0 00-.361-.361h-.cli.js.txt-2.976a.361.361 0 00-.361.361v10.907a.361.361 0 00.361.361h2.976a.361.361 0 00.361-.361V9.717zM2.379 20.412H.383V8.25h2.377v12.162zM1.381 5.129a1.381 1.381 0 110-2.762 1.381 1.381 0 010 2.762z" />
  </svg>
);

const contactInfo = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'prabhatyadav-0b1222334',
    href: 'https://www.linkedin.com/in/prabhat-yadav-0b1222334/',
  },
 {
    icon: Github,
    label: 'GitHub',
    value: 'codecrafter1111',
    href: 'https://github.com/codecrafter1111',
  },
  {
    icon: LeetcodeIcon,
    label: 'LeetCode',
    value: 'codecrafter1111',
    href: 'https://leetcode.com/u/codecrafter1111/',
  },
  
];


function ContactCard({ contact, index }: any) {
  const Icon = contact.icon;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/20 dark:from-gray-900/50 dark:to-gray-900/20 light:from-white light:to-slate-50 border border-gray-700 dark:border-gray-700 light:border-gray-200 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 light:hover:border-blue-400 transition duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <motion.div
          className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 light:from-blue-100 light:to-cyan-100 flex items-center justify-center group-hover:bg-gradient-to-br dark:group-hover:from-cyan-500/40 dark:group-hover:to-blue-500/40 light:group-hover:from-blue-200 light:group-hover:to-cyan-200 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <Icon size={24} className="text-cyan-400 dark:text-cyan-400 light:text-blue-700" />
        </motion.div>
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            handleCopy();
          }}
          className="text-gray-500 dark:text-gray-500 light:text-gray-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? (
            <Check size={18} className="text-green-400" />
          ) : (
            <Copy size={18} />
          )}
        </motion.button>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-600 mb-1">{contact.label}</p>
      <p className="text-gray-300 dark:text-gray-300 light:text-slate-800 font-semibold break-all group-hover:text-cyan-300 dark:group-hover:text-cyan-300 light:group-hover:text-blue-600 transition">
        {contact.value}
      </p>
    </motion.a>
  );
}

export function Contact() {
  const [downloadFormat, setDownloadFormat] = useState<'pdf' | 'json' | null>(null);

  const handleDownload = (format: 'pdf' | 'json') => {
    setDownloadFormat(format);

    if (format === 'json') {
      // Download as JSON
      const resumeData = {
        basics: {
          name: 'Prabhat Yadav',
          title: 'MERN Stack Developer | Node.js | Express.js | MongoDB | React.js',
          summary:
            'I am a MERN Stack Developer experienced in building scalable and responsive web applications using MongoDB, Express.js, React, and Node.js...',
          location: 'Dehradun, Uttarakhand, India',
          email: 'codecrafter432@gmail.com',
          alternateEmail: 'kprabhat1585@gmail.com',
          linkedIn: 'www.linkedin.com/in/prabhatyadav-0b1222334',
        },
        skills: [
          'React.js',
          'Node.js',
          'MongoDB',
          'Express.js',
          'TypeScript',
          'Tailwind CSS',
          'JavaScript',
          'REST APIs',
          'Git',
        ],
        education: [
          {
            institution: 'Veer Madho Singh Bhandari Uttarakhand Technical University (UTU)',
            degree: 'Bachelor of Technology',
            field: 'Computer Science & Engineering (CSE)',
            period: 'August 2024 - June 2028',
          },
          {
            institution: "Tula's Institute",
            degree: 'Bachelor of Technology',
            field: 'Computer Engineering',
            period: 'July 2024 - June 2028',
          },
        ],
        awards: [
          'Winner of TechFusion Hackathon',
          'Appathon | The Art of Web',
        ],
      };

      const dataStr = JSON.stringify(resumeData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'prabhat-resume.json';
      link.click();
    }

    setTimeout(() => setDownloadFormat(null), 2000);
  };

  return (
    <section
      id="contact"
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg">
            Let&apos;s connect and explore opportunities together
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <ContactCard key={index} contact={contact} index={index} />
          ))}
        </div>

      
        {/* Resume download section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 light:from-blue-100/50 light:to-cyan-100/50 border border-cyan-500/20 dark:border-cyan-500/20 light:border-blue-300/50 text-center"
        >
          <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-4">
            📄 Download My Resume
          </h3>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm sm:text-base md:text-lg mb-8">
            Get my complete resume in your preferred format
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => handleDownload('json')}
              className="px-8 py-3 font-semibold text-dark dark:text-dark light:text-white bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600 rounded-lg dark:hover:shadow-cyan-500/50 light:hover:shadow-blue-500/30 hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2 justify-center">
                <Download size={18} />
                {downloadFormat === 'json' ? 'Downloading...' : 'JSON Format'}
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* CTA to explore */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">
            Interested in collaboration or learning about my work?{' '}
            <a
              href="mailto:codecrafter432@gmail.com"
              className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 dark:hover:text-cyan-300 light:hover:text-blue-700 font-semibold transition"
            >
              Send me an email
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
