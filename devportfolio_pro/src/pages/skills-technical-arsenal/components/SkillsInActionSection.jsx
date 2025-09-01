import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsInActionSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projectImplementations = [
    {
      id: 1,
      title: "E-Commerce Analytics Dashboard",
      description: "Real-time sales analytics with predictive modeling and customer segmentation",
      technologies: ["Python", "React", "PostgreSQL", "TensorFlow", "AWS"],
      codeSnippet: `# Customer Segmentation using K-Means
import pandas as pd
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

def customer_segmentation(data):
    # Feature engineering
    features = ['purchase_frequency', 'avg_order_value', 'recency']
    X = data[features].fillna(0)
    
    # K-Means clustering
    kmeans = KMeans(n_clusters=4, random_state=42)
    data['segment'] = kmeans.fit_predict(X)
    
    return data, kmeans`,
      results: [
        "40% improvement in customer targeting accuracy",
        "25% increase in conversion rates",
        "Real-time processing of 10K+ transactions/day"
      ],
      githubUrl: "https://github.com/shivaragula/ecommerce-analytics",
      liveDemo: "https://analytics-demo.shivaportfolio.com"
    },
    {
      id: 2,
      title: "Smart Task Management System",
      description: "AI-powered task prioritization with natural language processing and team collaboration",
      technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Socket.io"],
      codeSnippet: `// AI-powered task prioritization
const prioritizeTasks = async (tasks, userContext) => {
  const prompt = \`Analyze these tasks and prioritize based on:
  - Deadline urgency
  - Business impact
  - Dependencies
  
  Tasks: \${JSON.stringify(tasks)}\`;
  
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }]
  });
  
  return JSON.parse(response.choices[0].message.content);
};`,
      results: [
        "60% reduction in task completion time",
        "90% user satisfaction rate",
        "Supports 500+ concurrent users"
      ],
      githubUrl: "https://github.com/shivaragula/smart-task-manager",
      liveDemo: "https://tasks.shivaportfolio.com"
    },
    {
      id: 3,
      title: "Weather Prediction ML Model",
      description: "Advanced weather forecasting using ensemble methods and real-time data processing",
      technologies: ["Python", "Scikit-learn", "FastAPI", "Docker", "Grafana"],
      codeSnippet: `# Ensemble Weather Prediction Model
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.linear_model import LinearRegression
import numpy as np

class WeatherEnsemble:
    def __init__(self):
        self.models = {
            'rf': RandomForestRegressor(n_estimators=100),
            'gb': GradientBoostingRegressor(n_estimators=100),
            'lr': LinearRegression()
        }
        
    def fit(self, X, y):
        for model in self.models.values():
            model.fit(X, y)
    
    def predict(self, X):
        predictions = np.array([
            model.predict(X) for model in self.models.values()
        ])
        return np.mean(predictions, axis=0)`,
      results: [
        "85% accuracy in 7-day forecasts",
        "Processing 1M+ data points daily",
        "API serving 1000+ requests/minute"
      ],
      githubUrl: "https://github.com/shivaragula/weather-ml-model",
      liveDemo: "https://weather-api.shivaportfolio.com"
    }
  ];

  const currentProject = projectImplementations?.[activeProject];

  return (
    <div className="bg-card rounded-xl shadow-elevation p-6 border border-border">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-4 shadow-elevation">
          <Icon name="Code2" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Skills in Action</h3>
          <p className="text-sm text-text-secondary">Real implementations and code samples</p>
        </div>
      </div>
      {/* Project Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {projectImplementations?.map((project, index) => (
          <button
            key={project?.id}
            onClick={() => setActiveProject(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeProject === index
                ? 'bg-accent text-white shadow-elevation'
                : 'bg-muted text-text-secondary hover:bg-surface hover:text-text-primary'
            }`}
          >
            {project?.title}
          </button>
        ))}
      </div>
      {/* Project Details */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column - Project Info */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-text-primary mb-2">{currentProject?.title}</h4>
            <p className="text-text-secondary mb-4">{currentProject?.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {currentProject?.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Target" size={16} className="mr-2 text-success" />
              Key Results
            </h5>
            <ul className="space-y-2">
              {currentProject?.results?.map((result, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              iconName="Github"
              iconPosition="left"
              onClick={() => window.open(currentProject?.githubUrl, '_blank')}
            >
              View Code
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="ExternalLink"
              iconPosition="left"
              onClick={() => window.open(currentProject?.liveDemo, '_blank')}
            >
              Live Demo
            </Button>
          </div>
        </div>

        {/* Right Column - Code Sample */}
        <div>
          <div className="bg-surface rounded-lg border border-border overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-text-secondary">implementation.py</span>
              </div>
              <Icon name="Copy" size={16} className="text-text-secondary hover:text-text-primary cursor-pointer" />
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-text-primary whitespace-pre-wrap">
                <code>{currentProject?.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsInActionSection;