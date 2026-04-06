'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { SplashScreen } from '@/components/SplashScreen';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function HomeContent() {
  const [showSplash, setShowSplash] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const viewParam = searchParams.get('view');

  // Redirect to projects page if view=projects
  useEffect(() => {
    if (viewParam === 'projects') {
      router.push('/projects');
    }
  }, [viewParam, router]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // Prevent scroll during splash screen
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSplash]);

  return (
    <div className="bg-primary text-text-primary min-h-screen overflow-x-hidden transition-colors duration-300">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Splash screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Main content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation scrollToSection={scrollToSection} />

        {/* Sections */}
        <Hero scrollToSection={scrollToSection} />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="bg-primary min-h-screen" />}>
      <HomeContent />
    </Suspense>
  );
}
