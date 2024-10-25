import React from 'react';
import { Shield, Swords, Target } from 'lucide-react';
import { Position } from '../types/athlete';

interface PositionsListProps {
  positions: Position[];
}

const PositionsList: React.FC<PositionsListProps> = ({ positions }) => {
  const getIcon = (type: Position['type']) => {
    switch (type) {
      case 'offense':
        return <Swords className="w-4 h-4" />;
      case 'defense':
        return <Shield className="w-4 h-4" />;
      case 'special_teams':
        return <Target className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: Position['type']) => {
    switch (type) {
      case 'offense':
        return 'Offensive';
      case 'defense':
        return 'Defensive';
      case 'special_teams':
        return 'Special Teams';
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {positions.map((position, index) => (
        <div
          key={index}
          className="flex items-center bg-white/10 px-3 py-1.5 rounded-full text-sm text-white"
        >
          {getIcon(position.type)}
          <span className="ml-2">
            <span className="text-blue-200">{getTypeLabel(position.type)}:</span>{' '}
            {position.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PositionsList;