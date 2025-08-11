import { useEffect, useState } from 'react';

const FloatingCubes = () => {
  const [cubes, setCubes] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const generateCubes = () => {
      const newCubes = [];
      for (let i = 0; i < 15; i++) {
        newCubes.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: Math.random() * 8,
          size: 15 + Math.random() * 25,
        });
      }
      setCubes(newCubes);
    };

    generateCubes();
    const handleResize = () => generateCubes();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="floating-cubes">
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="cube"
          style={{
            left: `${cube.x}px`,
            top: `${cube.y}px`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            animationDelay: `${cube.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCubes;