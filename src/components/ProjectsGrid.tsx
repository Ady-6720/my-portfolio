'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface Project {
  title: string;
  period: string;
  description: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Mindbridge- Android app for Autism",
    period: "08/2024 - Present",
    description: [
      "Spearheading the development of an Android app enhancing cognitive support for individuals with ASD",
      "Utilizing Jetpack, Android Studio, and Firebase for personalized exercises",
      "Collaborating with autism specialists and end-users to ensure the app meets unique needs"
    ],
    tags: ["Android", "Kotlin", "Firebase", "Jetpack"]
  },
  {
    title: "CodeQuest",
    period: "05/2024 - 07/2024",
    description: [
      "Developed a coding practice platform with a diverse problem library",
      "Designed and optimized a MySQL database to manage user data",
      "Implemented secure session handling using local cookies and caching"
    ],
    tags: ["React", "MySQL", "Node.js", "Express"]
  },
  {
    title: "Consistent Hashing Naming Service",
    period: "02/2024 - 03/2024",
    description: [
      "Built a distributed naming system in Java using consistent hashing",
      "Developed a bootstrap server to handle seamless node entry and exit",
      "Configured each server to communicate only with immediate neighbors"
    ],
    tags: ["Java", "Distributed Systems", "Linux", "Networking"]
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for rotation
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), {
    stiffness: 150,
    damping: 20
  });

  // Handle mouse move on card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  // Reset card position when mouse leaves
  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative perspective"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 1
        }}
      >
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#0FA4AF]/30 to-[#964734]/30 opacity-75 blur transition group-hover:opacity-100" />
        <div className="card relative transform-gpu">
          <div 
            className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              transform: "translateZ(2px)",
            }}
          />
          <div className="relative">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#003135]">{project.title}</h3>
              <span className="text-[#0FA4AF] font-mono text-sm">{project.period}</span>
            </div>
            <ul className="mb-4 space-y-2">
              {project.description.map((point, i) => (
                <li key={i} className="text-[#024950] text-sm">• {point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  className="px-3 py-1 rounded-full bg-[#0FA4AF]/10 text-[#024950] text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsGrid = () => {
    return (
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20">
        <motion.h2 
          className="text-4xl font-bold heading-gradient mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textShadow: '2px 2px 0px rgba(15, 164, 175, 0.3)' }}
        >
          Projects
        </motion.h2>
        <div className="w-full max-w-4xl px-4">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default ProjectsGrid;