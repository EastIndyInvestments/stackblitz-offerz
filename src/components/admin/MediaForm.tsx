import React from 'react';
import { Plus, Trash2, Upload } from 'lucide-react';

const MediaForm: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Hudl Highlights</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Hudl Video URL"
            className="w-full rounded-lg bg-white/10 border-transparent focus:border-blue-500 focus:bg-white/20 focus:ring-0 text-white"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-white mb-4">Photo Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="relative group aspect-square">
              <img
                src={`https://images.unsplash.com/photo-${index + 1}?w=300&h=300&fit=crop`}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 p-1 bg-red-500/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button className="aspect-square rounded-lg border-2 border-dashed border-blue-500/50 hover:border-blue-500 transition-colors flex flex-col items-center justify-center text-blue-300 hover:text-blue-200">
            <Upload className="w-8 h-8 mb-2" />
            <span className="text-sm">Upload Photo</span>
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default MediaForm;