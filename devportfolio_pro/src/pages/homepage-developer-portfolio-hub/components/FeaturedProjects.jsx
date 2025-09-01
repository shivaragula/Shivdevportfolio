import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Analytics Dashboard",
      subtitle: "Full-Stack Web Application",
      description: "A comprehensive analytics dashboard for e-commerce businesses featuring real-time sales tracking, customer behavior analysis, and predictive insights using machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Python", "MongoDB", "Chart.js"],
      metrics: {
        users: "2.5K+",
        performance: "40%",
        rating: "4.8/5"
      },
      features: [
        "Real-time data visualization",
        "Predictive analytics with ML",
        "Responsive design",
        "RESTful API integration"
      ],
      demoUrl: "https://ecommerce-analytics-demo.netlify.app",
      githubUrl: "https://github.com/shivaragula/ecommerce-analytics",
      status: "Live",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Smart Task Management System",
      subtitle: "React & Firebase Application",
      description: "An intelligent task management application with AI-powered priority suggestions, collaborative features, and advanced analytics to boost team productivity.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Node.js", "OpenAI API"],
      metrics: {
        users: "1.8K+",
        performance: "35%",
        rating: "4.7/5"
      },
      features: [
        "AI-powered task prioritization",
        "Real-time collaboration",
        "Advanced analytics",
        "Mobile-responsive design"
      ],
      demoUrl: "https://smart-task-manager-ai.netlify.app",
      githubUrl: "https://github.com/shivaragula/smart-task-manager",
      status: "Live",
      category: "Web App"
    },
    {
      id: 3,
      title: "Customer Sentiment Analysis Tool",
      subtitle: "Data Science & Machine Learning",
      description: "A machine learning-powered tool that analyzes customer reviews and feedback to provide sentiment insights, helping businesses understand customer satisfaction trends.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Python", "Scikit-learn", "NLTK", "Pandas", "Streamlit"],
      metrics: {
        accuracy: "92%",
        performance: "50%",
        rating: "4.9/5"
      },
      features: [
        "Natural language processing",
        "Sentiment classification",
        "Interactive visualizations",
        "Batch processing capability"
      ],
      demoUrl: "https://sentiment-analyzer-app.streamlit.app",
      githubUrl: "https://github.com/shivaragula/sentiment-analysis",
      status: "Live",
      category: "Data Science"
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      subtitle: "Mobile-First Web Application",
      description: "A comprehensive personal finance management application with expense tracking, budget planning, and financial goal setting features with beautiful data visualizations.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      technologies: ["React", "Express.js", "PostgreSQL", "Chart.js", "PWA"],
      metrics: {
        users: "3.2K+",
        performance: "45%",
        rating: "4.6/5"
      },
      features: [
        "Expense categorization",
        "Budget tracking",
        "Financial goal setting",
        "Progressive Web App"
      ],
      demoUrl: "https://finance-tracker-pro.vercel.app",
      githubUrl: "https://github.com/shivaragula/finance-tracker",
      status: "Live",
      category: "Web App"
    }
  ];

  const handleViewAllProjects = () => {
    window.location.href = '/projects-innovation-showcase';
  };

  const handleProjectDemo = (demoUrl) => {
    window.open(demoUrl, '_blank');
  };

  const handleGithubView = (githubUrl) => {
    window.open(githubUrl, '_blank');
  };

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Showcasing my best work in full-stack development, data science, and innovative problem-solving
          </p>
          
          <div className="flex justify-center space-x-2">
            {projects?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index 
                    ? 'bg-primary scale-125' :'bg-border hover:bg-text-muted'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Featured Project Display */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-elevation-lg">
                <Image
                  src={projects?.[activeProject]?.image}
                  alt={projects?.[activeProject]?.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success text-success-foreground">
                    <div className="w-2 h-2 bg-success-foreground rounded-full mr-2 animate-pulse"></div>
                    {projects?.[activeProject]?.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                    {projects?.[activeProject]?.category}
                  </span>
                </div>

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleProjectDemo(projects?.[activeProject]?.demoUrl)}
                      iconName="ExternalLink"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleGithubView(projects?.[activeProject]?.githubUrl)}
                      iconName="Github"
                      iconPosition="left"
                      iconSize={16}
                      className="bg-background/90 backdrop-blur-sm"
                    >
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {projects?.[activeProject]?.title}
                </h3>
                <p className="text-accent font-medium mb-4">
                  {projects?.[activeProject]?.subtitle}
                </p>
                <p className="text-text-secondary leading-relaxed">
                  {projects?.[activeProject]?.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects?.[activeProject]?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-text-primary border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {projects?.[activeProject]?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-xl">
                {Object.entries(projects?.[activeProject]?.metrics)?.map(([key, value], index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-primary">{value}</div>
                    <div className="text-xs text-text-muted capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  onClick={() => handleProjectDemo(projects?.[activeProject]?.demoUrl)}
                  iconName="ExternalLink"
                  iconPosition="left"
                  iconSize={18}
                  className="flex-1 transition-all duration-300 hover:scale-105"
                >
                  View Live Demo
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleGithubView(projects?.[activeProject]?.githubUrl)}
                  iconName="Github"
                  iconPosition="left"
                  iconSize={18}
                  className="flex-1 transition-all duration-300 hover:scale-105"
                >
                  View Source Code
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={handleViewAllProjects}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={20}
            className="transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;