import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface Combine {
  name: string;
  date: string;
  achievement: string;
}

const StatsForm: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('senior');
  const [stats, setStats] = useState({
    height: "6'2\"",
    weight: "185 lbs",
    fortyTime: "4.45s",
    receptions: "74",
    yards: "1200",
    touchdowns: "15",
    yardsPerCatch: "16.2"
  });
  const [combines, setCombines] = useState<Combine[]>([
    { name: 'Elite Camp', date: '2023-06-15', achievement: 'MVP' },
    { name: 'State Combine', date: '2023-07-01', achievement: 'Top Performer' }
  ]);

  const handleStatsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStats(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCombineChange = (index: number, field: keyof Combine, value: string) => {
    setCombines(prev => prev.map((combine, i) => 
      i === index ? { ...combine, [field]: value } : combine
    ));
  };

  const addCombine = () => {
    setCombines(prev => [...prev, { name: '', date: '', achievement: '' }]);
  };

  const removeCombine = (index: number) => {
    setCombines(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ selectedYear, stats, combines });
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex space-x-4">
        {['freshman', 'sophomore', 'junior', 'senior'].map((year) => (
          <button
            type="button"
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedYear === year
                ? 'bg-blue-600 text-white'
                : 'bg-white/10 text-blue-200 hover:bg-white/20'
            }`}
          >
            {year.charAt(0).toUpperCase() + year.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-blue-200">Height</label>
          <input
            type="text"
            name="height"
            value={stats.height}
            onChange={handleStatsChange}
            className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            placeholder="6'2&quot;"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-200">Weight</label>
          <input
            type="text"
            name="weight"
            value={stats.weight}
            onChange={handleStatsChange}
            className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            placeholder="185 lbs"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-200">40 Time</label>
          <input
            type="text"
            name="fortyTime"
            value={stats.fortyTime}
            onChange={handleStatsChange}
            className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            placeholder="4.45s"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-white mb-4">Game Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-200">Receptions</label>
            <input
              type="number"
              name="receptions"
              value={stats.receptions}
              onChange={handleStatsChange}
              className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-200">Yards</label>
            <input
              type="number"
              name="yards"
              value={stats.yards}
              onChange={handleStatsChange}
              className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-200">Touchdowns</label>
            <input
              type="number"
              name="touchdowns"
              value={stats.touchdowns}
              onChange={handleStatsChange}
              className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-200">Yards Per Catch</label>
            <input
              type="number"
              step="0.1"
              name="yardsPerCatch"
              value={stats.yardsPerCatch}
              onChange={handleStatsChange}
              className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-white mb-4">Combines & Camps</h3>
        <div className="space-y-4">
          {combines.map((combine, index) => (
            <div key={index} className="flex items-center space-x-4">
              <input
                type="text"
                value={combine.name}
                onChange={(e) => handleCombineChange(index, 'name', e.target.value)}
                className="flex-1 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
                placeholder="Combine/Camp Name"
              />
              <input
                type="date"
                value={combine.date}
                onChange={(e) => handleCombineChange(index, 'date', e.target.value)}
                className="w-32 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
              />
              <input
                type="text"
                value={combine.achievement}
                onChange={(e) => handleCombineChange(index, 'achievement', e.target.value)}
                placeholder="Achievement"
                className="flex-1 rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
              />
              <button
                type="button"
                onClick={() => removeCombine(index)}
                className="p-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addCombine}
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Combine/Camp
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

export default StatsForm;