import { FadeIn } from './FadeIn';
import { TextReveal } from './TextReveal';
import { motion } from 'motion/react';

export function Scripture() {
  return (
    <section className="relative py-16 sm:py-32 md:py-48 px-4 sm:px-6 bg-charcoal text-parchment text-center overflow-hidden grain-overlay">

      {/* Huge decorative open-quote behind text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="font-serif text-parchment/[0.04] leading-none select-none"
          style={{ fontSize: 'clamp(18rem, 40vw, 36rem)', lineHeight: 0.8 }}
        >
          "
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <FadeIn variant="reveal">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-10 bg-brass/40" />
            <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-brass/70">
              The Word of the Lord
            </span>
            <div className="h-px w-10 bg-brass/40" />
          </div>
        </FadeIn>

        {/* The quote — dramatic reveal */}
        <FadeIn delay={0.15} variant="reveal" duration={1.3}>
          <blockquote className="font-quote italic text-xl sm:text-3xl md:text-5xl lg:text-6xl leading-snug md:leading-snug mb-8 sm:mb-12 text-parchment/92">
            "As the lightning cometh out of the East,<br className="hidden lg:block" /> and shineth even unto the West;<br className="hidden lg:block" /> so shall also the coming of{' '}
            <span className="text-brass not-italic uppercase tracking-wide">
              The Son of Man
            </span>{' '}
            be."
          </blockquote>
        </FadeIn>

        {/* Animated citation underline */}
        <FadeIn delay={0.3} variant="fade-up">
          <div className="flex flex-col items-center gap-3">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0.5 }}
              className="w-16 h-px bg-brass"
            />
            <cite className="font-sans text-xs uppercase tracking-[0.3em] text-brass not-italic">
              Matthew 24:27
            </cite>
          </div>
        </FadeIn>

        {/* Second quote */}
        <FadeIn delay={0.15} variant="reveal" duration={1.2}>
          <div className="mt-20 pt-16 border-t border-parchment/10">
            <blockquote className="font-quote italic text-base sm:text-xl md:text-2xl text-parchment/60 mb-6">
              "We have heard out of the law that Christ abideth for ever: and how sayest thou, The Son of Man must be lifted up? Who is this Son of Man?"
            </blockquote>
            <cite className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass/60 not-italic">
              John 12:34
            </cite>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
