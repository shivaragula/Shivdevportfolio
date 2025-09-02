import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import SkillCategoryCard from './components/SkillCategoryCard';
import LearningPathVisualization from './components/LearningPathVisualization';
import SkillsInActionSection from './components/SkillsInActionSection';
import CertificationBadges from './components/CertificationBadges';
import TechnicalInterestsSection from './components/TechnicalInterestsSection';
import GitHubIntegration from './components/GitHubIntegration';
import IndustryAlignmentAnalysis from './components/IndustryAlignmentAnalysis';
import Icon from '../../components/AppIcon';

const SkillsTechnicalArsenal = () => {
  useEffect(() => {
    document.title = 'Skills - Technical Arsenal | RAGULA SHIVA SHANKAR';
    window.scrollTo(0, 0);
  }, []);

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "Code",
      color: "bg-blue-600",
      skills: [
        {
          name: "Python",
          proficiency: "3 months",
          experience: "Beginner",
          projects: ["Student Performance Prediction", "Plant Disease Classification", "Academic Projects"],
          timeline: "Started in 2023, focused on machine learning basics and data analysis",
          nextGoal: "Learn more ML algorithms and improve model accuracy",
          certified: true
        },
        {
          name: "JavaScript",
          proficiency: "Beginner",
          experience: "3 months",
          projects: ["E-commerce Platform", "React Components", "University Projects"],
          timeline: "Began in 2023, learning ES6+ features and modern frameworks",
          nextGoal: "Learn TypeScript and improve JavaScript skills",
          certified: false
        },
        {
          name: "Java",
          proficiency: "Beginner",
          experience: "4 months",
          projects: ["University Projects", "Object-Oriented Programming", "Data Structures"],
          timeline: "University foundation course, focus on OOP concepts",
          nextGoal: "Learn Spring Boot and enterprise Java development",
          certified: false
        },
        {
          name: "C++",
          proficiency: "Beginner",
          experience: "3 months",
          projects: ["Data Structures", "Algorithms", "Academic Assignments"],
          timeline: "University foundation, focus on algorithmic problem solving",
          nextGoal: "Master advanced algorithms and system programming",
          certified: false
        },
        {
          name: "SQL",
          proficiency: "Beginner",
          experience: "4 months",
          projects: ["Database Design", "E-commerce Platform", "Academic Projects"],
          timeline: "Learned for database management and basic data analysis",
          nextGoal: "Learn database optimization and design patterns",
          certified: false
        }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: "Layers",
      color: "bg-green-600",
      skills: [
        {
          name: "React.js",
          proficiency: "Beginner",
          experience: "4 months",
          projects: ["E-commerce Platform", "Portfolio Website", "University Projects"],
          timeline: "Started in 2024, learning hooks, components, and basic patterns",
          nextGoal: "Learn React best practices and state management",
          certified: false
        },
        {
          name: "Node.js",
          proficiency: "Beginner",
          experience: "6 months",
          projects: ["Basic APIs", "E-commerce Backend", "Internship Projects"],
          timeline: "Backend development during internship and academic projects",
          nextGoal: "Improve backend development and API design skills",
          certified: false
        },
        {
          name: "Express.js",
          proficiency: "Beginner",
          experience: "3 months",
          projects: ["Basic API Development", "Simple Backend", "Learning Projects"],
          timeline: "Learning backend framework during internship",
          nextGoal: "Explore GraphQL and advanced middleware patterns",
          certified: false
        },
        {
          name: "HTML5",
          proficiency: "Beginner",
          experience: "3 months",
          projects: ["Web Projects", "Responsive Design", "University Assignments"],
          timeline: "Foundation skill for web development projects",
          nextGoal: "Master advanced HTML5 APIs and web components",
          certified: false
        },
        {
          name: "CSS3",
          proficiency: "Beginner",
          experience: "3 months",
          projects: ["Responsive Design", "Basic UI Components", "Styling Projects"],
          timeline: "Styling foundation with focus on responsive design",
          nextGoal: "Master CSS Grid, animations, and design systems",
          certified: false
        }
      ]
    },
    {
      category: "Machine Learning & Data Science",
      icon: "BarChart3",
      color: "bg-purple-600",
      skills: [
        {
          name: "TensorFlow",
          proficiency: "Beginner",
          experience: "6 months",
          projects: ["Plant Disease Classification", "Basic CNN Models", "Academic Projects"],
          timeline: "Used for building basic neural networks in academic projects",
          nextGoal: "Master advanced architectures and model deployment",
          certified: false
        },
        {
          name: "Keras",
          proficiency: "Beginner",
          experience: "6 months",
          projects: ["Basic Neural Networks", "Image Classification", "Learning Projects"],
          timeline: "High-level API for building and training basic deep learning models",
          nextGoal: "Explore advanced model architectures and optimization",
          certified: false
        },
        {
          name: "Scikit-Learn",
          proficiency: "Beginner",
          experience: "5 months",
          projects: ["Student Performance Prediction", "Basic Classification", "Academic Analysis"],
          timeline: "Primary ML library for academic projects and learning",
          nextGoal: "Master ensemble methods and advanced feature engineering",
          certified: false
        },
        {
          name: "Pandas",
          proficiency: "Beginner",
          experience: "5 months",
          projects: ["Data Preprocessing", "Basic Analysis", "Academic Projects"],
          timeline: "Core tool for data manipulation in academic ML projects",
          nextGoal: "Master advanced data manipulation and optimization techniques",
          certified: false
        },
        {
          name: "NumPy",
          proficiency: "Beginner",
          experience: "3 months",
          projects: ["Mathematical Computing", "Array Operations", "Academic Computing"],
          timeline: "Foundation for numerical computing in academic projects",
          nextGoal: "Explore advanced mathematical operations and optimization",
          certified: false
        }
      ]
    },
    {
      category: "Databases & Tools",
      icon: "Database",
      color: "bg-orange-600",
      skills: [
        {
          name: "MySQL",
          proficiency: "Beginner",
          experience: "3 months",
          projects: ["E-commerce Platform", "Basic Database Design", "Academic Projects"],
          timeline: "Primary relational database for academic and internship projects",
          nextGoal: "Master advanced query optimization and database administration",
          certified: false
        },
        {
          name: "Git",
          proficiency: "Beginner",
          experience: "3 months",
          projects: ["Academic Projects", "Version Control", "Basic Collaboration"],
          timeline: "Version control for academic and internship work",
          nextGoal: "Master advanced Git workflows and branching strategies",
          certified: false
        },
        {
          name: "GitHub",
          proficiency: "Intermediate",
          experience: "3 months",
          projects: ["Code Repository", "Project Hosting", "Basic Collaboration"],
          timeline: "Platform for code hosting and academic project sharing",
          nextGoal: "Master GitHub Actions and advanced collaboration features",
          certified: false
        },
        {
          name: "Linux",
          proficiency: "Beginner",
          experience: "2 months",
          projects: ["Development Environment", "Basic Commands", "Learning"],
          timeline: "Operating system for development environment setup",
          nextGoal: "Master system administration and shell scripting",
          certified: false
        }
      ]
    },
    {
      category: "Development Tools & Practices",
      icon: "Settings",
      color: "bg-red-600",
      skills: [
        {
          name: "VS Code",
          proficiency: "Intermediate",
          experience: "3 months",
          projects: ["Academic Development Work", "Basic Extensions", "Learning"],
          timeline: "Primary IDE for academic and internship development",
          nextGoal: "Master advanced debugging and productivity extensions",
          certified: false
        },
        {
          name: "Jupyter Notebook",
          proficiency: "Beginner",
          experience: "3 months",
          projects: ["Data Analysis", "Basic ML Models", "Academic Research"],
          timeline: "Tool for data science and machine learning coursework",
          nextGoal: "Master advanced notebook features and JupyterLab",
          certified: false
        },
        {
          name: "Agile Methodology",
          proficiency: "Beginner",
          experience: "3 months",
          projects: ["ZIDIO Internship", "Team Collaboration", "Basic Sprint Work"],
          timeline: "Learned during internship with basic hands-on experience",
          nextGoal: "Master Scrum framework and project management",
          certified: false
        },
        {
          name: "CI/CD",
          proficiency: "Beginner",
          experience: "2 months",
          projects: ["Basic Deployment", "Learning Projects", "Academic Understanding"],
          timeline: "Basic understanding of continuous integration concepts",
          nextGoal: "Master GitHub Actions and advanced deployment strategies",
          certified: false
        },
        {
          name: "Code Review",
          proficiency: "Beginner",
          experience: "3 months",
          projects: ["Internship Projects", "Peer Review", "Learning Best Practices"],
          timeline: "Participated in basic code reviews during internship",
          nextGoal: "Master advanced code review techniques and mentoring",
          certified: false
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-elevation-lg">
                <Icon name="Code" size={32} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              My technical skills and learning journey as a recent Computer Science graduate. 
              Explore the technologies I've learned through coursework, personal projects, and internship experience.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="p-4 bg-card rounded-lg shadow-elevation border border-border">
                <div className="text-2xl font-bold text-primary">12+</div>
                <div className="text-sm text-text-secondary">Technologies</div>
              </div>
              <div className="p-4 bg-card rounded-lg shadow-elevation border border-border">
                <div className="text-2xl font-bold text-success">3</div>
                <div className="text-sm text-text-secondary">Certifications</div>
              </div>
              <div className="p-4 bg-card rounded-lg shadow-elevation border border-border">
                <div className="text-2xl font-bold text-accent">1</div>
                <div className="text-sm text-text-secondary">Year Experience</div>
              </div>
              <div className="p-4 bg-card rounded-lg shadow-elevation border border-border">
                <div className="text-2xl font-bold text-warning">3</div>
                <div className="text-sm text-text-secondary">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Technical Skills Overview</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              My technical skills gained through academic coursework, personal projects, and internship experience
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories?.map((category, index) => (
              <SkillCategoryCard
                key={category?.category}
                category={category?.category}
                skills={category?.skills}
                icon={category?.icon}
                color={category?.color}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Learning Path Visualization */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <LearningPathVisualization />
        </div>
      </section>
      {/* Skills in Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SkillsInActionSection />
        </div>
      </section>
      {/* Certifications */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <CertificationBadges />
        </div>
      </section>
      {/* Technical Interests */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TechnicalInterestsSection />
        </div>
      </section>
      {/* GitHub Integration */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <GitHubIntegration />
        </div>
      </section>
      {/* Industry Alignment Analysis */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <IndustryAlignmentAnalysis />
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-success to-accent rounded-lg flex items-center justify-center shadow-elevation">
              <Icon name="Rocket" size={24} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Learn and Contribute?</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            I'm eager to apply my technical skills in a professional environment and continue learning from experienced developers. Let's discuss how I can contribute to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects-innovation-showcase"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-elevation hover:shadow-elevation-lg"
            >
              <Icon name="FolderOpen" size={20} className="mr-2" />
              View My Projects
            </a>
            <a
              href="/contact-professional-network"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 shadow-elevation hover:shadow-elevation-lg"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-text-secondary">
            © {new Date()?.getFullYear()} RAGULA SHIVA SHANKAR. Continuously learning and growing in the tech industry.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SkillsTechnicalArsenal;