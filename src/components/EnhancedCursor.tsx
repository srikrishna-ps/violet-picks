
import { useEffect, useState } from 'react';

interface TrailDot {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const EnhancedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);

  useEffect(() => {
    let trailId = 0;

    const updateCursor = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      setIsVisible(true);

      // Add new trail dot
      const newTrailDot: TrailDot = {
        id: trailId++,
        x: newPos.x,
        y: newPos.y,
        timestamp: Date.now()
      };

      setTrail(prevTrail => {
        const filteredTrail = prevTrail.filter(dot => Date.now() - dot.timestamp < 500);
        return [...filteredTrail, newTrailDot].slice(-8);
      });
    };

    const hideCursor = () => setIsVisible(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x - 12,
          top: position.y - 12,
        }}
      >
        <div className="w-6 h-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full scale-50 animate-ping"></div>
        </div>
      </div>

      {/* Trail effect */}
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          className="cursor-trail"
          style={{
            left: dot.x - 4,
            top: dot.y - 4,
            animationDelay: `${index * 50}ms`
          }}
        />
      ))}
    </>
  );
};

export default EnhancedCursor;
