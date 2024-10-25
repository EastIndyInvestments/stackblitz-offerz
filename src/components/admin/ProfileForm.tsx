import React, { useState } from 'react';
import { Camera, Plus, Trash2 } from 'lucide-react';
import { useAthlete } from '../../context/AthleteContext';
import { Position } from '../../types/athlete';

const ProfileForm: React.FC = () => {
  const { athlete, updateAthlete } = useAthlete();
  const [positions, setPositions] = useState<Position[]>(athlete.positions);
  const [social, setSocial] = useState(athlete.social);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateAthlete({
      [e.target.name]: e.target.value
    });
  };

  const handlePositionChange = (index: number, field: keyof Position, value: string) => {
    const newPositions = positions.map((pos, i) => 
      i === index ? { ...pos, [field]: value } : pos
    );
    setPositions(newPositions);
  };

  const addPosition = () => {
    setPositions(prev => [...prev, { type: 'offense', name: '' }]);
  };

  const removePosition = (index: number) => {
    setPositions(prev => prev.filter((_, i) => i !== index));
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSocial = {
      ...social,
      [e.target.name]: e.target.value
    };
    setSocial(newSocial);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateAthlete({
      positions,
      social
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-start space-x-6">
        <div className="relative group">
          <img
            src={athlete.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-lg object-cover"
          />
          <button
            type="button"
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white rounded-lg"
          >
            <Camera className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-200">Name</label>
            <input
              type="text"
              name="name"
              value={athlete.name}
              onChange={handleProfileChange}
              className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-200">School</label>
            <input
              type="text"
              name="school"
              value={athlete.school}
              onChange={handleProfileChange}
              className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-200">Graduation Year</label>
            <select
              name="graduationYear"
              value={athlete.graduationYear}
              onChange={handleProfileChange}
              className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            >
              {[2024, 2025, 2026, 2027].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-200 mb-2">Positions</label>
        <div className="space-y-2">
          {positions.map((position, index) => (
            <div key={index} className="flex items-center space-x-2">
              <select
                value={position.type}
                onChange={(e) => handlePositionChange(index, 'type', e.target.value as Position['type'])}
                className="block w-1/4 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
              >
                <option value="offense">Offense</option>
                <option value="defense">Defense</option>
                <option value="special_teams">Special Teams</option>
              </select>
              <input
                type="text"
                value={position.name}
                onChange={(e) => handlePositionChange(index, 'name', e.target.value)}
                className="block w-2/3 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
              />
              <button
                type="button"
                onClick={() => removePosition(index)}
                className="p-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addPosition}
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Position
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-200 mb-2">Social Media</label>
        <div className="space-y-2">
          <input
            type="text"
            name="twitter"
            value={social.twitter}
            onChange={handleSocialChange}
            placeholder="Twitter URL"
            className="block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
          />
          <input
            type="text"
            name="instagram"
            value={social.instagram}
            onChange={handleSocialChange}
            placeholder="Instagram URL"
            className="block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
          />
          <input
            type="text"
            name="hudl"
            value={social.hudl}
            onChange={handleSocialChange}
            placeholder="Hudl URL"
            className="block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
          />
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

export default ProfileForm;