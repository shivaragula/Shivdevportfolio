import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilters from './components/ProjectFilters';
import ProjectModal from './components/ProjectModal';
import FeaturedProjects from './components/FeaturedProjects';
import CollaborativeProjects from './components/CollaborativeProjects';

const ProjectsInnovationShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: [],
    technology: [],
    complexity: [],
    status: []
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  // Mock Projects Data
  const projects = [
    {
      id: 1,
      title: "Student Performance Prediction System",
      description: "An academic machine learning project that predicts student performance using basic educational factors.",
      detailedDescription: `An academic data science project that analyzes student performance patterns using basic machine learning algorithms. The system processes educational data to predict student outcomes as part of coursework learning.\n\nBuilt using Python and scikit-learn as a learning project, the model achieves reasonable accuracy in predicting student outcomes. The project includes basic data preprocessing, simple feature engineering, and model evaluation components.`,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      type: "Data Science",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
      complexity: "Beginner",
      status: "Completed",
      duration: "2 months",
      teamSize: 1,
      role: "Student Developer",
      githubUrl: "https://github.com/shivaragula/student-performance-prediction",
      metrics: [
        { value: "78%", label: "Model Accuracy", description: "Prediction accuracy achieved" },
        { value: "500", label: "Student Records", description: "Dataset size analyzed" },
        { value: "8", label: "Features", description: "Input variables used" }
      ],
      features: [
        "Data preprocessing and cleaning",
        "Feature engineering and selection",
        "Multiple ML algorithm comparison",
        "Model evaluation and validation",
        "Performance visualization",
        "Prediction confidence scoring"
      ],
      challenges: [
        {
          title: "Data Quality Issues",
          description: "Handling missing values and inconsistent data formats in the educational dataset.",
          solution: "Implemented comprehensive data cleaning pipeline with statistical imputation methods and data validation checks."
        }
      ],
      lessonsLearned: [
        "Importance of thorough data exploration and cleaning",
        "Value of feature engineering in model performance",
        "Benefits of cross-validation for reliable model evaluation"
      ],
      futureEnhancements: [
        "Real-time prediction dashboard",
        "Integration with school management systems",
        "Advanced ensemble methods"
      ],
      responsibilities: [
        "Collected and cleaned basic educational data",
        "Implemented simple machine learning models",
        "Created basic data visualizations and reports"
      ]
    },
    {
      id: 2,
      title: "Plant Disease Classification App",
      description: "An academic web application that uses basic deep learning to identify plant diseases from leaf images.",
      detailedDescription: `An academic computer vision project that identifies plant diseases by analyzing leaf images. The application uses a basic convolutional neural network trained on a small dataset of healthy and diseased plant leaves.\n\nBuilt with TensorFlow and Keras for the ML model, and basic React for the web interface. The system provides simple disease identification and basic information about detected conditions.`,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop"
      ],
      type: "Web Development",
      technologies: ["Python", "TensorFlow", "Keras", "React", "Flask"],
      complexity: "Beginner",
      status: "Completed",
      duration: "2 months",
      teamSize: 1,
      role: "Student Developer",
      liveUrl: "https://plant-disease-classifier.example.com",
      githubUrl: "https://github.com/shivaragula/plant-disease-classification",
      metrics: [
        { value: "72%", label: "Classification Accuracy", description: "Disease detection accuracy" },
        { value: "5", label: "Disease Types", description: "Supported plant diseases" },
        { value: "1000", label: "Training Images", description: "Dataset size used" }
      ],
      features: [
        "Image upload and preprocessing",
        "Real-time disease classification",
        "Treatment recommendations",
        "Confidence score display",
        "Disease information database",
        "Mobile-responsive design"
      ],
      challenges: [
        {
          title: "Model Accuracy Optimization",
          description: "Achieving high accuracy while maintaining fast inference time for web deployment.",
          solution: "Used transfer learning with pre-trained models and implemented model optimization techniques for faster inference."
        }
      ],
      lessonsLearned: [
        "Benefits of transfer learning for computer vision tasks",
        "Importance of data augmentation for small datasets",
        "Challenges of deploying ML models in web applications"
      ],
      futureEnhancements: [
        "Mobile app development",
        "Support for more plant species",
        "Integration with agricultural databases"
      ],
      responsibilities: [
        "Implemented basic CNN model with guidance",
        "Created simple web application interface",
        "Learned image preprocessing techniques"
      ]
    },
    {
      id: 3,
      title: "E-commerce Website with Admin Panel",
      description: "A basic e-commerce website with simple user authentication and product display functionality.",
      detailedDescription: `A basic e-commerce solution built as an academic project. The platform includes simple customer-facing features like product browsing, basic shopping cart, and user registration, along with a simple admin interface for product management.\n\nImplemented using React for the frontend, Node.js/Express for the backend, and MySQL for data storage. Features basic authentication and responsive design for different screen sizes.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ],
      type: "Full-Stack",
      technologies: ["React", "Node.js", "Express", "MySQL", "JWT"],
      complexity: "Beginner",
      status: "Completed",
      duration: "3 months",
      teamSize: 1,
      role: "Student Developer",
      githubUrl: "https://github.com/shivaragula/ecommerce-platform",
      metrics: [
        { value: "20", label: "Products", description: "Sample catalog size" },
        { value: "2", label: "User Roles", description: "Admin and Customer" },
        { value: "Local", label: "Deployment", description: "Development environment" }
      ],
      features: [
        "User registration and authentication",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Order management system",
        "Admin panel for inventory management",
        "Responsive design for all devices"
      ],
      challenges: [
        {
          title: "Payment Integration",
          description: "Implementing secure payment processing while maintaining user experience.",
          solution: "Integrated Stripe API with proper error handling and security measures for safe payment processing."
        }
      ],
      lessonsLearned: [
        "Importance of secure authentication systems",
        "Benefits of modular code architecture",
        "Value of thorough testing for e-commerce applications"
      ],
      futureEnhancements: [
        "Advanced analytics dashboard",
        "Multi-vendor marketplace features",
        "Mobile app development"
      ],
      responsibilities: [
        "Learned and implemented basic full-stack architecture",
        "Developed simple user interface and admin panel",
        "Implemented basic authentication and security features"
      ]
    }
  ];

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Apply filters
    Object.entries(activeFilters)?.forEach(([filterType, filterValues]) => {
      if (filterValues?.length > 0) {
        filtered = filtered?.filter(project => {
          switch (filterType) {
            case 'type':
              return filterValues?.includes(project?.type);
            case 'technology':
              return filterValues?.some(tech => 
                project?.technologies?.some(projectTech => 
                  projectTech?.toLowerCase()?.includes(tech?.toLowerCase())
                )
              );
            case 'complexity':
              return filterValues?.includes(project?.complexity);
            case 'status':
              return filterValues?.includes(project?.status);
            default:
              return true;
          }
        });
      }
    });

    // Apply search
    if (searchQuery?.trim()) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(query) ||
        project?.description?.toLowerCase()?.includes(query) ||
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(query))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'recent':
        return filtered?.sort((a, b) => b?.id - a?.id);
      case 'complexity':
        const complexityOrder = { 'Advanced': 3, 'Intermediate': 2, 'Beginner': 1 };
        return filtered?.sort((a, b) => complexityOrder?.[b?.complexity] - complexityOrder?.[a?.complexity]);
      case 'alphabetical':
        return filtered?.sort((a, b) => a?.title?.localeCompare(b?.title));
      default:
        return filtered;
    }
  }, [activeFilters, searchQuery, sortBy]);

  // Generate filter options from projects
  const filterOptions = useMemo(() => {
    const types = [...new Set(projects.map(p => p.type))];
    const technologies = [...new Set(projects.flatMap(p => p.technologies))]?.sort();
    const complexities = [...new Set(projects.map(p => p.complexity))];
    const statuses = [...new Set(projects.map(p => p.status))];

    return {
      types,
      technologies,
      complexities,
      statuses
    };
  }, []);

  const handleFilterChange = (category, values) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: values
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      type: [],
      technology: [],
      complexity: [],
      status: []
    });
    setSearchQuery('');
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Featured projects (top 2 projects for entry-level showcase)
  const featuredProjects = useMemo(() => {
    return projects?.filter(p => p?.status === 'Completed')?.slice(0, 2);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Projects - Innovation Showcase | RAGULA SHIVA SHANKAR</title>
        <meta name="description" content="Explore RAGULA SHIVA SHANKAR's comprehensive project portfolio featuring full-stack development, data science, and collaborative projects with detailed case studies and technical implementations." />
        <meta name="keywords" content="projects, portfolio, full-stack development, data science, web development, React, Node.js, Python, machine learning" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Icon name="Rocket" size={16} />
                <span>Innovation Showcase</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Projects That
                <span className="text-gradient block">Drive Innovation</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Explore my comprehensive portfolio of technical projects showcasing full-stack development, 
                data science expertise, and collaborative problem-solving across diverse domains.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{projects?.length}</div>
                  <div className="text-sm text-text-secondary">Academic Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {filterOptions?.technologies?.length}
                  </div>
                  <div className="text-sm text-text-secondary">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-text-secondary">Months Internship</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {projects?.filter(p => p?.status === 'Completed')?.length}
                  </div>
                  <div className="text-sm text-text-secondary">Completed Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FeaturedProjects 
              projects={featuredProjects} 
              onViewDetails={handleViewDetails} 
            />
          </div>
        </section>

        {/* Collaborative Projects */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <CollaborativeProjects 
              projects={projects} 
              onViewDetails={handleViewDetails} 
            />
          </div>
        </section>

        {/* All Projects Section */}
        <section id="all-projects" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Complete Project Portfolio
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Browse through all projects with advanced filtering and search capabilities. 
                Each project includes detailed case studies, technical implementations, and lessons learned.
              </p>
            </motion.div>

            {/* Search and Sort Controls */}
            <motion.div
              className="flex flex-col md:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Search */}
              <div className="flex-1 relative">
                <Icon 
                  name="Search" 
                  size={20} 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" 
                />
                <input
                  type="text"
                  placeholder="Search projects, technologies, or descriptions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Sort */}
              <div className="flex items-center space-x-2">
                <Icon name="ArrowUpDown" size={16} className="text-text-secondary" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e?.target?.value)}
                  className="px-4 py-3 bg-card border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                >
                  <option value="recent">Most Recent</option>
                  <option value="complexity">Complexity</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
              </div>
            </motion.div>

            {/* Filters */}
            <ProjectFilters
              filters={filterOptions}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              projectCount={filteredProjects?.length}
            />

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {filteredProjects?.map((project, index) => (
                <motion.div
                  key={project?.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredProjects?.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your search criteria or clearing the filters to see more projects.
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  iconName="RotateCcw"
                  iconPosition="left"
                  iconSize={16}
                >
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Ready to Collaborate?
              </h2>
              <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                I'm always excited to work on innovative projects and tackle complex technical challenges. Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => window.location.href = '/contact-professional-network'}
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={20}
                  className="hover:scale-105 transition-transform duration-200"
                >
                  Start a Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/resume-professional-resources'}
                  iconName="FileText"
                  iconPosition="left"
                  iconSize={20}
                  className="hover:scale-105 transition-transform duration-200"
                >
                  View My Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectsInnovationShowcase;