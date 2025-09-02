import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProfessionalIntro = ({ onResumeDownload }) => {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/shiva-shankar-ragula/', color: 'text-blue-600' },
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/shivaragula', color: 'text-gray-800 dark:text-gray-200' },
    { name: 'Phone', icon: 'Phone', url: 'tel:+919573006351', color: 'text-green-600' },
    { name: 'Email', icon: 'Mail', url: 'mailto:shiva.shankar4997@gmail.com', color: 'text-red-500' }
  ];

  return (
    <section className="bg-gradient-to-br from-background via-muted to-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elevation-lg">
                <Image
                  src="/assets/images/Screenshot 2025-05-04 193916.png"
                  alt="Ragula Shiva Shankar - Professional Developer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Status Badge */}
              <div className="absolute -top-3 -right-3 bg-success text-success-foreground px-4 py-2 rounded-full shadow-elevation flex items-center space-x-2 animate-pulse-subtle">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for Hire</span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Professional Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Icon name="Code" size={16} />
                <span className="text-sm font-medium">Software Developer & ML Engineer</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Hi, I'm <span className="text-gradient">Ragula Shiva Shankar</span>
              </h1>

              <p className="text-xl text-text-secondary leading-relaxed">
                Recent Computer Science Engineering graduate eager to start my career in software development
              </p>
            </div>

            <div className="prose prose-lg text-text-secondary">
              <p>
                Fresh Computer Science Engineering graduate with 3-month internship experience and strong academic 
                foundation in full-stack development. Proficient in React.js, Node.js, Python, and SQL with hands-on 
                experience through university projects and internship work.
              </p>

              <p>
                Developed academic projects including a basic e-commerce platform, a student performance prediction 
                model, and a plant disease classification system. Seeking an entry-level software developer position 
                to apply my technical skills and grow within a collaborative team environment.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg shadow-elevation">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="GraduationCap" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Education</p>
                    <p className="text-sm text-text-secondary">B.Tech CSE (CGPA: 7.42)</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg shadow-elevation">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Trophy" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Location</p>
                    <p className="text-sm text-text-secondary">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                onClick={onResumeDownload}
                iconName="Download"
                iconPosition="left"
                className="animate-pulse-subtle hover:animate-none"
              >
                Download Resume
              </Button>

              <Button
                variant="outline"
                onClick={() => window.open('https://github.com/shivaragula', '_blank')}
                iconName="Github"
                iconPosition="left"
              >
                View GitHub
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              <span className="text-sm text-text-secondary font-medium">Connect with me:</span>
              <div className="flex space-x-3">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg hover:bg-muted transition-all duration-300 hover:scale-110 ${social?.color}`}
                    aria-label={`Connect on ${social?.name}`}
                  >
                    <Icon name={social?.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalIntro;