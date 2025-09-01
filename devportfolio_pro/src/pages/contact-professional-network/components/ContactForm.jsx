import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    roleType: '',
    subject: '',
    message: '',
    interests: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const roleTypeOptions = [
    { value: 'recruiter', label: 'Technical Recruiter' },
    { value: 'hiring-manager', label: 'Hiring Manager' },
    { value: 'developer', label: 'Fellow Developer' },
    { value: 'founder', label: 'Startup Founder' },
    { value: 'academic', label: 'Academic/Professor' },
    { value: 'other', label: 'Other Professional' }
  ];

  const interestOptions = [
    { value: 'full-time', label: 'Full-time Opportunities' },
    { value: 'contract', label: 'Contract/Freelance' },
    { value: 'collaboration', label: 'Project Collaboration' },
    { value: 'mentorship', label: 'Mentorship' },
    { value: 'speaking', label: 'Speaking Engagements' },
    { value: 'open-source', label: 'Open Source Projects' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'networking', label: 'Professional Networking' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        roleType: '',
        subject: '',
        message: '',
        interests: []
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-card rounded-2xl shadow-elevation-lg p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary mb-4">Message Sent Successfully!</h3>
        <p className="text-text-secondary mb-6">
          Thank you for reaching out! I'll get back to you within 24 hours. 
          Check your email for a confirmation message.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setSubmitStatus(null)}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl shadow-elevation-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Get In Touch</h2>
        <p className="text-text-secondary">
          Share your project details, opportunity information, or collaboration ideas. 
          I'll prioritize responses based on mutual fit and project alignment.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Your full name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            required
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@company.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            required
          />
        </div>

        {/* Professional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company/Organization"
            type="text"
            placeholder="Your company name"
            value={formData?.company}
            onChange={(e) => handleInputChange('company', e?.target?.value)}
          />
          <Input
            label="Your Role/Title"
            type="text"
            placeholder="e.g., Senior Developer, CTO"
            value={formData?.role}
            onChange={(e) => handleInputChange('role', e?.target?.value)}
          />
        </div>

        {/* Role Type Selection */}
        <Select
          label="How would you describe yourself?"
          description="This helps me tailor my response appropriately"
          options={roleTypeOptions}
          value={formData?.roleType}
          onChange={(value) => handleInputChange('roleType', value)}
          placeholder="Select your role type"
          required
        />

        {/* Interests */}
        <Select
          label="Areas of Interest"
          description="Select all that apply to your inquiry"
          options={interestOptions}
          value={formData?.interests}
          onChange={(value) => handleInputChange('interests', value)}
          placeholder="Choose your interests"
          multiple
          searchable
        />

        {/* Subject */}
        <Input
          label="Subject"
          type="text"
          placeholder="Brief subject line for your message"
          value={formData?.subject}
          onChange={(e) => handleInputChange('subject', e?.target?.value)}
          required
        />

        {/* Message */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-primary">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
            rows={6}
            placeholder="Tell me about your project, opportunity, or collaboration idea. Include any specific requirements, timeline, or questions you have."
            value={formData?.message}
            onChange={(e) => handleInputChange('message', e?.target?.value)}
            required
          />
          <p className="text-xs text-text-muted">
            Minimum 50 characters. Be specific about your needs for a better response.
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            disabled={!formData?.name || !formData?.email || !formData?.message || !formData?.roleType}
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>

        {/* Response Time Notice */}
        <div className="bg-muted rounded-lg p-4 flex items-start space-x-3">
          <Icon name="Clock" size={20} className="text-accent mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-medium text-text-primary mb-1">Response Time Commitment</p>
            <p className="text-text-secondary">
              I typically respond within 24 hours during business days. 
              Urgent opportunities will receive priority attention.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;