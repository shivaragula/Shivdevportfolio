import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ResumePreview from './components/ResumePreview';
import QuickViewCard from './components/QuickViewCard';
import CustomResumeGenerator from './components/CustomResumeGenerator';
import SupplementaryMaterials from './components/SupplementaryMaterials';
import VersionHistory from './components/VersionHistory';

const ResumeResourcesPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('preview');
  const [isLoading, setIsLoading] = useState(false);
  const [downloadCount, setDownloadCount] = useState(1247);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'preview', name: 'Resume Preview', icon: 'Eye', description: 'Interactive resume viewer' },
    { id: 'quick-view', name: 'Quick View', icon: 'Zap', description: 'Recruiter highlights' },
    { id: 'generator', name: 'Custom Generator', icon: 'Settings', description: 'Role-specific resumes' },
    { id: 'materials', name: 'Supplementary', icon: 'FolderOpen', description: 'Additional resources' },
    { id: 'versions', name: 'Version History', icon: 'Clock', description: 'Track updates' }
  ];

  const handleDownload = async (type = 'standard') => {
    setIsLoading(true);

    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create download link
    const link = document.createElement('a');
    link.href = `/assets/resume/ragula-shiva-shankar-resume.pdf`;
    link.download = `RAGULA_SHIVA_SHANKAR_Resume_${type?.charAt(0)?.toUpperCase() + type?.slice(1)}.pdf`;
    link?.click();

    setDownloadCount(prev => prev + 1);
    setIsLoading(false);
  };

  const handleCustomGenerate = async (config) => {
    setIsLoading(true);

    // Simulate custom resume generation
    await new Promise(resolve => setTimeout(resolve, 3000));

    const roleType = config?.role || 'custom';
    await handleDownload(roleType);
  };

  const handlePreview = (config) => {
    // Switch to preview section with custom config
    setActiveSection('preview');
    // In a real app, you'd pass the config to the preview component
  };

  const handleContactClick = () => {
    navigate('/contact-professional-network');
  };

  const handleScheduleClick = () => {
    // Simulate scheduling functionality
    window.open('https://calendly.com/shivashankar-dev', '_blank');
  };

  const handleVersionDownload = async (versionId) => {
    await handleDownload(`version-${versionId}`);
  };

  const handleVersionRestore = (versionId) => {
    // Simulate version restoration
    console.log(`Restoring version ${versionId}`);
  };

  const handleMaterialDownload = (filePath) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath?.split('/')?.pop();
    link?.click();
  };

  const handleMaterialView = (filePath) => {
    window.open(filePath, '_blank');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'preview':
        return (
          <ResumePreview
            onDownload={() => handleDownload('standard')}
            onCustomize={() => setActiveSection('generator')}
          />
        );
      case 'quick-view':
        return (
          <QuickViewCard
            onContactClick={handleContactClick}
            onScheduleClick={handleScheduleClick}
          />
        );
      case 'generator':
        return (
          <CustomResumeGenerator
            onGenerate={handleCustomGenerate}
            onPreview={handlePreview}
          />
        );
      case 'materials':
        return (
          <SupplementaryMaterials
            onDownload={handleMaterialDownload}
            onView={handleMaterialView}
          />
        );
      case 'versions':
        return (
          <VersionHistory
            onDownload={handleVersionDownload}
            onRestore={handleVersionRestore}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="FileText" size={24} className="text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                Professional Resources
              </h1>
            </div>

            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Access comprehensive resume documentation, customizable formats, and supplementary materials
              optimized for ATS systems and human review.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-elevation">
                <Icon name="Download" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">
                  <span className="font-semibold text-primary">{downloadCount?.toLocaleString()}</span> downloads
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-elevation">
                <Icon name="Clock" size={16} className="text-accent" />
                <span className="text-sm text-text-secondary">
                  Updated <span className="font-semibold text-primary">September 1, 2025</span>
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-elevation">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">
                  <span className="font-semibold text-primary">ATS</span> Optimized
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => handleDownload('standard')}
                iconName="Download"
                iconPosition="left"
                iconSize={20}
                loading={isLoading}
                className="animate-pulse-subtle hover:animate-none"
              >
                Download Resume PDF
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setActiveSection('generator')}
                iconName="Settings"
                iconPosition="left"
                iconSize={20}
              >
                Create Custom Resume
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={handleContactClick}
                iconName="Mail"
                iconPosition="left"
                iconSize={20}
              >
                Contact Directly
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4">
            {sections?.map((section, index) => (
              <motion.button
                key={section?.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setActiveSection(section?.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 mr-2 ${activeSection === section?.id
                  ? 'bg-primary text-primary-foreground shadow-elevation'
                  : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
              >
                <Icon name={section?.icon} size={18} />
                <div className="text-left">
                  <div>{section?.name}</div>
                  <div className="text-xs opacity-75">{section?.description}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {renderSection()}
          </motion.div>
        </div>
      </section>
      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Connect?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how I can contribute to your team's success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleContactClick}
                iconName="Mail"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-primary hover:bg-white/90"
              >
                Get In Touch
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={handleScheduleClick}
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                className="text-white border-white hover:bg-white/10"
              >
                Schedule Interview
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-card rounded-lg p-8 shadow-elevation-lg text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-medium text-primary mb-2">Preparing Your Resume</p>
            <p className="text-text-secondary">This will just take a moment...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeResourcesPage;