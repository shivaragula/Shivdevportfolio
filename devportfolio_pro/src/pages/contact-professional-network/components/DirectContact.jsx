import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DirectContact = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const contactMethods = [
    {
      id: 'email',
      icon: 'Mail',
      label: 'Professional Email',
      value: 'shiva.shankar4997@gmail.com',
      description: 'Primary contact for formal inquiries',
      action: 'mailto:shiva.shankar4997@gmail.com',
      actionLabel: 'Send Email',
      copyable: true,
      preferred: true
    },
    {
      id: 'linkedin',
      icon: 'Linkedin',
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/shiva-shankar-ragula',
      description: 'Professional networking and career updates',
      action: 'https://www.linkedin.com/in/shiva-shankar-ragula/',
      actionLabel: 'View Profile',
      copyable: true
    },
    {
      id: 'github',
      icon: 'Github',
      label: 'GitHub Portfolio',
      value: 'github.com/shivaragula',
      description: 'Code repositories and open source contributions',
      action: 'https://github.com/shivaragula',
      actionLabel: 'View Code',
      copyable: true
    },
    {
      id: 'phone',
      icon: 'Phone',
      label: 'Phone Number',
      value: '+91 9573006351',
      description: 'Available for scheduled calls (9 AM - 6 PM IST)',
      action: 'tel:+919573006351',
      actionLabel: 'Call Now',
      copyable: true
    },
    {
      id: 'calendar',
      icon: 'Calendar',
      label: 'Schedule Meeting',
      value: 'calendly.com/shiva-kumar-dev',
      description: 'Book a 30-minute discovery call',
      action: 'https://calendly.com/shiva-kumar-dev',
      actionLabel: 'Book Call',
      copyable: false
    }
  ];

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard?.writeText(text);
      setCopiedItem(id);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleAction = (method) => {
    if (method?.action?.startsWith('http')) {
      window.open(method?.action, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = method?.action;
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-elevation-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Direct Contact</h2>
        <p className="text-text-secondary">
          Multiple ways to reach me based on your communication preference. 
          All channels are actively monitored and professionally managed.
        </p>
      </div>
      <div className="space-y-4">
        {contactMethods?.map((method) => (
          <div
            key={method?.id}
            className={`relative p-6 rounded-xl border transition-all duration-300 hover:shadow-elevation ${
              method?.preferred 
                ? 'border-accent bg-accent/5 ring-1 ring-accent/20' :'border-border bg-background hover:border-accent/50'
            }`}
          >
            {method?.preferred && (
              <div className="absolute -top-2 left-4 bg-accent text-white text-xs font-medium px-2 py-1 rounded">
                Preferred
              </div>
            )}

            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                <div className={`p-3 rounded-lg ${
                  method?.preferred ? 'bg-accent text-white' : 'bg-muted text-text-secondary'
                }`}>
                  <Icon name={method?.icon} size={24} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {method?.label}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {method?.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded font-mono text-text-primary">
                      {method?.value}
                    </code>
                    {method?.copyable && (
                      <button
                        onClick={() => handleCopy(method?.value, method?.id)}
                        className="p-1 text-text-muted hover:text-accent transition-colors"
                        title="Copy to clipboard"
                      >
                        <Icon 
                          name={copiedItem === method?.id ? "Check" : "Copy"} 
                          size={16} 
                          className={copiedItem === method?.id ? "text-success" : ""} 
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2 ml-4">
                <Button
                  variant={method?.preferred ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleAction(method)}
                  iconName="ExternalLink"
                  iconPosition="right"
                  iconSize={14}
                >
                  {method?.actionLabel}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Communication Preferences */}
      <div className="mt-8 p-6 bg-muted rounded-xl">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="MessageSquare" size={20} className="mr-2" />
          Communication Preferences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start space-x-2">
            <Icon name="Clock" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-text-primary">Response Time</p>
              <p className="text-text-secondary">Within 24 hours on business days</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Icon name="Globe" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-text-primary">Time Zone</p>
              <p className="text-text-secondary">Eastern Standard Time (EST)</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Icon name="Languages" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-text-primary">Languages</p>
              <p className="text-text-secondary">English (Native), Hindi (Fluent)</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Icon name="MapPin" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-text-primary">Location</p>
              <p className="text-text-secondary">Open to relocation worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectContact;