import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LatestAchievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      id: 1,
      type: "certification",
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "December 2024",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology",
      icon: "Award",
      color: "from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      credentialId: "AWS-CCP-2024-12345",
      skills: ["Cloud Computing", "AWS Services", "Security"]
    },
    {
      id: 2,
      type: "academic",
      title: "Dean\'s List Recognition",
      issuer: "University Computer Science Department",
      date: "Fall 2024",
      description: "Achieved GPA of 3.8+ for exceptional academic performance in computer science coursework",
      icon: "GraduationCap",
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
      credentialId: "DEAN-2024-CS-789",
      skills: ["Academic Excellence", "Computer Science", "Problem Solving"]
    },
    {
      id: 3,
      type: "project",
      title: "Best Innovation Award",
      issuer: "University Tech Symposium",
      date: "November 2024",
      description: "Recognized for innovative machine learning solution in healthcare data analysis project",
      icon: "Trophy",
      color: "from-yellow-500 to-yellow-600",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      credentialId: "TECH-SYM-2024-001",
      skills: ["Machine Learning", "Healthcare Tech", "Innovation"]
    },
    {
      id: 4,
      type: "certification",
      title: "Google Data Analytics Certificate",
      issuer: "Google Career Certificates",
      date: "October 2024",
      description: "Comprehensive training in data analysis, visualization, and business intelligence tools",
      icon: "BarChart3",
      color: "from-green-500 to-green-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      credentialId: "GOOGLE-DA-2024-567",
      skills: ["Data Analysis", "Tableau", "SQL", "R Programming"]
    }
  ];

  const githubStats = {
    contributions: 847,
    repositories: 23,
    followers: 156,
    stars: 89
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'certification': return 'Award';
      case 'academic': return 'GraduationCap';
      case 'project': return 'Trophy';
      default: return 'Star';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'certification': return 'bg-orange-100 text-orange-800';
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'project': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Latest Achievements
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Recent certifications, academic recognitions, and project milestones 
            showcasing continuous learning and growth
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {achievements?.map((achievement, index) => (
              <motion.div
                key={achievement?.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card rounded-2xl overflow-hidden shadow-elevation hover:shadow-elevation-lg transition-all duration-300 border border-border group"
              >
                {/* Achievement Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={achievement?.image}
                    alt={achievement?.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(achievement?.type)}`}>
                      <Icon name={getTypeIcon(achievement?.type)} size={12} className="mr-1" />
                      {achievement?.type?.charAt(0)?.toUpperCase() + achievement?.type?.slice(1)}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/90 text-text-primary backdrop-blur-sm">
                      <Icon name="Calendar" size={12} className="mr-1" />
                      {achievement?.date}
                    </span>
                  </div>

                  {/* Achievement Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${achievement?.color} flex items-center justify-center shadow-elevation`}>
                      <Icon name={achievement?.icon} size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Achievement Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                      {achievement?.title}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-2">
                      {achievement?.issuer}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {achievement?.description}
                    </p>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {achievement?.skills?.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential ID */}
                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-muted">
                        ID: {achievement?.credentialId}
                      </span>
                      <button className="text-xs text-accent hover:text-primary font-medium transition-colors duration-300">
                        Verify Credential
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 shadow-elevation border border-border"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  GitHub Activity
                </h3>
                <p className="text-text-secondary">
                  Consistent contributions and open-source involvement
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Github" size={24} className="text-text-muted" />
                <span className="text-sm text-text-muted">@shiva-shankar</span>
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {githubStats?.contributions?.toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary">Contributions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {githubStats?.repositories}
                </div>
                <div className="text-sm text-text-secondary">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {githubStats?.followers}
                </div>
                <div className="text-sm text-text-secondary">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {githubStats?.stars}
                </div>
                <div className="text-sm text-text-secondary">Stars Earned</div>
              </div>
            </div>

            {/* Contribution Heatmap Visualization */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-primary">2024 Contribution Activity</h4>
              <div className="grid grid-cols-12 gap-1">
                {[...Array(52)]?.map((_, weekIndex) => (
                  <div key={weekIndex} className="space-y-1">
                    {[...Array(7)]?.map((_, dayIndex) => {
                      const intensity = Math.floor(Math.random() * 5);
                      const intensityColors = [
                        'bg-muted',
                        'bg-success/20',
                        'bg-success/40',
                        'bg-success/60',
                        'bg-success'
                      ];
                      return (
                        <motion.div
                          key={`${weekIndex}-${dayIndex}`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                          className={`w-3 h-3 rounded-sm ${intensityColors?.[intensity]} hover:scale-125 transition-transform duration-200 cursor-pointer`}
                          title={`${intensity} contributions`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-text-muted">
                <span>Less</span>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 rounded-sm bg-muted"></div>
                  <div className="w-3 h-3 rounded-sm bg-success/20"></div>
                  <div className="w-3 h-3 rounded-sm bg-success/40"></div>
                  <div className="w-3 h-3 rounded-sm bg-success/60"></div>
                  <div className="w-3 h-3 rounded-sm bg-success"></div>
                </div>
                <span>More</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LatestAchievements;