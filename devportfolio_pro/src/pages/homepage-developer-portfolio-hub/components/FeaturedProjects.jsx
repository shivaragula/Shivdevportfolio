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
      title: "Student Performance Prediction",
      subtitle: "Academic Machine Learning Project",
      description: "An academic project that analyzes student performance patterns using basic machine learning algorithms. Built as part of coursework to understand data science fundamentals and model evaluation.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
      metrics: {
        accuracy: "78%",
        records: "500",
        features: "8"
      },
      features: [
        "Data preprocessing and cleaning",
        "Basic feature engineering",
        "Model evaluation and validation",
        "Simple data visualizations"
      ],
      demoUrl: "https://github.com/shivaragula/student-performance-prediction",
      githubUrl: "https://github.com/shivaragula/student-performance-prediction",
      status: "Completed",
      category: "Data Science"
    },
    {
      id: 2,
      title: "Basic E-Commerce Website",
      subtitle: "Academic Full-Stack Project",
      description: "A simple e-commerce website built as an academic project featuring basic user authentication, product display, and shopping cart functionality. Developed to learn full-stack development fundamentals.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Express", "MySQL", "JWT"],
      metrics: {
        products: "20",
        users: "Local",
        features: "5"
      },
      features: [
        "User registration and login",
        "Product catalog display",
        "Basic shopping cart",
        "Simple admin panel"
      ],
      demoUrl: "https://github.com/shivaragula/ecommerce-platform",
      githubUrl: "https://github.com/shivaragula/ecommerce-platform",
      status: "Completed",
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Plant Disease Classification",
      subtitle: "Academic Computer Vision Project",
      description: "A basic computer vision project that identifies plant diseases from leaf images using simple CNN models. Built to learn deep learning fundamentals and image processing techniques.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "Keras", "Flask", "OpenCV"],
      metrics: {
        accuracy: "72%",
        diseases: "5",
        images: "1000"
      },
      features: [
        "Image upload and preprocessing",
        "Basic disease classification",
        "Simple web interface",
        "Model training pipeline"
      ],
      demoUrl: "https://github.com/shivaragula/plant-disease-classification",
      githubUrl: "https://github.com/shivaragula/plant-disease-classification",
      status: "Completed",
      category: "Machine Learning"
    },
    {
      id: 4,
      title: "Portfolio Website",
      subtitle: "Personal Showcase Project",
      description: "A responsive portfolio website built to showcase academic projects and technical skills. Features modern design, smooth animations, and mobile-first approach using React and modern web technologies.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Netlify"],
      metrics: {
        pages: "6",
        responsive: "100%",
        performance: "95+"
      },
      features: [
        "Responsive design",
        "Smooth animations",
        "Dark/Light theme",
        "SEO optimized"
      ],
      demoUrl: "https://shiva-portfolio.netlify.app",
      githubUrl: "https://github.com/shivaragula/portfolio",
      status: "Live",
      category: "Web Development"
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
            Showcasing my academic projects and learning journey in web development, data science, and programming
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