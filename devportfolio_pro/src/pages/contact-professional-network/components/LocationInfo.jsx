import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LocationInfo = () => {
  const [showMap, setShowMap] = useState(false);

  const currentLocation = {
    city: "Austin",
    state: "Texas",
    country: "United States",
    timezone: "Central Standard Time (CST)",
    coordinates: { lat: 30.2672, lng: -97.7431 }
  };

  const relocationPreferences = [
    {
      region: "North America",
      countries: ["United States", "Canada"],
      preference: "High",
      notes: "Preferred for cultural familiarity and established networks",
      icon: "MapPin",
      color: "text-green-600"
    },
    {
      region: "Europe",
      countries: ["Germany", "Netherlands", "United Kingdom", "Switzerland"],
      preference: "High",
      notes: "Strong tech ecosystem and work-life balance",
      icon: "Globe",
      color: "text-blue-600"
    },
    {
      region: "Asia-Pacific",
      countries: ["Singapore", "Australia", "New Zealand"],
      preference: "Medium",
      notes: "Growing tech markets with English-speaking environments",
      icon: "Compass",
      color: "text-purple-600"
    },
    {
      region: "Remote",
      countries: ["Global"],
      preference: "Very High",
      notes: "Experienced with distributed teams and async communication",
      icon: "Wifi",
      color: "text-accent"
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM CST", available: true },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM CST", available: true, note: "Limited availability" },
    { day: "Sunday", hours: "Emergency only", available: false }
  ];

  const travelAvailability = [
    {
      type: "Business Travel",
      frequency: "Monthly",
      duration: "Up to 1 week",
      regions: "North America, Europe",
      icon: "Plane"
    },
    {
      type: "Conference Speaking",
      frequency: "Quarterly",
      duration: "2-3 days",
      regions: "Global",
      icon: "Mic"
    },
    {
      type: "Client Meetings",
      frequency: "As needed",
      duration: "1-2 days",
      regions: "North America",
      icon: "Users"
    },
    {
      type: "Team Retreats",
      frequency: "Bi-annually",
      duration: "3-5 days",
      regions: "Global",
      icon: "Coffee"
    }
  ];

  return (
    <div className="bg-card rounded-2xl shadow-elevation-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Location & Availability</h2>
        <p className="text-text-secondary">
          Currently based in Austin, Texas with flexibility for relocation and travel. 
          Open to remote work arrangements and international opportunities.
        </p>
      </div>
      {/* Current Location */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="MapPin" size={20} className="mr-2 text-accent" />
          Current Location
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="Home" size={20} className="text-accent" />
                <div>
                  <h4 className="font-semibold text-text-primary">
                    {currentLocation?.city}, {currentLocation?.state}
                  </h4>
                  <p className="text-text-secondary text-sm">{currentLocation?.country}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-muted">Timezone:</span>
                  <p className="text-text-primary font-medium">{currentLocation?.timezone}</p>
                </div>
                <div>
                  <span className="text-text-muted">Local Time:</span>
                  <p className="text-text-primary font-medium">
                    {new Date()?.toLocaleTimeString('en-US', { 
                      timeZone: 'America/Chicago',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                Working Hours
              </h4>
              <div className="space-y-2">
                {workingHours?.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">{schedule?.day}</span>
                    <div className="text-right">
                      <span className={`font-medium ${schedule?.available ? 'text-text-primary' : 'text-text-muted'}`}>
                        {schedule?.hours}
                      </span>
                      {schedule?.note && (
                        <p className="text-xs text-text-muted">{schedule?.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              {showMap ? (
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Austin, Texas Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${currentLocation?.coordinates?.lat},${currentLocation?.coordinates?.lng}&z=12&output=embed`}
                  className="border-0"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowMap(true)}
                    iconName="Map"
                    iconPosition="left"
                  >
                    Show Location Map
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Relocation Preferences */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Globe" size={20} className="mr-2" />
          Relocation Flexibility
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relocationPreferences?.map((pref, index) => (
            <div key={index} className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors">
              <div className="flex items-start space-x-3 mb-3">
                <Icon name={pref?.icon} size={20} className={pref?.color} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-text-primary">{pref?.region}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      pref?.preference === 'Very High' ? 'bg-green-100 text-green-800' :
                      pref?.preference === 'High'? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {pref?.preference}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mb-2">{pref?.notes}</p>
                  <div className="flex flex-wrap gap-1">
                    {pref?.countries?.map((country, idx) => (
                      <span key={idx} className="text-xs bg-muted text-text-secondary px-2 py-1 rounded">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Travel Availability */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Plane" size={20} className="mr-2" />
          Travel Availability
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {travelAvailability?.map((travel, index) => (
            <div key={index} className="p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Icon name={travel?.icon} size={18} className="text-accent" />
                <h4 className="font-semibold text-text-primary">{travel?.type}</h4>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Frequency:</span>
                  <span className="text-text-primary">{travel?.frequency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Duration:</span>
                  <span className="text-text-primary">{travel?.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Regions:</span>
                  <span className="text-text-primary">{travel?.regions}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Contact for Relocation */}
      <div className="p-6 bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl border border-accent/20">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Icon name="MessageSquare" size={24} className="text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Discussing Relocation Opportunities
            </h3>
            <p className="text-text-secondary mb-4">
              Open to discussing relocation packages, visa sponsorship, and timeline flexibility. 
              Happy to provide additional documentation and references as needed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="default"
                size="sm"
                iconName="Mail"
                iconPosition="left"
                onClick={() => window.location.href = 'mailto:shiva.shankar4997@gmail.com?subject=Relocation Opportunity Discussion'}
              >
                Discuss Relocation
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.open('https://calendly.com/shiva-kumar-dev/relocation-discussion', '_blank')}
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;