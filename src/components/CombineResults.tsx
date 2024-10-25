import React from 'react';
import { Calendar, Award } from 'lucide-react';

interface Combine {
  name: string;
  date: string;
  achievement?: string;
  results?: string;
}

interface CombineResultsProps {
  combines: Combine[];
}

const CombineResults: React.FC<CombineResultsProps> = ({ combines }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {combines.map((combine, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-lg p-4"
        >
          <h3 className="font-bold text-white">{combine.name}</h3>
          <div className="flex items-center text-sm text-blue-200 mt-1">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{combine.date}</span>
          </div>
          {(combine.achievement || combine.results) && (
            <div className="flex items-center text-sm text-blue-200 mt-1">
              <Award className="w-4 h-4 mr-1" />
              <span>{combine.achievement || combine.results}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CombineResults;