import React from 'react';

interface School {
  schoolName: string;
  logoUrl: string;
  interestLevel: string;
}

interface SchoolInterestsProps {
  interests: School[];
}

const SchoolInterests: React.FC<SchoolInterestsProps> = ({ interests }) => {
  if (!interests || interests.length === 0) {
    return <div className="text-blue-200">No schools of interest yet</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {interests.map((school, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center text-center"
        >
          <img
            src={school.logoUrl}
            alt={`${school.schoolName} logo`}
            className="w-16 h-16 object-contain mb-3"
          />
          <h3 className="font-bold text-white text-sm mb-1">{school.schoolName}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            school.interestLevel === 'high' 
              ? 'bg-green-500' 
              : school.interestLevel === 'medium' 
                ? 'bg-yellow-500' 
                : 'bg-blue-500'
          } text-white`}>
            {school.interestLevel.charAt(0).toUpperCase() + school.interestLevel.slice(1)} Interest
          </span>
        </div>
      ))}
    </div>
  );
};

export default SchoolInterests;