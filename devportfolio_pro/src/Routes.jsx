import React, { Suspense } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

// Import components directly (no lazy loading to avoid module issues)
import AboutProfessionalStory from './pages/about-professional-story';
import HomepageDeveloperPortfolioHub from './pages/homepage-developer-portfolio-hub';
import ProjectsInnovationShowcase from './pages/projects-innovation-showcase';
import ContactProfessionalNetwork from './pages/contact-professional-network';
import ResumeResourcesPage from './pages/resume-professional-resources';
import SkillsTechnicalArsenal from './pages/skills-technical-arsenal';
import NotFound from './pages/NotFound';

const Routes = () => {
  console.log('Routes component rendering...');
  
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<AboutProfessionalStory />} />
        <Route path="/homepage-developer-portfolio-hub" element={<HomepageDeveloperPortfolioHub />} />
        <Route path="/projects-innovation-showcase" element={<ProjectsInnovationShowcase />} />
        <Route path="/contact-professional-network" element={<ContactProfessionalNetwork />} />
        <Route path="/resume-professional-resources" element={<ResumeResourcesPage />} />
        <Route path="/about-professional-story" element={<AboutProfessionalStory />} />
        <Route path="/skills-technical-arsenal" element={<SkillsTechnicalArsenal />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
