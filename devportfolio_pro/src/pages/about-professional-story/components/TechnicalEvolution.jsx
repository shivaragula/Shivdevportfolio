import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalEvolution = () => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [selectedYear, setSelectedYear] = useState('2024');

  const evolutionData = {
    '2021': {
      year: '2021',
      title: 'Foundation Building',
      description: 'Started B.Tech CSE journey with programming fundamentals',
      skills: [
        { name: 'C++', level: 60, category: 'Programming' },
        { name: 'Java', level: 65, category: 'Programming' },
        { name: 'HTML5', level: 75, category: 'Frontend' },
        { name: 'CSS3', level: 70, category: 'Frontend' },
        { name: 'MySQL', level: 60, category: 'Database' }
      ],
      milestones: [
        'Started B.Tech in Computer Science Engineering',
        'Learned programming fundamentals',
        'Built first web pages with HTML/CSS'
      ]
    },
    '2022': {
      year: '2022',
      title: 'Web Development Focus',
      description: 'Expanded into JavaScript and modern web development',
      skills: [
        { name: 'JavaScript', level: 80, category: 'Programming' },
        { name: 'Python', level: 75, category: 'Programming' },
        { name: 'React.js', level: 70, category: 'Frontend' },
        { name: 'HTML5', level: 85, category: 'Frontend' },
        { name: 'CSS3', level: 80, category: 'Frontend' },
        { name: 'MySQL', level: 75, category: 'Database' },
        { name: 'Git', level: 70, category: 'Tools' }
      ],
      milestones: [
        'First React.js application built',
        'Learned JavaScript ES6+ features',
        'Started using Git for version control'
      ]
    },
    '2023': {
      year: '2023',
      title: 'Full-Stack & ML Integration',
      description: 'Gained internship experience and explored machine learning',
      skills: [
        { name: 'Python', level: 90, category: 'Programming' },
        { name: 'JavaScript', level: 85, category: 'Programming' },
        { name: 'React.js', level: 85, category: 'Frontend' },
        { name: 'Node.js', level: 80, category: 'Backend' },
        { name: 'Express.js', level: 75, category: 'Backend' },
        { name: 'TensorFlow', level: 70, category: 'Machine Learning' },
        { name: 'Scikit-Learn', level: 75, category: 'Machine Learning' },
        { name: 'Pandas', level: 80, category: 'Machine Learning' },
        { name: 'NumPy', level: 75, category: 'Machine Learning' }
      ],
      milestones: [
        'Completed internship at ZIDIO',
        'Built plant disease classification model (80% accuracy)',
        'Started machine learning projects'
      ]
    },
    '2024': {
      year: '2024',
      title: 'Advanced Projects & Optimization',
      description: 'Built complex projects and achieved high accuracy ML models',
      skills: [
        { name: 'Python', level: 95, category: 'Programming' },
        { name: 'JavaScript', level: 90, category: 'Programming' },
        { name: 'React.js', level: 90, category: 'Frontend' },
        { name: 'Node.js', level: 85, category: 'Backend' },
        { name: 'Express.js', level: 85, category: 'Backend' },
        { name: 'MySQL', level: 85, category: 'Database' },
        { name: 'TensorFlow', level: 80, category: 'Machine Learning' },
        { name: 'Keras', level: 75, category: 'Machine Learning' },
        { name: 'Scikit-Learn', level: 85, category: 'Machine Learning' },
        { name: 'Git', level: 85, category: 'Tools' },
        { name: 'Linux', level: 75, category: 'Tools' },
        { name: 'VS Code', level: 90, category: 'Tools' }
      ],
      milestones: [
        'Built e-commerce platform supporting 100+ users',
        'Achieved 96% accuracy in student performance prediction',
        'Optimized API response times by 15%',
        'Completed Full Stack Development certification'
      ]
    }
  };

  const categoryColors = {
    'Programming': 'bg-blue-500',
    'Frontend': 'bg-green-500',
    'Backend': 'bg-purple-500',
    'Database': 'bg-orange-500',
    'Machine Learning': 'bg-red-500',
    'Tools': 'bg-gray-500'
  };

  const years = Object.keys(evolutionData);
  const currentData = evolutionData?.[selectedYear];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedValues = {};
      currentData?.skills?.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues(prev => ({
            ...prev,
            [skill?.name]: skill?.level
          }));
        }, index * 100);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedYear, currentData?.skills]);

  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Icon name="TrendingUp" size={16} />
            <span className="text-sm font-medium">Skill Evolution</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Technical Evolution Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Watch how my technical skills have evolved over the years, from programming fundamentals 
            to advanced full-stack and data science capabilities.
          </p>
        </div>

        {/* Year Timeline */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {years?.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-primary text-primary-foreground shadow-elevation'
                  : 'bg-card text-text-secondary hover:bg-muted hover:text-primary'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Year Information */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl shadow-elevation p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">{selectedYear}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{currentData?.title}</h3>
                  <p className="text-text-secondary">{currentData?.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-primary flex items-center">
                  <Icon name="Target" size={16} className="mr-2" />
                  Key Milestones
                </h4>
                <ul className="space-y-2">
                  {currentData?.milestones?.map((milestone, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Skill Categories */}
            <div className="bg-card rounded-xl shadow-elevation p-6">
              <h4 className="font-semibold text-primary mb-4 flex items-center">
                <Icon name="Layers" size={16} className="mr-2" />
                Skill Categories
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(categoryColors)?.map(([category, color]) => {
                  const categorySkills = currentData?.skills?.filter(skill => skill?.category === category);
                  if (categorySkills?.length === 0) return null;
                  
                  return (
                    <div key={category} className="flex items-center space-x-2">
                      <div className={`w-3 h-3 ${color} rounded-full`}></div>
                      <span className="text-sm text-text-secondary">{category}</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">
                        {categorySkills?.length}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Skills Chart */}
          <div className="bg-card rounded-xl shadow-elevation p-6">
            <h4 className="font-semibold text-primary mb-6 flex items-center">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Skill Proficiency Levels
            </h4>
            
            <div className="space-y-4">
              {currentData?.skills?.map((skill, index) => (
                <div key={skill?.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 ${categoryColors?.[skill?.category]} rounded-full`}></div>
                      <span className="text-sm font-medium text-primary">{skill?.name}</span>
                    </div>
                    <span className="text-sm text-text-secondary">
                      {animatedValues?.[skill?.name] || 0}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 ${categoryColors?.[skill?.category]} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${animatedValues?.[skill?.name] || 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Evolution Summary */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="text-center">
            <Icon name="Rocket" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">Evolution Highlights</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <p className="text-sm text-text-secondary">Years of Learning</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <p className="text-sm text-text-secondary">Technologies Mastered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">6</div>
                <p className="text-sm text-text-secondary">Skill Categories</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">85%+</div>
                <p className="text-sm text-text-secondary">Average Proficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalEvolution;