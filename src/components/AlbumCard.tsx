
import { useState } from 'react';

interface AlbumCardProps {
  title: string;
  artist: string;
  coverImage: string;
  genres: string[];
  feeling: string;
  description: string;
  index: number;
  albumNumber: number;
  isSelected: boolean;
  onSelect: () => void;
}

const AlbumCard = ({ title, artist, coverImage, genres, feeling, description, index, albumNumber, isSelected, onSelect }: AlbumCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <label 
      className={`album-card cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-700 ${
        isSelected ? 'selected' : ''
      }`}
      style={{ 
        backgroundImage: isSelected ? `url(${coverImage})` : 'none',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: isSelected ? 'transparent' : '#2C2C2C'
      }}
    >
      <input 
        type="radio" 
        name={`album-row-${Math.floor(index / 5)}`}
        className="opacity-0 absolute inset-0" 
        checked={isSelected}
        onChange={onSelect}
      />
      
      {isSelected && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      )}
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
        {!isSelected ? (
          <div className="text-center">
            <h2 className="font-outfit font-black text-4xl text-[#FFC1CC]">
              #{albumNumber}
            </h2>
          </div>
        ) : (
          <div className="space-y-3 text-center">
            <div>
              <h3 className="font-outfit font-bold text-xl text-white">
                {title}
              </h3>
              <p className="text-white/80 font-medium">
                {artist}
              </p>
            </div>
          </div>
        )}
      </div>
    </label>
  );
};

export default AlbumCard;
