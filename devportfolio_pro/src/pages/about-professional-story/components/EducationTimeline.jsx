import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EducationTimeline = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const timelineData = [
    {
      id: 1,
      period: "Nov 2021 - Jun 2025",
      title: "Bachelor of Technology in Computer Science Engineering",
      institution: "Hyderabad Institute of Technology and Management",
      grade: "CGPA: 7.42/10.0",
      status: "completed",
      description: `Specialized in Data Structures, Algorithms, Operating Systems, Software Engineering, and DBMS. 
      Building strong foundation in computer science fundamentals with hands-on project experience.`,
      achievements: [
        "Completed internship at ZIDIO as Software Development Intern",
        "Built multiple full-stack projects with 96% ML model accuracy",
        "Developed e-commerce platform supporting 100+ concurrent users",
        "Active participant in coding competitions and hackathons"
      ],
      keyProjects: [
        {
          name: "Full-Stack E-Commerce Web Application",
          tech: ["React.js", "Node.js", "Express.js", "MySQL"],
          description: "Architected platform supporting 100+ concurrent users with secure authentication"
        },
        {
          name: "Student Performance Prediction Model",
          tech: ["Python", "Scikit-Learn", "Pandas"],
          description: "Built ML model on 5,000+ records achieving 96% accuracy"
        },
        {
          name: "Plant Disease Classification Model",
          tech: ["TensorFlow", "Flask"],
          description: "CNN model achieving 90% accuracy on leaf disease classification"
        }
      ],
      icon: "GraduationCap",
      color: "bg-primary"
    },
    {
      id: 2,
      period: "2019 - 2021",
      title: "Intermediate (Class XII) - MPC",
      institution: "Sri Chaitanya Junior College",
      grade: "Percentage: 89.6%",
      status: "completed",
      description: `Focused on Mathematics, Physics, and Chemistry with strong analytical foundation. 
      Developed problem-solving skills and mathematical reasoning that shaped engineering approach.`,
      achievements: [
        "Achieved 89.6% in Telangana State Board of Intermediate Education",
        "Strong performance in Mathematics and Physics",
        "Developed analytical and logical thinking skills",
        "Participated in science exhibitions and competitions"
      ],
      keyProjects: [
        {
          name: "Science Fair Projects",
          tech: ["Mathematics", "Physics", "Chemistry"],
          description: "Practical experiments and mathematical modeling projects"
        }
      ],
      icon: "BookOpen",
      color: "bg-accent"
    },
    {
      id: 3,
      period: "Oct 2023 - Dec 2023",
      title: "Software Development Intern",
      institution: "ZIDIO, Hyderabad",
      grade: "Internship Experience",
      status: "completed",
      description: `Gained hands-on experience in full-stack development, working with Node.js, Express.js, and React.js. 
      Collaborated in Agile environment and contributed to scalable architecture.`,
      achievements: [
        "Improved data processing efficiency by 15%",
        "Enhanced UI responsiveness increasing user engagement by 20%",
        "Reduced API response time by 15% through optimization",
        "Participated in Agile sprints and code reviews"
      ],
      keyProjects: [
        {
          name: "Backend Feature Development",
          tech: ["Node.js", "Express.js", "REST APIs"],
          description: "Engineered backend features improving data processing efficiency"
        },
        {
          name: "React Component Library",
          tech: ["React.js", "JavaScript", "CSS3"],
          description: "Developed reusable components enhancing UI responsiveness"
        }
      ],
      icon: "Briefcase",
      color: "bg-purple-600"
    },
    {
      id: 4,
      period: "2019",
      title: "Secondary School (Class X)",
      institution: "SVS Red Rose High School",
      grade: "Percentage: 92%",
      status: "completed",
      description: `Completed secondary education with excellent academic performance. 
      Built strong foundation in core subjects and developed interest in mathematics and science.`,
      achievements: [
        "Achieved 92% in Telangana State Board of Secondary Education",
        "Consistent academic excellence throughout school years",
        "Active participation in school competitions and events",
        "Developed leadership skills through various activities"
      ],
      keyProjects: [
        {
          name: "Academic Projects",
          tech: ["Mathematics", "Science", "Computer Basics"],
          description: "School-level projects and presentations in various subjects"
        }
      ],
      icon: "School",
      color: "bg-green-600"
    },
    {
      id: 5,
      period: "2023 - 2024",
      title: "Professional Certifications",
      institution: "Various Online Platforms",
      grade: "Multiple Certifications",
      status: "completed",
      description: `Committed to continuous learning and staying current with industry best practices 
      through structured certification programs and hands-on learning.`,
      achievements: [
        "Full Stack Development - Infosys Springboard (Apr 2024)",
        "Programming in Python - Meta (Sep 2023)",
        "Introduction to Data Analysis - IBM (Jun 2023)",
        "Completed various technical courses and workshops"
      ],
      keyProjects: [
        {
          name: "Certification Projects",
          tech: ["Python", "React.js", "Node.js", "Data Analysis"],
          description: "Practical projects demonstrating learned concepts and skills"
        }
      ],
      icon: "Award",
      color: "bg-success"
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Educational Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive academic foundation combined with continuous learning 
            and practical application of cutting-edge technologies.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {timelineData?.map((item, index) => (
              <div key={item?.id} className="relative">
                {/* Timeline Node */}
                <div className={`absolute left-6 w-4 h-4 ${item?.color} rounded-full border-4 border-background shadow-elevation z-10`}></div>
                
                {/* Content Card */}
                <div className="ml-16 bg-card rounded-xl shadow-elevation hover:shadow-elevation-lg transition-all duration-300">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 ${item?.color} rounded-lg flex items-center justify-center shadow-elevation`}>
                          <Icon name={item?.icon} size={24} className="text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium text-text-secondary bg-muted px-2 py-1 rounded">
                              {item?.period}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item?.status === 'completed' ? 'bg-success/10 text-success' :
                              item?.status === 'ongoing'? 'bg-warning/10 text-warning' : 'bg-muted text-text-secondary'
                            }`}>
                              {item?.status === 'completed' ? 'Completed' : 
                               item?.status === 'ongoing' ? 'In Progress' : 'Planned'}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-primary">{item?.title}</h3>
                          <p className="text-text-secondary">{item?.institution}</p>
                          <p className="text-sm font-medium text-accent">{item?.grade}</p>
                        </div>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(item?.id)}
                        iconName={expandedItem === item?.id ? "ChevronUp" : "ChevronDown"}
                        iconPosition="right"
                      >
                        {expandedItem === item?.id ? 'Less' : 'More'}
                      </Button>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {item?.description}
                    </p>

                    {/* Expanded Content */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      expandedItem === item?.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-6 pt-4 border-t border-border">
                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center">
                            <Icon name="Award" size={16} className="mr-2" />
                            Key Achievements
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {item?.achievements?.map((achievement, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-text-secondary">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Projects */}
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center">
                            <Icon name="Code" size={16} className="mr-2" />
                            Notable Projects
                          </h4>
                          <div className="space-y-3">
                            {item?.keyProjects?.map((project, idx) => (
                              <div key={idx} className="bg-muted/50 p-4 rounded-lg">
                                <h5 className="font-medium text-primary mb-1">{project?.name}</h5>
                                <p className="text-sm text-text-secondary mb-2">{project?.description}</p>
                                <div className="flex flex-wrap gap-1">
                                  {project?.tech?.map((tech, techIdx) => (
                                    <span key={techIdx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;