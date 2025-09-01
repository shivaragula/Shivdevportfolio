import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FloatingResumeButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show button after scrolling past hero section
      setIsVisible(scrollY > windowHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/ragula-shiva-shankar-resume.pdf';
    link.download = 'RAGULA_SHIVA_SHANKAR_Resume.pdf';
    link?.click();
    
    // Show success feedback
    setIsExpanded(true);
    setTimeout(() => setIsExpanded(false), 2000);
  };

  const handleViewResume = () => {
    window.location.href = '/resume-professional-resources';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            duration: 0.6 
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Main Floating Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button
                variant="default"
                size="lg"
                onClick={handleResumeDownload}
                iconName="Download"
                iconPosition="left"
                iconSize={20}
                className={`
                  shadow-elevation-lg hover:shadow-2xl transition-all duration-300
                  bg-gradient-to-r from-primary to-accent text-white
                  animate-pulse-subtle hover:animate-none
                  ${isExpanded ? 'pr-16' : ''}
                `}
              >
                {isExpanded ? 'Downloaded!' : 'Resume'}
              </Button>

              {/* Success Checkmark */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, x: 10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pulse Ring Animation */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-lg bg-primary/30 -z-10"
              />
            </motion.div>

            {/* Secondary Action Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ 
                opacity: isExpanded ? 0 : 1, 
                y: isExpanded ? 20 : -70, 
                scale: isExpanded ? 0.8 : 1 
              }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-full right-0 mb-2"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={handleViewResume}
                iconName="FileText"
                iconPosition="left"
                iconSize={16}
                className="bg-background/95 backdrop-blur-sm shadow-elevation hover:shadow-elevation-lg transition-all duration-300 hover:scale-105"
              >
                View Online
              </Button>
            </motion.div>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 hidden lg:block"
            >
              <div className="bg-background/95 backdrop-blur-sm text-text-primary px-3 py-2 rounded-lg shadow-elevation text-sm font-medium whitespace-nowrap border border-border">
                Download my resume
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-background/95 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </motion.div>

            {/* Notification Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 500 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center shadow-elevation"
            >
              <span className="text-white text-xs font-bold">!</span>
            </motion.div>

            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl -z-20 animate-pulse-subtle"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingResumeButton;