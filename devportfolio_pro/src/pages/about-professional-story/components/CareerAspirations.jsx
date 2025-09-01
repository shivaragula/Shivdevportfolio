import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CareerAspirations = () => {
  const careerGoals = [
    {
      timeline: 'Immediate (0-1 year)',
      title: 'Full-Stack Developer Role',
      description: 'Seeking a position where I can apply my full-stack development skills while contributing to data-driven products.',
      objectives: [
        'Join a dynamic team building scalable web applications',
        'Work on projects that combine frontend excellence with backend robustness',
        'Contribute to data science initiatives and ML model deployment',
        'Mentor junior developers and share knowledge'
      ],
      icon: 'Target',
      color: 'bg-success'
    },
    {
      timeline: 'Short-term (1-3 years)',
      title: 'Technical Leadership',
      description: 'Evolve into a technical lead role, architecting solutions and guiding development teams.',
      objectives: [
        'Lead cross-functional teams on complex technical projects',
        'Architect scalable systems handling millions of users',
        'Drive adoption of best practices and modern technologies',
        'Contribute to product strategy and technical roadmaps'
      ],
      icon: 'Users',
      color: 'bg-primary'
    },
    {
      timeline: 'Long-term (3-5 years)',
      title: 'Innovation & Impact',
      description: 'Focus on creating innovative solutions that solve real-world problems at scale.',
      objectives: [
        'Lead R&D initiatives in AI/ML applications',
        'Build and scale engineering teams',
        'Drive digital transformation initiatives',
        'Contribute to open-source projects and tech community'
      ],
      icon: 'Rocket',
      color: 'bg-accent'
    }
  ];

  const idealRole = {
    title: 'My Ideal Role',
    description: 'What I\'m looking for in my next opportunity',
    criteria: [
      {
        category: 'Technical Environment',
        items: [
          'Modern tech stack with React, Node.js, Python, and cloud technologies',
          'Opportunities to work with data science and machine learning',
          'Emphasis on code quality, testing, and best practices',
          'Continuous integration and deployment pipelines'
        ],
        icon: 'Code'
      },
      {
        category: 'Team Culture',
        items: [
          'Collaborative, diverse, and inclusive team environment',
          'Strong mentorship and learning opportunities',
          'Open communication and feedback culture',
          'Work-life balance and flexible working arrangements'
        ],
        icon: 'Users'
      },
      {
        category: 'Growth Opportunities',
        items: [
          'Clear career progression paths',
          'Support for professional development and certifications',
          'Conference attendance and knowledge sharing',
          'Opportunities to lead projects and mentor others'
        ],
        icon: 'TrendingUp'
      },
      {
        category: 'Impact & Purpose',
        items: [
          'Products that solve real problems and create value',
          'Opportunity to influence technical decisions',
          'Work on projects with measurable business impact',
          'Contribute to company\'s technical vision and strategy'
        ],
        icon: 'Target'
      }
    ]
  };

  const industries = [
    {
      name: 'FinTech',
      description: 'Building secure, scalable financial solutions',
      icon: 'CreditCard',
      interest: 'High'
    },
    {
      name: 'HealthTech',
      description: 'Improving healthcare through technology',
      icon: 'Heart',
      interest: 'High'
    },
    {
      name: 'EdTech',
      description: 'Transforming education with digital solutions',
      icon: 'GraduationCap',
      interest: 'Medium'
    },
    {
      name: 'E-commerce',
      description: 'Creating seamless shopping experiences',
      icon: 'ShoppingCart',
      interest: 'Medium'
    },
    {
      name: 'SaaS Platforms',
      description: 'Building tools that empower businesses',
      icon: 'Cloud',
      interest: 'High'
    },
    {
      name: 'AI/ML Startups',
      description: 'Pioneering artificial intelligence applications',
      icon: 'Brain',
      interest: 'Very High'
    }
  ];

  const getInterestColor = (interest) => {
    switch (interest) {
      case 'Very High': return 'bg-green-500 text-white';
      case 'High': return 'bg-blue-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const handleContactClick = () => {
    window.location.href = '/contact-professional-network';
  };

  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Compass" size={16} />
            <span className="text-sm font-medium">Future Vision</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Career Aspirations & Goals
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            My vision for professional growth and the impact I want to create in the technology industry.
          </p>
        </div>

        {/* Career Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Career Roadmap</h3>
          <div className="space-y-8">
            {careerGoals?.map((goal, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 ${goal?.color} rounded-xl flex items-center justify-center shadow-elevation flex-shrink-0`}>
                    <Icon name={goal?.icon} size={28} className="text-white" />
                  </div>
                  
                  <div className="flex-1 bg-card rounded-xl shadow-elevation p-6">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div>
                        <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {goal?.timeline}
                        </span>
                        <h4 className="text-xl font-bold text-primary mt-2">{goal?.title}</h4>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {goal?.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-3">
                      {goal?.objectives?.map((objective, objIndex) => (
                        <div key={objIndex} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {index < careerGoals?.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ideal Role */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">{idealRole?.title}</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">{idealRole?.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {idealRole?.criteria?.map((criterion, index) => (
              <div key={index} className="bg-card rounded-xl shadow-elevation p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={criterion?.icon} size={20} className="text-primary" />
                  </div>
                  <h4 className="font-bold text-primary">{criterion?.category}</h4>
                </div>
                
                <div className="space-y-2">
                  {criterion?.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-2">
                      <Icon name="Dot" size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Interests */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Industry Interests</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Sectors where I'm excited to apply my skills and make meaningful contributions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries?.map((industry, index) => (
              <div key={index} className="bg-card rounded-xl shadow-elevation hover:shadow-elevation-lg transition-all duration-300 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={industry?.icon} size={20} className="text-accent" />
                    </div>
                    <h4 className="font-bold text-primary">{industry?.name}</h4>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getInterestColor(industry?.interest)}`}>
                    {industry?.interest}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{industry?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white">
          <Icon name="Handshake" size={48} className="mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            I'm excited about opportunities to contribute to innovative projects and grow with a forward-thinking team. 
            Let's discuss how my skills and passion can add value to your organization.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              onClick={handleContactClick}
              iconName="Mail"
              iconPosition="left"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.open('/assets/resume/shiva-portfolio-resume.pdf', '_blank')}
              iconName="Download"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAspirations;