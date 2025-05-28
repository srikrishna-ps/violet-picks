import { Music, Heart, Sparkles } from 'lucide-react';

// Animated grid background component
const AnimatedGrid = () => (
  <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none">
    <svg width="100vw" height="100vh" className="w-screen h-screen" style={{ position: 'absolute', inset: 0 }}>
      {/* Vertical lines */}
      {[...Array(20)].map((_, i) => (
        <line
          key={`v-${i}`}
          x1={`${(i / 19) * 100}%`}
          y1="0%"
          x2={`${(i / 19) * 100}%`}
          y2="100%"
          stroke="#444444"
          strokeWidth="0.5"
          opacity="0.15"
        >
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
        </line>
      ))}
      {/* Horizontal lines */}
      {[...Array(10)].map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0%"
          y1={`${(i / 9) * 100}%`}
          x2="100%"
          y2={`${(i / 9) * 100}%`}
          stroke="#444444"
          strokeWidth="0.5"
          opacity="0.15"
        >
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
        </line>
      ))}
    </svg>
  </div>
);

const TicketHero = () => (
  <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-transparent">
    <div className="relative w-full max-w-5xl mx-auto rounded-3xl border-2 border-[#444444] bg-[#181818] shadow-2xl flex flex-col md:flex-row overflow-hidden border-trail" style={{ minHeight: '420px' }}>
      {/* Left: Circular image/icon */}
      <div className="flex flex-col items-center justify-center md:w-1/3 w-full bg-[#121212] p-8 md:p-10">
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#888888] shadow-lg flex items-center justify-center bg-[#181818]">
          {/* Replace with your own image or avatar if desired */}
          <Music className="w-24 h-24 text-[#E0E0E0] opacity-80" />
        </div>
      </div>
      {/* Right: Ticket details */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-12 gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span className="uppercase tracking-widest text-[#B0B0B0] text-xs font-mono">VIOLET PRESENTS</span>
          <span className="text-[#B0B0B0] text-xs font-mono">ADMIT FOUR</span>
        </div>
        <h1 className="font-black text-4xl md:text-6xl text-[#E0E0E0] tracking-tight leading-tight mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          VIOLET PICKS
        </h1>
        <div className="flex flex-col md:flex-row gap-20 md:gap-24">
          <div>
            <div className="text-[#B0B0B0] text-xs font-mono">ALBUMS</div>
            <div className="text-[#E0E0E0] font-semibold text-lg">10</div>
          </div>
          <div>
            <div className="text-[#B0B0B0] text-xs font-mono">DURATION</div>
            <div className="text-[#E0E0E0] font-semibold text-lg">2020-24</div>
          </div>
          <div>
            <div className="text-[#B0B0B0] text-xs font-mono">CURATOR</div>
            <div className="text-[#E0E0E0] font-semibold text-lg">VIOLET (ofc)</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-16 md:gap-16 mt-2">
          <div>
            <div className="text-[#B0B0B0] text-xs font-mono">Seating</div>
            <div className="text-[#E0E0E0] font-semibold text-lg">SKPPS04</div>
          </div>
          <div>
            <div className="text-[#B0B0B0] text-xs font-mono">ID</div>
            <div className="text-[#E0E0E0] font-semibold text-lg">CS290 :)</div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <Sparkles className="w-6 h-6 text-[#888888] animate-float" />
          <span className="text-[#888888] text-xs font-mono">@iamtheodorefinch</span>
          <span className="text-[#888888] text-xs font-mono">@violet</span>
        </div>
      </div>
    </div>
  </div>
);

const Header = () => {
  return (
    <header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#121212] to-[#121212]" />
        <AnimatedGrid />
      </div>
      {/* Ticket Hero Content */}
      <TicketHero />
    </header>
  );
};

export default Header;
