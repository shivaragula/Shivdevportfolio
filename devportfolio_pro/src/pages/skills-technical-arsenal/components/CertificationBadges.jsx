import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CertificationBadges = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "March 2024",
      status: "active",
      credentialId: "AWS-SAA-2024-001234",
      verificationUrl: "https://aws.amazon.com/verification/AWS-SAA-2024-001234",
      icon: "Cloud",
      color: "bg-orange-500",
      skills: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda"]
    },
    {
      id: 2,
      title: "Google Data Analytics Professional",
      issuer: "Google",
      date: "January 2024",
      status: "active",
      credentialId: "GDA-2024-567890",
      verificationUrl: "https://coursera.org/verify/GDA-2024-567890",
      icon: "BarChart3",
      color: "bg-blue-500",
      skills: ["Data Analysis", "SQL", "Tableau", "R", "Python"]
    },
    {
      id: 3,
      title: "Meta Front-End Developer",
      issuer: "Meta",
      date: "November 2023",
      status: "active",
      credentialId: "META-FE-2023-112233",
      verificationUrl: "https://coursera.org/verify/META-FE-2023-112233",
      icon: "Globe",
      color: "bg-blue-600",
      skills: ["React", "JavaScript", "HTML/CSS", "UI/UX", "Git"]
    },
    {
      id: 4,
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "September 2023",
      status: "active",
      credentialId: "TF-DEV-2023-445566",
      verificationUrl: "https://tensorflow.org/certificate/TF-DEV-2023-445566",
      icon: "Brain",
      color: "bg-orange-600",
      skills: ["TensorFlow", "Machine Learning", "Deep Learning", "Python", "Neural Networks"]
    },
    {
      id: 5,
      title: "Oracle Database SQL Certified Associate",
      issuer: "Oracle",
      date: "July 2023",
      status: "active",
      credentialId: "OCA-SQL-2023-778899",
      verificationUrl: "https://oracle.com/verify/OCA-SQL-2023-778899",
      icon: "Database",
      color: "bg-red-600",
      skills: ["SQL", "Database Design", "Oracle", "Data Modeling", "Performance Tuning"]
    },
    {
      id: 6,
      title: "Scrum Master Certified (SMC)",
      issuer: "Scrum Alliance",
      date: "May 2023",
      status: "active",
      credentialId: "SMC-2023-334455",
      verificationUrl: "https://scrumalliance.org/verify/SMC-2023-334455",
      icon: "Users",
      color: "bg-green-600",
      skills: ["Agile", "Scrum", "Project Management", "Team Leadership", "Sprint Planning"]
    }
  ];

  const upcomingCertifications = [
    {
      title: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      plannedDate: "December 2024",
      status: "planned",
      icon: "Settings",
      color: "bg-purple-500"
    },
    {
      title: "Azure Data Engineer Associate",
      issuer: "Microsoft",
      plannedDate: "February 2025",
      status: "planned",
      icon: "Cloud",
      color: "bg-blue-700"
    }
  ];

  return (
    <div className="bg-card rounded-xl shadow-elevation p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-success to-accent rounded-lg flex items-center justify-center mr-4 shadow-elevation">
            <Icon name="Award" size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-primary">Professional Certifications</h3>
            <p className="text-sm text-text-secondary">Verified credentials and achievements</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-success">{certifications?.length}</div>
          <div className="text-xs text-text-secondary">Active Certs</div>
        </div>
      </div>
      {/* Active Certifications */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {certifications?.map((cert, index) => (
          <div
            key={cert?.id}
            className="bg-surface rounded-lg p-4 border border-border hover:shadow-elevation transition-all duration-300 group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 ${cert?.color} rounded-lg flex items-center justify-center shadow-elevation group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={cert?.icon} size={20} className="text-white" />
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-xs text-success font-medium">Active</span>
              </div>
            </div>

            <h4 className="font-bold text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">
              {cert?.title}
            </h4>
            <p className="text-sm text-text-secondary mb-2">{cert?.issuer}</p>
            <p className="text-xs text-text-muted mb-3">Issued: {cert?.date}</p>

            <div className="flex flex-wrap gap-1 mb-3">
              {cert?.skills?.slice(0, 3)?.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                >
                  {skill}
                </span>
              ))}
              {cert?.skills?.length > 3 && (
                <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full">
                  +{cert?.skills?.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-text-muted font-mono">
                ID: {cert?.credentialId?.slice(-6)}
              </span>
              <Button
                variant="ghost"
                size="xs"
                iconName="ExternalLink"
                iconPosition="right"
                onClick={() => window.open(cert?.verificationUrl, '_blank')}
                className="text-xs"
              >
                Verify
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Upcoming Certifications */}
      <div className="border-t border-border pt-6">
        <h4 className="font-bold text-text-primary mb-4 flex items-center">
          <Icon name="Calendar" size={20} className="mr-2 text-accent" />
          Planned Certifications
        </h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          {upcomingCertifications?.map((cert, index) => (
            <div
              key={index}
              className="bg-surface rounded-lg p-4 border border-dashed border-border hover:border-accent transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-8 h-8 ${cert?.color} rounded-lg flex items-center justify-center opacity-60`}>
                  <Icon name={cert?.icon} size={16} className="text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-text-primary">{cert?.title}</h5>
                  <p className="text-sm text-text-secondary">{cert?.issuer}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted">Target: {cert?.plannedDate}</span>
                <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                  In Progress
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Certification Stats */}
      <div className="mt-6 p-4 bg-gradient-to-r from-success/5 to-accent/5 rounded-lg border border-success/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-success">6</div>
            <div className="text-xs text-text-secondary">Active Certs</div>
          </div>
          <div>
            <div className="text-xl font-bold text-accent">2</div>
            <div className="text-xs text-text-secondary">In Progress</div>
          </div>
          <div>
            <div className="text-xl font-bold text-primary">25+</div>
            <div className="text-xs text-text-secondary">Skills Covered</div>
          </div>
          <div>
            <div className="text-xl font-bold text-text-primary">2024</div>
            <div className="text-xs text-text-secondary">Latest Year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;