import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'Python', level: 70, color: 'from-blue-500 to-blue-600' },
    { name: 'React', level: 68, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Node.js', level: 65, color: 'from-green-500 to-green-600' },
    { name: 'Data Science', level: 67, color: 'from-purple-500 to-purple-600' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/ragula-shiva-shankar-resume.pdf';
    link.download = 'RAGULA_SHIVA_SHANKAR_Resume.pdf';
    link?.click();
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse-subtle"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse-subtle animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-success rounded-full mix-blend-multiply filter blur-xl animate-pulse-subtle animation-delay-4000"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Available for Full-time Opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Shiva Shankar
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl text-text-secondary font-medium"
              >
                Transforming Complex Problems into{' '}
                <span className="text-accent font-semibold">Elegant Solutions</span>
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-text-secondary leading-relaxed max-w-2xl"
            >
              Full-stack developer and data science enthusiast passionate about creating 
              innovative solutions that bridge the gap between complex algorithms and 
              user-friendly applications. Currently seeking opportunities to contribute 
              to impactful projects in a collaborative team environment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                onClick={handleResumeDownload}
                iconName="Download"
                iconPosition="left"
                iconSize={20}
                className="animate-pulse-subtle hover:animate-none transition-all duration-300 hover:scale-105 shadow-elevation hover:shadow-elevation-lg"
              >
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/projects-innovation-showcase'}
                iconName="FolderOpen"
                iconPosition="left"
                iconSize={20}
                className="transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-text-secondary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-text-secondary">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-text-secondary">Years Learning</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Skill Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Central Avatar */}
              <div className="relative z-10 w-48 h-48 mx-auto mb-8">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-elevation-lg">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon name="Code" size={64} className="text-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Skills */}
                {skills?.map((skill, index) => (
                  <motion.div
                    key={skill?.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: currentSkill === index ? 1.2 : 1,
                      rotate: currentSkill === index ? 360 : 0
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      rotate: { duration: 2, ease: "easeInOut" }
                    }}
                    className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${skill?.color} flex items-center justify-center shadow-elevation text-white font-bold text-sm ${
                      index === 0 ? '-top-4 -left-8' :
                      index === 1 ? '-top-4 -right-8' :
                      index === 2 ? '-bottom-4 -left-8': '-bottom-4 -right-8'
                    }`}
                  >
                    {skill?.level}%
                  </motion.div>
                ))}
              </div>

              {/* Current Skill Display */}
              <motion.div
                key={currentSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4"
              >
                <h3 className="text-2xl font-bold text-primary">
                  {skills?.[currentSkill]?.name}
                </h3>
                
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skills?.[currentSkill]?.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${skills?.[currentSkill]?.color} rounded-full`}
                  />
                </div>
                
                <p className="text-text-secondary text-sm">
                  Proficiency: {skills?.[currentSkill]?.level}%
                </p>
              </motion.div>

              {/* Skill Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {skills?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSkill(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSkill === index 
                        ? 'bg-primary scale-125' :'bg-border hover:bg-text-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-text-muted">
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon name="ChevronDown" size={24} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;