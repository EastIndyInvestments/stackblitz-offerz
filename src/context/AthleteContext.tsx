import React, { createContext, useContext, useState } from 'react';
import { AthleteData } from '../types/athlete';

const defaultAthleteData: AthleteData = {
  name: "Marcus Johnson",
  positions: [
    { type: 'offense', name: 'Wide Receiver' },
    { type: 'defense', name: 'Cornerback' },
    { type: 'special_teams', name: 'Punt Returner' }
  ],
  school: "Central High School",
  graduationYear: 2024,
  profileImage: "https://images.unsplash.com/photo-1628891890467-b79de80b8f17?w=800&auto=format&fit=crop&q=60",
  stats: {
    senior: {
      height: "6'2\"",
      weight: "185 lbs",
      fortyTime: "4.45s",
      hudlUrl: "https://www.hudl.com/embed/video/3/1234567/abcdef",
      gameStats: {
        receptions: 74,
        yards: 1200,
        touchdowns: 15,
        yardsPerCatch: 16.2,
        tackles: 45,
        interceptions: 3
      },
      combines: [
        { name: "Elite Camp", date: "June 2023", achievement: "MVP" },
        { name: "State Combine", date: "July 2023", results: "Top Performer" }
      ]
    }
  },
  social: {
    twitter: "https://twitter.com/athlete",
    instagram: "https://instagram.com/athlete",
    hudl: "https://hudl.com/athlete"
  },
  offers: [
    {
      schoolName: "University of Michigan",
      logoUrl: "https://example.com/michigan.png",
      offerDate: "2024-02-15",
      status: "pending",
      scholarshipType: "full"
    }
  ],
  interests: [
    {
      schoolName: "Ohio State",
      logoUrl: "https://example.com/osu.png",
      interestLevel: "high"
    }
  ],
  upcomingEvents: [
    {
      name: "Elite Football Camp",
      date: "2024-06-15",
      location: "Columbus, OH",
      type: "camp",
      status: "registered"
    }
  ]
};

interface AthleteContextType {
  athlete: AthleteData;
  updateAthlete: (updates: Partial<AthleteData>) => void;
  updateStats: (year: string, updates: Partial<typeof defaultAthleteData.stats.senior>) => void;
}

const AthleteContext = createContext<AthleteContextType | undefined>(undefined);

export const AthleteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [athlete, setAthlete] = useState<AthleteData>(defaultAthleteData);

  const updateAthlete = (updates: Partial<AthleteData>) => {
    setAthlete(prev => ({ ...prev, ...updates }));
  };

  const updateStats = (year: string, updates: Partial<typeof defaultAthleteData.stats.senior>) => {
    setAthlete(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        [year]: {
          ...prev.stats[year],
          ...updates
        }
      }
    }));
  };

  return (
    <AthleteContext.Provider value={{ athlete, updateAthlete, updateStats }}>
      {children}
    </AthleteContext.Provider>
  );
};

export const useAthlete = () => {
  const context = useContext(AthleteContext);
  if (context === undefined) {
    throw new Error('useAthlete must be used within an AthleteProvider');
  }
  return context;
};