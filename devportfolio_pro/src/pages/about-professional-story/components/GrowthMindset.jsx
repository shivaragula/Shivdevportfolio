import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GrowthMindset = () => {
  const [activeCategory, setActiveCategory] = useState('recent');

  const learningData = {
    recent: {
      title: "Recent Learning",
      items: [
        {
          title: "React.js Development",
          provider: "Online Learning & Practice",
          date: "2024",
          status: "completed",
          description: "Self-taught React.js through documentation, tutorials, and building projects",
          skills: ["React", "JSX", "Hooks", "State Management"],
          certificate: null
        },
        {
          title: "Machine Learning Fundamentals",
          provider: "Academic Coursework",
          date: "2024",
          status: "completed",
          description: "Learned ML concepts through university courses and practical projects",
          skills: ["Python", "Scikit-learn", "Data Analysis", "Algorithms"],
          certificate: null
        },
        {
          title: "Full Stack Web Development",
          provider: "Self-Learning & Internship",
          date: "2024",
          status: "ongoing",
          description: "Continuously learning modern web development through projects and internship",
          skills: ["JavaScript", "Node.js", "Databases", "API Development"],
          certificate: null
        }
      ]
    },
    certifications: {
      title: "Achievements & Certifications",
      items: [
        {
          title: "Academic Excellence - Computer Science",
          provider: "Vignan's Foundation for Science Technology & Research",
          date: "2024",
          status: "completed",
          description: "Maintained consistent academic performance throughout B.Tech program",
          skills: ["Programming", "Data Structures", "Algorithms", "Software Engineering"],
          certificate: null
        },
        {
          title: "Full Stack Development Internship",
          provider: "ZIDIO Development",
          date: "2024",
          status: "completed",
          description: "Successfully completed 3-month internship with hands-on project experience",
          skills: ["React", "Node.js", "Database Management", "Team Collaboration"],
          certificate: null
        },
        {
          title: "Machine Learning Project - 96% Accuracy",
          provider: "Academic Project",
          date: "2024",
          status: "completed",
          description: "Developed student performance prediction model achieving 96% accuracy",
          skills: ["Python", "Scikit-learn", "Data Analysis", "Machine Learning"],
          certificate: null
        }
      ]
    },
    projects: {
      title: "Personal Projects",
      items: [
        {
          title: "Student Performance Prediction System",
          provider: "Academic Project",
          date: "2024",
          status: "completed",
          description: "Built ML model to predict student performance with 96% accuracy using Python",
          skills: ["Python", "Scikit-learn", "Data Analysis", "Machine Learning"],
          certificate: null
        },
        {
          title: "Plant Disease Classification",
          provider: "Personal Project",
          date: "2024",
          status: "completed",
          description: "Developed CNN model for plant disease detection achieving 90% accuracy",
          skills: ["TensorFlow", "Keras", "Image Processing", "Deep Learning"],
          certificate: null
        },
        {
          title: "E-commerce Website",
          provider: "Internship Project",
          date: "2024",
          status: "completed",
          description: "Built full-stack e-commerce platform during ZIDIO Development internship",
          skills: ["React", "Node.js", "MongoDB", "Express.js"],
          certificate: null
        }
      ]
    }
  };

  const categories = [
    { key: 'recent', label: 'Learning Journey', icon: 'BookOpen' },
    { key: 'certifications', label: 'Achievements', icon: 'Award' },
    { key: 'projects', label: 'Projects', icon: 'Code' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
      case 'certified':
        return 'bg-success/10 text-success';
      case 'in-progress': case'ongoing':
        return 'bg-warning/10 text-warning';
      default:
        return 'bg-muted text-text-secondary';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
      case 'certified':
        return 'CheckCircle';
      case 'in-progress': case'ongoing':
        return 'Clock';
      default:
        return 'Circle';
    }
  };

  return (
    <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="TrendingUp" size={16} />
            <span className="text-sm font-medium">Continuous Growth</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Growth Mindset in Action
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            I believe in continuous learning and staying ahead of technology trends. 
            Here's how I invest in my professional development and expand my skill set.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories?.map((category) => (
            <Button
              key={category?.key}
              variant={activeCategory === category?.key ? "default" : "outline"}
              onClick={() => setActiveCategory(category?.key)}
              iconName={category?.icon}
              iconPosition="left"
              className="transition-all duration-300"
            >
              {category?.label}
            </Button>
          ))}
        </div>

        {/* Learning Content */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            {learningData?.[activeCategory]?.title}
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {learningData?.[activeCategory]?.items?.map((item, index) => (
              <div key={index} className="bg-card rounded-xl shadow-elevation hover:shadow-elevation-lg transition-all duration-300 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(item?.status)}`}>
                        <Icon name={getStatusIcon(item?.status)} size={12} className="inline mr-1" />
                        {item?.status?.replace('-', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                      </span>
                      <span className="text-sm text-text-secondary">{item?.date}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-primary mb-1">{item?.title}</h4>
                    <p className="text-sm text-accent font-medium">{item?.provider}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {item?.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-primary mb-2">Skills Gained:</h5>
                  <div className="flex flex-wrap gap-1">
                    {item?.skills?.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Link */}
                {item?.certificate && (
                  <div className="pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(item?.certificate, '_blank')}
                      iconName="ExternalLink"
                      iconPosition="right"
                      className="w-full sm:w-auto"
                    >
                      View Certificate
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="text-center">
            <Icon name="Lightbulb" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">My Learning Approach</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Target" size={24} className="text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-primary mb-2">Practical Learning</h4>
                <p className="text-sm text-text-secondary">
                  Focus on building real projects to understand concepts deeply
                </p>
              </div>
              <div>
                <Icon name="Users" size={24} className="text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-primary mb-2">Collaborative</h4>
                <p className="text-sm text-text-secondary">
                  Learning through teamwork, internships, and peer collaboration
                </p>
              </div>
              <div>
                <Icon name="Repeat" size={24} className="text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-primary mb-2">Consistent</h4>
                <p className="text-sm text-text-secondary">
                  Regular practice and continuous improvement through daily coding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthMindset;