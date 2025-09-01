import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechnicalSkills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      icon: "Code",
      skills: [
        { name: "Python", level: 90, projects: 8, color: "from-blue-500 to-blue-600", icon: "FileCode" },
        { name: "JavaScript", level: 85, projects: 12, color: "from-yellow-500 to-yellow-600", icon: "FileCode" },
        { name: "TypeScript", level: 75, projects: 6, color: "from-blue-600 to-blue-700", icon: "FileCode" },
        { name: "Java", level: 70, projects: 4, color: "from-red-500 to-red-600", icon: "FileCode" },
        { name: "SQL", level: 80, projects: 10, color: "from-green-500 to-green-600", icon: "Database" }
      ]
    },
    frameworks: {
      title: "Frameworks & Libraries",
      icon: "Layers",
      skills: [
        { name: "React", level: 88, projects: 10, color: "from-cyan-500 to-cyan-600", icon: "Component" },
        { name: "Node.js", level: 82, projects: 8, color: "from-green-600 to-green-700", icon: "Server" },
        { name: "Express.js", level: 80, projects: 7, color: "from-gray-600 to-gray-700", icon: "Zap" },
        { name: "Django", level: 75, projects: 5, color: "from-green-700 to-green-800", icon: "Globe" },
        { name: "Flask", level: 78, projects: 6, color: "from-blue-700 to-blue-800", icon: "Beaker" }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: "Settings",
      skills: [
        { name: "Git", level: 85, projects: 15, color: "from-orange-500 to-orange-600", icon: "GitBranch" },
        { name: "Docker", level: 70, projects: 4, color: "from-blue-500 to-blue-600", icon: "Package" },
        { name: "AWS", level: 65, projects: 3, color: "from-yellow-600 to-orange-600", icon: "Cloud" },
        { name: "MongoDB", level: 80, projects: 8, color: "from-green-500 to-green-600", icon: "Database" },
        { name: "PostgreSQL", level: 75, projects: 6, color: "from-blue-600 to-blue-700", icon: "Database" }
      ]
    },
    datascience: {
      title: "Data Science & ML",
      icon: "BarChart3",
      skills: [
        { name: "Pandas", level: 85, projects: 7, color: "from-purple-500 to-purple-600", icon: "Table" },
        { name: "NumPy", level: 82, projects: 6, color: "from-blue-500 to-blue-600", icon: "Calculator" },
        { name: "Scikit-learn", level: 80, projects: 5, color: "from-orange-500 to-orange-600", icon: "Brain" },
        { name: "TensorFlow", level: 70, projects: 3, color: "from-orange-600 to-red-600", icon: "Cpu" },
        { name: "Matplotlib", level: 78, projects: 8, color: "from-green-500 to-green-600", icon: "LineChart" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Technical Skills Matrix
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive overview of my technical expertise across different domains, 
            with proficiency levels and project experience
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-elevation'
                  : 'bg-card text-text-secondary hover:text-primary hover:bg-muted border border-border'
              }`}
            >
              <Icon 
                name={skillCategories?.[category]?.icon} 
                size={16} 
                className={activeCategory === category ? 'text-primary-foreground' : 'text-text-muted'}
              />
              <span>{skillCategories?.[category]?.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories?.[activeCategory]?.skills?.map((skill, index) => (
              <motion.div
                key={skill?.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setHoveredSkill(skill?.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="bg-card rounded-xl p-6 shadow-elevation hover:shadow-elevation-lg transition-all duration-300 border border-border group cursor-pointer"
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill?.color} flex items-center justify-center shadow-elevation group-hover:shadow-elevation-lg transition-all duration-300`}>
                      <Icon name={skill?.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                        {skill?.name}
                      </h3>
                      <p className="text-xs text-text-muted">
                        {skill?.projects} projects
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{skill?.level}%</div>
                    <div className="text-xs text-text-muted">Proficiency</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill?.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill?.color} rounded-full relative`}
                    >
                      {hoveredSkill === skill?.name && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full shadow-elevation animate-pulse-subtle"
                        />
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="flex justify-between text-xs text-text-muted">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>

                {/* Experience Indicator */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={`${
                          i < Math.floor(skill?.level / 20) 
                            ? 'text-yellow-500 fill-current' :'text-border'
                        } transition-colors duration-300`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-text-muted font-medium">
                    {skill?.level >= 80 ? 'Expert' : 
                     skill?.level >= 60 ? 'Advanced' : 
                     skill?.level >= 40 ? 'Intermediate' : 'Beginner'}
                  </span>
                </div>

                {/* Hover Effect Overlay */}
                {hoveredSkill === skill?.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-card rounded-2xl p-8 shadow-elevation border border-border max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-6">Skills Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-text-secondary">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-text-secondary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">85%</div>
                <div className="text-sm text-text-secondary">Avg Proficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;