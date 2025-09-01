import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = ({ projects, onViewDetails }) => {
  if (!projects || projects?.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      className="mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Section Header */}
      <motion.div className="text-center mb-8" variants={itemVariants}>
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          <Icon name="Star" size={16} />
          <span>Featured Projects</span>
        </div>
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Showcase of Innovation
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Explore my most impactful projects that demonstrate technical excellence, 
          creative problem-solving, and measurable business outcomes.
        </p>
      </motion.div>
      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects?.slice(0, 2)?.map((project, index) => (
          <motion.div
            key={project?.id}
            className="group"
            variants={itemVariants}
          >
            <div className="bg-card rounded-2xl shadow-elevation hover:shadow-elevation-lg transition-all duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 px-3 py-1 bg-warning text-white rounded-full text-xs font-medium">
                    <Icon name="Star" size={12} />
                    <span>Featured</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project?.liveUrl && (
                    <a
                      href={project?.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                    >
                      <Icon name="ExternalLink" size={18} />
                    </a>
                  )}
                  {project?.githubUrl && (
                    <a
                      href={project?.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                    >
                      <Icon name="Github" size={18} />
                    </a>
                  )}
                </div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="FolderOpen" size={16} />
                    <span className="text-sm font-medium">{project?.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project?.title}</h3>
                  <p className="text-sm text-white/80 line-clamp-2">{project?.description}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Metrics */}
                {project?.metrics && project?.metrics?.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project?.metrics?.slice(0, 3)?.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-lg font-bold text-primary">{metric?.value}</div>
                        <div className="text-xs text-text-secondary">{metric?.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-text-primary mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.slice(0, 6)?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project?.technologies?.length > 6 && (
                      <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium">
                        +{project?.technologies?.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                {project?.features && project?.features?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-text-primary mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {project?.features?.slice(0, 3)?.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-4 h-4 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon name="Check" size={10} className="text-success" />
                          </div>
                          <span className="text-xs text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Details */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={12} />
                      <span>{project?.duration}</span>
                    </div>
                    {project?.teamSize && (
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={12} />
                        <span>{project?.teamSize} members</span>
                      </div>
                    )}
                    {project?.role && (
                      <div className="flex items-center space-x-1">
                        <Icon name="User" size={12} />
                        <span>{project?.role}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                    project?.status === 'Live' ? 'bg-success text-white' :
                    project?.status === 'In Progress'? 'bg-warning text-white' : 'bg-muted text-text-secondary'
                  }`}>
                    {project?.status}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => onViewDetails(project)}
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                  className="group-hover:scale-105 transition-transform duration-200"
                >
                  Explore Project Details
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* View All Projects CTA */}
      {projects?.length > 2 && (
        <motion.div className="text-center mt-8" variants={itemVariants}>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('all-projects')?.scrollIntoView({ behavior: 'smooth' })}
            iconName="ArrowDown"
            iconPosition="right"
            iconSize={18}
            className="hover:scale-105 transition-transform duration-200"
          >
            View All {projects?.length} Projects
          </Button>
        </motion.div>
      )}
    </motion.section>
  );
};

export default FeaturedProjects;