import React from 'react';

interface YearSelectorProps {
  selectedYear: string;
  onChange: (year: string) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({ selectedYear, onChange }) => {
  const years = ['freshman', 'sophomore', 'junior', 'senior'];

  return (
    <div className="flex justify-center space-x-2 my-6">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onChange(year)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedYear === year
              ? 'bg-blue-500 text-white'
              : 'bg-white/10 text-blue-200 hover:bg-white/20'
          }`}
        >
          {year.charAt(0).toUpperCase() + year.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default YearSelector;