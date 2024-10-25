import React from 'react';
import { Twitter, Instagram, Youtube } from 'lucide-react';
import { Position } from '../types/athlete';

interface ProfileHeaderProps {
  name: string;
  positions: Position[];
  school: string;
  graduationYear: number;
  profileImage: string;
  social: {
    twitter?: string;
    instagram?: string;
    hudl?: string;
  };
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  school,
  graduationYear,
  profileImage,
  social,
}) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="relative w-32 h-32 mb-4">
        <img
          src={profileImage}
          alt={name}
          className="w-full h-full object-cover rounded-full border-4 border-white/10"
        />
      </div>
      <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
      <div className="text-blue-200 mb-4">
        {school} • Class of {graduationYear}
      </div>
      <div className="flex space-x-4">
        {social.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
        {social.instagram && (
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        )}
        {social.hudl && (
          <a
            href={social.hudl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;