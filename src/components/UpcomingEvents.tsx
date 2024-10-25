import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { UpcomingEvent } from '../types/athlete';

interface UpcomingEventsProps {
  events: UpcomingEvent[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  const getEventTypeColor = (type: UpcomingEvent['type']) => {
    switch (type) {
      case 'camp':
        return 'bg-green-500';
      case 'combine':
        return 'bg-blue-500';
      case 'visit':
        return 'bg-purple-500';
      case 'other':
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-lg p-4"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-white">{event.name}</h3>
              <div className="flex items-center text-sm text-blue-200 mt-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-sm text-blue-200 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{event.location}</span>
              </div>
            </div>
            <div className="flex items-center">
              <span
                className={`${getEventTypeColor(
                  event.type
                )} text-white text-xs px-2 py-1 rounded-full`}
              >
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
              <span
                className={`ml-2 text-xs px-2 py-1 rounded-full ${
                  event.status === 'registered'
                    ? 'bg-green-500 text-white'
                    : 'bg-yellow-500 text-white'
                }`}
              >
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;