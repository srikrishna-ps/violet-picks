
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
    description: "Clairo's debut album is a masterclass in bedroom pop aesthetics. Every track feels like a warm hug, with lo-fi production that wraps around you like morning sunlight filtering through curtains. The songwriting is intimate and personal, capturing the vulnerability of young adulthood with a dreamy, nostalgic lens."
  },
  {
    title: "Melodrama",
    artist: "Lorde",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    genres: ["alt pop", "electro", "moody"],
    feeling: "teenage emotions turned into pure art, every track hits different",
    description: "Lorde crafted a sonic journey through heartbreak and self-discovery that feels both deeply personal and universally relatable. The production is lush and cinematic, with each song building emotional crescendos that mirror the intensity of young love and loss."
  },
  {
    title: "Punisher",
    artist: "Phoebe Bridgers",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["indie folk", "sad girl", "ethereal"],
    feeling: "vulnerability wrapped in haunting melodies, absolutely devastating",
    description: "Phoebe Bridgers delivers raw emotional honesty with surgical precision. Her lyrics cut deep while her melodies provide comfort, creating a perfect balance of devastation and beauty. This album feels like reading someone's diary while they're singing directly to your soul."
  },
  {
    title: "Flower Boy",
    artist: "Tyler, The Creator",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    genres: ["hip hop", "experimental", "colorful"],
    feeling: "a sunny day in musical form, creative genius meets pure joy",
    description: "Tyler's evolution reaches its peak with this vibrant, genre-blending masterpiece. The production is meticulously crafted, layering jazz samples, synths, and live instruments into a rich tapestry. It's vulnerable, creative, and endlessly replayable - a true artistic statement."
  },
  {
    title: "Ctrl",
    artist: "SZA",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["r&b", "alternative", "honest"],
    feeling: "raw emotions and silky vocals, the soundtrack to growing up",
    description: "SZA's breakthrough album captures the messiness of modern relationships with stunning clarity. Her voice floats over neo-soul production while she explores themes of self-doubt, desire, and growth. It's both confessional and confident, messy and beautiful."
  }
];

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <CustomCursor />
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-rose-500/10 rounded-full blur-xl animate-float animate-delay-200" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-sky-500/10 rounded-full blur-xl animate-float animate-delay-400" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl animate-float animate-delay-300" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        <Header />
        
        <main className="mt-12">
          <fieldset className="album-accordion w-full max-w-6xl mx-auto">
            {albums.map((album, index) => (
              <AlbumCard
                key={`${album.artist}-${album.title}`}
                {...album}
                index={index}
                isSelected={selectedAlbum === index}
                onSelect={() => setSelectedAlbum(selectedAlbum === index ? null : index)}
              />
            ))}
          </fieldset>
        </main>

        <footer className="mt-20 pb-8">
          <div className="text-center space-y-6">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto max-w-md" />
            
            <div className="flex justify-center items-center space-x-4 text-muted-foreground">
              <Music className="w-5 h-5 animate-float" />
              <Heart className="w-4 h-4 animate-float animate-delay-200" />
              <Sparkles className="w-5 h-5 animate-float animate-delay-400" />
            </div>
            
            <p className="text-muted-foreground font-outfit text-sm">
              violetpicks — a love letter to the albums I adore ✨
            </p>
            
            <p className="text-muted-foreground/70 font-mono text-xs">
              crafted with 💜 for the music that moves us
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
