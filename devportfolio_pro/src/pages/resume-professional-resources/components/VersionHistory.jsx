import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VersionHistory = ({ onDownload, onRestore }) => {
  const [selectedVersion, setSelectedVersion] = useState(null);

  const versions = [
    {
      id: 'v2.3.1',
      date: '2025-09-01',
      time: '10:30 AM',
      type: 'major',
      changes: [
        'Added new project: AI Customer Support Chatbot',
        'Updated skills section with TensorFlow 2.0',
        'Refined professional summary',
        'Added AWS certification'
      ],
      size: '245 KB',
      downloads: 127,
      status: 'current',
      author: 'RAGULA SHIVA SHANKAR'
    },
    {
      id: 'v2.2.8',
      date: '2025-08-28',
      time: '3:45 PM',
      type: 'minor',
      changes: [
        'Updated contact information',
        'Fixed formatting issues in experience section',
        'Added LinkedIn profile link'
      ],
      size: '242 KB',
      downloads: 89,
      status: 'stable',
      author: 'RAGULA SHIVA SHANKAR'
    },
    {
      id: 'v2.2.5',
      date: '2025-08-25',
      time: '11:20 AM',
      type: 'patch',
      changes: [
        'Corrected typo in education section',
        'Updated project completion dates',
        'Minor styling improvements'
      ],
      size: '241 KB',
      downloads: 156,
      status: 'archived',
      author: 'RAGULA SHIVA SHANKAR'
    },
    {
      id: 'v2.1.0',
      date: '2025-08-20',
      time: '2:15 PM',
      type: 'major',
      changes: [
        'Complete redesign with modern template',
        'Added technical skills matrix',
        'Restructured project descriptions',
        'Added quantifiable achievements',
        'Optimized for ATS systems'
      ],
      size: '238 KB',
      downloads: 203,
      status: 'archived',
      author: 'RAGULA SHIVA SHANKAR'
    },
    {
      id: 'v1.9.2',
      date: '2025-08-15',
      time: '9:30 AM',
      type: 'minor',
      changes: [
        'Added internship experience details',
        'Updated GPA information',
        'Added research project details'
      ],
      size: '235 KB',
      downloads: 178,
      status: 'archived',
      author: 'RAGULA SHIVA SHANKAR'
    },
    {
      id: 'v1.8.1',
      date: '2025-08-10',
      time: '4:20 PM',
      type: 'patch',
      changes: [
        'Fixed date formatting',
        'Updated phone number',
        'Corrected project timeline'
      ],
      size: '234 KB',
      downloads: 145,
      status: 'archived',
      author: 'RAGULA SHIVA SHANKAR'
    }
  ];

  const getVersionTypeColor = (type) => {
    switch (type) {
      case 'major':
        return 'text-error bg-error/10 border-error/20';
      case 'minor':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'patch':
        return 'text-success bg-success/10 border-success/20';
      default:
        return 'text-text-muted bg-muted border-border';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'current':
        return 'text-success bg-success/10 border-success/20';
      case 'stable':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'archived':
        return 'text-text-muted bg-muted border-border';
      default:
        return 'text-text-muted bg-muted border-border';
    }
  };

  const handleVersionSelect = (version) => {
    setSelectedVersion(selectedVersion?.id === version?.id ? null : version);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getTotalDownloads = () => {
    return versions?.reduce((total, version) => total + version?.downloads, 0);
  };

  return (
    <div className="bg-card rounded-lg shadow-elevation overflow-hidden">
      <div className="border-b border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-1">Version History</h2>
            <p className="text-text-secondary">Track resume updates and download previous versions</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-text-muted">Total Downloads</p>
            <p className="text-2xl font-bold text-primary">{getTotalDownloads()?.toLocaleString()}</p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <p className="text-lg font-semibold text-primary">{versions?.length}</p>
            <p className="text-xs text-text-muted">Total Versions</p>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <p className="text-lg font-semibold text-success">
              {versions?.filter(v => v?.status === 'current')?.length}
            </p>
            <p className="text-xs text-text-muted">Current</p>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <p className="text-lg font-semibold text-accent">
              {versions?.[0]?.size || 'N/A'}
            </p>
            <p className="text-xs text-text-muted">Latest Size</p>
          </div>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        <div className="divide-y divide-border">
          {versions?.map((version) => (
            <div key={version?.id} className="p-6 hover:bg-muted/30 transition-colors duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleVersionSelect(version)}
                    className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
                  >
                    <Icon 
                      name={selectedVersion?.id === version?.id ? "ChevronDown" : "ChevronRight"} 
                      size={16} 
                      className="text-text-muted" 
                    />
                    <span className="font-mono text-lg font-semibold text-primary">
                      {version?.id}
                    </span>
                  </button>
                  
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getVersionTypeColor(version?.type)}`}>
                      {version?.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(version?.status)}`}>
                      {version?.status}
                    </span>
                  </div>
                </div>

                <div className="text-right text-sm text-text-muted">
                  <p>{formatDate(version?.date)}</p>
                  <p>{version?.time}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <span className="flex items-center gap-1">
                    <Icon name="User" size={14} />
                    {version?.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="HardDrive" size={14} />
                    {version?.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Download" size={14} />
                    {version?.downloads} downloads
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDownload(version?.id)}
                    iconName="Download"
                    iconPosition="left"
                    iconSize={14}
                  >
                    Download
                  </Button>
                  {version?.status !== 'current' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRestore(version?.id)}
                      iconName="RotateCcw"
                      iconPosition="left"
                      iconSize={14}
                    >
                      Restore
                    </Button>
                  )}
                </div>
              </div>

              {selectedVersion?.id === version?.id && (
                <div className="mt-4 p-4 bg-muted rounded-lg animate-slide-up">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Icon name="FileText" size={16} />
                    Changes in this version:
                  </h4>
                  <ul className="space-y-2">
                    {version?.changes?.map((change, index) => (
                      <li key={index} className="flex items-start gap-2 text-text-secondary">
                        <Icon name="GitCommit" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border p-4 bg-muted/30">
        <div className="flex items-center justify-between text-sm text-text-muted">
          <span>Last updated: {formatDate(versions?.[0]?.date)} at {versions?.[0]?.time}</span>
          <span>Auto-backup enabled</span>
        </div>
      </div>
    </div>
  );
};

export default VersionHistory;