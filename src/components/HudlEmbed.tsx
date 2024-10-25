import React from 'react';

interface HudlEmbedProps {
  url: string;
}

const HudlEmbed: React.FC<HudlEmbedProps> = ({ url }) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={url}
        className="w-full h-full rounded-lg"
        frameBorder="0"
        allowFullScreen
        title="Hudl Highlights"
      />
    </div>
  );
};

export default HudlEmbed;