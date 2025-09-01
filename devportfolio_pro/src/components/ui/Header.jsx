import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/homepage-developer-portfolio-hub', icon: 'Home' },
    { name: 'About', path: '/about-professional-story', icon: 'User' },
    { name: 'Projects', path: '/projects-innovation-showcase', icon: 'FolderOpen' },
    { name: 'Skills', path: '/skills-technical-arsenal', icon: 'Code' },
    { name: 'Contact', path: '/contact-professional-network', icon: 'Mail' }
  ];

  const secondaryItems = [
    { name: 'Resume', path: '/resume-professional-resources', icon: 'FileText' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    // Simulate resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/ragula-shiva-shankar-resume.pdf';
    link.download = 'RAGULA_SHIVA_SHANKAR_Resume.pdf';
    link?.click();
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-elevation border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigation('/homepage-developer-portfolio-hub')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-elevation group-hover:shadow-elevation-lg transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg font-mono">S</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse-subtle"></div>
            </div>
            <div className="ml-3 hidden sm:block">
              <h1 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                Ragula Shiva Shankar
              </h1>
              <p className="text-xs text-text-secondary font-mono">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-elevation'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    isActivePath(item?.path) ? 'scale-110' : 'group-hover:scale-110'
                  }`}
                />
                <span>{item?.name}</span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigation('/resume-professional-resources')}
              iconName="FileText"
              iconPosition="left"
              iconSize={16}
              className="transition-all duration-300 hover:scale-105"
            >
              Resume
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleResumeDownload}
              iconName="Download"
              iconPosition="left"
              iconSize={16}
              className="animate-pulse-subtle hover:animate-none transition-all duration-300 hover:scale-105"
            >
              Download CV
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={24}
                className="transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 pb-4' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-border">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-elevation'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </button>
            ))}
            
            <div className="pt-3 border-t border-border space-y-2">
              <button
                onClick={() => handleNavigation('/resume-professional-resources')}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted transition-all duration-300 w-full"
              >
                <Icon name="FileText" size={18} />
                <span>View Resume</span>
              </button>
              
              <Button
                variant="default"
                fullWidth
                onClick={handleResumeDownload}
                iconName="Download"
                iconPosition="left"
                iconSize={16}
                className="animate-pulse-subtle hover:animate-none"
              >
                Download CV
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;