
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import CustomCursor from '../components/CustomCursor';
import { Music, Heart, Sparkles } from 'lucide-react';

const albums = [
  {
    title: "Immunity",
    artist: "Clairo",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["bedroom pop", "indie", "dreamy"],
    feeling: "soft mornings and golden hour feelings, like floating through a pastel dream",
    description: "Clairo's debut album is a masterclass in bedroom pop aesthetics. Every track feels like a warm hug, with lo-fi production that wraps around you like morning sunlight filtering through curtains."
  },
  {
    title: "Melodrama",
    artist: "Lorde",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    genres: ["alt pop", "electro", "moody"],
    feeling: "teenage emotions turned into pure art, every track hits different",
    description: "Lorde crafted a sonic journey through heartbreak and self-discovery that feels both deeply personal and universally relatable."
  },
  {
    title: "Punisher",
    artist: "Phoebe Bridgers",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["indie folk", "sad girl", "ethereal"],
    feeling: "vulnerability wrapped in haunting melodies, absolutely devastating",
    description: "Phoebe Bridgers delivers raw emotional honesty with surgical precision. Her lyrics cut deep while her melodies provide comfort."
  },
  {
    title: "Flower Boy",
    artist: "Tyler, The Creator",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    genres: ["hip hop", "experimental", "colorful"],
    feeling: "a sunny day in musical form, creative genius meets pure joy",
    description: "Tyler's evolution reaches its peak with this vibrant, genre-blending masterpiece. The production is meticulously crafted, layering jazz samples, synths, and live instruments."
  },
  {
    title: "Ctrl",
    artist: "SZA",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["r&b", "alternative", "honest"],
    feeling: "raw emotions and silky vocals, the soundtrack to growing up",
    description: "SZA's breakthrough album captures the messiness of modern relationships with stunning clarity. Her voice floats over neo-soul production."
  },
  {
    title: "After Hours",
    artist: "The Weeknd",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["r&b", "synth pop", "dark"],
    feeling: "midnight drives and neon lights, pure cinematic excellence",
    description: "The Weeknd's magnum opus blends 80s synth-pop with modern R&B, creating a nocturnal masterpiece that feels both retro and futuristic."
  },
  {
    title: "folklore",
    artist: "Taylor Swift",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    genres: ["indie folk", "alternative", "storytelling"],
    feeling: "cozy cabin vibes with intricate storytelling, absolutely magical",
    description: "Taylor Swift's surprise indie folk masterpiece showcases her storytelling prowess with intimate acoustic arrangements and poetic lyricism."
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    genres: ["r&b", "experimental", "emotional"],
    feeling: "raw vulnerability meets sonic innovation, deeply personal",
    description: "Frank Ocean's highly anticipated sophomore album is a genre-defying exploration of love, sexuality, and identity with stunning vocal performances."
  },
  {
    title: "Igor",
    artist: "Tyler, The Creator",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["hip hop", "r&b", "experimental"],
    feeling: "a colorful journey through heartbreak, creative and bold",
    description: "Tyler creates a cohesive narrative about unrequited love with lush production, falsetto vocals, and innovative songwriting approaches."
  },
  {
    title: "When We All Fall Asleep",
    artist: "Billie Eilish",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    genres: ["pop", "alternative", "dark"],
    feeling: "whispered confessions in the dark, hauntingly beautiful",
    description: "Billie Eilish's debut album redefined pop music with its minimalist production, intimate vocals, and dark, introspective themes."
  }
];

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add('dark');
  }, []);

  if (!mounted) return null;

  const topRowAlbums = albums.slice(0, 5);
  const bottomRowAlbums = albums.slice(5, 10);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <CustomCursor />
      
      <div className="relative z-10 container mx-auto px-6 py-8">
        <Header />
        
        <main className="mt-12 space-y-8">
          {/* Top Row - Albums 1-5 */}
          <div className="w-full max-w-6xl mx-auto">
            <fieldset className="album-accordion">
              {topRowAlbums.map((album, index) => (
                <AlbumCard
                  key={`top-${album.artist}-${album.title}`}
                  {...album}
                  index={index}
                  albumNumber={index + 1}
                  isSelected={selectedAlbum === index}
                  onSelect={() => setSelectedAlbum(selectedAlbum === index ? null : index)}
                />
              ))}
            </fieldset>
            
            {/* Selected Album Details Card */}
            {selectedAlbum !== null && selectedAlbum < 5 && (
              <div className="mt-6 bg-[#2C2C2C] rounded-2xl p-6 border border-[#E4E4E4]/20 animate-fade-in">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {topRowAlbums[selectedAlbum].genres.map((genre, genreIndex) => (
                      <span
                        key={genre}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#FFC1CC]/20 text-[#FFC1CC] border border-[#FFC1CC]/30"
                      >
                        #{genre}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-[#E4E4E4] italic leading-relaxed font-outfit">
                    "{topRowAlbums[selectedAlbum].feeling}"
                  </p>
                  
                  <div className="border-t border-[#E4E4E4]/20 pt-4">
                    <p className="text-sm text-[#E4E4E4]/80 leading-relaxed font-outfit">
                      {topRowAlbums[selectedAlbum].description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Row - Albums 6-10 */}
          <div className="w-full max-w-6xl mx-auto">
            <fieldset className="album-accordion">
              {bottomRowAlbums.map((album, index) => (
                <AlbumCard
                  key={`bottom-${album.artist}-${album.title}`}
                  {...album}
                  index={index + 5}
                  albumNumber={index + 6}
                  isSelected={selectedAlbum === index + 5}
                  onSelect={() => setSelectedAlbum(selectedAlbum === index + 5 ? null : index + 5)}
                />
              ))}
            </fieldset>
            
            {/* Selected Album Details Card */}
            {selectedAlbum !== null && selectedAlbum >= 5 && (
              <div className="mt-6 bg-[#2C2C2C] rounded-2xl p-6 border border-[#E4E4E4]/20 animate-fade-in">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {bottomRowAlbums[selectedAlbum - 5].genres.map((genre, genreIndex) => (
                      <span
                        key={genre}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#FFC1CC]/20 text-[#FFC1CC] border border-[#FFC1CC]/30"
                      >
                        #{genre}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-[#E4E4E4] italic leading-relaxed font-outfit">
                    "{bottomRowAlbums[selectedAlbum - 5].feeling}"
                  </p>
                  
                  <div className="border-t border-[#E4E4E4]/20 pt-4">
                    <p className="text-sm text-[#E4E4E4]/80 leading-relaxed font-outfit">
                      {bottomRowAlbums[selectedAlbum - 5].description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        <footer className="mt-20 pb-8">
          <div className="text-center space-y-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#E4E4E4]/30 to-transparent mx-auto max-w-md" />
            
            <div className="flex justify-center items-center space-x-4 text-[#E4E4E4]/60">
              <Music className="w-5 h-5 animate-float" />
              <Heart className="w-4 h-4 animate-float animate-delay-200" />
              <Sparkles className="w-5 h-5 animate-float animate-delay-400" />
            </div>
            
            <p className="text-[#E4E4E4]/60 font-outfit text-sm">
              violetpicks — a love letter to the albums I adore ✨
            </p>
            
            <p className="text-[#E4E4E4]/40 font-mono text-xs">
              crafted with 💜 for the music that moves us
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
