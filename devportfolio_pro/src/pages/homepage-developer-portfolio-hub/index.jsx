import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CareerTimeline from './components/CareerTimeline';
import FeaturedProjects from './components/FeaturedProjects';
import TechnicalSkills from './components/TechnicalSkills';


import FloatingResumeButton from './components/FloatingResumeButton';

const HomepageDeveloperPortfolioHub = () => {
  return (
    <>
      <Helmet>
        <title>Shiva Shankar - Software Developer & Data Science Enthusiast |Portfolio </title>
        <meta name="description" content="Transforming complex problems into elegant solutions. Explore Shiva Shankar's portfolio showcasing full-stack development, data science projects, and innovative problem-solving capabilities." />
        <meta name="keywords" content="full-stack developer, data science, React, Python, Node.js, machine learning, portfolio, software engineer" />
        <meta property="og:title" content="Shiva Shankar - Developer Portfolio" />
        <meta property="og:description" content="Full-stack developer and data science enthusiast passionate about creating innovative solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shiva Shankar - Developer Portfolio" />
        <meta name="twitter:description" content="Transforming complex problems into elegant solutions" />
        <link rel="canonical" href="/homepage-developer-portfolio-hub" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Career Timeline */}
          <CareerTimeline />
          
          {/* Featured Projects */}
          <FeaturedProjects />
          
          {/* Technical Skills */}
          <TechnicalSkills />
          

          
          
          {/* Floating Resume Button */}
          <FloatingResumeButton />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center shadow-elevation">
                    <span className="text-white font-bold text-lg font-mono">S</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">RAGULA SHIVA SHANKAR</h3>
                    <p className="text-sm text-primary-foreground/80">Full Stack Developer</p>
                  </div>
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Full-stack developer and data science enthusiast passionate about 
                  creating innovative solutions that make a difference.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Quick Links</h4>
                <div className="space-y-2">
                  <a href="/about-professional-story" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm">
                    About Me
                  </a>
                  <a href="/projects-innovation-showcase" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm">
                    Projects
                  </a>
                  <a href="/skills-technical-arsenal" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm">
                    Skills
                  </a>
                  <a href="/resume-professional-resources" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm">
                    Resume
                  </a>
                  <a href="/contact-professional-network" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm">
                    Contact
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Get In Touch</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-primary-foreground/80">
                    Ready to collaborate on exciting projects
                  </p>
                  <p className="text-primary-foreground/80">
                    📧 shiva.shankar@email.com
                  </p>
                  <p className="text-primary-foreground/80">
                    📱 Available for opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-primary-foreground/60 text-sm">
                © {new Date()?.getFullYear()} Shiva Shankar. All rights reserved. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageDeveloperPortfolioHub;