export interface Position {
  type: 'offense' | 'defense' | 'special_teams';
  name: string;
}

export interface SchoolOffer {
  schoolName: string;
  logoUrl: string;
  offerDate: string;
  status: 'accepted' | 'declined' | 'pending';
  scholarshipType: 'full' | 'partial';
}

export interface School {
  schoolName: string;
  logoUrl: string;
  interestLevel: 'high' | 'medium' | 'low';
}

export interface GameStats {
  receptions?: number;
  yards?: number;
  touchdowns?: number;
  yardsPerCatch?: number;
  tackles?: number;
  interceptions?: number;
}

export interface Combine {
  name: string;
  date: string;
  achievement?: string;
  results?: string;
}

export interface UpcomingEvent {
  name: string;
  date: string;
  location: string;
  type: 'camp' | 'combine' | 'visit' | 'other';
  status: 'registered' | 'pending';
}

export interface YearStats {
  height: string;
  weight: string;
  fortyTime: string;
  hudlUrl: string;
  gameStats: GameStats;
  combines: Combine[];
}

export interface AthleteData {
  name: string;
  positions: Position[];
  school: string;
  graduationYear: number;
  profileImage: string;
  stats: {
    [key: string]: YearStats;
  };
  social: {
    twitter?: string;
    instagram?: string;
    hudl?: string;
  };
  offers: SchoolOffer[];
  interests: School[];
  upcomingEvents: UpcomingEvent[];
}