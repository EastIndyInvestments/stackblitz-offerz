import React from 'react';
import { Settings, User, Trophy, Calendar, School, Film, ArrowLeft } from 'lucide-react';
import ProfileForm from '../components/admin/ProfileForm';
import StatsForm from '../components/admin/StatsForm';
import OffersForm from '../components/admin/OffersForm';
import EventsForm from '../components/admin/EventsForm';
import MediaForm from '../components/admin/MediaForm';

interface AdminPortalProps {
  onExitAdmin: () => void;
}

const AdminPortal: React.FC<AdminPortalProps> = ({ onExitAdmin }) => {
  const [activeTab, setActiveTab] = React.useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
    { id: 'stats', label: 'Stats', icon: <Trophy className="w-5 h-5" /> },
    { id: 'offers', label: 'Schools', icon: <School className="w-5 h-5" /> },
    { id: 'events', label: 'Events', icon: <Calendar className="w-5 h-5" /> },
    { id: 'media', label: 'Media', icon: <Film className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={onExitAdmin}
              className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              View Profile
            </button>
            <h1 className="text-3xl font-bold text-white">Admin Portal</h1>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <div className="flex space-x-4 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-blue-200 hover:bg-white/20'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-6">
            {activeTab === 'profile' && <ProfileForm />}
            {activeTab === 'stats' && <StatsForm />}
            {activeTab === 'offers' && <OffersForm />}
            {activeTab === 'events' && <EventsForm />}
            {activeTab === 'media' && <MediaForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;