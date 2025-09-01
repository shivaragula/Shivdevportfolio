import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalValues = () => {
  const values = [
    {
      icon: 'Users',
      title: 'Collaboration',
      description: 'I believe the best solutions emerge from diverse perspectives and open communication.',
      examples: [
        'Led cross-functional teams in 5+ projects',
        'Mentored 10+ junior developers',
        'Active contributor to open-source communities'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation',
      description: 'Constantly seeking creative approaches to solve complex problems and improve processes.',
      examples: [
        'Developed novel ML algorithms for edge computing',
        'Created automation tools saving 20+ hours/week',
        'Filed 2 provisional patents for technical innovations'
      ],
      color: 'bg-yellow-500'
    },
    {
      icon: 'Target',
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions that exceed expectations and create lasting value.',
      examples: [
        'Maintained 99.9% uptime across all deployed systems',
        'Achieved 95%+ code coverage in all projects',
        'Consistently delivered projects ahead of schedule'
      ],
      color: 'bg-green-500'
    },
    {
      icon: 'BookOpen',
      title: 'Continuous Learning',
      description: 'Embracing new technologies and methodologies to stay at the forefront of innovation.',
      examples: [
        'Completed 15+ professional certifications',
        'Attend 5+ tech conferences annually',
        'Maintain active learning schedule of 10+ hours/week'
      ],
      color: 'bg-purple-500'
    }
  ];

  const interests = [
    {
      category: 'Technology',
      items: [
        { name: 'AI/ML Research', icon: 'Brain' },
        { name: 'Open Source', icon: 'Github' },
        { name: 'Tech Podcasts', icon: 'Headphones' },
        { name: 'Hackathons', icon: 'Code' }
      ]
    },
    {
      category: 'Creative',
      items: [
        { name: 'Photography', icon: 'Camera' },
        { name: 'UI/UX Design', icon: 'Palette' },
        { name: 'Technical Writing', icon: 'PenTool' },
        { name: 'Video Editing', icon: 'Video' }
      ]
    },
    {
      category: 'Lifestyle',
      items: [
        { name: 'Fitness', icon: 'Dumbbell' },
        { name: 'Travel', icon: 'MapPin' },
        { name: 'Cooking', icon: 'ChefHat' },
        { name: 'Reading', icon: 'Book' }
      ]
    },
    {
      category: 'Community',
      items: [
        { name: 'Mentoring', icon: 'Users' },
        { name: 'Volunteering', icon: 'Heart' },
        { name: 'Tech Talks', icon: 'Mic' },
        { name: 'Networking', icon: 'Network' }
      ]
    }
  ];



  return (
    <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Core Values */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4">
            <Icon name="Heart" size={16} />
            <span className="text-sm font-medium">Core Values</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Personal Values & Interests
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            The principles that guide my work and the interests that fuel my passion for technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values?.map((value, index) => (
            <div key={index} className="bg-card rounded-xl shadow-elevation hover:shadow-elevation-lg transition-all duration-300 p-6">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${value?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={value?.icon} size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{value?.title}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{value?.description}</p>
                  
                  <div className="space-y-2">
                    {value?.examples?.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interests & Hobbies */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Interests & Hobbies</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Beyond coding, these activities keep me inspired and help me bring fresh perspectives to my work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests?.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-card rounded-xl shadow-elevation p-6">
                <h4 className="font-bold text-primary mb-4 text-center">{category?.category}</h4>
                <div className="space-y-3">
                  {category?.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                      <Icon name={item?.icon} size={18} className="text-accent" />
                      <span className="text-sm text-text-secondary">{item?.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Cultural Fit Indicators */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="text-center">
            <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">Team Collaboration Style</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="MessageCircle" size={24} className="text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-primary mb-2">Open Communication</h4>
                <p className="text-sm text-text-secondary">
                  I believe in transparent, honest communication and regular feedback loops
                </p>
              </div>
              <div>
                <Icon name="Handshake" size={24} className="text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-primary mb-2">Supportive Leadership</h4>
                <p className="text-sm text-text-secondary">
                  I lead by example and support team members in achieving their goals
                </p>
              </div>
              <div>
                <Icon name="Zap" size={24} className="text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-primary mb-2">Adaptable Approach</h4>
                <p className="text-sm text-text-secondary">
                  I adapt my working style to complement team dynamics and project needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalValues;