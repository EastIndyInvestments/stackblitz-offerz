import React, { ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, label, value }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
      <div className="flex items-center">
        <div className="text-blue-200">{icon}</div>
        <div className="ml-3">
          <div className="text-sm text-blue-200">{label}</div>
          <div className="text-xl font-bold text-white">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;