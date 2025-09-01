import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GitHubIntegration = () => {
  const [activeTab, setActiveTab] = useState('activity');

  // Mock GitHub data - in real implementation, this would come from GitHub API
  const githubStats = {
    username: "shiva-kumar-dev",
    totalRepos: 42,
    totalCommits: 1247,
    totalStars: 156,
    totalForks: 23,
    contributionStreak: 47,
    languageStats: [
      { name: "JavaScript", percentage: 35, color: "bg-yellow-500" },
      { name: "Python", percentage: 28, color: "bg-blue-500" },
      { name: "TypeScript", percentage: 18, color: "bg-blue-600" },
      { name: "Java", percentage: 12, color: "bg-orange-600" },
      { name: "Other", percentage: 7, color: "bg-gray-500" }
    ]
  };

  const recentActivity = [
    {
      id: 1,
      type: "push",
      repo: "ecommerce-analytics-dashboard",
      message: "Add real-time customer segmentation feature",
      timestamp: "2 hours ago",
      commits: 3
    },
    {
      id: 2,
      type: "create",
      repo: "ml-weather-prediction",
      message: "Created new repository for weather ML model",
      timestamp: "1 day ago",
      commits: 1
    },
    {
      id: 3,
      type: "push",
      repo: "smart-task-manager",
      message: "Implement AI-powered task prioritization",
      timestamp: "2 days ago",
      commits: 5
    },
    {
      id: 4,
      type: "pull_request",
      repo: "react-component-library",
      message: "Add new Button component with variants",
      timestamp: "3 days ago",
      commits: 2
    },
    {
      id: 5,
      type: "push",
      repo: "portfolio-website",
      message: "Update skills section with new certifications",
      timestamp: "4 days ago",
      commits: 1
    }
  ];

  const pinnedRepos = [
    {
      id: 1,
      name: "ecommerce-analytics-dashboard",
      description: "Real-time e-commerce analytics with ML-powered customer insights and predictive modeling",
      language: "Python",
      stars: 45,
      forks: 12,
      lastUpdate: "2 hours ago",
      topics: ["machine-learning", "analytics", "react", "python", "aws"]
    },
    {
      id: 2,
      name: "smart-task-manager",
      description: "AI-powered task management system with natural language processing and team collaboration",
      language: "JavaScript",
      stars: 32,
      forks: 8,
      lastUpdate: "2 days ago",
      topics: ["ai", "nlp", "react", "nodejs", "mongodb"]
    },
    {
      id: 3,
      name: "ml-weather-prediction",
      description: "Advanced weather forecasting using ensemble methods and real-time data processing",
      language: "Python",
      stars: 28,
      forks: 6,
      lastUpdate: "1 day ago",
      topics: ["machine-learning", "weather", "api", "docker", "fastapi"]
    },
    {
      id: 4,
      name: "react-component-library",
      description: "Modern React component library with TypeScript, Storybook, and comprehensive testing",
      language: "TypeScript",
      stars: 51,
      forks: 15,
      lastUpdate: "3 days ago",
      topics: ["react", "typescript", "storybook", "components", "ui"]
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'push': return 'GitCommit';
      case 'create': return 'Plus';
      case 'pull_request': return 'GitPullRequest';
      case 'fork': return 'GitFork';
      default: return 'Activity';
    }
  };

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': 'bg-yellow-500',
      'Python': 'bg-blue-500',
      'TypeScript': 'bg-blue-600',
      'Java': 'bg-orange-600',
      'HTML': 'bg-orange-500',
      'CSS': 'bg-blue-400'
    };
    return colors?.[language] || 'bg-gray-500';
  };

  return (
    <div className="bg-card rounded-xl shadow-elevation p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mr-4 shadow-elevation">
            <Icon name="Github" size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-primary">GitHub Integration</h3>
            <p className="text-sm text-text-secondary">Live repository data and contribution activity</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="ExternalLink"
          iconPosition="right"
          onClick={() => window.open(`https://github.com/${githubStats?.username}`, '_blank')}
        >
          View Profile
        </Button>
      </div>
      {/* GitHub Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="text-center p-3 bg-surface rounded-lg border border-border">
          <div className="text-xl font-bold text-primary">{githubStats?.totalRepos}</div>
          <div className="text-xs text-text-secondary">Repositories</div>
        </div>
        <div className="text-center p-3 bg-surface rounded-lg border border-border">
          <div className="text-xl font-bold text-success">{githubStats?.totalCommits}</div>
          <div className="text-xs text-text-secondary">Commits</div>
        </div>
        <div className="text-center p-3 bg-surface rounded-lg border border-border">
          <div className="text-xl font-bold text-warning">{githubStats?.totalStars}</div>
          <div className="text-xs text-text-secondary">Stars</div>
        </div>
        <div className="text-center p-3 bg-surface rounded-lg border border-border">
          <div className="text-xl font-bold text-accent">{githubStats?.totalForks}</div>
          <div className="text-xs text-text-secondary">Forks</div>
        </div>
        <div className="text-center p-3 bg-surface rounded-lg border border-border">
          <div className="text-xl font-bold text-text-primary">{githubStats?.contributionStreak}</div>
          <div className="text-xs text-text-secondary">Day Streak</div>
        </div>
      </div>
      {/* Language Statistics */}
      <div className="mb-6">
        <h4 className="font-semibold text-text-primary mb-3 flex items-center">
          <Icon name="Code" size={16} className="mr-2 text-accent" />
          Language Distribution
        </h4>
        <div className="space-y-3">
          {githubStats?.languageStats?.map((lang, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 w-24">
                <div className={`w-3 h-3 ${lang?.color} rounded-full`}></div>
                <span className="text-sm font-medium text-text-primary">{lang?.name}</span>
              </div>
              <div className="flex-1 bg-muted rounded-full h-2">
                <div 
                  className={`h-2 ${lang?.color} rounded-full transition-all duration-500`}
                  style={{ width: `${lang?.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-text-secondary w-10 text-right">{lang?.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
        <button
          onClick={() => setActiveTab('activity')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
            activeTab === 'activity' ?'bg-white text-primary shadow-elevation' :'text-text-secondary hover:text-text-primary'
          }`}
        >
          Recent Activity
        </button>
        <button
          onClick={() => setActiveTab('repos')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
            activeTab === 'repos' ?'bg-white text-primary shadow-elevation' :'text-text-secondary hover:text-text-primary'
          }`}
        >
          Pinned Repos
        </button>
      </div>
      {/* Tab Content */}
      {activeTab === 'activity' && (
        <div className="space-y-3">
          {recentActivity?.map((activity, index) => (
            <div
              key={activity?.id}
              className="flex items-start space-x-3 p-3 bg-surface rounded-lg border border-border hover:shadow-elevation transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name={getActivityIcon(activity?.type)} size={14} className="text-text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-text-primary">{activity?.repo}</span>
                  <span className="text-xs text-text-muted">•</span>
                  <span className="text-xs text-text-secondary">{activity?.timestamp}</span>
                </div>
                <p className="text-sm text-text-secondary">{activity?.message}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Icon name="GitCommit" size={12} className="text-text-muted" />
                  <span className="text-xs text-text-muted">{activity?.commits} commit{activity?.commits > 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === 'repos' && (
        <div className="grid md:grid-cols-2 gap-4">
          {pinnedRepos?.map((repo, index) => (
            <div
              key={repo?.id}
              className="p-4 bg-surface rounded-lg border border-border hover:shadow-elevation transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Folder" size={16} className="text-accent" />
                  <h4 className="font-semibold text-text-primary hover:text-accent cursor-pointer transition-colors duration-300">
                    {repo?.name}
                  </h4>
                </div>
                <Button
                  variant="ghost"
                  size="xs"
                  iconName="ExternalLink"
                  onClick={() => window.open(`https://github.com/${githubStats?.username}/${repo?.name}`, '_blank')}
                />
              </div>

              <p className="text-sm text-text-secondary mb-3 line-clamp-2">{repo?.description}</p>

              <div className="flex flex-wrap gap-1 mb-3">
                {repo?.topics?.slice(0, 3)?.map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                  >
                    {topic}
                  </span>
                ))}
                {repo?.topics?.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full">
                    +{repo?.topics?.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className={`w-3 h-3 ${getLanguageColor(repo?.language)} rounded-full`}></div>
                    <span className="text-text-secondary">{repo?.language}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={12} className="text-warning" />
                    <span className="text-text-secondary">{repo?.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="GitFork" size={12} className="text-text-secondary" />
                    <span className="text-text-secondary">{repo?.forks}</span>
                  </div>
                </div>
                <span className="text-xs text-text-muted">{repo?.lastUpdate}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GitHubIntegration;