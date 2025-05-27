
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown } from 'lucide-react';

interface AlbumCardProps {
  title: string;
  artist: string;
  coverImage: string;
  genres: string[];
  feeling: string;
  description: string;
  delay?: number;
}

const AlbumCard = ({ title, artist, coverImage, genres, feeling, description, delay = 0 }: AlbumCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`album-card group relative bg-card backdrop-blur-sm rounded-3xl border border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-6">
        <div className="aspect-square relative overflow-hidden rounded-2xl mb-4 bg-gradient-to-br from-primary/20 to-secondary/20">
          <img
            src={coverImage}
            alt={`${title} by ${artist}`}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 animate-pulse" />
          )}
        </div>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-outfit font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground font-medium">
              {artist}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {genres.map((genre, index) => (
              <span
                key={genre}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                  index % 3 === 0 
                    ? 'bg-violet-500/20 text-violet-400 hover:bg-violet-500/30'
                    : index % 3 === 1
                    ? 'bg-rose-500/20 text-rose-400 hover:bg-rose-500/30'
                    : 'bg-sky-500/20 text-sky-400 hover:bg-sky-500/30'
                }`}
              >
                #{genre}
              </span>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground italic leading-relaxed font-outfit">
            "{feeling}"
          </p>
        </div>
        
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-float" />
      </div>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full px-6 pb-4 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <span className="font-mono">read more</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-6">
          <div className="border-t border-border pt-4">
            <p className="text-sm text-muted-foreground leading-relaxed font-outfit">
              {description}
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default AlbumCard;
