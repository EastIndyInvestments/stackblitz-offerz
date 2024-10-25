import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { UpcomingEvent } from '../../types/athlete';

const EventsForm: React.FC = () => {
  const [events, setEvents] = useState<UpcomingEvent[]>([{
    name: 'Elite Football Camp',
    date: '2024-06-15',
    location: 'Columbus, OH',
    type: 'camp',
    status: 'registered'
  }]);

  const handleEventChange = (index: number, field: keyof UpcomingEvent, value: string) => {
    setEvents(prev => prev.map((event, i) => 
      i === index ? { ...event, [field]: value } : event
    ));
  };

  const addEvent = () => {
    setEvents(prev => [...prev, {
      name: '',
      date: '',
      location: '',
      type: 'camp',
      status: 'pending'
    }]);
  };

  const removeEvent = (index: number) => {
    setEvents(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ events });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="grid grid-cols-6 gap-4">
            <input
              type="text"
              value={event.name}
              onChange={(e) => handleEventChange(index, 'name', e.target.value)}
              className="col-span-2 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
              placeholder="Event Name"
            />
            <input
              type="date"
              value={event.date}
              onChange={(e) => handleEventChange(index, 'date', e.target.value)}
              className="rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            />
            <input
              type="text"
              value={event.location}
              onChange={(e) => handleEventChange(index, 'location', e.target.value)}
              placeholder="Location"
              className="rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            />
            <select
              value={event.type}
              onChange={(e) => handleEventChange(index, 'type', e.target.value)}
              className="rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            >
              <option value="camp">Camp</option>
              <option value="combine">Combine</option>
              <option value="visit">Visit</option>
              <option value="other">Other</option>
            </select>
            <div className="flex items-center space-x-2">
              <select
                value={event.status}
                onChange={(e) => handleEventChange(index, 'status', e.target.value)}
                className="flex-1 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
              >
                <option value="registered">Registered</option>
                <option value="pending">Pending</option>
              </select>
              <button
                type="button"
                onClick={() => removeEvent(index)}
                className="p-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addEvent}
          className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Event
        </button>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EventsForm;