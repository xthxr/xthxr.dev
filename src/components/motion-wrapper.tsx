'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  initial?: object;
  animate?: object;
  transition?: object;
}

export function MotionWrapper({
  children,
  className,
  initial = { opacity: 0, y: 50 },
  animate,
  transition = { duration: 0.8, ease: 'easeInOut' },
}: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? (animate || { opacity: 1, y: 0 }) : initial}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
