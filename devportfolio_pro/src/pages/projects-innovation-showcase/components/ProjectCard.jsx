import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getComplexityColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-success bg-success/10';
      case 'Intermediate': return 'text-warning bg-warning/10';
      case 'Advanced': return 'text-error bg-error/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Web Development': return 'Globe';
      case 'Data Science': return 'BarChart3';
      case 'Full-Stack': return 'Layers';
      case 'Mobile': return 'Smartphone';
      default: return 'Code';
    }
  };

  return (
    <motion.div
      className="bg-card rounded-xl shadow-elevation hover:shadow-elevation-lg transition-all duration-300 overflow-hidden group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project?.status === 'Live' ? 'bg-success text-white' :
            project?.status === 'In Progress'? 'bg-warning text-white' : 'bg-muted text-text-secondary'
          }`}>
            {project?.status}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex space-x-2">
          {project?.liveUrl && (
            <a
              href={project?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <Icon name="ExternalLink" size={16} />
            </a>
          )}
          {project?.githubUrl && (
            <a
              href={project?.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <Icon name="Github" size={16} />
            </a>
          )}
        </div>

        {/* Project Type */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
          <Icon name={getTypeIcon(project?.type)} size={16} />
          <span className="text-sm font-medium">{project?.type}</span>
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors duration-200">
              {project?.title}
            </h3>
            <p className="text-sm text-text-secondary">{project?.duration}</p>
          </div>
          <div className={`px-2 py-1 rounded-md text-xs font-medium ${getComplexityColor(project?.complexity)}`}>
            {project?.complexity}
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Key Metrics */}
        {project?.metrics && project?.metrics?.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {project?.metrics?.slice(0, 2)?.map((metric, index) => (
              <div key={index} className="text-center p-2 bg-muted rounded-lg">
                <div className="text-lg font-bold text-primary">{metric?.value}</div>
                <div className="text-xs text-text-secondary">{metric?.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Technology Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project?.technologies?.slice(0, 4)?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project?.technologies?.length > 4 && (
              <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium">
                +{project?.technologies?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            {project?.teamSize && (
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={14} />
                <span>{project?.teamSize} members</span>
              </div>
            )}
            {project?.role && (
              <div className="flex items-center space-x-1">
                <Icon name="User" size={14} />
                <span>{project?.role}</span>
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
    </motion.div>
  );
};

export default ProjectCard;