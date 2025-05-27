
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
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
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x - 10,
        top: position.y - 10,
      }}
    >
      <div className="w-5 h-5 bg-gradient-to-r from-violet-400 to-rose-400 rounded-full animate-blob opacity-80" />
      <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full absolute top-1 left-1 animate-float" />
    </div>
  );
};

export default CustomCursor;
