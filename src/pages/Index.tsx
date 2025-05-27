
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import BentoGrid from '../components/BentoGrid';
import EnhancedCursor from '../components/EnhancedCursor';
import { Music, Heart, Sparkles, Github, Twitter } from 'lucide-react';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <EnhancedCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-black text-xl text-gradient">
              violetpicks
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#collection" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                Collection
              </a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Github className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Bento Grid */}
      <div id="collection">
        <BentoGrid />
      </div>

      {/* Footer */}
      <footer className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Decorative line */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          
          {/* Icons */}
          <div className="flex justify-center items-center space-x-6 text-purple-400">
            <Music className="w-6 h-6 animate-bounce" />
            <Heart className="w-5 h-5 animate-pulse" />
            <Sparkles className="w-6 h-6 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Main footer text */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">
              violetpicks
            </h3>
            <p className="text-gray-400 text-lg">
              a love letter to the albums I adore ✨
            </p>
          </div>
          
          {/* Sub text */}
          <p className="text-gray-500 text-sm">
            crafted with 💜 for the music that moves us
          </p>
          
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
