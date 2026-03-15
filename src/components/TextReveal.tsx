import { motion, type Variants } from 'motion/react';

interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  /** 'word' splits on words, 'line' animates as a single masked line */
  mode?: 'word' | 'line';
  /** Stagger delay between each word (seconds) */
  stagger?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    y: '110%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function TextReveal({
  text,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  mode = 'word',
  stagger = 0.04,
}: TextRevealProps) {
  if (mode === 'line') {
    return (
      <div className="overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={lineVariants}
          transition={{ delay }}
        >
          <Tag className={className}>{text}</Tag>
        </motion.div>
      </div>
    );
  }

  // word-by-word reveal
  const words = text.split(' ');

  // Detect text alignment from className to set matching flex justification
  const justifyContent = className.includes('text-center')
    ? 'center'
    : className.includes('text-right')
      ? 'flex-end'
      : 'flex-start';

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        custom={stagger}
        variants={containerVariants}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent }}
        transition={{ delayChildren: delay }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              overflow: 'hidden',
              display: 'inline-block',
              paddingBottom: '0.08em',
            }}
          >
            <motion.span
              variants={wordVariants}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              {word}{i < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
