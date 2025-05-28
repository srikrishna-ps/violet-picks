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
      className={`album-card glow-border cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg ${isSelected ? 'selected' : ''}`}
      style={{
        backgroundImage: isSelected ? `url(${coverImage})` : 'none',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: isSelected ? '#121212' : '#181818',
        animation: 'fade-in 0.7s cubic-bezier(0.4,0,0.2,1) both',
        animationDelay: `${index * 80}ms`,
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700" />
      )}

      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {!isSelected ? (
          <div className="text-center">
            <h2 className="font-outfit font-black text-4xl text-[#B0B0B0]">
              #{albumNumber}
            </h2>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Removed feeling text */}
          </div>
        )}

        <div className={`transition-all duration-700 transform ${isSelected ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="font-outfit font-bold text-2xl text-[#E0E0E0] mb-1">
            {title}
          </h3>
          <p className="text-[#B0B0B0] font-medium text-lg">
            {artist}
          </p>
        </div>
      </div>
    </label>
  );
};

export default AlbumCard;
