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
          proficiency: "Advanced",
          experience: "3+ years",
          projects: ["Student Performance Prediction", "Plant Disease Classification", "Data Analysis"],
          timeline: "Started in 2022, focused on machine learning and data science",
          nextGoal: "Master advanced ML algorithms and deep learning frameworks",
          certified: true
        },
        {
          name: "JavaScript",
          proficiency: "Advanced",
          experience: "2+ years",
          projects: ["E-commerce Platform", "React Components", "Full-Stack Applications"],
          timeline: "Began in 2022, mastered ES6+ features and modern frameworks",
          nextGoal: "Explore advanced performance optimization and TypeScript",
          certified: false
        },
        {
          name: "Java",
          proficiency: "Intermediate",
          experience: "2+ years",
          projects: ["University Projects", "Object-Oriented Programming", "Data Structures"],
          timeline: "University foundation course, focus on OOP concepts",
          nextGoal: "Learn Spring Boot and enterprise Java development",
          certified: false
        },
        {
          name: "C++",
          proficiency: "Intermediate",
          experience: "2+ years",
          projects: ["Data Structures", "Algorithms", "Competitive Programming"],
          timeline: "University foundation, focus on algorithmic problem solving",
          nextGoal: "Master advanced algorithms and system programming",
          certified: false
        },
        {
          name: "SQL",
          proficiency: "Advanced",
          experience: "2+ years",
          projects: ["Database Design", "E-commerce Platform", "Data Management"],
          timeline: "Learned for database management and data analysis",
          nextGoal: "Master advanced query optimization and database administration",
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
          proficiency: "Advanced",
          experience: "2+ years",
          projects: ["E-commerce Platform", "Component Library", "Portfolio Website"],
          timeline: "Started in 2023, mastered hooks, context, and modern patterns",
          nextGoal: "Master React 18 concurrent features and advanced optimization",
          certified: false
        },
        {
          name: "Node.js",
          proficiency: "Advanced",
          experience: "1+ year",
          projects: ["REST APIs", "E-commerce Backend", "Authentication System"],
          timeline: "Backend development during internship and projects",
          nextGoal: "Learn advanced clustering and microservices architecture",
          certified: false
        },
        {
          name: "Express.js",
          proficiency: "Advanced",
          experience: "1+ year",
          projects: ["API Development", "E-commerce Backend", "RESTful Services"],
          timeline: "Primary backend framework for API development",
          nextGoal: "Explore GraphQL and advanced middleware patterns",
          certified: false
        },
        {
          name: "HTML5",
          proficiency: "Advanced",
          experience: "3+ years",
          projects: ["All Web Projects", "Responsive Design", "Semantic Markup"],
          timeline: "Foundation skill for all web development projects",
          nextGoal: "Master advanced HTML5 APIs and web components",
          certified: false
        },
        {
          name: "CSS3",
          proficiency: "Advanced",
          experience: "3+ years",
          projects: ["Responsive Design", "UI Components", "Modern Layouts"],
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
          proficiency: "Advanced",
          experience: "1+ year",
          projects: ["Plant Disease Classification", "CNN Models", "Deep Learning"],
          timeline: "Used for building neural networks achieving 90% accuracy",
          nextGoal: "Master advanced architectures and model deployment",
          certified: false
        },
        {
          name: "Keras",
          proficiency: "Advanced",
          experience: "1+ year",
          projects: ["Neural Network Models", "Image Classification", "Model Training"],
          timeline: "High-level API for building and training deep learning models",
          nextGoal: "Explore advanced model architectures and optimization",
          certified: false
        },
        {
          name: "Scikit-Learn",
          proficiency: "Advanced",
          experience: "1+ year",
          projects: ["Student Performance Prediction", "Classification Models", "Data Analysis"],
          timeline: "Primary ML library achieving 96% accuracy in prediction models",
          nextGoal: "Master ensemble methods and advanced feature engineering",
          certified: false
        },
        {
          name: "Pandas",
          proficiency: "Advanced",
          experience: "1+ year",
          projects: ["Data Preprocessing", "Feature Engineering", "Data Analysis"],
          timeline: "Core tool for data manipulation in ML projects",
          nextGoal: "Master advanced data manipulation and optimization techniques",
          certified: false
        },
        {
          name: "NumPy",
          proficiency: "Advanced",
          experience: "1+ year",
          projects: ["Mathematical Computing", "Array Operations", "Scientific Computing"],
          timeline: "Foundation for numerical computing in ML projects",
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
          proficiency: "Advanced",
          experience: "2+ years",
          projects: ["E-commerce Platform", "Database Design", "Data Management"],
          timeline: "Primary relational database for web applications",
          nextGoal: "Master advanced query optimization and database administration",
          certified: false
        },
        {
          name: "Git",
          proficiency: "Advanced",
          experience: "2+ years",
          projects: ["All Projects", "Version Control", "Team Collaboration"],
          timeline: "Version control for all development work",
          nextGoal: "Master advanced Git workflows and branching strategies",
          certified: false
        },
        {
          name: "GitHub",
          proficiency: "Advanced",
          experience: "2+ years",
          projects: ["Code Repository", "Project Management", "Collaboration"],
          timeline: "Primary platform for code hosting and collaboration",
          nextGoal: "Master GitHub Actions and advanced collaboration features",
          certified: false
        },
        {
          name: "Linux",
          proficiency: "Intermediate",
          experience: "1+ year",
          projects: ["Development Environment", "Server Management", "Command Line"],
          timeline: "Operating system for development and deployment",
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
          proficiency: "Advanced",
          experience: "3+ years",
          projects: ["All Development Work", "Extensions", "Custom Configurations"],
          timeline: "Primary IDE for all development activities",
          nextGoal: "Master advanced debugging and productivity extensions",
          certified: false
        },
        {
          name: "Jupyter Notebook",
          proficiency: "Advanced",
          experience: "1+ year",
          projects: ["Data Analysis", "ML Model Development", "Research"],
          timeline: "Primary tool for data science and machine learning work",
          nextGoal: "Master advanced notebook features and JupyterLab",
          certified: false
        },
        {
          name: "Agile Methodology",
          proficiency: "Intermediate",
          experience: "3 months",
          projects: ["ZIDIO Internship", "Team Collaboration", "Sprint Planning"],
          timeline: "Learned during internship with hands-on experience",
          nextGoal: "Master Scrum framework and project management",
          certified: false
        },
        {
          name: "CI/CD",
          proficiency: "Beginner",
          experience: "6 months",
          projects: ["Deployment Automation", "Code Integration", "Testing"],
          timeline: "Basic understanding of continuous integration practices",
          nextGoal: "Master GitHub Actions and advanced deployment strategies",
          certified: false
        },
        {
          name: "Code Review",
          proficiency: "Intermediate",
          experience: "3 months",
          projects: ["Team Projects", "Quality Assurance", "Best Practices"],
          timeline: "Participated in code reviews during internship",
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
              Technical <span className="text-gradient">Arsenal</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              A comprehensive showcase of my technical competencies, certifications, and continuous learning journey. 
              Explore my skills through interactive visualizations, real project implementations, and industry alignment analysis.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="p-4 bg-card rounded-lg shadow-elevation border border-border">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-text-secondary">Technologies</div>
              </div>
              <div className="p-4 bg-card rounded-lg shadow-elevation border border-border">
                <div className="text-2xl font-bold text-success">3</div>
                <div className="text-sm text-text-secondary">Certifications</div>
              </div>
              <div className="p-4 bg-card rounded-lg shadow-elevation border border-border">
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-sm text-text-secondary">Years Learning</div>
              </div>
              <div className="p-4 bg-card rounded-lg shadow-elevation border border-border">
                <div className="text-2xl font-bold text-warning">5+</div>
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
            <h2 className="text-3xl font-bold text-text-primary mb-4">Technical Competency Matrix</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Interactive skill categories with proficiency levels, project applications, and learning timelines
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
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Collaborate?</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss how my technical skills can contribute to your next project. I'm always excited to tackle new challenges and learn emerging technologies.
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