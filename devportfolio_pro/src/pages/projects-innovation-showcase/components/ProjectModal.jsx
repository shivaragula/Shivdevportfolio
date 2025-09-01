import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical Details', icon: 'Code' },
    { id: 'architecture', label: 'Architecture', icon: 'Layers' },
    { id: 'challenges', label: 'Challenges & Solutions', icon: 'Zap' }
  ];

  const nextImage = () => {
    if (project?.gallery && project?.gallery?.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % project?.gallery?.length);
    }
  };

  const prevImage = () => {
    if (project?.gallery && project?.gallery?.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + project?.gallery?.length) % project?.gallery?.length);
    }
  };

  const getComplexityColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-success bg-success/10';
      case 'Intermediate': return 'text-warning bg-warning/10';
      case 'Advanced': return 'text-error bg-error/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-2xl shadow-elevation-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="FolderOpen" size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-primary">{project?.title}</h2>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-text-secondary">{project?.duration}</span>
                    <div className={`px-2 py-1 rounded-md text-xs font-medium ${getComplexityColor(project?.complexity)}`}>
                      {project?.complexity}
                    </div>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                      project?.status === 'Live' ? 'bg-success text-white' :
                      project?.status === 'In Progress'? 'bg-warning text-white' : 'bg-muted text-text-secondary'
                    }`}>
                      {project?.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {project?.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project?.liveUrl, '_blank')}
                    iconName="ExternalLink"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Live Demo
                  </Button>
                )}
                {project?.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project?.githubUrl, '_blank')}
                    iconName="Github"
                    iconPosition="left"
                    iconSize={16}
                  >
                    GitHub
                  </Button>
                )}
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-surface flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex h-[calc(90vh-120px)]">
              {/* Sidebar Navigation */}
              <div className="w-64 bg-surface border-r border-border p-4 overflow-y-auto">
                <nav className="space-y-2">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeTab === tab?.id
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-text-secondary hover:bg-muted hover:text-text-primary'
                      }`}
                    >
                      <Icon name={tab?.icon} size={16} />
                      <span>{tab?.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Quick Stats */}
                <div className="mt-6 p-4 bg-card rounded-lg">
                  <h4 className="font-medium text-text-primary mb-3">Project Stats</h4>
                  <div className="space-y-2">
                    {project?.teamSize && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-secondary">Team Size</span>
                        <span className="font-medium">{project?.teamSize}</span>
                      </div>
                    )}
                    {project?.role && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-secondary">My Role</span>
                        <span className="font-medium">{project?.role}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">Technologies</span>
                      <span className="font-medium">{project?.technologies?.length}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      {/* Image Gallery */}
                      {project?.gallery && project?.gallery?.length > 0 && (
                        <div className="relative">
                          <div className="relative h-80 rounded-xl overflow-hidden">
                            <Image
                              src={project?.gallery?.[currentImageIndex]}
                              alt={`${project?.title} screenshot ${currentImageIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {project?.gallery?.length > 1 && (
                              <>
                                <button
                                  onClick={prevImage}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                                >
                                  <Icon name="ChevronLeft" size={20} />
                                </button>
                                <button
                                  onClick={nextImage}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                                >
                                  <Icon name="ChevronRight" size={20} />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                  {project?.gallery?.map((_, index) => (
                                    <button
                                      key={index}
                                      onClick={() => setCurrentImageIndex(index)}
                                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Project Description</h3>
                        <p className="text-text-secondary leading-relaxed">{project?.detailedDescription || project?.description}</p>
                      </div>

                      {/* Key Features */}
                      {project?.features && (
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project?.features?.map((feature, index) => (
                              <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Icon name="Check" size={14} className="text-primary" />
                                </div>
                                <span className="text-sm text-text-secondary">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Metrics */}
                      {project?.metrics && project?.metrics?.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">Project Impact</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {project?.metrics?.map((metric, index) => (
                              <div key={index} className="text-center p-4 bg-surface rounded-lg">
                                <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
                                <div className="text-sm text-text-secondary">{metric?.label}</div>
                                {metric?.description && (
                                  <div className="text-xs text-text-muted mt-1">{metric?.description}</div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'technical' && (
                    <div className="space-y-6">
                      {/* Technology Stack */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Technology Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {project?.technologies?.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Code Samples */}
                      {project?.codeSnippets && (
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">Code Samples</h3>
                          <div className="space-y-4">
                            {project?.codeSnippets?.map((snippet, index) => (
                              <div key={index} className="bg-surface rounded-lg overflow-hidden">
                                <div className="px-4 py-2 bg-muted border-b border-border">
                                  <span className="text-sm font-medium text-text-primary">{snippet?.title}</span>
                                </div>
                                <pre className="p-4 text-sm font-mono text-text-secondary overflow-x-auto">
                                  <code>{snippet?.code}</code>
                                </pre>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Database Schema */}
                      {project?.databaseSchema && (
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">Database Schema</h3>
                          <div className="bg-surface rounded-lg p-4">
                            <pre className="text-sm font-mono text-text-secondary overflow-x-auto">
                              <code>{project?.databaseSchema}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'architecture' && (
                    <div className="space-y-6">
                      {/* Architecture Diagram */}
                      {project?.architectureDiagram && (
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">System Architecture</h3>
                          <div className="bg-surface rounded-lg p-4">
                            <Image
                              src={project?.architectureDiagram}
                              alt="Architecture Diagram"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </div>
                      )}

                      {/* Architecture Description */}
                      {project?.architectureDescription && (
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">Architecture Overview</h3>
                          <p className="text-text-secondary leading-relaxed">{project?.architectureDescription}</p>
                        </div>
                      )}

                      {/* Deployment Details */}
                      {project?.deployment && (
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">Deployment</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(project?.deployment)?.map(([key, value]) => (
                              <div key={key} className="p-3 bg-surface rounded-lg">
                                <div className="text-sm font-medium text-text-primary capitalize mb-1">
                                  {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                                </div>
                                <div className="text-sm text-text-secondary">{value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'challenges' && (
                    <div className="space-y-6">
                      {/* Challenges & Solutions */}
                      {project?.challenges && (
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">Challenges & Solutions</h3>
                          <div className="space-y-4">
                            {project?.challenges?.map((challenge, index) => (
                              <div key={index} className="p-4 bg-surface rounded-lg">
                                <div className="flex items-start space-x-3 mb-3">
                                  <div className="w-6 h-6 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Icon name="AlertTriangle" size={14} className="text-warning" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium text-text-primary mb-1">{challenge?.title}</h4>
                                    <p className="text-sm text-text-secondary">{challenge?.description}</p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                  <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Icon name="CheckCircle" size={14} className="text-success" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium text-text-primary mb-1">Solution</h4>
                                    <p className="text-sm text-text-secondary">{challenge?.solution}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Lessons Learned */}
                      {project?.lessonsLearned && (
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">Lessons Learned</h3>
                          <div className="space-y-3">
                            {project?.lessonsLearned?.map((lesson, index) => (
                              <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Icon name="Lightbulb" size={14} className="text-accent" />
                                </div>
                                <span className="text-sm text-text-secondary">{lesson}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Future Enhancements */}
                      {project?.futureEnhancements && (
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-3">Future Enhancements</h3>
                          <div className="space-y-3">
                            {project?.futureEnhancements?.map((enhancement, index) => (
                              <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Icon name="ArrowRight" size={14} className="text-primary" />
                                </div>
                                <span className="text-sm text-text-secondary">{enhancement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;