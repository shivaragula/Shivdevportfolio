import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickViewCard = ({ onContactClick, onScheduleClick }) => {
  const quickStats = [
    {
      label: "Experience",
      value: "2+ Years",
      icon: "Briefcase",
      color: "text-accent"
    },
    {
      label: "Projects",
      value: "15+",
      icon: "FolderOpen",
      color: "text-success"
    },
    {
      label: "Technologies",
      value: "20+",
      icon: "Code",
      color: "text-warning"
    },
    {
      label: "Certifications",
      value: "3",
      icon: "Award",
      color: "text-primary"
    }
  ];

  const availability = {
    status: "Available for Full-time Opportunities",
    startDate: "Immediately",
    location: "San Francisco, CA (Open to Remote)",
    visa: "Authorized to work in US",
    salary: "$85,000 - $110,000"
  };

  const keyHighlights = [
    "Full-Stack Development (React, Node.js, Python)",
    "Machine Learning & Data Science",
    "Cloud Platforms (AWS, Google Cloud)",
    "Agile Development & Team Collaboration",
    "Strong Problem-Solving Skills"
  ];

  return (
    <div className="bg-card rounded-lg shadow-elevation p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-primary mb-1">Recruiter Quick View</h2>
          <p className="text-text-secondary">Key information at a glance</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          Available
        </div>
      </div>
      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {quickStats?.map((stat, index) => (
          <div key={index} className="text-center p-3 bg-muted rounded-lg">
            <Icon name={stat?.icon} size={24} className={`mx-auto mb-2 ${stat?.color}`} />
            <p className="text-lg font-semibold text-primary">{stat?.value}</p>
            <p className="text-xs text-text-muted">{stat?.label}</p>
          </div>
        ))}
      </div>
      {/* Availability */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
          <Icon name="Calendar" size={18} />
          Availability
        </h3>
        <div className="bg-muted rounded-lg p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Status:</span>
            <span className="font-medium text-success">{availability?.status}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Start Date:</span>
            <span className="font-medium text-primary">{availability?.startDate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Location:</span>
            <span className="font-medium text-primary">{availability?.location}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Work Authorization:</span>
            <span className="font-medium text-primary">{availability?.visa}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Salary Range:</span>
            <span className="font-medium text-primary">{availability?.salary}</span>
          </div>
        </div>
      </div>
      {/* Key Highlights */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
          <Icon name="Star" size={18} />
          Key Highlights
        </h3>
        <ul className="space-y-2">
          {keyHighlights?.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-text-secondary">
              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Contact Preferences */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
          <Icon name="MessageCircle" size={18} />
          Contact Preferences
        </h3>
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <Icon name="Mail" size={16} className="text-accent" />
            <div>
              <p className="font-medium text-primary">Email (Preferred)</p>
              <p className="text-sm text-text-muted">Response within 24 hours</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Icon name="Phone" size={16} className="text-accent" />
            <div>
              <p className="font-medium text-primary">Phone</p>
              <p className="text-sm text-text-muted">Available Mon-Fri, 9 AM - 6 PM PST</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Video" size={16} className="text-accent" />
            <div>
              <p className="font-medium text-primary">Video Call</p>
              <p className="text-sm text-text-muted">Zoom, Google Meet, or Teams</p>
            </div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="default"
          fullWidth
          onClick={onContactClick}
          iconName="Mail"
          iconPosition="left"
          iconSize={16}
          className="animate-pulse-subtle hover:animate-none"
        >
          Contact Now
        </Button>
        <Button
          variant="outline"
          fullWidth
          onClick={onScheduleClick}
          iconName="Calendar"
          iconPosition="left"
          iconSize={16}
        >
          Schedule Interview
        </Button>
      </div>
      {/* Last Updated */}
      <div className="mt-4 pt-4 border-t border-border text-center">
        <p className="text-xs text-text-muted flex items-center justify-center gap-1">
          <Icon name="Clock" size={12} />
          Last updated: September 1, 2025
        </p>
      </div>
    </div>
  );
};

export default QuickViewCard;