
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import CustomCursor from '../components/CustomCursor';
import { Music, Heart, Sparkles, Moon, Sun } from 'lucide-react';

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
  },
  {
    title: "Norman F*cking Rockwell!",
    artist: "Lana Del Rey",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    genres: ["dream pop", "americana", "cinematic"],
    feeling: "vintage glamour meets modern melancholy, utterly mesmerizing",
    description: "Lana Del Rey perfects her cinematic pop formula with lush orchestration and poetic lyrics. The album feels like driving down the California coast at sunset, nostalgic yet forward-looking, melancholic yet hopeful. It's her most cohesive artistic statement."
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["alt r&b", "experimental", "emotional"],
    feeling: "a masterpiece of vulnerability, every listen reveals new layers",
    description: "Frank Ocean's magnum opus is a genre-defying exploration of love, identity, and growth. The production is innovative and unpredictable, while his vocals convey raw emotion with stunning clarity. It's an album that rewards repeated listening, revealing new depths each time."
  },
  {
    title: "When We All Fall Asleep",
    artist: "Billie Eilish",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    genres: ["alt pop", "dark", "innovative"],
    feeling: "whispered secrets and bass drops, redefining what pop can be",
    description: "Billie Eilish reimagines pop music with minimalist production and maximum impact. Her whispered vocals create intimacy while the production surprises at every turn. It's dark, innovative, and completely her own - a blueprint for the future of pop."
  },
  {
    title: "MAGDALENE",
    artist: "FKA twigs",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    genres: ["art pop", "experimental", "ethereal"],
    feeling: "otherworldly beauty, like listening to emotions in their purest form",
    description: "FKA twigs creates a sonic world that exists outside of time and space. Her vocals are ethereal and powerful, supported by innovative production that blends electronic and organic elements. It's art pop at its most experimental and emotionally resonant."
  },
  {
    title: "Crumb",
    artist: "Locket",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genres: ["psychedelic", "indie", "dreamy"],
    feeling: "floating through space with the softest textures and warmest melodies",
    description: "This album creates a dreamy soundscape that feels like floating through a psychedelic wonderland. The textures are soft and enveloping, while the melodies drift like clouds. It's perfect for late-night listening sessions and contemplative moments."
  }
];

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Set initial dark mode
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <CustomCursor />
      
      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 rounded-2xl bg-card border border-border hover:bg-accent transition-all duration-200 group"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-200" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-200" />
        )}
      </button>
      
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
