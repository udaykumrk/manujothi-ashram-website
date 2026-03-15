import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  /** How much the content offsets on scroll (px). Default 40 */
  offset?: number;
}

export function ParallaxSection({
  children,
  className = '',
  offset = 40,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
