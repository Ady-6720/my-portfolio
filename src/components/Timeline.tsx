'use client';

import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';

interface TimelineItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  details: string[];
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

const TimelineSection = ({ title, items }: TimelineProps) => {
  return (
    <section className="py-20">
      <motion.h2
        className="text-4xl font-bold heading-gradient mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textShadow: '2px 2px 0px rgba(15, 164, 175, 0.3)' }}
      >
        {title}
      </motion.h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-px bg-[#0FA4AF]/20 transform -translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCard className="flex-1">
                <div className="card group hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-[#003135]">{item.title}</h3>
                  <p className="text-[#024950] font-medium">{item.organization}</p>
                  <p className="text-[#0FA4AF]">{item.location}</p>
                  <p className="text-[#964734] font-mono">{item.period}</p>
                  <ul className="mt-4 space-y-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-[#024950] text-sm">• {detail}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
              <div className="w-4 h-4 bg-[#0FA4AF] rounded-full border-4 border-[#AFDE5] relative z-10" />
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Data
const experienceData: TimelineItem[] = [
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

const educationData: TimelineItem[] = [
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

const Timeline = ({ title, items }: TimelineProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <TimelineSection title={title} items={items} />
    </div>
  );
};

export default Timeline;