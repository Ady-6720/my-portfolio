'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsGrid from '../components/ProjectsGrid';
import ContactForm from '../components/ContactForm';
import Timeline from '../components/Timeline';

// Define experienceData
const experienceData = [
  {
    title: "Full-Stack Web Developer",
    organization: "The University Of Georgia",
    location: "GA, USA",
    period: "11/2024 - Present",
    details: [
      "Designed and developed responsive UI components with React",
      "Optimized web performance through dynamic content loading",
      "Configured and managed database schemas",
      "Created RESTful API endpoints"
    ]
  },
  {
    title: "Software Engineer",
    organization: "GrunTech Solutions",
    location: "Nashik, MH, India",
    period: "05/2022 - 08/2023",
    details: [
      "Collaborated with a team of 7 to develop a Batch Management System using Java and JavaFX",
      "Designed and optimized a high-performance SQL database",
      "Configured AWS RDS with multi-AZ deployments",
      "Integrated Docker on AWS for containerized environments"
    ]
  }
];

// Define educationData
const educationData = [
  {
    title: "Master of Science in Computer Science",
    organization: "University of Georgia",
    location: "Athens, GA, USA",
    period: "08/2023 - Present",
    details: [
      "GPA: 3.8/4.0",
      "Relevant Coursework: Software Engineering, Database Management Systems, Distributed Systems"
    ]
  },
  {
    title: "Bachelor of Engineering",
    organization: "University of Pune",
    location: "Nashik, MH, India",
    period: "06/2018 - 08/2022",
    details: [
      "Major in Electrical Engineering",
      "GPA: 9.18/10",
      "Relevant coursework: Power Electronics, Automation, Robotics"
    ]
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  const controls = useAnimation();
  const [heroRef, heroInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [educationRef, educationInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (heroInView) controls.start('visible');
  }, [controls, heroInView]);

  useEffect(() => {
    if (projectsInView) controls.start('visible');
  }, [controls, projectsInView]);

  useEffect(() => {
    if (experienceInView) controls.start('visible');
  }, [controls, experienceInView]);

  useEffect(() => {
    if (educationInView) controls.start('visible');
  }, [controls, educationInView]);

  useEffect(() => {
    if (contactInView) controls.start('visible');
  }, [controls, contactInView]);

  return (
    <div className="relative min-h-screen bg-[#AFDE5] snap-y">
      {/* Fixed Background */}
      <div className="fixed inset-0">
        {/* Grid Pattern */}
        <motion.div 
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 pointer-events-none select-none" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(15, 164, 175, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(15, 164, 175, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              opacity: 0.3
            }}
          />
        </motion.div>

        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#0FA4AF]/10"
              animate={{
                x: [0, 50, 0],
                y: [0, i % 2 === 0 ? 50 : -50, 0],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              style={{
                left: `${(i * 25) % 100}%`,
                top: `${(i * 30) % 100}%`,
                width: `${300 + i * 30}px`,
                height: `${300 + i * 30}px`,
                filter: 'blur(50px)',
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-[#024950]/40"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <Navbar />
      
      <main className="relative z-10">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="snap-start"
        >
          <div className="min-h-screen py-20">
            <HeroSection />
          </div>
        </motion.div>

        <motion.div
          ref={experienceRef}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="snap-start"
        >
          <div className="min-h-screen py-20">
            <Timeline title="Experience" items={experienceData} />
          </div>
        </motion.div>

        <motion.div
          ref={educationRef}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="snap-start"
        >
          <div className="min-h-screen py-20">
            <Timeline title="Education" items={educationData} />
          </div>
        </motion.div>
        
        <motion.div
          ref={projectsRef}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="snap-start"
        >
          <div className="min-h-screen py-20">
            <ProjectsGrid />
          </div>
        </motion.div>
        
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="snap-start"
        >
          <div className="min-h-screen py-20">
            <ContactForm />
          </div>
        </motion.div>
      </main>
    </div>
  );
}