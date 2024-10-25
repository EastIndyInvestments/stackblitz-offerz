import React, { useState } from 'react';
import { Trophy, Timer, Weight, Ruler, Medal, Youtube, School, Calendar } from 'lucide-react';
import ProfileHeader from './components/ProfileHeader';
import StatsCard from './components/StatsCard';
import YearSelector from './components/YearSelector';
import HudlEmbed from './components/HudlEmbed';
import CombineResults from './components/CombineResults';
import YearlyStats from './components/YearlyStats';
import PositionsList from './components/PositionsList';
import SchoolOffers from './components/SchoolOffers';
import SchoolInterests from './components/SchoolInterests';
import UpcomingEvents from './components/UpcomingEvents';
import AdminPortal from './pages/AdminPortal';
import { useAthlete } from './context/AthleteContext';

function App() {
  const [selectedYear, setSelectedYear] = useState('senior');
  const [isAdmin, setIsAdmin] = useState(false);
  const { athlete } = useAthlete();

  if (isAdmin) {
    return <AdminPortal onExitAdmin={() => setIsAdmin(false)} />;
  }

  // Use senior year stats for consistent display of height, weight, and 40 time
  const baseStats = athlete.stats.senior;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsAdmin(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Admin Portal
          </button>
        </div>

        <ProfileHeader 
          name={athlete.name}
          positions={athlete.positions}
          school={athlete.school}
          graduationYear={athlete.graduationYear}
          profileImage={athlete.profileImage}
          social={athlete.social}
        />

        <PositionsList positions={athlete.positions} />

        <div className="grid grid-cols-3 gap-4 mt-6 mb-6">
          <StatsCard 
            icon={<Ruler className="w-5 h-5" />}
            label="Height"
            value={baseStats.height}
          />
          <StatsCard 
            icon={<Weight className="w-5 h-5" />}
            label="Weight"
            value={baseStats.weight}
          />
          <StatsCard 
            icon={<Timer className="w-5 h-5" />}
            label="40 Time"
            value={baseStats.fortyTime}
          />
        </div>

        <YearSelector 
          selectedYear={selectedYear}
          onChange={setSelectedYear}
        />

        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Season Stats</h2>
          <YearlyStats stats={athlete.stats[selectedYear]?.gameStats} />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <School className="w-5 h-5 mr-2" />
            Scholarship Offers
          </h2>
          <SchoolOffers offers={athlete.offers} />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Trophy className="w-5 h-5 mr-2" />
            Schools of Interest
          </h2>
          <SchoolInterests interests={athlete.interests} />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Upcoming Events
          </h2>
          <UpcomingEvents events={athlete.upcomingEvents} />
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Medal className="w-5 h-5 mr-2" />
            Combines & Camps
          </h2>
          <CombineResults combines={athlete.stats[selectedYear]?.combines || []} />
        </div>

        {athlete.stats[selectedYear]?.hudlUrl && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Youtube className="w-5 h-5 mr-2" />
              Highlights
            </h2>
            <HudlEmbed url={athlete.stats[selectedYear].hudlUrl} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;