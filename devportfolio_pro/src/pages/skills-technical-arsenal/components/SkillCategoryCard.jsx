import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillCategoryCard = ({ category, skills, icon, color, delay = 0 }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getProficiencyColor = (level) => {
    // All skills show as intermediate level (70%)
    return 'bg-accent';
  };

  const getProficiencyWidth = (level) => {
    // All skills show 70% proficiency
    return 'w-[70%]';
  };

  return (
    <div 
      className="bg-card rounded-xl shadow-elevation hover:shadow-elevation-lg transition-all duration-500 p-6 animate-fade-in border border-border"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mr-4 shadow-elevation`}>
          <Icon name={icon} size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">{category}</h3>
          <p className="text-sm text-text-secondary">{skills?.length} technologies</p>
        </div>
      </div>
      <div className="space-y-4">
        {skills?.map((skill, index) => (
          <div
            key={skill?.name}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredSkill(skill?.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-text-primary">
                    {skill?.name?.substring(0, 2)?.toUpperCase()}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                    {skill?.name}
                  </h4>
                  <p className="text-xs text-text-secondary">{skill?.experience}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill?.proficiency)} text-white`}>
                  70%
                </span>
                {skill?.certified && (
                  <Icon name="Award" size={16} className="text-success" />
                )}
              </div>
            </div>

            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div 
                className={`h-2 ${getProficiencyColor(skill?.proficiency)} rounded-full transition-all duration-500 ${getProficiencyWidth(skill?.proficiency)}`}
              ></div>
            </div>

            {hoveredSkill === skill?.name && (
              <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-popover border border-border rounded-lg shadow-elevation-lg z-10 animate-slide-up">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-text-primary mb-1">Recent Projects</h5>
                    <div className="flex flex-wrap gap-1">
                      {skill?.projects?.map((project, idx) => (
                        <span key={idx} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-text-primary mb-1">Learning Timeline</h5>
                    <p className="text-sm text-text-secondary">{skill?.timeline}</p>
                  </div>
                  {skill?.nextGoal && (
                    <div>
                      <h5 className="font-semibold text-text-primary mb-1">Next Goal</h5>
                      <p className="text-sm text-text-secondary">{skill?.nextGoal}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategoryCard;