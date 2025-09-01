import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CollaborationOpportunities = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  const opportunities = [
    {
      id: 'open-source',
      icon: 'GitBranch',
      title: 'Open Source Projects',
      description: 'Contribute to existing projects or collaborate on new open source initiatives',
      skills: ['React', 'Node.js', 'Python', 'TypeScript'],
      commitment: 'Flexible',
      type: 'Ongoing',
      benefits: ['Portfolio building', 'Community recognition', 'Skill development'],
      examples: [
        'React component libraries',
        'Developer tools and utilities',
        'Educational resources and tutorials'
      ],
      color: 'bg-green-500'
    },
    {
      id: 'startup-projects',
      icon: 'Rocket',
      title: 'Startup Collaborations',
      description: 'Partner with early-stage startups as a technical co-founder or lead developer',
      skills: ['Full-stack development', 'System architecture', 'Product development'],
      commitment: 'High',
      type: 'Long-term',
      benefits: ['Equity opportunities', 'Leadership experience', 'Product ownership'],
      examples: [
        'MVP development and launch',
        'Technical team building',
        'Scalable architecture design'
      ],
      color: 'bg-purple-500'
    },
    {
      id: 'freelance-projects',
      icon: 'Briefcase',
      title: 'Freelance Development',
      description: 'Take on contract work for specific projects with defined scope and timeline',
      skills: ['Web development', 'API integration', 'Database design'],
      commitment: 'Medium',
      type: 'Project-based',
      benefits: ['Immediate compensation', 'Diverse experience', 'Network expansion'],
      examples: [
        'Custom web applications',
        'E-commerce platforms',
        'Data visualization dashboards'
      ],
      color: 'bg-blue-500'
    },
    {
      id: 'research-projects',
      icon: 'BookOpen',
      title: 'Research & Academic',
      description: 'Collaborate on research projects, academic papers, or educational content',
      skills: ['Data analysis', 'Machine learning', 'Technical writing'],
      commitment: 'Medium',
      type: 'Research-based',
      benefits: ['Academic recognition', 'Knowledge advancement', 'Publication opportunities'],
      examples: [
        'ML algorithm research',
        'Educational course development',
        'Technical documentation'
      ],
      color: 'bg-orange-500'
    },
    {
      id: 'community-projects',
      icon: 'Users',
      title: 'Community Initiatives',
      description: 'Build tools and platforms that benefit the developer community',
      skills: ['Community building', 'Product management', 'User experience'],
      commitment: 'Flexible',
      type: 'Community-driven',
      benefits: ['Community impact', 'Leadership skills', 'Network building'],
      examples: [
        'Developer community platforms',
        'Learning resources and tools',
        'Mentorship programs'
      ],
      color: 'bg-red-500'
    },
    {
      id: 'innovation-labs',
      icon: 'Lightbulb',
      title: 'Innovation Labs',
      description: 'Experiment with cutting-edge technologies and emerging trends',
      skills: ['Emerging technologies', 'Prototyping', 'Innovation mindset'],
      commitment: 'Variable',
      type: 'Experimental',
      benefits: ['Technology leadership', 'Innovation experience', 'Future-ready skills'],
      examples: [
        'AI/ML applications',
        'Blockchain solutions',
        'IoT and edge computing'
      ],
      color: 'bg-yellow-500'
    }
  ];

  const collaborationStats = [
    { label: 'Active Projects', value: '8', icon: 'FolderOpen' },
    { label: 'Completed Collaborations', value: '24', icon: 'CheckCircle' },
    { label: 'Community Contributions', value: '156', icon: 'GitCommit' },
    { label: 'Peer Connections', value: '340', icon: 'Users' }
  ];

  const handleExpressInterest = (opportunity) => {
    setSelectedOpportunity(opportunity);
    // Simulate interest expression
    setTimeout(() => {
      alert(`Interest expressed for ${opportunity?.title}! I'll reach out within 24 hours to discuss potential collaboration.`);
      setSelectedOpportunity(null);
    }, 1000);
  };

  return (
    <div className="bg-card rounded-2xl shadow-elevation-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Collaboration Opportunities</h2>
        <p className="text-text-secondary">
          Open to various forms of professional collaboration. From open source contributions to startup partnerships, 
          let's build something impactful together.
        </p>
      </div>
      {/* Collaboration Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {collaborationStats?.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-muted rounded-lg">
            <div className="flex justify-center mb-2">
              <Icon name={stat?.icon} size={24} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-1">{stat?.value}</div>
            <div className="text-sm text-text-secondary">{stat?.label}</div>
          </div>
        ))}
      </div>
      {/* Opportunity Types */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {opportunities?.map((opportunity) => (
          <div
            key={opportunity?.id}
            className="p-6 border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-elevation"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className={`p-3 rounded-lg ${opportunity?.color} text-white`}>
                <Icon name={opportunity?.icon} size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {opportunity?.title}
                </h3>
                <p className="text-text-secondary text-sm mb-3">
                  {opportunity?.description}
                </p>
              </div>
            </div>

            {/* Skills Required */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Key Skills</h4>
              <div className="flex flex-wrap gap-2">
                {opportunity?.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="text-text-muted">Commitment:</span>
                <span className="ml-2 text-text-primary font-medium">{opportunity?.commitment}</span>
              </div>
              <div>
                <span className="text-text-muted">Type:</span>
                <span className="ml-2 text-text-primary font-medium">{opportunity?.type}</span>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Benefits</h4>
              <ul className="text-xs text-text-secondary space-y-1">
                {opportunity?.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={12} className="text-success flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Examples */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-text-primary mb-2">Example Projects</h4>
              <ul className="text-xs text-text-secondary space-y-1">
                {opportunity?.examples?.map((example, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="ArrowRight" size={12} className="text-text-muted flex-shrink-0" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="outline"
              fullWidth
              onClick={() => handleExpressInterest(opportunity)}
              loading={selectedOpportunity?.id === opportunity?.id}
              iconName="MessageSquare"
              iconPosition="left"
            >
              {selectedOpportunity?.id === opportunity?.id ? 'Expressing Interest...' : 'Express Interest'}
            </Button>
          </div>
        ))}
      </div>
      {/* Collaboration Process */}
      <div className="bg-muted rounded-xl p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="MapPin" size={20} className="mr-2" />
          Collaboration Process
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">1</span>
            </div>
            <h4 className="font-medium text-text-primary mb-2">Initial Discussion</h4>
            <p className="text-sm text-text-secondary">Share project details and explore mutual fit</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">2</span>
            </div>
            <h4 className="font-medium text-text-primary mb-2">Scope Definition</h4>
            <p className="text-sm text-text-secondary">Define deliverables, timeline, and expectations</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">3</span>
            </div>
            <h4 className="font-medium text-text-primary mb-2">Collaboration</h4>
            <p className="text-sm text-text-secondary">Work together with regular communication</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">4</span>
            </div>
            <h4 className="font-medium text-text-primary mb-2">Delivery & Growth</h4>
            <p className="text-sm text-text-secondary">Complete project and explore future opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationOpportunities;