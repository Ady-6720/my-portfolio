'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, Code, Terminal, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:aditya.inc6720@gmail.com', label: 'Email' },
  { icon: Globe, href: 'https://yourwebsite.com', label: 'Portfolio' }
];

const techIcons = [
  { icon: Code, label: 'Development' },
  { icon: Terminal, label: 'Systems' },
  { icon: Cpu, label: 'Architecture' },
];

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number }>>([]);
  
  // Spring configurations for smoother animations
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  // Transform ranges for 3D effect
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  const textX = useTransform(mouseX, [-300, 300], [-20, 20]);
  const textY = useTransform(mouseY, [-300, 300], [-20, 20]);
  const scale = useTransform(mouseX, [-300, 300], [0.95, 1.05]);

  // Generate random particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);

    // Update rotation based on mouse position
    setRotation({
      x: ((clientY - top) / height - 0.5) * 20,
      y: ((clientX - left) / width - 0.5) * 20,
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const glowVariants = {
    idle: {
      opacity: 0.5,
      scale: 1,
    },
    hover: {
      opacity: 0.8,
      scale: 1.2,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    idle: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(15, 164, 175, 0.3)",
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(15, 164, 175, 0.5)",
    },
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden perspective"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-[#0FA4AF]/20 rounded-full"
            initial={{ x: particle.x, y: particle.y }}
            animate={{
              x: [particle.x - 50, particle.x + 50],
              y: [particle.y - 50, particle.y + 50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{ width: particle.size, height: particle.size }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="text-center space-y-12 max-w-5xl px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title Section */}
        <motion.div 
          style={{ 
            rotateX, 
            rotateY,
            x: textX,
            y: textY,
            scale,
          }}
          className="transform-gpu space-y-8"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-2 bg-[#0FA4AF]/10 blur-xl rounded-full"
              variants={glowVariants}
              initial="idle"
              animate={isHovered ? "hover" : "idle"}
            />
            <motion.h1 
              className="text-7xl md:text-8xl font-bold text-[#003135]
                        [text-shadow:4px_4px_0px_#0FA4AF,8px_8px_0px_#024950]
                        tracking-wider relative"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block"
                animate={{ rotateX: rotation.x, rotateY: rotation.y }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                ADITYA MALODE
              </motion.span>
            </motion.h1>
          </div>

          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-[#024950]
                        tracking-wide cyber-box p-4 backdrop-blur-sm"
              animate={{
                textShadow: isHovered 
                  ? "0 0 8px rgba(15, 164, 175, 0.5)"
                  : "0 0 0px rgba(15, 164, 175, 0)",
              }}
            >
              Full Stack Developer | UI/UX | Analyst
            </motion.h2>
          </motion.div>

          {/* Tech Icons */}
          <motion.div 
            className="flex justify-center gap-6"
            variants={itemVariants}
          >
            {techIcons.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                className="text-[#0FA4AF] opacity-80"
                whileHover={{ scale: 1.2, opacity: 1 }}
              >
                <Icon size={28} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-8"
          variants={itemVariants}
        >
          {socialLinks.map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/80 text-[#0FA4AF]
                       backdrop-blur-sm hover:shadow-[#0FA4AF]/20
                       border border-[#0FA4AF]/20 hover:border-[#0FA4AF]/40
                       transition-all duration-300 group cyber-box"
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              custom={index}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
              >
                <div className="w-full h-full rounded-xl border border-[#0FA4AF]/20" />
              </motion.div>
              <Icon size={28} className="relative z-10 group-hover:text-[#024950]" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
        className="flex flex-wrap justify-center gap-6"
        variants={itemVariants}
      >
        <motion.a
          href="#projects"
          className="px-8 py-4 text-lg bg-white/80 text-[#003135] rounded-xl
                   shadow-lg hover:shadow-[#0FA4AF]/20 backdrop-blur-sm
                   border border-[#0FA4AF]/20 hover:border-[#0FA4AF]/40
                   transition-all duration-300 cyber-box"
          variants={buttonVariants}
          initial="idle"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          View Work
        </motion.a>
        <motion.a
          href="#contact"
          className="px-8 py-4 text-lg bg-white/80 text-[#003135] rounded-xl
                   shadow-lg hover:shadow-[#0FA4AF]/20 backdrop-blur-sm
                   border border-[#0FA4AF]/20 hover:border-[#0FA4AF]/40
                   transition-all duration-300 cyber-box"
          variants={buttonVariants}
          initial="idle"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
      </motion.div>
    </section>
  );
}