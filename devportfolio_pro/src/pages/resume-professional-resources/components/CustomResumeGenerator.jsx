import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const CustomResumeGenerator = ({ onGenerate, onPreview }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [resumeStyle, setResumeStyle] = useState('professional');
  const [includePortfolio, setIncludePortfolio] = useState(true);
  const [includeCoverLetter, setIncludeCoverLetter] = useState(false);

  const roleOptions = [
    { value: 'fullstack', label: 'Full-Stack Developer', description: 'Frontend + Backend focus' },
    { value: 'frontend', label: 'Frontend Developer', description: 'React, UI/UX focus' },
    { value: 'backend', label: 'Backend Developer', description: 'APIs, databases focus' },
    { value: 'datascience', label: 'Data Scientist', description: 'ML, analytics focus' },
    { value: 'devops', label: 'DevOps Engineer', description: 'Cloud, infrastructure focus' },
    { value: 'mobile', label: 'Mobile Developer', description: 'React Native, mobile apps' }
  ];

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { id: 'react', label: 'React.js', relevance: { fullstack: 5, frontend: 5, backend: 2, datascience: 2, devops: 2, mobile: 4 } },
        { id: 'nextjs', label: 'Next.js', relevance: { fullstack: 5, frontend: 5, backend: 3, datascience: 1, devops: 2, mobile: 2 } },
        { id: 'typescript', label: 'TypeScript', relevance: { fullstack: 5, frontend: 5, backend: 4, datascience: 2, devops: 3, mobile: 4 } },
        { id: 'tailwind', label: 'Tailwind CSS', relevance: { fullstack: 4, frontend: 5, backend: 1, datascience: 1, devops: 1, mobile: 3 } }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { id: 'nodejs', label: 'Node.js', relevance: { fullstack: 5, frontend: 3, backend: 5, datascience: 3, devops: 4, mobile: 3 } },
        { id: 'python', label: 'Python', relevance: { fullstack: 4, frontend: 2, backend: 5, datascience: 5, devops: 4, mobile: 2 } },
        { id: 'express', label: 'Express.js', relevance: { fullstack: 5, frontend: 2, backend: 5, datascience: 2, devops: 3, mobile: 2 } },
        { id: 'django', label: 'Django', relevance: { fullstack: 4, frontend: 1, backend: 5, datascience: 4, devops: 2, mobile: 1 } }
      ]
    },
    {
      category: 'Database',
      skills: [
        { id: 'mongodb', label: 'MongoDB', relevance: { fullstack: 5, frontend: 2, backend: 5, datascience: 4, devops: 4, mobile: 3 } },
        { id: 'postgresql', label: 'PostgreSQL', relevance: { fullstack: 5, frontend: 2, backend: 5, datascience: 5, devops: 4, mobile: 2 } },
        { id: 'redis', label: 'Redis', relevance: { fullstack: 4, frontend: 1, backend: 5, datascience: 3, devops: 4, mobile: 2 } }
      ]
    },
    {
      category: 'Data Science',
      skills: [
        { id: 'tensorflow', label: 'TensorFlow', relevance: { fullstack: 2, frontend: 1, backend: 3, datascience: 5, devops: 2, mobile: 2 } },
        { id: 'pandas', label: 'Pandas', relevance: { fullstack: 2, frontend: 1, backend: 3, datascience: 5, devops: 2, mobile: 1 } },
        { id: 'scikit', label: 'Scikit-learn', relevance: { fullstack: 2, frontend: 1, backend: 3, datascience: 5, devops: 2, mobile: 1 } }
      ]
    },
    {
      category: 'DevOps',
      skills: [
        { id: 'docker', label: 'Docker', relevance: { fullstack: 4, frontend: 2, backend: 4, datascience: 4, devops: 5, mobile: 2 } },
        { id: 'aws', label: 'AWS', relevance: { fullstack: 4, frontend: 2, backend: 5, datascience: 4, devops: 5, mobile: 3 } },
        { id: 'kubernetes', label: 'Kubernetes', relevance: { fullstack: 3, frontend: 1, backend: 4, datascience: 3, devops: 5, mobile: 1 } }
      ]
    }
  ];

  const projectOptions = [
    { 
      id: 'ecommerce', 
      label: 'E-Commerce Analytics Platform', 
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      relevance: { fullstack: 5, frontend: 4, backend: 4, datascience: 5, devops: 3, mobile: 2 }
    },
    { 
      id: 'taskmanager', 
      label: 'Smart Task Manager', 
      tech: ['Next.js', 'PostgreSQL', 'Python', 'ML'],
      relevance: { fullstack: 5, frontend: 5, backend: 4, datascience: 4, devops: 3, mobile: 3 }
    },
    { 
      id: 'chatbot', 
      label: 'AI Customer Support Chatbot', 
      tech: ['Python', 'TensorFlow', 'Flask', 'NLP'],
      relevance: { fullstack: 3, frontend: 2, backend: 4, datascience: 5, devops: 2, mobile: 2 }
    },
    { 
      id: 'dashboard', 
      label: 'Real-time Analytics Dashboard', 
      tech: ['React', 'D3.js', 'WebSocket', 'Redis'],
      relevance: { fullstack: 5, frontend: 5, backend: 4, datascience: 4, devops: 3, mobile: 2 }
    },
    { 
      id: 'mobile', 
      label: 'Cross-platform Mobile App', 
      tech: ['React Native', 'Firebase', 'Redux'],
      relevance: { fullstack: 4, frontend: 4, backend: 2, datascience: 1, devops: 2, mobile: 5 }
    }
  ];

  const styleOptions = [
    { value: 'professional', label: 'Professional', description: 'Clean, corporate-friendly design' },
    { value: 'modern', label: 'Modern', description: 'Contemporary with subtle colors' },
    { value: 'minimal', label: 'Minimal', description: 'Simple, text-focused layout' },
    { value: 'creative', label: 'Creative', description: 'Unique design for creative roles' }
  ];

  const getRelevantSkills = () => {
    if (!selectedRole) return [];
    
    return skillCategories?.flatMap(category => 
      category?.skills?.filter(skill => skill?.relevance?.[selectedRole] >= 4)?.map(skill => ({ value: skill?.id, label: skill?.label }))
    );
  };

  const getRelevantProjects = () => {
    if (!selectedRole) return [];
    
    return projectOptions?.filter(project => project?.relevance?.[selectedRole] >= 4)?.map(project => ({ value: project?.id, label: project?.label }));
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    // Auto-select highly relevant skills and projects
    const relevantSkills = getRelevantSkills()?.slice(0, 8)?.map(skill => skill?.value);
    const relevantProjects = getRelevantProjects()?.slice(0, 3)?.map(project => project?.value);
    setSelectedSkills(relevantSkills);
    setSelectedProjects(relevantProjects);
  };

  const handleGenerate = () => {
    const config = {
      role: selectedRole,
      skills: selectedSkills,
      projects: selectedProjects,
      style: resumeStyle,
      includePortfolio,
      includeCoverLetter
    };
    onGenerate(config);
  };

  const handlePreview = () => {
    const config = {
      role: selectedRole,
      skills: selectedSkills,
      projects: selectedProjects,
      style: resumeStyle,
      includePortfolio,
      includeCoverLetter
    };
    onPreview(config);
  };

  return (
    <div className="bg-card rounded-lg shadow-elevation p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
          <Icon name="Settings" size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-primary">Custom Resume Generator</h2>
          <p className="text-text-secondary">Create role-specific resumes optimized for ATS systems</p>
        </div>
      </div>
      <div className="space-y-6">
        {/* Role Selection */}
        <div>
          <Select
            label="Target Role"
            description="Choose the role you're applying for to optimize content"
            options={roleOptions}
            value={selectedRole}
            onChange={handleRoleChange}
            placeholder="Select a role..."
            searchable
            required
          />
        </div>

        {selectedRole && (
          <>
            {/* Skills Selection */}
            <div>
              <label className="block text-sm font-medium text-primary mb-3">
                Featured Skills
                <span className="text-text-muted ml-1">({selectedSkills?.length} selected)</span>
              </label>
              <Select
                options={getRelevantSkills()}
                value={selectedSkills}
                onChange={setSelectedSkills}
                placeholder="Select skills to highlight..."
                multiple
                searchable
                clearable
                className="mb-2"
              />
              <p className="text-xs text-text-muted">
                Skills are pre-selected based on relevance to {roleOptions?.find(r => r?.value === selectedRole)?.label}
              </p>
            </div>

            {/* Projects Selection */}
            <div>
              <label className="block text-sm font-medium text-primary mb-3">
                Featured Projects
                <span className="text-text-muted ml-1">({selectedProjects?.length} selected)</span>
              </label>
              <Select
                options={getRelevantProjects()}
                value={selectedProjects}
                onChange={setSelectedProjects}
                placeholder="Select projects to showcase..."
                multiple
                clearable
                className="mb-2"
              />
              <p className="text-xs text-text-muted">
                Projects are ranked by relevance to the selected role
              </p>
            </div>

            {/* Style Selection */}
            <div>
              <Select
                label="Resume Style"
                description="Choose a design that matches the company culture"
                options={styleOptions}
                value={resumeStyle}
                onChange={setResumeStyle}
                placeholder="Select style..."
              />
            </div>

            {/* Additional Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Additional Options</h3>
              
              <Checkbox
                label="Include Portfolio Links"
                description="Add links to live projects and GitHub repositories"
                checked={includePortfolio}
                onChange={(e) => setIncludePortfolio(e?.target?.checked)}
              />
              
              <Checkbox
                label="Generate Cover Letter"
                description="Create a matching cover letter template"
                checked={includeCoverLetter}
                onChange={(e) => setIncludeCoverLetter(e?.target?.checked)}
              />
            </div>

            {/* Preview Section */}
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-3">Resume Preview</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-text-muted mb-1">Target Role:</p>
                  <p className="font-medium text-primary">
                    {roleOptions?.find(r => r?.value === selectedRole)?.label}
                  </p>
                </div>
                <div>
                  <p className="text-text-muted mb-1">Style:</p>
                  <p className="font-medium text-primary capitalize">{resumeStyle}</p>
                </div>
                <div>
                  <p className="text-text-muted mb-1">Skills:</p>
                  <p className="font-medium text-primary">{selectedSkills?.length} selected</p>
                </div>
                <div>
                  <p className="text-text-muted mb-1">Projects:</p>
                  <p className="font-medium text-primary">{selectedProjects?.length} selected</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                variant="outline"
                fullWidth
                onClick={handlePreview}
                iconName="Eye"
                iconPosition="left"
                iconSize={16}
                disabled={!selectedRole}
              >
                Preview Resume
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={handleGenerate}
                iconName="Download"
                iconPosition="left"
                iconSize={16}
                disabled={!selectedRole}
                className="animate-pulse-subtle hover:animate-none"
              >
                Generate & Download
              </Button>
            </div>
          </>
        )}

        {!selectedRole && (
          <div className="text-center py-8">
            <Icon name="Target" size={48} className="mx-auto text-text-muted mb-4" />
            <p className="text-text-muted">Select a target role to begin customizing your resume</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomResumeGenerator;