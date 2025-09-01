import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Computer Science Professor",
      institution: "University of Technology",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      content: `Shiva has consistently demonstrated exceptional problem-solving abilities and a deep understanding of computer science fundamentals. His projects showcase not only technical proficiency but also creative thinking and attention to detail. I'm confident he will excel in any professional environment.`,
      relationship: "Academic Mentor",
      date: "December 2024"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Senior Software Engineer",
      institution: "Tech Solutions Inc.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      content: `During our collaboration on the university-industry project, Shiva impressed me with his ability to quickly grasp complex requirements and deliver high-quality code. His full-stack development skills and data science knowledge make him a valuable team member.`,
      relationship: "Industry Collaborator",
      date: "November 2024"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Team Lead & Fellow Student",
      institution: "Computer Science Department",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      content: `Working with Shiva on multiple group projects has been an absolute pleasure. He brings innovative solutions to challenging problems and is always willing to help team members. His communication skills and technical expertise make him an ideal collaborator.`,
      relationship: "Peer Collaborator",
      date: "October 2024"
    },
    {
      id: 4,
      name: "Prof. David Kumar",
      role: "Data Science Department Head",
      institution: "University of Technology",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      content: `Shiva's work in data science projects has been outstanding. His machine learning implementations are well-structured and his analytical approach to problem-solving is impressive. He has the potential to make significant contributions to the field.`,
      relationship: "Academic Supervisor",
      date: "September 2024"
    }
  ];

  const collaborationHighlights = [
    {
      project: "E-Commerce Analytics Platform",
      collaborators: 4,
      role: "Full-Stack Developer & Data Analyst",
      outcome: "Successfully deployed with 40% performance improvement",
      technologies: ["React", "Python", "MongoDB"]
    },
    {
      project: "Smart Campus Management System",
      collaborators: 6,
      role: "Backend Developer & Team Coordinator",
      outcome: "Adopted by university administration",
      technologies: ["Node.js", "PostgreSQL", "React"]
    },
    {
      project: "Healthcare Data Analysis Tool",
      collaborators: 3,
      role: "Data Scientist & ML Engineer",
      outcome: "Published research paper with 92% accuracy",
      technologies: ["Python", "TensorFlow", "Pandas"]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Social Proof & Testimonials
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Recommendations from professors, industry professionals, and peer collaborators 
            who have witnessed my work and growth firsthand
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Testimonial */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-elevation-lg border border-border mb-12"
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-text-secondary leading-relaxed italic">
                  "{testimonials?.[activeTestimonial]?.content}"
                </blockquote>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-elevation">
                      <Image
                        src={testimonials?.[activeTestimonial]?.avatar}
                        alt={testimonials?.[activeTestimonial]?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">
                        {testimonials?.[activeTestimonial]?.name}
                      </div>
                      <div className="text-sm text-text-muted">
                        {testimonials?.[activeTestimonial]?.role}
                      </div>
                      <div className="text-xs text-accent">
                        {testimonials?.[activeTestimonial]?.institution}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">
                      {testimonials?.[activeTestimonial]?.relationship}
                    </div>
                    <div className="text-xs text-text-muted">
                      {testimonials?.[activeTestimonial]?.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary mb-4">All Recommendations</h3>
                {testimonials?.map((testimonial, index) => (
                  <motion.button
                    key={testimonial?.id}
                    onClick={() => setActiveTestimonial(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeTestimonial === index
                        ? 'bg-primary text-primary-foreground shadow-elevation'
                        : 'bg-muted hover:bg-muted/80 text-text-secondary hover:text-primary'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial?.avatar}
                          alt={testimonial?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`font-medium text-sm truncate ${
                          activeTestimonial === index ? 'text-primary-foreground' : 'text-primary'
                        }`}>
                          {testimonial?.name}
                        </div>
                        <div className={`text-xs truncate ${
                          activeTestimonial === index ? 'text-primary-foreground/80' : 'text-text-muted'
                        }`}>
                          {testimonial?.role}
                        </div>
                      </div>
                      {activeTestimonial === index && (
                        <Icon name="ChevronRight" size={16} className="text-primary-foreground" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Collaboration Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Collaboration Highlights
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Successful team projects demonstrating leadership, technical skills, and collaborative excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {collaborationHighlights?.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-card rounded-xl p-6 shadow-elevation hover:shadow-elevation-lg transition-all duration-300 border border-border"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-elevation">
                        <Icon name="Users" size={24} className="text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-text-muted">Team Size</div>
                        <div className="text-lg font-bold text-primary">{project?.collaborators}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">{project?.project}</h4>
                      <p className="text-sm text-accent font-medium mb-2">{project?.role}</p>
                      <p className="text-sm text-text-secondary">{project?.outcome}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-primary">Technologies:</div>
                      <div className="flex flex-wrap gap-1">
                        {project?.technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-card rounded-2xl p-8 shadow-elevation border border-border"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-primary mb-2">
                Professional Network & Recognition
              </h3>
              <p className="text-text-secondary">
                Building meaningful connections and earning recognition in the tech community
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-elevation">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-text-secondary">Professional Connections</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-elevation">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">8+</div>
                <div className="text-sm text-text-secondary">Recommendations</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-elevation">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
                <div className="text-sm text-text-secondary">Average Rating</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-elevation">
                  <Icon name="Trophy" size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">12+</div>
                <div className="text-sm text-text-secondary">Project Collaborations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;