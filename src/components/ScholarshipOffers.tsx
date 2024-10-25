import React from 'react';
import { School } from '../types/athlete';

interface ScholarshipOffersProps {
  offers: School[];
}

const ScholarshipOffers: React.FC<ScholarshipOffersProps> = ({ offers }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {offers.map((school, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center text-center relative"
        >
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Offer
          </div>
          <img
            src={school.logo}
            alt={`${school.name} logo`}
            className="w-16 h-16 object-contain mb-3"
          />
          <h3 className="font-bold text-white text-sm mb-1">{school.name}</h3>
          <p className="text-xs text-blue-200">{school.division}</p>
          {school.conference && (
            <p className="text-xs text-blue-200">{school.conference}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ScholarshipOffers;