import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const QuickConnect = () => {
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const meetingTypes = [
    {
      id: 'coffee-chat',
      icon: 'Coffee',
      title: 'Coffee Chat',
      duration: '15-20 minutes',
      description: 'Informal conversation about career, industry trends, or mutual interests',
      availability: 'Flexible scheduling',
      format: 'Video call or phone',
      color: 'bg-amber-500',
      popular: false
    },
    {
      id: 'technical-discussion',
      icon: 'Code',
      title: 'Technical Discussion',
      duration: '30-45 minutes',
      description: 'Deep dive into specific technologies, project architecture, or problem-solving approaches',
      availability: 'Weekdays preferred',
      format: 'Video call with screen sharing',
      color: 'bg-blue-500',
      popular: true
    },
    {
      id: 'interview',
      icon: 'Users',
      title: 'Formal Interview',
      duration: '45-60 minutes',
      description: 'Structured interview for job opportunities with technical assessment if needed',
      availability: 'Business hours only',
      format: 'Video call or in-person',
      color: 'bg-green-500',
      popular: false
    },
    {
      id: 'collaboration',
      icon: 'Handshake',
      title: 'Project Collaboration',
      duration: '30-45 minutes',
      description: 'Discuss potential partnerships, open-source contributions, or joint ventures',
      availability: 'Flexible scheduling',
      format: 'Video call with document sharing',
      color: 'bg-purple-500',
      popular: false
    }
  ];

  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '12:00 PM', available: false },
    { time: '2:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '5:00 PM', available: false }
  ];

  const handleBookMeeting = (meetingType) => {
    // Simulate booking process
    setSelectedMeeting(meetingType);
    setTimeout(() => {
      alert(`Meeting request sent! You'll receive a calendar invitation for your ${meetingType?.title?.toLowerCase()} within 5 minutes.`);
      setSelectedMeeting(null);
    }, 1000);
  };

  return (
    <div className="bg-card rounded-2xl shadow-elevation-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Quick Connect</h2>
        <p className="text-text-secondary">
          Schedule a meeting that fits your needs and timeline. All meetings are conducted professionally 
          with clear agendas and follow-up actions.
        </p>
      </div>
      {/* Meeting Types */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {meetingTypes?.map((meeting) => (
          <div
            key={meeting?.id}
            className="relative p-6 border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-elevation"
          >
            {meeting?.popular && (
              <div className="absolute -top-2 right-4 bg-accent text-white text-xs font-medium px-2 py-1 rounded">
                Most Popular
              </div>
            )}

            <div className="flex items-start space-x-4 mb-4">
              <div className={`p-3 rounded-lg ${meeting?.color} text-white`}>
                <Icon name={meeting?.icon} size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text-primary mb-1">
                  {meeting?.title}
                </h3>
                <p className="text-sm text-text-secondary mb-2">
                  {meeting?.duration} • {meeting?.format}
                </p>
                <p className="text-text-secondary text-sm">
                  {meeting?.description}
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Calendar" size={16} className="text-text-muted" />
                <span className="text-text-secondary">{meeting?.availability}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Video" size={16} className="text-text-muted" />
                <span className="text-text-secondary">{meeting?.format}</span>
              </div>
            </div>

            <Button
              variant={meeting?.popular ? "default" : "outline"}
              fullWidth
              onClick={() => handleBookMeeting(meeting)}
              loading={selectedMeeting?.id === meeting?.id}
              iconName="Calendar"
              iconPosition="left"
            >
              {selectedMeeting?.id === meeting?.id ? 'Booking...' : 'Schedule Now'}
            </Button>
          </div>
        ))}
      </div>
      {/* Available Time Slots */}
      <div className="bg-muted rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Clock" size={20} className="mr-2" />
          Today's Availability (EST)
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {timeSlots?.map((slot, index) => (
            <button
              key={index}
              disabled={!slot?.available}
              className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                slot?.available
                  ? 'bg-white border border-border hover:border-accent hover:bg-accent/5 text-text-primary' :'bg-gray-100 border border-gray-200 text-text-muted cursor-not-allowed'
              }`}
            >
              {slot?.time}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-text-secondary">Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-text-secondary">Booked</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => window.open('https://calendly.com/shiva-kumar-dev', '_blank')}
          >
            View Full Calendar
          </Button>
        </div>
      </div>
      {/* Meeting Guidelines */}
      <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Info" size={20} className="mr-2 text-blue-600" />
          Meeting Guidelines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p className="font-medium text-text-primary">Before the Meeting:</p>
            <ul className="text-text-secondary space-y-1">
              <li>• Share agenda or key topics</li>
              <li>• Test your video/audio setup</li>
              <li>• Prepare specific questions</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-text-primary">During the Meeting:</p>
            <ul className="text-text-secondary space-y-1">
              <li>• Professional environment</li>
              <li>• Active participation encouraged</li>
              <li>• Screen sharing available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickConnect;