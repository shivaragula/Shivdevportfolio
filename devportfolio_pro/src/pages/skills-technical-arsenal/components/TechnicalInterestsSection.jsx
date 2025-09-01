import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalInterestsSection = () => {
  const [activeInterest, setActiveInterest] = useState(0);

  const technicalInterests = [
    {
      id: 1,
      title: "Artificial Intelligence & Machine Learning",
      description: "Passionate about developing intelligent systems that can learn and adapt",
      icon: "Brain",
      color: "bg-purple-600",
      specializations: [
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "MLOps & Model Deployment"
      ],
      currentProjects: [
        "Building a conversational AI chatbot for customer service",
        "Developing image classification models for medical diagnosis",
        "Implementing recommendation systems for e-commerce"
      ],
      futureGoals: [
        "Contribute to open-source AI frameworks",
        "Research in explainable AI",
        "Build AI-powered developer tools"
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenAI API"]
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      description: "Creating seamless user experiences with modern web technologies",
      icon: "Globe",
      color: "bg-blue-600",
      specializations: [
        "React Ecosystem",
        "Node.js Backend Development",
        "Progressive Web Apps",
        "Microservices Architecture"
      ],
      currentProjects: [
        "Building a real-time collaboration platform",
        "Developing a serverless e-commerce solution",
        "Creating component libraries for design systems"
      ],
      futureGoals: [
        "Master Next.js 14 and React Server Components",
        "Explore WebAssembly for performance optimization",
        "Build developer tools and CLI applications"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL"]
    },
    {
      id: 3,
      title: "Cloud Computing & DevOps",
      description: "Scaling applications and optimizing infrastructure for modern workloads",
      icon: "Cloud",
      color: "bg-orange-600",
      specializations: [
        "AWS Cloud Architecture",
        "Container Orchestration",
        "CI/CD Pipeline Design",
        "Infrastructure as Code"
      ],
      currentProjects: [
        "Implementing multi-region AWS deployments",
        "Building automated testing and deployment pipelines",
        "Optimizing cloud costs and performance monitoring"
      ],
      futureGoals: [
        "Achieve AWS Solutions Architect Professional certification",
        "Master Kubernetes and service mesh technologies",
        "Contribute to cloud-native open source projects"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"]
    },
    {
      id: 4,
      title: "Data Engineering & Analytics",
      description: "Building robust data pipelines and extracting insights from complex datasets",
      icon: "Database",
      color: "bg-green-600",
      specializations: [
        "Data Pipeline Architecture",
        "Real-time Stream Processing",
        "Data Warehouse Design",
        "Business Intelligence"
      ],
      currentProjects: [
        "Building ETL pipelines for financial data processing",
        "Implementing real-time analytics dashboards",
        "Designing data lakes for multi-source integration"
      ],
      futureGoals: [
        "Master Apache Kafka and stream processing",
        "Explore modern data stack tools (dbt, Airflow)",
        "Build data products for business intelligence"
      ],
      technologies: ["Python", "SQL", "Apache Spark", "Airflow", "Snowflake"]
    }
  ];

  const currentInterest = technicalInterests?.[activeInterest];

  return (
    <div className="bg-card rounded-xl shadow-elevation p-6 border border-border">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 shadow-elevation">
          <Icon name="Heart" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Technical Interests & Specializations</h3>
          <p className="text-sm text-text-secondary">Areas of passion and continuous exploration</p>
        </div>
      </div>
      {/* Interest Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {technicalInterests?.map((interest, index) => (
          <button
            key={interest?.id}
            onClick={() => setActiveInterest(index)}
            className={`p-4 rounded-lg text-left transition-all duration-300 border ${
              activeInterest === index
                ? 'bg-primary text-white shadow-elevation border-primary'
                : 'bg-surface text-text-secondary hover:bg-muted hover:text-text-primary border-border'
            }`}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className={`w-8 h-8 ${activeInterest === index ? 'bg-white/20' : interest?.color} rounded-lg flex items-center justify-center`}>
                <Icon 
                  name={interest?.icon} 
                  size={16} 
                  className={activeInterest === index ? 'text-white' : 'text-white'} 
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm truncate">{interest?.title}</h4>
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* Active Interest Details */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 ${currentInterest?.color} rounded-lg flex items-center justify-center shadow-elevation`}>
                <Icon name={currentInterest?.icon} size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-primary">{currentInterest?.title}</h4>
                <p className="text-sm text-text-secondary">{currentInterest?.description}</p>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Target" size={16} className="mr-2 text-accent" />
              Specialization Areas
            </h5>
            <div className="space-y-2">
              {currentInterest?.specializations?.map((spec, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Code" size={16} className="mr-2 text-primary" />
              Core Technologies
            </h5>
            <div className="flex flex-wrap gap-2">
              {currentInterest?.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <h5 className="font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Zap" size={16} className="mr-2 text-warning" />
              Current Projects
            </h5>
            <div className="space-y-3">
              {currentInterest?.currentProjects?.map((project, index) => (
                <div key={index} className="p-3 bg-surface rounded-lg border border-border">
                  <div className="flex items-start space-x-2">
                    <Icon name="Play" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{project}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Rocket" size={16} className="mr-2 text-success" />
              Future Goals
            </h5>
            <div className="space-y-3">
              {currentInterest?.futureGoals?.map((goal, index) => (
                <div key={index} className="p-3 bg-gradient-to-r from-success/5 to-accent/5 rounded-lg border border-success/10">
                  <div className="flex items-start space-x-2">
                    <Icon name="ArrowRight" size={14} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{goal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Passion Metrics */}
      <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-primary">4</div>
            <div className="text-xs text-text-secondary">Core Interests</div>
          </div>
          <div>
            <div className="text-xl font-bold text-accent">12</div>
            <div className="text-xs text-text-secondary">Active Projects</div>
          </div>
          <div>
            <div className="text-xl font-bold text-success">16</div>
            <div className="text-xs text-text-secondary">Future Goals</div>
          </div>
          <div>
            <div className="text-xl font-bold text-warning">20+</div>
            <div className="text-xs text-text-secondary">Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalInterestsSection;