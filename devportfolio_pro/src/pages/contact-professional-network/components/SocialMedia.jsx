import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: 'Linkedin',
      handle: '@shiva-shankar-ragula',
      followers: '2.5K',
      description: 'Professional updates, industry insights, and career milestones',
      lastPost: '2 days ago',
      engagement: 'High',
      url: 'https://linkedin.com/in/shiva-shankar-ragula',
      color: 'bg-blue-600',
      verified: true,
      primary: true
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: 'Github',
      handle: '@shivaragula',
      followers: '1.2K',
      description: 'Open source contributions, personal projects, and code repositories',
      lastPost: '1 day ago',
      engagement: 'Very High',
      url: 'https://github.com/shivaragula',
      color: 'bg-gray-800',
      verified: true,
      primary: true
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: 'Twitter',
      handle: '@shivarangula',
      followers: '850',
      description: 'Tech thoughts, quick updates, and community interactions',
      lastPost: '3 days ago',
      engagement: 'Medium',
      url: 'https://twitter.com/shivarangula',
      color: 'bg-blue-400',
      verified: false,
      primary: false
    },
    {
      id: 'medium',
      name: 'Medium',
      icon: 'BookOpen',
      handle: '@ragulashiva.shankar.29',
      followers: '420',
      description: 'Technical articles, tutorials, and development insights',
      lastPost: '1 week ago',
      engagement: 'Medium',
      url: 'https://medium.com/@ragulashiva.shankar.29',
      color: 'bg-green-600',
      verified: false,
      primary: false
    },
    {
      id: 'stackoverflow',
      name: 'Stack Overflow',
      icon: 'HelpCircle',
      handle: 'shiva-shankar-ragula',
      followers: '1.8K',
      description: 'Technical Q&A, community help, and knowledge sharing',
      lastPost: '5 days ago',
      engagement: 'High',
      url: 'https://stackoverflow.com/users/31395571/shiva-shankar-ragula',
      color: 'bg-orange-500',
      verified: true,
      primary: false
    },
    {
      id: 'dev',
      name: 'Dev.to',
      icon: 'Code',
      handle: '@shivakumardev',
      followers: '680',
      description: 'Development tutorials, project showcases, and tech discussions',
      lastPost: '4 days ago',
      engagement: 'Medium',
      url: 'https://dev.to/shivakumardev',
      color: 'bg-black',
      verified: false,
      primary: false
    }
  ];

  const recentActivity = [
    {
      platform: 'GitHub',
      action: 'Pushed to repository',
      content: 'Updated React portfolio with new project showcase',
      timestamp: '2 hours ago',
      icon: 'GitCommit'
    },
    {
      platform: 'LinkedIn',
      action: 'Shared article',
      content: 'The Future of Full-Stack Development in 2024',
      timestamp: '1 day ago',
      icon: 'Share'
    },
    {
      platform: 'Stack Overflow',
      action: 'Answered question',
      content: 'React Hook optimization for large datasets',
      timestamp: '3 days ago',
      icon: 'MessageCircle'
    },
    {
      platform: 'Medium',
      action: 'Published article',
      content: 'Building Scalable APIs with Node.js and Express',
      timestamp: '1 week ago',
      icon: 'Edit'
    }
  ];

  const handlePlatformClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-card rounded-2xl shadow-elevation-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Social Media & Professional Presence</h2>
        <p className="text-text-secondary">
          Follow my professional journey across platforms. Active engagement with the developer community 
          and regular sharing of insights, projects, and learning experiences.
        </p>
      </div>
      {/* Primary Platforms */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Star" size={20} className="mr-2 text-accent" />
          Primary Platforms
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialPlatforms?.filter(platform => platform?.primary)?.map((platform) => (
            <div
              key={platform?.id}
              className="p-6 border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-elevation cursor-pointer"
              onClick={() => handlePlatformClick(platform?.url)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${platform?.color} text-white`}>
                    <Icon name={platform?.icon} size={24} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-lg font-semibold text-text-primary">{platform?.name}</h4>
                      {platform?.verified && (
                        <Icon name="BadgeCheck" size={16} className="text-blue-500" />
                      )}
                    </div>
                    <p className="text-text-secondary text-sm">{platform?.handle}</p>
                  </div>
                </div>
                <Icon name="ExternalLink" size={16} className="text-text-muted" />
              </div>

              <p className="text-text-secondary text-sm mb-4">{platform?.description}</p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={14} className="text-text-muted" />
                    <span className="text-text-secondary">{platform?.followers}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Activity" size={14} className="text-text-muted" />
                    <span className="text-text-secondary">{platform?.engagement}</span>
                  </div>
                </div>
                <span className="text-text-muted">{platform?.lastPost}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Secondary Platforms */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-4">Additional Platforms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialPlatforms?.filter(platform => !platform?.primary)?.map((platform) => (
            <div
              key={platform?.id}
              className="p-4 border border-border rounded-lg hover:border-accent/50 transition-all duration-300 cursor-pointer group"
              onClick={() => handlePlatformClick(platform?.url)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`p-2 rounded ${platform?.color} text-white group-hover:scale-110 transition-transform`}>
                  <Icon name={platform?.icon} size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1">
                    <h5 className="font-medium text-text-primary text-sm truncate">{platform?.name}</h5>
                    {platform?.verified && (
                      <Icon name="BadgeCheck" size={12} className="text-blue-500 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-text-muted">{platform?.followers} followers</p>
                </div>
              </div>
              <p className="text-xs text-text-secondary line-clamp-2">{platform?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Recent Activity */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Activity" size={20} className="mr-2" />
          Recent Activity
        </h3>
        <div className="space-y-4">
          {recentActivity?.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-muted rounded-lg">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Icon name={activity?.icon} size={16} className="text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-text-primary text-sm">{activity?.platform}</span>
                  <span className="text-text-muted text-xs">•</span>
                  <span className="text-text-muted text-xs">{activity?.action}</span>
                </div>
                <p className="text-text-secondary text-sm mb-1">{activity?.content}</p>
                <span className="text-text-muted text-xs">{activity?.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Follow All Button */}
      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          iconName="UserPlus"
          iconPosition="left"
          onClick={() => window.open('https://linktr.ee/shiva-kumar-dev', '_blank')}
        >
          Follow All Platforms
        </Button>
      </div>
    </div>
  );
};

export default SocialMedia;