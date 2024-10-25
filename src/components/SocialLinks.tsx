import React from 'react';
import { Twitter, Instagram, Youtube } from 'lucide-react';

interface SocialLinksProps {
  social: {
    twitter?: string;
    instagram?: string;
    hudl?: string;
  };
}

const SocialLinks: React.FC<SocialLinksProps> = ({ social }) => {
  return (
    <div className="flex justify-center gap-4">
      {social.twitter && (
        <a
          href={social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full text-white"
        >
          <Twitter className="w-5 h-5" />
        </a>
      )}
      {social.instagram && (
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full text-white"
        >
          <Instagram className="w-5 h-5" />
        </a>
      )}
      {social.hudl && (
        <a
          href={social.hudl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full text-white"
        >
          <Youtube className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}

export default SocialLinks;