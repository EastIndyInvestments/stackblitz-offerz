import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { SchoolOffer, School } from '../../types/athlete';

const OffersForm: React.FC = () => {
  const [offers, setOffers] = useState<SchoolOffer[]>([{
    schoolName: 'University of Michigan',
    logoUrl: 'https://example.com/michigan.png',
    offerDate: '2024-02-15',
    status: 'pending',
    scholarshipType: 'full'
  }]);

  const [interests, setInterests] = useState<School[]>([{
    schoolName: 'Ohio State',
    logoUrl: 'https://example.com/osu.png',
    interestLevel: 'high'
  }]);

  const handleOfferChange = (index: number, field: keyof SchoolOffer, value: string) => {
    setOffers(prev => prev.map((offer, i) => 
      i === index ? { ...offer, [field]: value } : offer
    ));
  };

  const handleInterestChange = (index: number, field: keyof School, value: string) => {
    setInterests(prev => prev.map((interest, i) => 
      i === index ? { ...interest, [field]: value } : interest
    ));
  };

  const addOffer = () => {
    setOffers(prev => [...prev, {
      schoolName: '',
      logoUrl: '',
      offerDate: new Date().toISOString().split('T')[0],
      status: 'pending',
      scholarshipType: 'full'
    }]);
  };

  const removeOffer = (index: number) => {
    setOffers(prev => prev.filter((_, i) => i !== index));
  };

  const addInterest = () => {
    setInterests(prev => [...prev, {
      schoolName: '',
      logoUrl: '',
      interestLevel: 'medium'
    }]);
  };

  const removeInterest = (index: number) => {
    setInterests(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ offers, interests });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Scholarship Offers</h3>
        <div className="space-y-4">
          {offers.map((offer, index) => (
            <div key={index} className="flex items-center space-x-4">
              <input
                type="text"
                value={offer.schoolName}
                onChange={(e) => handleOfferChange(index, 'schoolName', e.target.value)}
                className="flex-1 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
                placeholder="School Name"
              />
              <input
                type="text"
                value={offer.logoUrl}
                onChange={(e) => handleOfferChange(index, 'logoUrl', e.target.value)}
                placeholder="Logo URL"
                className="w-64 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
              />
              <select
                value={offer.scholarshipType}
                onChange={(e) => handleOfferChange(index, 'scholarshipType', e.target.value)}
                className="w-40 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
              >
                <option value="full">Full</option>
                <option value="partial">Partial</option>
              </select>
              <select
                value={offer.status}
                onChange={(e) => handleOfferChange(index, 'status', e.target.value)}
                className="w-40 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
              >
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="declined">Declined</option>
              </select>
              <button
                type="button"
                onClick={() => removeOffer(index)}
                className="p-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addOffer}
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Offer
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-white mb-4">Schools of Interest</h3>
        <div className="space-y-4">
          {interests.map((school, index) => (
            <div key={index} className="flex items-center space-x-4">
              <input
                type="text"
                value={school.schoolName}
                onChange={(e) => handleInterestChange(index, 'schoolName', e.target.value)}
                className="flex-1 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
                placeholder="School Name"
              />
              <input
                type="text"
                value={school.logoUrl}
                onChange={(e) => handleInterestChange(index, 'logoUrl', e.target.value)}
                placeholder="Logo URL"
                className="w-64 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
              />
              <select
                value={school.interestLevel}
                onChange={(e) => handleInterestChange(index, 'interestLevel', e.target.value)}
                className="w-40 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <button
                type="button"
                onClick={() => removeInterest(index)}
                className="p-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addInterest}
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add School
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default OffersForm;