import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    interests: [],
    frequency: 'monthly'
  });
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const interestOptions = [
    { id: 'projects', label: 'New Project Launches', description: 'Get notified when I release new projects' },
    { id: 'articles', label: 'Technical Articles', description: 'Receive my latest blog posts and tutorials' },
    { id: 'career', label: 'Career Updates', description: 'Professional milestones and job changes' },
    { id: 'speaking', label: 'Speaking Events', description: 'Conference talks and workshop announcements' },
    { id: 'open-source', label: 'Open Source', description: 'New contributions and collaboration opportunities' },
    { id: 'learning', label: 'Learning Journey', description: 'New skills, certifications, and educational content' }
  ];

  const frequencyOptions = [
    { value: 'weekly', label: 'Weekly', description: 'Stay up-to-date with frequent updates' },
    { value: 'monthly', label: 'Monthly', description: 'Perfect balance of updates without spam' },
    { value: 'quarterly', label: 'Quarterly', description: 'Major updates and milestones only' }
  ];

  const recentUpdates = [
    {
      date: '2024-08-15',
      title: 'New React Portfolio Project Released',
      type: 'Project Launch',
      description: 'Built a comprehensive developer portfolio with advanced animations and responsive design'
    },
    {
      date: '2024-08-01',
      title: 'Speaking at React Austin Meetup',
      type: 'Speaking Event',
      description: 'Presented "Building Scalable React Applications" to 200+ developers'
    },
    {
      date: '2024-07-20',
      title: 'Published: Advanced React Hooks Guide',
      type: 'Technical Article',
      description: 'Comprehensive guide covering custom hooks, performance optimization, and best practices'
    },
    {
      date: '2024-07-10',
      title: 'Open Source Contribution to React Router',
      type: 'Open Source',
      description: 'Contributed performance improvements and bug fixes to React Router v6'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInterestToggle = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev?.interests?.includes(interestId)
        ? prev?.interests?.filter(id => id !== interestId)
        : [...prev?.interests, interestId]
    }));
  };

  const handleSubscribe = async (e) => {
    e?.preventDefault();
    setIsSubscribing(true);
    
    try {
      // Simulate subscription process
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubscriptionStatus('success');
      setFormData({
        email: '',
        name: '',
        interests: [],
        frequency: 'monthly'
      });
    } catch (error) {
      setSubscriptionStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  if (subscriptionStatus === 'success') {
    return (
      <div className="bg-card rounded-2xl shadow-elevation-lg p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary mb-4">Welcome to the Newsletter!</h3>
        <p className="text-text-secondary mb-6">
          Thank you for subscribing! You'll receive a welcome email shortly with links to my latest projects 
          and a special bonus resource guide.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            variant="outline" 
            onClick={() => setSubscriptionStatus(null)}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Subscribe Another Email
          </Button>
          <Button 
            variant="default"
            onClick={() => window.open('https://github.com/shivaragula', '_blank')}
            iconName="Github"
            iconPosition="left"
          >
            View Latest Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl shadow-elevation-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Stay Connected</h2>
        <p className="text-text-secondary">
          Subscribe to receive updates about new projects, technical articles, career milestones, 
          and professional opportunities. No spam, unsubscribe anytime.
        </p>
      </div>
      {/* Recent Updates Preview */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Clock" size={18} className="mr-2" />
          Recent Updates
        </h3>
        <div className="space-y-3">
          {recentUpdates?.slice(0, 3)?.map((update, index) => (
            <div key={index} className="p-4 bg-muted rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-text-primary text-sm">{update?.title}</h4>
                <span className="text-xs text-text-muted whitespace-nowrap ml-2">
                  {new Date(update.date)?.toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                  {update?.type}
                </span>
              </div>
              <p className="text-text-secondary text-sm">{update?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Subscription Form */}
      <form onSubmit={handleSubscribe} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            required
          />
          <Input
            label="Name (Optional)"
            type="text"
            placeholder="Your name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
          />
        </div>

        {/* Frequency Selection */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Update Frequency
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {frequencyOptions?.map((option) => (
              <label
                key={option?.value}
                className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                  formData?.frequency === option?.value
                    ? 'border-accent bg-accent/5 ring-1 ring-accent/20' :'border-border hover:border-accent/50'
                }`}
              >
                <input
                  type="radio"
                  name="frequency"
                  value={option?.value}
                  checked={formData?.frequency === option?.value}
                  onChange={(e) => handleInputChange('frequency', e?.target?.value)}
                  className="sr-only"
                />
                <div className="text-center">
                  <h4 className="font-medium text-text-primary mb-1">{option?.label}</h4>
                  <p className="text-text-secondary text-sm">{option?.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Interest Selection */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Content Interests (Select all that apply)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {interestOptions?.map((interest) => (
              <div key={interest?.id} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                <Checkbox
                  checked={formData?.interests?.includes(interest?.id)}
                  onChange={() => handleInterestToggle(interest?.id)}
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-text-primary text-sm">{interest?.label}</h4>
                  <p className="text-text-secondary text-xs">{interest?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Shield" size={20} className="text-accent mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <h4 className="font-medium text-text-primary mb-1">Privacy & Data Protection</h4>
              <p className="text-text-secondary">
                Your email will only be used for newsletter updates. No spam, no sharing with third parties. 
                You can unsubscribe at any time with one click. View our{' '}
                <button type="button" className="text-accent hover:underline">privacy policy</button>.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubscribing}
          iconName="Mail"
          iconPosition="left"
          disabled={!formData?.email}
        >
          {isSubscribing ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </Button>
      </form>
      {/* Subscription Benefits */}
      <div className="mt-8 p-6 bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl border border-accent/20">
        <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">
          Subscriber Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <Icon name="Zap" size={24} className="text-accent mb-2" />
            <h4 className="font-medium text-text-primary mb-1">Early Access</h4>
            <p className="text-text-secondary text-sm">Get first look at new projects and articles</p>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="Gift" size={24} className="text-accent mb-2" />
            <h4 className="font-medium text-text-primary mb-1">Exclusive Content</h4>
            <p className="text-text-secondary text-sm">Subscriber-only resources and tutorials</p>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="Users" size={24} className="text-accent mb-2" />
            <h4 className="font-medium text-text-primary mb-1">Community Access</h4>
            <p className="text-text-secondary text-sm">Join discussions and networking opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;