import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResumePreview = ({ onDownload, onCustomize }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const resumeData = {
    personalInfo: {
      name: "RAGULA SHIVA SHANKAR",
      title: "Full-Stack Developer & Data Science Enthusiast",
      email: "shiva.shankar4997@gmail.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/shiva-shankar-ragula",
      github: "github.com/shivaragula",
      portfolio: "devportfolio-pro.com"
    },
    summary: `Passionate Full-Stack Developer with expertise in React, Node.js, and Python. Experienced in building scalable web applications and implementing data-driven solutions. Strong background in machine learning and database optimization. Seeking opportunities to contribute to innovative projects while continuing to grow in emerging technologies.`,
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Indian Institute of Technology, Delhi",
        year: "2020-2024",
        gpa: "8.7/10",
        relevant: ["Data Structures & Algorithms", "Database Systems", "Machine Learning", "Software Engineering"]
      }
    ],
    experience: [
      {
        title: "Software Development Intern",
        company: "TechCorp Solutions",
        duration: "Jun 2023 - Aug 2023",
        location: "Bangalore, India",
        achievements: [
          "Developed a React-based dashboard reducing data processing time by 40%",
          "Implemented RESTful APIs using Node.js and Express, serving 10,000+ daily requests",
          "Collaborated with cross-functional teams to deliver features ahead of schedule"
        ]
      },
      {
        title: "Research Assistant",
        company: "IIT Delhi AI Lab",
        duration: "Jan 2023 - May 2023",
        location: "Delhi, India",
        achievements: [
          "Built machine learning models achieving 92% accuracy in sentiment analysis",
          "Published research paper on NLP applications in social media analysis",
          "Mentored 5 junior students in Python and data science fundamentals"
        ]
      }
    ],
    skills: {
      programming: ["JavaScript", "Python", "Java", "TypeScript", "C++"],
      frontend: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Django", "Flask", "REST APIs"],
      database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      tools: ["Git", "Docker", "AWS", "Firebase", "Figma", "VS Code"],
      ml: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]
    },
    projects: [
      {
        name: "E-Commerce Analytics Platform",
        tech: ["React", "Node.js", "MongoDB", "Chart.js"],
        description: "Built a comprehensive analytics dashboard for e-commerce businesses with real-time sales tracking and predictive analytics."
      },
      {
        name: "Smart Task Manager",
        tech: ["Next.js", "PostgreSQL", "Python", "ML"],
        description: "Developed an AI-powered task management system that prioritizes tasks based on user behavior and deadlines."
      }
    ],
    certifications: [
      "AWS Certified Developer Associate",
      "Google Cloud Professional Developer",
      "MongoDB Certified Developer"
    ]
  };

  const sections = [
    { id: 'overview', name: 'Overview', icon: 'Eye' },
    { id: 'experience', name: 'Experience', icon: 'Briefcase' },
    { id: 'education', name: 'Education', icon: 'GraduationCap' },
    { id: 'skills', name: 'Skills', icon: 'Code' },
    { id: 'projects', name: 'Projects', icon: 'FolderOpen' },
    { id: 'certifications', name: 'Certifications', icon: 'Award' }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="text-center pb-6 border-b border-border">
              <h1 className="text-3xl font-bold text-primary mb-2">{resumeData?.personalInfo?.name}</h1>
              <p className="text-xl text-text-secondary mb-4">{resumeData?.personalInfo?.title}</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1">
                  <Icon name="Mail" size={14} />
                  {resumeData?.personalInfo?.email}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Phone" size={14} />
                  {resumeData?.personalInfo?.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="MapPin" size={14} />
                  {resumeData?.personalInfo?.location}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Professional Summary</h3>
              <p className="text-text-secondary leading-relaxed">{resumeData?.summary}</p>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary">Professional Experience</h3>
            {resumeData?.experience?.map((exp, index) => (
              <div key={index} className="border-l-2 border-accent pl-4 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-primary">{exp?.title}</h4>
                    <p className="text-accent font-medium">{exp?.company}</p>
                  </div>
                  <div className="text-right text-sm text-text-muted">
                    <p>{exp?.duration}</p>
                    <p>{exp?.location}</p>
                  </div>
                </div>
                <ul className="space-y-1 text-text-secondary">
                  {exp?.achievements?.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={14} className="mt-1 text-accent flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary">Education</h3>
            {resumeData?.education?.map((edu, index) => (
              <div key={index} className="bg-muted rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-primary">{edu?.degree}</h4>
                    <p className="text-accent font-medium">{edu?.institution}</p>
                  </div>
                  <div className="text-right text-sm text-text-muted">
                    <p>{edu?.year}</p>
                    <p className="font-medium">GPA: {edu?.gpa}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu?.relevant?.map((course, idx) => (
                      <span key={idx} className="px-2 py-1 bg-background rounded text-xs text-text-muted">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary">Technical Skills</h3>
            <div className="grid gap-4">
              {Object.entries(resumeData?.skills)?.map(([category, skills]) => (
                <div key={category} className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-3 capitalize">
                    {category === 'ml' ? 'Machine Learning' : category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills?.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent text-white rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary">Key Projects</h3>
            {resumeData?.projects?.map((project, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">{project?.name}</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project?.tech?.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-muted rounded text-xs text-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-text-secondary">{project?.description}</p>
              </div>
            ))}
          </div>
        );

      case 'certifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary">Certifications</h3>
            <div className="grid gap-3">
              {resumeData?.certifications?.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Icon name="Award" size={20} className="text-accent" />
                  <span className="text-text-secondary">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-elevation overflow-hidden">
      <div className="border-b border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-primary">Resume Preview</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onCustomize}
              iconName="Settings"
              iconPosition="left"
              iconSize={16}
            >
              Customize
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={onDownload}
              iconName="Download"
              iconPosition="left"
              iconSize={16}
            >
              Download PDF
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {sections?.map((section) => (
            <button
              key={section?.id}
              onClick={() => setActiveSection(section?.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === section?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-text-secondary hover:text-primary hover:bg-muted'
              }`}
            >
              <Icon name={section?.icon} size={16} />
              {section?.name}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6 max-h-96 overflow-y-auto">
        {renderSection()}
      </div>
    </div>
  );
};

export default ResumePreview;