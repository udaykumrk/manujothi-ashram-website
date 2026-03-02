import { FadeIn } from './FadeIn';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import heroImg from '../assets/ashram_hero_dawn.png';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-charcoal">

      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 scale-110"
      >
        <img
          src={heroImg}
          alt="Manujothi Ashram at dawn"
          className="w-full h-full object-cover opacity-45"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-charcoal/50 via-charcoal/20 to-charcoal/85" />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16"
      >
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-brass/60" />
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-brass/90">
              Tirunelveli, Tamil Nadu · Since 1963
            </span>
            <div className="h-px w-12 bg-brass/60" />
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.15}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-parchment mb-4 leading-[1.05]">
            Oke Devudu.
            <br />
            <em className="italic font-light text-brass">Oke Desamu.</em>
          </h1>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-parchment/50 mb-8">
            One God. One Nation. — The eternal call of Manujothi Ashram.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="font-quote italic text-lg md:text-xl text-parchment/75 max-w-2xl mx-auto mb-12 leading-loose">
            "As the lightning cometh out of the East, and shineth even unto the West; so shall also the coming of the Son of Man be."
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-brass mb-12">— Matthew 24:27</p>
        </FadeIn>

        <FadeIn delay={0.55}>
          <a
            href="#teachings"
            className="btn-arrow inline-flex items-center gap-3 bg-brass text-charcoal px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-parchment transition-colors duration-300"
          >
            Explore the Teachings <span className="arrow text-base">→</span>
          </a>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={1}>
          <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
            <div className="w-px h-10 bg-parchment animate-pulse" />
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-parchment">Scroll</span>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
