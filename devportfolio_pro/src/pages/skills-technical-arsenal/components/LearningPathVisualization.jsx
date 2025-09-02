import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningPathVisualization = () => {
  const learningPath = [
    {
      phase: "Programming Basics",
      period: "2021-2022",
      skills: ["C++", "Java", "Basic Programming"],
      status: "completed",
      icon: "BookOpen"
    },
    {
      phase: "Web Fundamentals",
      period: "2023",
      skills: ["HTML5", "CSS3", "JavaScript", "Basic React"],
      status: "completed",
      icon: "Globe"
    },
    {
      phase: "Full-Stack Learning",
      period: "2023-2024",
      skills: ["React", "Node.js", "MySQL", "Git"],
      status: "completed",
      icon: "Code"
    },
    {
      phase: "Data Science Basics",
      period: "2024",
      skills: ["Python", "Pandas", "Scikit-learn", "Basic ML"],
      status: "completed",
      icon: "BarChart3"
    },
    {
      phase: "Professional Growth",
      period: "2025+",
      skills: ["TypeScript", "Advanced React", "Cloud Basics", "Best Practices"],
      status: "planned",
      icon: "Target"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-success';
      case 'in-progress': return 'bg-accent';
      case 'planned': return 'bg-muted';
      default: return 'bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return 'CheckCircle';
      case 'in-progress': return 'Clock';
      case 'planned': return 'Target';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-elevation p-6 border border-border">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 shadow-elevation">
          <Icon name="TrendingUp" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Learning Path Visualization</h3>
          <p className="text-sm text-text-secondary">Skill progression and future roadmap</p>
        </div>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-8">
          {learningPath?.map((phase, index) => (
            <div key={phase?.phase} className="relative flex items-start">
              {/* Timeline Node */}
              <div className={`relative z-10 w-12 h-12 ${getStatusColor(phase?.status)} rounded-full flex items-center justify-center shadow-elevation`}>
                <Icon name={getStatusIcon(phase?.status)} size={20} className="text-white" />
              </div>

              {/* Content */}
              <div className="ml-6 flex-1">
                <div className="bg-surface rounded-lg p-4 border border-border hover:shadow-elevation transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Icon name={phase?.icon} size={20} className="text-accent" />
                      <h4 className="font-bold text-text-primary">{phase?.phase}</h4>
                    </div>
                    <span className="text-sm font-medium text-text-secondary bg-muted px-3 py-1 rounded-full">
                      {phase?.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {phase?.skills?.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                          phase?.status === 'completed' 
                            ? 'bg-success/10 text-success border border-success/20' 
                            : phase?.status === 'in-progress' ?'bg-accent/10 text-accent border border-accent/20' :'bg-muted text-text-secondary border border-border'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {phase?.status === 'in-progress' && (
                    <div className="mt-3 flex items-center space-x-2 text-accent">
                      <Icon name="Zap" size={16} />
                      <span className="text-sm font-medium">Currently Learning</span>
                    </div>
                  )}

                  {phase?.status === 'planned' && (
                    <div className="mt-3 flex items-center space-x-2 text-text-secondary">
                      <Icon name="Calendar" size={16} />
                      <span className="text-sm font-medium">Planned for Future</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Progress Summary */}
      <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">3</div>
              <div className="text-xs text-text-secondary">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">1</div>
              <div className="text-xs text-text-secondary">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-text-secondary">1</div>
              <div className="text-xs text-text-secondary">Planned</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-text-primary">Overall Progress</div>
            <div className="text-2xl font-bold text-gradient">75%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathVisualization;