import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Technical Recruiter",
      company: "TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `Shiva's communication throughout our interview process was exceptional. He provided clear, detailed responses to technical questions and demonstrated genuine enthusiasm for problem-solving. His ability to explain complex concepts in simple terms shows strong leadership potential.`,
      rating: 5,
      date: "2 weeks ago",
      category: "Communication"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Lead Developer",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Working with Shiva on our open-source project was a pleasure. He's responsive, collaborative, and brings fresh perspectives to technical challenges. His code reviews are thorough and constructive, making the entire team better.`,
      rating: 5,
      date: "1 month ago",
      category: "Collaboration"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Computer Science Professor",
      company: "State University",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `Shiva consistently demonstrated professionalism in all our academic interactions. His project presentations were well-structured, and he actively contributed to class discussions. He has the communication skills needed for senior technical roles.`,
      rating: 5,
      date: "3 months ago",
      category: "Professionalism"
    },
    {
      id: 4,
      name: "James Park",
      role: "Startup Founder",
      company: "DataFlow Systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `Shiva's approach to client communication is outstanding. He keeps stakeholders informed, manages expectations well, and delivers on promises. His technical explanations help non-technical team members understand complex systems.`,
      rating: 5,
      date: "2 months ago",
      category: "Client Relations"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Project Manager",
      company: "AgileWorks",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      content: `Shiva's professional demeanor and collaborative spirit make him an ideal team member. He's proactive in communication, meets deadlines consistently, and contributes positively to team dynamics. A true professional.`,
      rating: 5,
      date: "6 weeks ago",
      category: "Team Dynamics"
    }
  ];

  const categories = [
    { name: 'All', count: testimonials?.length },
    { name: 'Communication', count: testimonials?.filter(t => t?.category === 'Communication')?.length },
    { name: 'Collaboration', count: testimonials?.filter(t => t?.category === 'Collaboration')?.length },
    { name: 'Professionalism', count: testimonials?.filter(t => t?.category === 'Professionalism')?.length },
    { name: 'Client Relations', count: testimonials?.filter(t => t?.category === 'Client Relations')?.length },
    { name: 'Team Dynamics', count: testimonials?.filter(t => t?.category === 'Team Dynamics')?.length }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonials 
    : testimonials?.filter(t => t?.category === selectedCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials?.length) % filteredTestimonials?.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="bg-card rounded-2xl shadow-elevation-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Professional Testimonials</h2>
        <p className="text-text-secondary">
          Feedback from colleagues, collaborators, and industry professionals about communication skills, 
          work ethic, and professional demeanor.
        </p>
      </div>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <button
              key={category?.name}
              onClick={() => {
                setSelectedCategory(category?.name);
                setCurrentTestimonial(0);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category?.name
                  ? 'bg-accent text-white shadow-elevation'
                  : 'bg-muted text-text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {category?.name} ({category?.count})
            </button>
          ))}
        </div>
      </div>
      {/* Featured Testimonial */}
      {filteredTestimonials?.length > 0 && (
        <div className="mb-8">
          <div className="relative bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-8 border border-accent/20">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-accent/20">
                  <Image
                    src={filteredTestimonials?.[currentTestimonial]?.avatar}
                    alt={filteredTestimonials?.[currentTestimonial]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    {renderStars(filteredTestimonials?.[currentTestimonial]?.rating)}
                  </div>
                  <blockquote className="text-lg text-text-primary leading-relaxed italic">
                    "{filteredTestimonials?.[currentTestimonial]?.content}"
                  </blockquote>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      {filteredTestimonials?.[currentTestimonial]?.name}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {filteredTestimonials?.[currentTestimonial]?.role} at {filteredTestimonials?.[currentTestimonial]?.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">
                      {filteredTestimonials?.[currentTestimonial]?.category}
                    </span>
                    <p className="text-text-muted text-xs mt-1">
                      {filteredTestimonials?.[currentTestimonial]?.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            {filteredTestimonials?.length > 1 && (
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                <button
                  onClick={prevTestimonial}
                  className="flex items-center space-x-2 px-4 py-2 text-text-secondary hover:text-accent transition-colors"
                >
                  <Icon name="ChevronLeft" size={16} />
                  <span className="text-sm">Previous</span>
                </button>
                
                <div className="flex space-x-2">
                  {filteredTestimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-accent' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="flex items-center space-x-2 px-4 py-2 text-text-secondary hover:text-accent transition-colors"
                >
                  <span className="text-sm">Next</span>
                  <Icon name="ChevronRight" size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* All Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTestimonials?.map((testimonial, index) => (
          <div
            key={testimonial?.id}
            className={`p-6 border rounded-xl transition-all duration-300 cursor-pointer ${
              index === currentTestimonial
                ? 'border-accent bg-accent/5 shadow-elevation'
                : 'border-border hover:border-accent/50 hover:shadow-elevation'
            }`}
            onClick={() => setCurrentTestimonial(index)}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-text-primary truncate">{testimonial?.name}</h4>
                <p className="text-text-secondary text-sm truncate">
                  {testimonial?.role} at {testimonial?.company}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  {renderStars(testimonial?.rating)}
                </div>
              </div>
            </div>
            
            <p className="text-text-secondary text-sm line-clamp-3 mb-3">
              "{testimonial?.content}"
            </p>
            
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-2 py-1 bg-muted text-text-secondary text-xs rounded">
                {testimonial?.category}
              </span>
              <span className="text-text-muted text-xs">{testimonial?.date}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Summary Stats */}
      <div className="mt-8 p-6 bg-muted rounded-xl">
        <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">
          Professional Feedback Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-accent mb-1">5.0</div>
            <div className="text-sm text-text-secondary">Average Rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">100%</div>
            <div className="text-sm text-text-secondary">Positive Feedback</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">15+</div>
            <div className="text-sm text-text-secondary">Collaborations</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">24h</div>
            <div className="text-sm text-text-secondary">Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;