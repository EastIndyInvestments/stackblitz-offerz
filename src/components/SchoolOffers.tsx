import React from 'react';
import { Check, Clock, X } from 'lucide-react';

interface SchoolOffer {
  schoolName: string;
  logoUrl: string;
  offerDate: string;
  status: 'accepted' | 'declined' | 'pending';
  scholarshipType: 'full' | 'partial';
}

interface SchoolOffersProps {
  offers: SchoolOffer[];
}

const SchoolOffers: React.FC<SchoolOffersProps> = ({ offers }) => {
  const getStatusIcon = (status: SchoolOffer['status']) => {
    switch (status) {
      case 'accepted':
        return <Check className="w-4 h-4 text-green-400" />;
      case 'declined':
        return <X className="w-4 h-4 text-red-400" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-400" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {offers.map((offer, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center"
        >
          <img
            src={offer.logoUrl}
            alt={offer.schoolName}
            className="w-12 h-12 object-contain"
          />
          <div className="ml-4 flex-1">
            <h3 className="font-bold text-white">{offer.schoolName}</h3>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-blue-200">
                {offer.scholarshipType === 'full' ? 'Full Scholarship' : 'Partial Scholarship'}
              </span>
              <div className="flex items-center">
                <span className="text-sm text-blue-200 mr-2">{offer.offerDate}</span>
                {getStatusIcon(offer.status)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchoolOffers;