import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import HomepageDeveloperPortfolioHub from './pages/homepage-developer-portfolio-hub';
import ProjectsInnovationShowcase from './pages/projects-innovation-showcase';
import ContactProfessionalNetwork from './pages/contact-professional-network';
import ResumeResourcesPage from './pages/resume-professional-resources';
import AboutProfessionalStory from './pages/about-professional-story';
import SkillsTechnicalArsenal from './pages/skills-technical-arsenal';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutProfessionalStory />} />
        <Route path="/homepage-developer-portfolio-hub" element={<HomepageDeveloperPortfolioHub />} />
        <Route path="/projects-innovation-showcase" element={<ProjectsInnovationShowcase />} />
        <Route path="/contact-professional-network" element={<ContactProfessionalNetwork />} />
        <Route path="/resume-professional-resources" element={<ResumeResourcesPage />} />
        <Route path="/about-professional-story" element={<AboutProfessionalStory />} />
        <Route path="/skills-technical-arsenal" element={<SkillsTechnicalArsenal />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
