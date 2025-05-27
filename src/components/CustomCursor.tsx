
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationId: number;
    let trailId = 0;

    const updateCursor = (e: MouseEvent) => {
      setIsVisible(true);
      
      const newPoint = { x: e.clientX, y: e.clientY, id: trailId++ };
      
      setTrail(prevTrail => {
        const newTrail = [newPoint, ...prevTrail.slice(0, 8)]; // Keep last 9 points
        return newTrail;
      });
    };

    const hideCursor = () => setIsVisible(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {trail.map((point, index) => {
        const opacity = (trail.length - index) / trail.length;
        const size = 8 - (index * 0.8);
        
        return (
          <div
            key={point.id}
            className="absolute rounded-full bg-[#FFC1CC]"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              opacity: opacity * 0.8,
              transition: 'all 0.1s ease-out',
            }}
          />
        );
      })}
    </div>
  );
};

export default CustomCursor;
