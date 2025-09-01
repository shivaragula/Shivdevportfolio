import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CareerTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineData = [
    {
      id: 1,
      year: "2022",
      title: "Computer Science Journey Begins",
      subtitle: "Bachelor\'s Degree Started",
      description: "Embarked on my computer science education, diving deep into programming fundamentals, data structures, and algorithms. Discovered my passion for problem-solving through code.",
      icon: "GraduationCap",
      color: "from-blue-500 to-blue-600",
      achievements: ["First Python program", "Data structures mastery", "Algorithm design basics"]
    },
    {
      id: 2,
      year: "2023",
      title: "Full-Stack Development",
      subtitle: "Web Technologies Mastery",
      description: "Expanded into web development, mastering React, Node.js, and database management. Built multiple projects showcasing end-to-end development capabilities.",
      icon: "Code",
      color: "from-green-500 to-green-600",
      achievements: ["React proficiency", "RESTful API development", "Database design"]
    },
    {
      id: 3,
      year: "2024",
      title: "Data Science Exploration",
      subtitle: "AI & Machine Learning",
      description: "Ventured into data science and machine learning, working with Python libraries like pandas, scikit-learn, and TensorFlow. Applied ML algorithms to real-world problems.",
      icon: "BarChart3",
      color: "from-purple-500 to-purple-600",
      achievements: ["ML model development", "Data visualization", "Statistical analysis"]
    },
    {
      id: 4,
      year: "2025",
      title: "Professional Readiness",
      subtitle: "Seeking Opportunities",
      description: "Currently preparing for professional opportunities, building a strong portfolio, and contributing to open-source projects. Ready to make an impact in the tech industry.",
      icon: "Target",
      color: "from-orange-500 to-orange-600",
      achievements: ["Portfolio completion", "Open source contributions", "Interview preparation"]
    }
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % timelineData?.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, timelineData?.length]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            My Learning Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From curious beginner to emerging professional - tracking my growth 
            through continuous learning and hands-on experience
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden lg:block">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary to-accent"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {timelineData?.map((item, index) => (
              <motion.div
                key={item?.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`bg-card rounded-2xl p-6 shadow-elevation hover:shadow-elevation-lg transition-all duration-300 border border-border ${
                      activeIndex === index ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item?.color} flex items-center justify-center shadow-elevation`}>
                        <Icon name={item?.icon} size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{item?.year}</div>
                        <div className="text-sm text-text-muted font-medium">{item?.subtitle}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary mb-3">{item?.title}</h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">{item?.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item?.achievements?.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                          >
                            <Icon name="CheckCircle" size={12} className="mr-1" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-6 h-6 rounded-full border-4 border-background shadow-elevation z-10 ${
                      activeIndex === index 
                        ? `bg-gradient-to-br ${item?.color} animate-pulse-subtle` 
                        : 'bg-border'
                    }`}
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>

          {/* Timeline Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-3 mt-12"
          >
            {timelineData?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary scale-125 shadow-elevation' 
                    : 'bg-border hover:bg-text-muted'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;