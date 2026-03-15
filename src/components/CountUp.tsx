import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface CountUpProps {
  /** The target number to count up to */
  end: number;
  /** Duration of the animation in ms (default: 2000) */
  duration?: number;
  /** Text to prepend (e.g. '$') */
  prefix?: string;
  /** Text to append (e.g. '+', '%') */
  suffix?: string;
  /** Number of decimal places */
  decimals?: number;
  /** CSS class for the number */
  className?: string;
}

/**
 * Elyse-Residence-style number spin-up counter.
 * Counts from 0 to `end` when the element scrolls into view,
 * with an ease-out curve so it slows down toward the final number.
 */
export function CountUp({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for that luxury slow-down at the end
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = eased * end;
      setDisplay(current.toFixed(decimals));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplay(end.toFixed(decimals));
      }
    }

    requestAnimationFrame(update);
  }, [isInView, end, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
