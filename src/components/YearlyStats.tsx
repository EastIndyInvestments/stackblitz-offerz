import React from 'react';

interface GameStats {
  receptions?: number;
  yards?: number;
  touchdowns?: number;
  yardsPerCatch?: number;
  tackles?: number;
  interceptions?: number;
}

interface YearlyStatsProps {
  stats?: GameStats;
}

const YearlyStats: React.FC<YearlyStatsProps> = ({ stats }) => {
  if (!stats) {
    return <div className="text-blue-200">No stats available for this year</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
          <div className="text-sm text-blue-200">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </div>
          <div className="text-xl font-bold text-white">{value}</div>
        </div>
      ))}
    </div>
  );
};

export default YearlyStats;