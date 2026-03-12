import { ReactNode } from 'react';
import { motion, type Variants } from 'motion/react';

type RevealVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'reveal' | 'scale';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  duration?: number;
  [key: string]: unknown;
}

const variantMap: Record<RevealVariant, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  reveal: {
    hidden: { opacity: 0, y: 50, clipPath: 'inset(100% 0% 0% 0%)' },
    visible: { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function FadeIn({
  children,
  delay = 0,
  className = '',
  variant = 'fade-up',
  duration = 1,
}: FadeInProps) {
  const v = variantMap[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12%' }}
      variants={v}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
