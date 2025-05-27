
import { useEffect, useState } from 'react';
import { Sparkles, Play } from 'lucide-react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating background shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main hero content */}
        <div className="space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect animate-slide-up animate-delay-100">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Curated with obsession</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black brutalist-text text-gradient leading-none animate-slide-up animate-delay-200">
            VIOLET
            <br />
            PICKS
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-slide-up animate-delay-300">
            A love letter to the albums that shaped my soul.
            <br />
            <span className="text-purple-400 font-semibold">10 masterpieces. Infinite emotions.</span>
          </p>

          <div className="flex items-center justify-center gap-6 animate-slide-up animate-delay-400">
            <button className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="flex items-center gap-3">
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Explore Collection
              </div>
            </button>
            
            <button className="px-8 py-4 border-2 border-purple-500/30 hover:border-purple-400 rounded-2xl font-bold text-lg transition-all duration-300 glass-effect hover:bg-purple-500/10">
              About This Journey
            </button>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 hero-glow rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
