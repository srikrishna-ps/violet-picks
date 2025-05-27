
import { useState } from 'react';

interface AlbumCardProps {
  title: string;
  artist: string;
  coverImage: string;
  genres: string[];
  feeling: string;
  delay?: number;
}

const AlbumCard = ({ title, artist, coverImage, genres, feeling, delay = 0 }: AlbumCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`album-card group relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-200/50 animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-square relative overflow-hidden rounded-2xl mb-4 bg-gradient-to-br from-violet-100 to-rose-100">
        <img
          src={coverImage}
          alt={`${title} by ${artist}`}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-violet-200 to-rose-200 animate-pulse" />
        )}
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="font-space font-semibold text-lg text-violet-900 group-hover:text-violet-700 transition-colors">
            {title}
          </h3>
          <p className="text-violet-600 font-medium">
            {artist}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {genres.map((genre, index) => (
            <span
              key={genre}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                index % 3 === 0 
                  ? 'bg-violet-100 text-violet-700 hover:bg-violet-200'
                  : index % 3 === 1
                  ? 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                  : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
              }`}
            >
              #{genre}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-violet-700 italic leading-relaxed font-dm">
          "{feeling}"
        </p>
      </div>
      
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-violet-400 to-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-float" />
    </div>
  );
};

export default AlbumCard;
