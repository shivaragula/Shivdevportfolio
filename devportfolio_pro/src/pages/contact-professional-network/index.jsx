import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import DirectContact from './components/DirectContact';
import QuickConnect from './components/QuickConnect';
import SocialMedia from './components/SocialMedia';
import CollaborationOpportunities from './components/CollaborationOpportunities';

import LocationInfo from './components/LocationInfo';
import NewsletterSignup from './components/NewsletterSignup';

const ContactProfessionalNetwork = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <ContactHero />
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Contact Form and Direct Contact */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <ContactForm />
          <DirectContact />
        </div>
        
        {/* Quick Connect */}
        <QuickConnect />
        
        {/* Social Media Presence */}
        <SocialMedia />
        
        {/* Collaboration Opportunities */}
        <CollaborationOpportunities />
        
        
        {/* Location and Availability */}
        <LocationInfo />
        
        {/* Newsletter Signup */}
        <NewsletterSignup />
        
      </div>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you're looking to hire, collaborate, or just have a professional conversation, 
              I'm always open to meaningful connections in the tech community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:shiva.shankar4997@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/shiva-shankar-ragula/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-white/70 text-sm">
              <p>&copy; {new Date()?.getFullYear()} RAGULA SHIVA SHANKAR. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactProfessionalNetwork;