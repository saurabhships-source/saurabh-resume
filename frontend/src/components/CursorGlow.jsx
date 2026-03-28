import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const CursorGlow = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX - 100);
      y.set(e.clientY - 100);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);

    // ✅ FIX (important)
  }, [x, y]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent 70%)',
        pointerEvents: 'none',
        x: smoothX,
        y: smoothY,
        zIndex: 9999,
        filter: 'blur(60px)',
      }}
    />
  );
};

export default CursorGlow;
