/**
 * ConfettiRain Component
 *
 * This component creates a celebratory confetti animation effect, including:
 * - Animated confetti pieces falling from the top of the screen
 * - Physics-based movement with gravity and rotation
 * - Colorful confetti with varied sizes and shapes
 * - Automatic cleanup after animation duration
 *
 * Features:
 * - 1000 confetti pieces with unique properties
 * - Physics simulation with gravity and velocity
 * - Random colors, sizes, and rotation
 * - Performance optimized with requestAnimationFrame
 * - Automatic cleanup to prevent memory leaks
 * - Non-intrusive overlay (pointer-events-none)
 * - Smooth animations and transitions
 */

import { useEffect, useState } from 'react';

/**
 * Interface for individual confetti piece properties
 * Defines the structure for each animated confetti element
 */
interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  velocityX: number;
  velocityY: number;
  gravity: number;
}

/**
 * ConfettiRain Component
 *
 * Renders animated confetti pieces that fall from the top of the screen
 * Creates a celebratory effect for successful form submissions
 */
const ConfettiRain: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  // Confetti pieces state
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  // Color palette for confetti pieces
  const colors = [
    '#1a1a2e',
    '#16213e',
    '#0f3460',
    '#533483',
    '#2c3e50',
    '#34495e',
    '#2c3e50',
    '#8e44ad',
    '#2980b9',
    '#16a085',
    '#27ae60',
    '#f39c12',
  ];

  /**
   * Initialize confetti animation when component becomes active
   * Creates confetti pieces and starts physics simulation
   */
  useEffect(() => {
    if (isActive) {
      // Create confetti pieces with random properties
      const pieces: ConfettiPiece[] = [];

      for (let i = 0; i < 1000; i++) {
        pieces.push({
          id: i,
          x: Math.random() * 120 - 10, // Spread across screen with overflow
          y: -20 - Math.random() * 30, // Start above screen
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 2.5, // Varied size distribution
          color: colors[Math.floor(Math.random() * colors.length)],
          velocityX: (Math.random() - 0.5) * 2, // Horizontal drift
          velocityY: 2 + Math.random() * 6, // Varied downward speed
          gravity: 0.1 + Math.random() * 0.4, // Random gravity effect
        });
      }
      setConfetti(pieces);

      // Animation variables
      let animationId: number;
      const startTime = Date.now();

      /**
       * Animation loop for confetti physics
       * Updates position, velocity, and rotation of each piece
       */
      const animate = (): void => {
        const elapsed = Date.now() - startTime;

        if (elapsed < 5000) {
          // Continue animation for 5 seconds
          setConfetti(prev =>
            prev.map(piece => ({
              ...piece,
              x: piece.x + piece.velocityX * 0.3,
              y: piece.y + piece.velocityY * 0.3,
              velocityY: piece.velocityY + piece.gravity, // Apply gravity
              rotation: piece.rotation + 2, // Continuous rotation
              scale: piece.scale * 0.999, // Gradual size reduction
            }))
          );
          animationId = requestAnimationFrame(animate);
        } else {
          // Stop animation and clear confetti after 5 seconds
          setConfetti([]);
        }
      };

      // Start animation loop
      animationId = requestAnimationFrame(animate);

      // Cleanup function to cancel animation on unmount
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }
  }, [isActive]);

  // Don't render anything if animation is not active
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map(piece => {
        // Randomly choose between square and rectangle shapes
        const isSquare = Math.random() > 0.5;
        const baseSize = isSquare ? 4 : 6;
        const height = isSquare ? 4 : 3;

        return (
          <div
            key={piece.id}
            className="absolute shadow-lg"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              width: `${baseSize * piece.scale}px`,
              height: `${height * piece.scale}px`,
              transform: `rotate(${piece.rotation}deg)`,
              backgroundColor: piece.color,
              transition: 'none', // Disable CSS transitions for smooth animation
            }}
          />
        );
      })}
    </div>
  );
};

export default ConfettiRain;
