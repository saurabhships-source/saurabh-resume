import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth Apple-like motion
  const smoothX = useSpring(x, { stiffness: 120, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(smoothY, [-50, 50], [12, -12]);
  const rotateY = useTransform(smoothX, [-50, 50], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;

    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="transition-transform duration-300"
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
