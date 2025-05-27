
import { useState } from 'react';
import { Heart, ExternalLink } from 'lucide-react';

interface Album {
  id: number;
  title: string;
  artist: string;
  coverImage: string;
  genres: string[];
  feeling: string;
  year: string;
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

const albums: Album[] = [
  {
    id: 1,
    title: "Immunity",
    artist: "Clairo",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
    genres: ["bedroom pop", "indie", "dreamy"],
    feeling: "soft mornings and golden hour feelings, like floating through a pastel dream",
    year: "2019",
    size: "large"
  },
  {
    id: 2,
    title: "Melodrama",
    artist: "Lorde",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop",
    genres: ["alt pop", "electro", "moody"],
    feeling: "teenage emotions turned into pure art, every track hits different",
    year: "2017",
    size: "medium"
  },
  {
    id: 3,
    title: "Punisher",
    artist: "Phoebe Bridgers",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
    genres: ["indie folk", "sad girl", "ethereal"],
    feeling: "vulnerability wrapped in haunting melodies, absolutely devastating",
    year: "2020",
    size: "tall"
  },
  {
    id: 4,
    title: "Flower Boy",
    artist: "Tyler, The Creator",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
    genres: ["hip hop", "experimental", "colorful"],
    feeling: "a sunny day in musical form, creative genius meets pure joy",
    year: "2017",
    size: "wide"
  },
  {
    id: 5,
    title: "Ctrl",
    artist: "SZA",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
    genres: ["r&b", "alternative", "honest"],
    feeling: "raw emotions and silky vocals, the soundtrack to growing up",
    year: "2017",
    size: "medium"
  },
  {
    id: 6,
    title: "Norman F*cking Rockwell!",
    artist: "Lana Del Rey",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
    genres: ["dream pop", "americana", "cinematic"],
    feeling: "vintage glamour meets modern melancholy, utterly mesmerizing",
    year: "2019",
    size: "small"
  },
  {
    id: 7,
    title: "Blonde",
    artist: "Frank Ocean",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
    genres: ["alt r&b", "experimental", "emotional"],
    feeling: "a masterpiece of vulnerability, every listen reveals new layers",
    year: "2016",
    size: "medium"
  },
  {
    id: 8,
    title: "When We All Fall Asleep",
    artist: "Billie Eilish",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop",
    genres: ["alt pop", "dark", "innovative"],
    feeling: "whispered secrets and bass drops, redefining what pop can be",
    year: "2019",
    size: "small"
  },
  {
    id: 9,
    title: "MAGDALENE",
    artist: "FKA twigs",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
    genres: ["art pop", "experimental", "ethereal"],
    feeling: "otherworldly beauty, like listening to emotions in their purest form",
    year: "2019",
    size: "tall"
  },
  {
    id: 10,
    title: "Igor",
    artist: "Tyler, The Creator",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
    genres: ["neo-soul", "experimental", "emotional"],
    feeling: "a love story told through genre-bending soundscapes and raw emotion",
    year: "2019",
    size: "wide"
  }
];

const BentoGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'wide':
        return 'col-span-2 row-span-1';
      case 'tall':
        return 'col-span-1 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-7xl font-black brutalist-text text-gradient mb-6">
            THE COLLECTION
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ten albums that redefined my understanding of music.
            Each one a universe of emotions waiting to be explored.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-4 gap-6 auto-rows-[300px]">
          {albums.map((album, index) => (
            <div
              key={album.id}
              className={`bento-card rounded-3xl p-6 group cursor-pointer relative overflow-hidden ${getSizeClasses(album.size)} animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(album.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={album.coverImage}
                  alt={`${album.title} by ${album.artist}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-400 tracking-wider uppercase">
                      {album.year}
                    </span>
                    <Heart className={`w-5 h-5 transition-colors ${hoveredCard === album.id ? 'text-pink-400' : 'text-gray-500'}`} />
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {album.title}
                    </h3>
                    <p className="text-gray-300 font-medium">
                      {album.artist}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {album.genres.slice(0, 3).map((genre) => (
                      <span
                        key={genre}
                        className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        #{genre}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-400 italic leading-relaxed">
                    "{album.feeling}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              {hoveredCard === album.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
