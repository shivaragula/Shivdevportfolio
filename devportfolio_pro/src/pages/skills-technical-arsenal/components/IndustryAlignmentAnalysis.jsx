import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const IndustryAlignmentAnalysis = () => {
  const [activeView, setActiveView] = useState('market');

  const marketDemandData = [
    { skill: 'React', myLevel: 90, marketDemand: 95, growth: 15 },
    { skill: 'Python', myLevel: 85, marketDemand: 92, growth: 20 },
    { skill: 'AWS', myLevel: 75, marketDemand: 88, growth: 25 },
    { skill: 'Node.js', myLevel: 80, marketDemand: 85, growth: 12 },
    { skill: 'Machine Learning', myLevel: 70, marketDemand: 90, growth: 30 },
    { skill: 'TypeScript', myLevel: 85, marketDemand: 82, growth: 18 },
    { skill: 'Docker', myLevel: 65, marketDemand: 78, growth: 22 },
    { skill: 'MongoDB', myLevel: 75, marketDemand: 75, growth: 10 }
  ];

  const skillGapAnalysis = [
    { category: 'Frontend Development', myScore: 90, industryAvg: 75, maxScore: 100 },
    { category: 'Backend Development', myScore: 85, industryAvg: 80, maxScore: 100 },
    { category: 'Data Science', myScore: 75, industryAvg: 70, maxScore: 100 },
    { category: 'Cloud Computing', myScore: 70, industryAvg: 65, maxScore: 100 },
    { category: 'DevOps', myScore: 65, industryAvg: 60, maxScore: 100 },
    { category: 'Mobile Development', myScore: 45, industryAvg: 55, maxScore: 100 }
  ];

  const emergingTechnologies = [
    {
      name: "Artificial Intelligence",
      currentLevel: "Intermediate",
      marketGrowth: "+35%",
      priority: "High",
      timeToLearn: "6-8 months",
      jobOpportunities: "15,000+",
      icon: "Brain",
      color: "bg-purple-600"
    },
    {
      name: "Kubernetes",
      currentLevel: "Beginner",
      marketGrowth: "+28%",
      priority: "High",
      timeToLearn: "4-6 months",
      jobOpportunities: "12,000+",
      icon: "Settings",
      color: "bg-blue-600"
    },
    {
      name: "GraphQL",
      currentLevel: "Intermediate",
      marketGrowth: "+22%",
      priority: "Medium",
      timeToLearn: "2-3 months",
      jobOpportunities: "8,000+",
      icon: "Database",
      color: "bg-pink-600"
    },
    {
      name: "Rust",
      currentLevel: "Beginner",
      marketGrowth: "+40%",
      priority: "Medium",
      timeToLearn: "8-10 months",
      jobOpportunities: "5,000+",
      icon: "Code",
      color: "bg-orange-600"
    }
  ];

  const industryTrends = [
    {
      trend: "AI/ML Integration",
      impact: "High",
      relevance: 95,
      description: "Growing demand for AI-powered applications and machine learning integration",
      myPreparation: 75,
      recommendations: ["Complete TensorFlow certification", "Build more ML projects", "Learn MLOps practices"]
    },
    {
      trend: "Cloud-Native Development",
      impact: "High",
      relevance: 90,
      description: "Shift towards microservices, containers, and serverless architectures",
      myPreparation: 70,
      recommendations: ["Master Kubernetes", "Learn serverless patterns", "Practice infrastructure as code"]
    },
    {
      trend: "Full-Stack TypeScript",
      impact: "Medium",
      relevance: 85,
      description: "TypeScript adoption across both frontend and backend development",
      myPreparation: 85,
      recommendations: ["Explore advanced TypeScript patterns", "Learn type-safe API development"]
    },
    {
      trend: "Edge Computing",
      impact: "Medium",
      relevance: 75,
      description: "Processing data closer to users for better performance",
      myPreparation: 40,
      recommendations: ["Learn edge deployment strategies", "Explore CDN technologies", "Study edge computing frameworks"]
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-error text-white';
      case 'Medium': return 'bg-warning text-white';
      case 'Low': return 'bg-success text-white';
      default: return 'bg-muted text-text-secondary';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-error';
      case 'Medium': return 'text-warning';
      case 'Low': return 'text-success';
      default: return 'text-text-secondary';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-elevation p-6 border border-border">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-4 shadow-elevation">
          <Icon name="TrendingUp" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Industry Alignment Analysis</h3>
          <p className="text-sm text-text-secondary">Skills alignment with market demands and emerging trends</p>
        </div>
      </div>
      {/* View Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { key: 'market', label: 'Market Demand', icon: 'BarChart3' },
          { key: 'gaps', label: 'Skill Gaps', icon: 'Target' },
          { key: 'emerging', label: 'Emerging Tech', icon: 'Zap' },
          { key: 'trends', label: 'Industry Trends', icon: 'TrendingUp' }
        ]?.map((view) => (
          <button
            key={view?.key}
            onClick={() => setActiveView(view?.key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeView === view?.key
                ? 'bg-primary text-white shadow-elevation'
                : 'bg-surface text-text-secondary hover:bg-muted hover:text-text-primary'
            }`}
          >
            <Icon name={view?.icon} size={16} />
            <span>{view?.label}</span>
          </button>
        ))}
      </div>
      {/* Market Demand View */}
      {activeView === 'market' && (
        <div className="space-y-6">
          <div className="h-80">
            <h4 className="font-semibold text-text-primary mb-4">Skills vs Market Demand</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketDemandData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="skill" stroke="var(--color-text-secondary)" fontSize={12} />
                <YAxis stroke="var(--color-text-secondary)" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--color-popover)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="myLevel" fill="var(--color-primary)" name="My Level" radius={[2, 2, 0, 0]} />
                <Bar dataKey="marketDemand" fill="var(--color-accent)" name="Market Demand" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketDemandData?.slice(0, 4)?.map((skill, index) => (
              <div key={index} className="p-4 bg-surface rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-text-primary">{skill?.skill}</h5>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    skill?.growth > 20 ? 'bg-success/10 text-success' : 
                    skill?.growth > 15 ? 'bg-warning/10 text-warning' : 'bg-muted text-text-secondary'
                  }`}>
                    +{skill?.growth}%
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">My Level</span>
                    <span className="font-medium text-primary">{skill?.myLevel}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Market Demand</span>
                    <span className="font-medium text-accent">{skill?.marketDemand}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Skill Gaps View */}
      {activeView === 'gaps' && (
        <div className="space-y-6">
          <div className="h-80">
            <h4 className="font-semibold text-text-primary mb-4">Skill Gap Analysis</h4>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillGapAnalysis}>
                <PolarGrid stroke="var(--color-border)" />
                <PolarAngleAxis dataKey="category" tick={{ fontSize: 12, fill: 'var(--color-text-secondary)' }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: 'var(--color-text-muted)' }} />
                <Radar name="My Score" dataKey="myScore" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.3} />
                <Radar name="Industry Average" dataKey="industryAvg" stroke="var(--color-accent)" fill="var(--color-accent)" fillOpacity={0.1} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--color-popover)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGapAnalysis?.map((category, index) => {
              const gap = category?.myScore - category?.industryAvg;
              return (
                <div key={index} className="p-4 bg-surface rounded-lg border border-border">
                  <h5 className="font-semibold text-text-primary mb-3">{category?.category}</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary">My Score</span>
                      <span className="font-bold text-primary">{category?.myScore}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary">Industry Avg</span>
                      <span className="font-medium text-text-secondary">{category?.industryAvg}%</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-border">
                      <span className="text-sm font-medium">Gap</span>
                      <span className={`font-bold ${gap > 0 ? 'text-success' : 'text-error'}`}>
                        {gap > 0 ? '+' : ''}{gap}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* Emerging Technologies View */}
      {activeView === 'emerging' && (
        <div className="grid md:grid-cols-2 gap-6">
          {emergingTechnologies?.map((tech, index) => (
            <div key={index} className="p-6 bg-surface rounded-lg border border-border hover:shadow-elevation transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${tech?.color} rounded-lg flex items-center justify-center shadow-elevation`}>
                    <Icon name={tech?.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">{tech?.name}</h4>
                    <p className="text-sm text-text-secondary">Current: {tech?.currentLevel}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(tech?.priority)}`}>
                  {tech?.priority} Priority
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-card rounded-lg border border-border">
                  <div className="text-lg font-bold text-success">{tech?.marketGrowth}</div>
                  <div className="text-xs text-text-secondary">Growth Rate</div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg border border-border">
                  <div className="text-lg font-bold text-accent">{tech?.jobOpportunities}</div>
                  <div className="text-xs text-text-secondary">Job Openings</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-text-muted" />
                  <span className="text-sm text-text-secondary">{tech?.timeToLearn}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Briefcase" size={14} className="text-text-muted" />
                  <span className="text-sm text-text-secondary">High Demand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Industry Trends View */}
      {activeView === 'trends' && (
        <div className="space-y-6">
          {industryTrends?.map((trend, index) => (
            <div key={index} className="p-6 bg-surface rounded-lg border border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-bold text-text-primary">{trend?.trend}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(trend?.impact)}`}>
                      {trend?.impact} Impact
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{trend?.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">{trend?.relevance}%</div>
                  <div className="text-xs text-text-secondary">Relevance</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-text-primary mb-2">My Preparation Level</h5>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex-1 bg-muted rounded-full h-3">
                      <div 
                        className="h-3 bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${trend?.myPreparation}%` }}
                      ></div>
                    </div>
                    <span className="font-bold text-primary">{trend?.myPreparation}%</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-text-primary mb-2">Recommended Actions</h5>
                  <ul className="space-y-1">
                    {trend?.recommendations?.map((rec, recIndex) => (
                      <li key={recIndex} className="flex items-start space-x-2">
                        <Icon name="ArrowRight" size={12} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndustryAlignmentAnalysis;