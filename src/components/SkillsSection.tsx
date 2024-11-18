'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsGrid from '../components/ProjectsGrid';
import ContactForm from '../components/ContactForm';
import Timeline from '../components/Timeline';
import SkillsSection from '../components/SkillsSection';

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fixed Background Gradient with Fade */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-rose-50 to-orange-50"
        style={{ opacity }}
      />

      {/* Fixed Grid Pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(244, 63, 94, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(244, 63, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Parallax Moving Elements */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Floating shapes */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-rose-200/20"
              animate={{
                y: [0, 50, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                left: `${(i * 15) % 100}%`,
                top: `${(i * 20) % 100}%`,
              }}
            />
          ))}
        </div>
      </motion.div>

      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* White gradient overlay that gets stronger as you scroll */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, white)',
            opacity: 0.3,
          }}
        />

        <div className="min-h-screen">
          <HeroSection />
        </div>
        
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            <div className="xl:col-span-2">
            </div>
            <div className="xl:col-span-2">
              <SkillsSection />
            </div>
            <div className="xl:col-span-2">
              <ProjectsGrid />
            </div>
            <div className="xl:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}