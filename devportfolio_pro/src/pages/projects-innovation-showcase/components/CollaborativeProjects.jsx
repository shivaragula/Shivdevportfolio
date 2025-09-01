import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CollaborativeProjects = ({ projects, onViewDetails }) => {
  const collaborativeProjects = projects?.filter(project => 
    project?.teamSize && project?.teamSize > 1
  );

  if (collaborativeProjects?.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
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
      <motion.div className="mb-8" variants={itemVariants}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
            <Icon name="Users" size={24} className="text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Collaborative Projects</h2>
            <p className="text-text-secondary">Team-based development showcasing collaboration and leadership</p>
          </div>
        </div>
      </motion.div>
      {/* Projects List */}
      <div className="space-y-6">
        {collaborativeProjects?.map((project, index) => (
          <motion.div
            key={project?.id}
            className="bg-card rounded-xl shadow-elevation hover:shadow-elevation-lg transition-all duration-300 overflow-hidden group"
            variants={itemVariants}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Project Image */}
              <div className="lg:w-80 h-48 lg:h-auto relative overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                
                {/* Team Size Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 px-3 py-1 bg-accent text-white rounded-full text-xs font-medium">
                    <Icon name="Users" size={12} />
                    <span>{project?.teamSize} Members</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project?.status === 'Live' ? 'bg-success text-white' :
                    project?.status === 'In Progress'? 'bg-warning text-white' : 'bg-muted text-text-secondary'
                  }`}>
                    {project?.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="FolderOpen" size={16} className="text-text-secondary" />
                      <span className="text-sm text-text-secondary">{project?.type}</span>
                      <span className="text-text-muted">•</span>
                      <span className="text-sm text-text-secondary">{project?.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                      {project?.title}
                    </h3>
                    <p className="text-text-secondary text-sm line-clamp-2 mb-3">
                      {project?.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    {project?.liveUrl && (
                      <a
                        href={project?.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-muted hover:bg-surface rounded-lg flex items-center justify-center text-text-secondary hover:text-primary transition-colors duration-200"
                      >
                        <Icon name="ExternalLink" size={16} />
                      </a>
                    )}
                    {project?.githubUrl && (
                      <a
                        href={project?.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-muted hover:bg-surface rounded-lg flex items-center justify-center text-text-secondary hover:text-primary transition-colors duration-200"
                      >
                        <Icon name="Github" size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Role & Responsibilities */}
                {project?.role && (
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="User" size={14} className="text-accent" />
                      <span className="text-sm font-medium text-text-primary">My Role: {project?.role}</span>
                    </div>
                    {project?.responsibilities && (
                      <div className="pl-6">
                        <ul className="text-sm text-text-secondary space-y-1">
                          {project?.responsibilities?.slice(0, 2)?.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start space-x-2">
                              <Icon name="ArrowRight" size={12} className="text-text-muted mt-0.5 flex-shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Technology Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.slice(0, 5)?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project?.technologies?.length > 5 && (
                      <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium">
                        +{project?.technologies?.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                {project?.metrics && project?.metrics?.length > 0 && (
                  <div className="mb-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {project?.metrics?.slice(0, 3)?.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center p-2 bg-muted rounded-lg">
                          <div className="text-sm font-bold text-primary">{metric?.value}</div>
                          <div className="text-xs text-text-secondary">{metric?.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="GitBranch" size={12} />
                      <span>Collaborative</span>
                    </div>
                    {project?.complexity && (
                      <div className="flex items-center space-x-1">
                        <Icon name="TrendingUp" size={12} />
                        <span>{project?.complexity}</span>
                      </div>
                    )}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onViewDetails(project)}
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={14}
                    className="transition-all duration-200 hover:scale-105"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Section Footer */}
      <motion.div 
        className="mt-8 p-6 bg-surface rounded-xl text-center"
        variants={itemVariants}
      >
        <div className="flex items-center justify-center space-x-2 mb-3">
          <Icon name="Users" size={20} className="text-accent" />
          <h3 className="text-lg font-semibold text-text-primary">Team Collaboration</h3>
        </div>
        <p className="text-text-secondary text-sm max-w-2xl mx-auto">
          These projects showcase my ability to work effectively in team environments, 
          contribute to shared codebases, and deliver high-quality solutions through collaboration.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default CollaborativeProjects;