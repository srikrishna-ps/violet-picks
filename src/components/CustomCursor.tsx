import { useEffect, useRef, useState } from 'react';

const TAIL_LENGTH = 10;

const CustomCursor = () => {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setIsVisible(true);
      setPoints(prevPoints => [{ x: e.clientX, y: e.clientY }, ...prevPoints.slice(0, TAIL_LENGTH - 1)]);
    };
    const hideCursor = () => setIsVisible(false);
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', hideCursor);
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  // Generate a smooth SVG path using quadratic bezier curves
  const getCurvyPath = (pts: { x: number; y: number }[]) => {
    if (pts.length < 2) return '';
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length - 1; i++) {
      const xc = (pts[i].x + pts[i + 1].x) / 2;
      const yc = (pts[i].y + pts[i + 1].y) / 2;
      d += ` Q ${pts[i].x},${pts[i].y} ${xc},${yc}`;
    }
    return d;
  };

  return (
    <div className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ inset: 0 }}>
      <svg className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        {points.length > 1 && [...Array(points.length - 1)].map((_, i) => (
          <path
            key={i}
            d={getCurvyPath(points.slice(0, points.length - i))}
            fill="none"
            stroke="#E0E0E0"
            strokeWidth={2.5 - i * 0.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              opacity: 0.25 - i * 0.02,
              filter: 'blur(1.2px)'
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default CustomCursor;
