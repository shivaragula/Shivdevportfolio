import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SupplementaryMaterials = ({ onDownload, onView }) => {
  const [activeTab, setActiveTab] = useState('portfolio');

  const portfolioSummaries = [
    {
      id: 'ecommerce-analytics',
      title: 'E-Commerce Analytics Platform',
      description: 'Comprehensive dashboard for real-time sales tracking and predictive analytics',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Python'],
      metrics: {
        users: '10,000+',
        performance: '40% faster',
        accuracy: '92%'
      },
      links: {
        live: 'https://ecommerce-analytics-demo.com',
        github: 'https://github.com/shivaragula/ecommerce-analytics',
        case_study: '/portfolio/ecommerce-analytics-case-study.pdf'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      status: 'Production'
    },
    {
      id: 'smart-task-manager',
      title: 'AI-Powered Task Manager',
      description: 'Intelligent task prioritization using machine learning algorithms',
      tech: ['Next.js', 'PostgreSQL', 'Python', 'TensorFlow', 'Redis'],
      metrics: {
        efficiency: '60% improvement',
        users: '5,000+',
        satisfaction: '4.8/5'
      },
      links: {
        live: 'https://smart-task-manager-demo.com',
        github: 'https://github.com/shivaragula/smart-task-manager',
        case_study: '/portfolio/task-manager-case-study.pdf'
      },
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
      status: 'Beta'
    },
    {
      id: 'realtime-dashboard',
      title: 'Real-time Analytics Dashboard',
      description: 'Live data visualization with WebSocket integration',
      tech: ['React', 'D3.js', 'WebSocket', 'Redis', 'Express'],
      metrics: {
        latency: '< 100ms',
        concurrent: '1,000+',
        uptime: '99.9%'
      },
      links: {
        live: 'https://realtime-dashboard-demo.com',
        github: 'https://github.com/shivaragula/realtime-dashboard',
        case_study: '/portfolio/dashboard-case-study.pdf'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      status: 'Production'
    }
  ];

  const references = [
    {
      name: "Dr. Rajesh Sharma",
      title: "Professor, Computer Science Department",
      organization: "Indian Institute of Technology, Delhi",
      email: "rajesh.sharma@iitd.ac.in",
      phone: "+91 11 2659 1234",
      relationship: "Academic Supervisor",
      duration: "2022-2024",
      projects: ["Machine Learning Research", "Final Year Project"],
      recommendation: "Shiva demonstrated exceptional analytical skills and innovative thinking throughout his academic journey."
    },
    {
      name: "Priya Patel",
      title: "Senior Software Engineer",
      organization: "TechCorp Solutions",
      email: "priya.patel@techcorp.com",
      phone: "+1 (555) 987-6543",
      relationship: "Internship Mentor",
      duration: "Jun 2023 - Aug 2023",
      projects: ["React Dashboard", "API Development"],
      recommendation: "Shiva quickly adapted to our development workflow and delivered high-quality code consistently."
    },
    {
      name: "Amit Kumar",
      title: "Team Lead, Data Science",
      organization: "DataTech Analytics",
      email: "amit.kumar@datatech.com",
      phone: "+1 (555) 456-7890",
      relationship: "Project Collaborator",
      duration: "Jan 2023 - May 2023",
      projects: ["NLP Research", "Sentiment Analysis"],
      recommendation: "Excellent problem-solving abilities and strong foundation in machine learning concepts."
    }
  ];

  const academicRecords = [
    {
      type: "Official Transcript",
      institution: "Indian Institute of Technology, Delhi",
      period: "2020-2024",
      gpa: "8.7/10",
      file: "/documents/iit-delhi-transcript.pdf",
      verified: true,
      courses: [
        { code: "CS301", name: "Data Structures & Algorithms", grade: "A" },
        { code: "CS401", name: "Machine Learning", grade: "A+" },
        { code: "CS501", name: "Database Systems", grade: "A" },
        { code: "CS601", name: "Software Engineering", grade: "A" }
      ]
    },
    {
      type: "Degree Certificate",
      institution: "Indian Institute of Technology, Delhi",
      period: "2024",
      degree: "Bachelor of Technology in Computer Science",
      file: "/documents/btech-degree-certificate.pdf",
      verified: true
    },
    {
      type: "Academic Achievements",
      institution: "Indian Institute of Technology, Delhi",
      achievements: [
        "Dean\'s List - 6 consecutive semesters",
        "Best Project Award - Final Year Project",
        "Academic Excellence Scholarship - 2022, 2023",
        "Research Publication - International Conference"
      ]
    }
  ];

  const professionalLinks = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/shiva-shankar-ragula/",
      icon: "Linkedin",
      followers: "2,500+",
      description: "Professional network and career updates"
    },
    {
      platform: "GitHub",
      url: "https://github.com/shivaragula",
      icon: "Github",
      followers: "1,200+",
      description: "Open source contributions and projects"
    },
    {
      platform: "Portfolio Website",
      url: "https://devportfolio-pro.com",
      icon: "Globe",
      visitors: "5,000+",
      description: "Complete portfolio with live demos"
    },
    {
      platform: "Technical Blog",
      url: "https://medium.com/@shivakumar-tech",
      icon: "BookOpen",
      followers: "800+",
      description: "Technical articles and tutorials"
    }
  ];

  const tabs = [
    { id: 'portfolio', name: 'Portfolio Summaries', icon: 'FolderOpen' },
    { id: 'references', name: 'References', icon: 'Users' },
    { id: 'academic', name: 'Academic Records', icon: 'GraduationCap' },
    { id: 'social', name: 'Professional Links', icon: 'Link' }
  ];

  const renderPortfolioSummaries = () => (
    <div className="space-y-6">
      {portfolioSummaries?.map((project) => (
        <div key={project?.id} className="border border-border rounded-lg p-6 hover:shadow-elevation transition-all duration-300">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/3">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project?.status === 'Production' ?'bg-success text-white' :'bg-warning text-white'
                  }`}>
                    {project?.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">{project?.title}</h3>
                <p className="text-text-secondary">{project?.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project?.tech?.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-muted rounded text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(project?.metrics)?.map(([key, value]) => (
                  <div key={key} className="text-center p-2 bg-muted rounded">
                    <p className="text-lg font-semibold text-primary">{value}</p>
                    <p className="text-xs text-text-muted capitalize">{key}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project?.links?.live, '_blank')}
                  iconName="ExternalLink"
                  iconPosition="left"
                  iconSize={14}
                >
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project?.links?.github, '_blank')}
                  iconName="Github"
                  iconPosition="left"
                  iconSize={14}
                >
                  Source Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDownload(project?.links?.case_study)}
                  iconName="Download"
                  iconPosition="left"
                  iconSize={14}
                >
                  Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderReferences = () => (
    <div className="grid gap-6">
      {references?.map((ref, index) => (
        <div key={index} className="bg-muted rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-primary">{ref?.name}</h3>
              <p className="text-accent font-medium">{ref?.title}</p>
              <p className="text-text-secondary">{ref?.organization}</p>
            </div>
            <div className="text-right text-sm text-text-muted">
              <p>{ref?.relationship}</p>
              <p>{ref?.duration}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={16} className="text-accent" />
              <span className="text-sm text-text-secondary">{ref?.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} className="text-accent" />
              <span className="text-sm text-text-secondary">{ref?.phone}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm font-medium text-primary mb-2">Collaborated Projects:</p>
            <div className="flex flex-wrap gap-2">
              {ref?.projects?.map((project, idx) => (
                <span key={idx} className="px-2 py-1 bg-background rounded text-xs text-text-muted">
                  {project}
                </span>
              ))}
            </div>
          </div>
          
          <blockquote className="border-l-4 border-accent pl-4 italic text-text-secondary">
            "{ref?.recommendation}"
          </blockquote>
        </div>
      ))}
    </div>
  );

  const renderAcademicRecords = () => (
    <div className="space-y-6">
      {academicRecords?.map((record, index) => (
        <div key={index} className="border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-primary">{record?.type}</h3>
              <p className="text-accent font-medium">{record?.institution}</p>
              {record?.period && <p className="text-text-secondary">{record?.period}</p>}
              {record?.gpa && <p className="text-success font-medium">GPA: {record?.gpa}</p>}
              {record?.degree && <p className="text-primary font-medium">{record?.degree}</p>}
            </div>
            {record?.verified && (
              <div className="flex items-center gap-1 text-success text-sm">
                <Icon name="CheckCircle" size={16} />
                Verified
              </div>
            )}
          </div>
          
          {record?.courses && (
            <div className="mb-4">
              <p className="text-sm font-medium text-primary mb-3">Key Courses:</p>
              <div className="grid md:grid-cols-2 gap-2">
                {record?.courses?.map((course, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="text-sm text-text-secondary">{course?.name}</span>
                    <span className="text-sm font-medium text-primary">{course?.grade}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {record?.achievements && (
            <div className="mb-4">
              <p className="text-sm font-medium text-primary mb-3">Achievements:</p>
              <ul className="space-y-2">
                {record?.achievements?.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-text-secondary">
                    <Icon name="Award" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {record?.file && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDownload(record?.file)}
              iconName="Download"
              iconPosition="left"
              iconSize={14}
            >
              Download {record?.type}
            </Button>
          )}
        </div>
      ))}
    </div>
  );

  const renderProfessionalLinks = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {professionalLinks?.map((link, index) => (
        <div key={index} className="bg-muted rounded-lg p-6 hover:shadow-elevation transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name={link?.icon} size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">{link?.platform}</h3>
              <p className="text-text-secondary text-sm">{link?.description}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-text-muted">
              {link?.followers || link?.visitors} {link?.followers ? 'followers' : 'monthly visitors'}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(link?.url, '_blank')}
              iconName="ExternalLink"
              iconPosition="left"
              iconSize={14}
            >
              Visit
            </Button>
          </div>
          
          <div className="text-xs text-text-muted font-mono bg-background rounded p-2 truncate">
            {link?.url}
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'portfolio':
        return renderPortfolioSummaries();
      case 'references':
        return renderReferences();
      case 'academic':
        return renderAcademicRecords();
      case 'social':
        return renderProfessionalLinks();
      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-elevation overflow-hidden">
      <div className="border-b border-border p-6">
        <h2 className="text-xl font-semibold text-primary mb-2">Supplementary Materials</h2>
        <p className="text-text-secondary">Additional resources and supporting documentation</p>
      </div>
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-muted/50' :'text-text-secondary hover:text-primary hover:bg-muted/30'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              {tab?.name}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default SupplementaryMaterials;