'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, Calendar, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const achievementsData = [
    {
        id: 1,
        title: 'Winner of TechFusion Hackathon',
        category: 'Hackathon',
        date: 'November 2024',
        description: 'Successfully competed and won at TechFusion Hackathon, demonstrating full-stack development excellence. Built a complete application from scratch using MERN stack within 24 hours with a team of 3 developers.',
        details: [
            'Developed a scalable full-stack application',
            'Implemented real-time features using WebSockets',
            'Designed responsive UI with modern styling',
            'Won against 50+ competing teams'
        ],
        certificateImage: '/achivement/codefusion5.jpeg',
        trophyImage: '/achivement/codefusion3.jpeg',
        color: 'from-yellow-400 to-orange-400',
        achievements: [
            '🥇 1st Prize',
            '💰 ₹50,000 Prize Money',
            '📜 Official Certificate',
            '🏆 Trophy Recognition'
        ]
    },
    {
        id: 2,
        title: 'Appathon | The Art of Web',
        category: 'Competition & Award',
        date: 'October 2024',
        description: 'Recognized at Appathon for exceptional web development skills and innovative design approach. Showcased a beautifully designed and functionally complete web application with exceptional user experience.',
        details: [
            'Innovative UI/UX design implementation',
            'Performance optimizations and best practices',
            'Demonstrated advanced CSS animations',
            'Received recognition from industry experts'
        ],
        certificateImage: '/achivement/appthon2.jpeg',
        trophyImage: '/achivement/appthon1.jpeg',
        color: 'from-purple-400 to-pink-400',
        achievements: [
            '🌟 Best UI/UX Award',
            '📜 Official Recognition Certificate',
            '🎖️ Badge of Excellence',
            '⭐ Featured Project'
        ]
    },
    {
        id: 3,
        title: 'MERN Stack Expertise',
        category: 'Technical Skills',
        date: 'Ongoing - July 2024 to Present',
        description: 'Proficient in MongoDB, Express.js, React, and Node.js with expert-level knowledge in building scalable applications. Continuously improving skills through real-world projects and learning new technologies.',
        details: [
            'Expert in MongoDB database design and optimization',
            'Advanced Express.js backend architecture',
            'Deep knowledge of React and React Hooks',
            'Node.js server development and deployment'
        ],
        certificateImage: '/achivement/codefusion1.jpeg',
        trophyImage: '/achivement/artofweb2.jpeg',
        color: 'from-cyan-400 to-blue-400',
        achievements: [
            '💻 5+ Full-Stack Projects',
            '⚡ 100+ GitHub Contributions',
            '🚀 Deployed 10+ Live Applications',
            '📚 Continuous Learning & Growth'
        ]
    }
];

function AchievementsDetailContent() {
    const searchParams = useSearchParams();
    const achievementId = searchParams.get('id') ? parseInt(searchParams.get('id')) : 1;

    const achievement = achievementsData.find(a => a.id === achievementId);
    const allAchievements = achievementsData;

    if (!achievement) {
        return (
            <div className="min-h-screen bg-primary flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">Achievement Not Found</h1>
                    <Link href="/#achievements">
                        <motion.button
                            className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600 text-white rounded-lg hover:shadow-lg transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            Back to Portfolio
                        </motion.button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary text-text-primary transition-colors duration-300 pt-20">
            {/* Back Button */}

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-20 left-4 sm:left-4 md:left-6 z-50 lg:left-40"
            >
                <Link href="/#achievements">
                    <motion.button
                        className="group flex items-center gap-2 px-3 py-1.5 text-cyan-400 hover:text-cyan-300 transition duration-300 rounded-lg hover:bg-cyan-500/10"
                        whileHover={{ x: -3 }}
                    >
                        <ArrowLeft size={20} />
                        <span className="text-md font-medium">Back</span>
                    </motion.button>
                </Link>
            </motion.div>



            {/* <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-20 left-52  z-30"
      >
        <Link href="/#achievements">
          <motion.button
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-secondary border border-border-primary hover:border-cyan-400 dark:hover:border-cyan-400 light:hover:border-blue-600 transition"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Back</span>
          </motion.button>
        </Link>
      </motion.div> */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Achievement Detail */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    {/* Hero Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Certificate Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex justify-center mt-10 items-center"
                        >
                            <div className="w-full max-w-sm">
                                <img
                                    src={achievement.certificateImage}
                                    alt={achievement.title}
                                    className="w-full rounded-xl shadow-lg border border-cyan-500/20 dark:border-cyan-500/20 light:border-blue-300"
                                />
                                <p className="text-center text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mt-4">Certificate of Achievement</p>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col justify-center"
                        >
                            <span className={`inline-block text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r ${achievement.color} text-dark mb-4 w-fit`}>
                                {achievement.category}
                            </span>

                            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${achievement.color}`}>
                                    {achievement.title}
                                </span>
                            </h1>

                            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6">
                                <Calendar size={20} />
                                <span className="text-lg">{achievement.date}</span>
                            </div>

                            <p className="text-lg text-gray-300 dark:text-gray-300 light:text-slate-800 mb-8 leading-relaxed">
                                {achievement.description}
                            </p>

                            {/* Achievements */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {achievement.achievements.map((ach, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + idx * 0.05 }}
                                        className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-slate-800"
                                    >
                                        <CheckCircle size={20} className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" />
                                        <span>{ach}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Trophy/Badge Image */}
                    {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center my-16"
          >
            <div className="text-center">
              <img
                src={achievement.trophyImage}
                alt="Trophy"
                className="w-80  rounded-xl shadow-lg border border-cyan-500/20 dark:border-cyan-500/20 light:border-blue-300 mx-auto mb-4"
              />
              <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">Trophy / Award Badge</p>
            </div>
          </motion.div> */}

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/20 dark:from-gray-900/50 dark:to-gray-900/20 light:from-white light:to-slate-50 border border-gray-700 dark:border-gray-700 light:border-gray-200"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-cyan-400 dark:text-cyan-400 light:text-blue-600">Key Highlights</h2>
                        <ul className="space-y-3">
                            {achievement.details.map((detail, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + idx * 0.05 }}
                                    className="flex items-start gap-3 text-gray-300 dark:text-gray-300 light:text-slate-800"
                                >
                                    <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-bold mt-1">✓</span>
                                    <span className="text-lg">{detail}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Other Achievements Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 pt-12 border-t border-gray-700 dark:border-gray-700 light:border-gray-300"
                >
                    <h3 className="text-2xl font-bold mb-8 text-text-primary">Other Achievements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {allAchievements.filter(a => a.id !== achievement.id).map((ach, idx) => (
                            <Link key={ach.id} href={`?id=${ach.id}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.55 + idx * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/20 dark:from-gray-900/50 dark:to-gray-900/20 light:from-white light:to-slate-50 border border-gray-700 dark:border-gray-700 light:border-gray-200 hover:border-cyan-400 dark:hover:border-cyan-400 light:hover:border-blue-600 transition cursor-pointer group"
                                >
                                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${ach.color} text-dark mb-3`}>
                                        {ach.category}
                                    </span>
                                    <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 light:group-hover:text-blue-600 transition">
                                        {ach.title}
                                    </h4>
                                    <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 line-clamp-2">
                                        {ach.description}
                                    </p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Back to Portfolio Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <Link href="/#achievements">
                        <motion.button
                            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-blue-600 light:to-cyan-600 text-dark dark:text-dark light:text-white font-semibold rounded-lg hover:shadow-lg transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Back to Portfolio
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default function AchievementsDetailPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-primary" />}>
            <AchievementsDetailContent />
        </Suspense>
    );
}