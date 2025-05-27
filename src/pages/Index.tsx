
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
    feeling: "soft mornings and golden hour feelings, like floating through a pastel dream"
  },
  {
    title: "Melodrama",
    artist: "Lorde",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    genres: ["alt pop", "electro", "moody"],
    feeling: "teenage emotions turned into pure art, every track hits different"
  },
  {
    title: "Punisher",
    artist: "Phoebe Bridgers",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["indie folk", "sad girl", "ethereal"],
    feeling: "vulnerability wrapped in haunting melodies, absolutely devastating"
  },
  {
    title: "Flower Boy",
    artist: "Tyler, The Creator",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    genres: ["hip hop", "experimental", "colorful"],
    feeling: "a sunny day in musical form, creative genius meets pure joy"
  },
  {
    title: "Ctrl",
    artist: "SZA",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["r&b", "alternative", "honest"],
    feeling: "raw emotions and silky vocals, the soundtrack to growing up"
  },
  {
    title: "Norman F*cking Rockwell!",
    artist: "Lana Del Rey",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    genres: ["dream pop", "americana", "cinematic"],
    feeling: "vintage glamour meets modern melancholy, utterly mesmerizing"
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["alt r&b", "experimental", "emotional"],
    feeling: "a masterpiece of vulnerability, every listen reveals new layers"
  },
  {
    title: "When We All Fall Asleep",
    artist: "Billie Eilish",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    genres: ["alt pop", "dark", "innovative"],
    feeling: "whispered secrets and bass drops, redefining what pop can be"
  },
  {
    title: "MAGDALENE",
    artist: "FKA twigs",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    genres: ["art pop", "experimental", "ethereal"],
    feeling: "otherworldly beauty, like listening to emotions in their purest form"
  },
  {
    title: "Crumb",
    artist: "Locket",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["psychedelic", "indie", "dreamy"],
    feeling: "floating through space with the softest textures and warmest melodies"
  }
];

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CustomCursor />
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-200/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-rose-200/20 rounded-full blur-xl animate-float animate-delay-200" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-sky-200/20 rounded-full blur-xl animate-float animate-delay-400" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-emerald-200/20 rounded-full blur-xl animate-float animate-delay-300" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        <Header />
        
        <main className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {albums.map((album, index) => (
              <AlbumCard
                key={`${album.artist}-${album.title}`}
                {...album}
                delay={index * 100}
              />
            ))}
          </div>
        </main>

        <footer className="mt-20 pb-8">
          <div className="text-center space-y-6">
            <div className="h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent mx-auto max-w-md" />
            
            <div className="flex justify-center items-center space-x-4 text-violet-400">
              <Music className="w-5 h-5 animate-float" />
              <Heart className="w-4 h-4 animate-float animate-delay-200" />
              <Sparkles className="w-5 h-5 animate-float animate-delay-400" />
            </div>
            
            <p className="text-violet-600 font-dm text-sm">
              violetpicks — a love letter to the albums I adore ✨
            </p>
            
            <p className="text-violet-400 font-dm text-xs">
              crafted with 💜 for the music that moves us
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
