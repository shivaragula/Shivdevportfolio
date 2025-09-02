import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsInActionSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projectImplementations = [
    {
      id: 1,
      title: "Student Performance Prediction",
      description: "Academic machine learning project to predict student outcomes using basic algorithms",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
      codeSnippet: `# Basic Student Performance Prediction
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import accuracy_score

def predict_performance(data):
    # Basic feature selection
    features = ['study_hours', 'attendance', 'previous_grade']
    X = data[features]
    y = data['final_grade']
    
    # Train-test split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    
    # Simple linear regression
    model = LinearRegression()
    model.fit(X_train, y_train)
    
    return model`,
      results: [
        "78% prediction accuracy achieved",
        "Analyzed 500 student records",
        "Identified key performance factors"
      ],
      githubUrl: "https://github.com/shivaragula/student-performance-prediction",
      liveDemo: "https://github.com/shivaragula/student-performance-prediction"
    },
    {
      id: 2,
      title: "Basic E-Commerce Website",
      description: "Simple full-stack e-commerce platform with user authentication and product management",
      technologies: ["React", "Node.js", "Express", "MySQL", "JWT"],
      codeSnippet: `// Basic user authentication
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  // Find user in database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Check password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Generate JWT token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.json({ token, user: { id: user.id, email: user.email } });
};`,
      results: [
        "Basic user authentication implemented",
        "20 sample products in catalog",
        "Local development environment setup"
      ],
      githubUrl: "https://github.com/shivaragula/ecommerce-platform",
      liveDemo: "https://github.com/shivaragula/ecommerce-platform"
    },
    {
      id: 3,
      title: "Plant Disease Classification",
      description: "Basic computer vision project to identify plant diseases from leaf images",
      technologies: ["Python", "TensorFlow", "Keras", "Flask", "OpenCV"],
      codeSnippet: `# Basic CNN for Plant Disease Classification
import tensorflow as tf
from tensorflow.keras import layers, models

def create_simple_cnn():
    model = models.Sequential([
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=(150, 150, 3)),
        layers.MaxPooling2D(2, 2),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D(2, 2),
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.MaxPooling2D(2, 2),
        layers.Flatten(),
        layers.Dense(512, activation='relu'),
        layers.Dense(5, activation='softmax')  # 5 disease classes
    ])
    
    model.compile(optimizer='adam',
                  loss='categorical_crossentropy',
                  metrics=['accuracy'])
    return model`,
      results: [
        "72% classification accuracy achieved",
        "Trained on 1000 leaf images",
        "5 different disease types detected"
      ],
      githubUrl: "https://github.com/shivaragula/plant-disease-classification",
      liveDemo: "https://github.com/shivaragula/plant-disease-classification"
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
          <p className="text-sm text-text-secondary">Academic projects and learning implementations</p>
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