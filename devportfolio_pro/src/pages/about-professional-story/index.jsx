import React from 'react';
import Header from '../../components/ui/Header';
import ProfessionalIntro from './components/ProfessionalIntro';
import EducationTimeline from './components/EducationTimeline';
import GrowthMindset from './components/GrowthMindset';
import TechnicalEvolution from './components/TechnicalEvolution';
import PersonalValues from './components/PersonalValues';
import CareerAspirations from './components/CareerAspirations';

const AboutProfessionalStory = () => {
  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1jTj_HlYkF0a6yq8VfnC0u4XB9hXGRb8R/view?usp=sharing",
      "_blank"
    );
    // Simulate resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/ragula-shiva-shankar-resume.pdf';
    link.download = 'RAGULA_SHIVA_SHANKAR_Resume.pdf';
    link?.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Page Content */}
      <main className="pt-16">
        {/* Professional Introduction */}
        <ProfessionalIntro onResumeDownload={handleResumeDownload} />

        {/* Education Timeline */}
        <EducationTimeline />

        {/* Growth Mindset */}
        <GrowthMindset />

        {/* Technical Evolution */}
        <TechnicalEvolution />

        {/* Personal Values & Interests */}
        <PersonalValues />

        {/* Career Aspirations */}
        <CareerAspirations />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm opacity-80">
            © {new Date()?.getFullYear()} Ragula Shiva Shankar. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutProfessionalStory;