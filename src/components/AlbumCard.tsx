
import { useState } from 'react';

interface AlbumCardProps {
  title: string;
  artist: string;
  coverImage: string;
  genres: string[];
  feeling: string;
  description: string;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

const AlbumCard = ({ title, artist, coverImage, genres, feeling, description, index, isSelected, onSelect }: AlbumCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <label 
      className={`album-card cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-700 ${
        isSelected ? 'selected' : ''
      }`}
      style={{ 
        backgroundImage: `url(${coverImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <input 
        type="radio" 
        name="album" 
        className="opacity-0 absolute inset-0" 
        checked={isSelected}
        onChange={onSelect}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <div className="space-y-3">
          <div>
            <h3 className="font-outfit font-bold text-xl text-white">
              {title}
            </h3>
            <p className="text-white/80 font-medium">
              {artist}
            </p>
          </div>
          
          {isSelected && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex flex-wrap gap-2">
                {genres.map((genre, genreIndex) => (
                  <span
                    key={genre}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                      genreIndex % 3 === 0 
                        ? 'bg-violet-500/30 text-violet-200'
                        : genreIndex % 3 === 1
                        ? 'bg-rose-500/30 text-rose-200'
                        : 'bg-sky-500/30 text-sky-200'
                    }`}
                  >
                    #{genre}
                  </span>
                ))}
              </div>
              
              <p className="text-sm text-white/90 italic leading-relaxed font-outfit">
                "{feeling}"
              </p>
              
              <div className="border-t border-white/20 pt-4">
                <p className="text-sm text-white/80 leading-relaxed font-outfit">
                  {description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </label>
  );
};

export default AlbumCard;
