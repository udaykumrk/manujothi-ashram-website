import { FadeIn } from './FadeIn';
import { TextReveal } from './TextReveal';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import heroImg from '../assets/ashram_hero_dawn.png';
import riverImg from '../assets/tamirabarani_river.png';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-charcoal">

      {/* Layer 1 — Dawn image (slow parallax + continuous breathing zoom) */}
      <motion.div
        style={{ y: bgY2 }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          animate={{
            scale: [1.1, 1.18, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Layer 2 — Primary: Tamirabarani River (continuous drift + breathe) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-[1]"
      >
        <motion.img
          src={riverImg}
          alt="Manujothi Ashram — Tamirabarani River at golden hour"
          className="w-full h-full object-cover opacity-80"
          style={{ objectPosition: 'center 80%' }}
          animate={{
            scale: [1.1, 1.15, 1.1],
            x: ['0%', '1%', '0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Layer 3 — Warm golden radial glow (pulsing bloom) */}
      <motion.div
        className="absolute inset-0 z-[2]"
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 65%, rgba(180,120,30,0.28) 0%, transparent 70%)',
        }}
      />

      {/* Layer 4 — Dark vignette: top + edges */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background: 'linear-gradient(to bottom, rgba(20,15,8,0.72) 0%, rgba(20,15,8,0.15) 35%, rgba(20,15,8,0.10) 55%, rgba(20,15,8,0.78) 100%)',
        }}
      />

      {/* Layer 5 — Animated light shimmer */}
      <div className="hero-shimmer absolute inset-0 z-[4]" />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 z-[4] opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      {/* Content — gentle float */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Eyebrow */}
        <FadeIn variant="reveal">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-brass/60" />
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-brass/90">
              Tirunelveli, Tamil Nadu · Since 1963
            </span>
            <div className="h-px w-12 bg-brass/60" />
          </div>
        </FadeIn>

        {/* Headline — word-by-word reveal */}
        <TextReveal
          text="Manujothi Ashram"
          as="h1"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-parchment mb-4 leading-[1.05] text-center"
          delay={0.15}
          stagger={0.08}
        />

        <FadeIn delay={0.4} variant="reveal">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-parchment/50 mb-8">
            One God. One Nation. — The eternal call of Manujothi Ashram.
          </p>
        </FadeIn>

        <FadeIn delay={0.55} variant="fade-up">
          <p className="font-quote italic text-lg md:text-xl text-parchment/75 max-w-2xl mx-auto mb-12 leading-loose">
            "As the lightning cometh out of the East, and shineth even unto the West; so shall also the coming of the Son of Man be."
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-brass mb-12">— Matthew 24:27</p>
        </FadeIn>

        <FadeIn delay={0.7} variant="scale">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#teachings"
              className="btn-arrow inline-flex items-center gap-3 bg-brass text-charcoal px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-parchment transition-colors duration-300 rounded-full"
            >
              Explore the Teachings <span className="arrow text-base">→</span>
            </a>
            <a
              href="#visit"
              className="btn-arrow inline-flex items-center gap-3 border border-parchment/30 text-parchment px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-parchment/10 transition-colors duration-300 rounded-full"
            >
              Plan Your Visit <span className="arrow text-base">→</span>
            </a>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={1.2}>
          <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
            <div className="w-px h-10 bg-parchment animate-pulse" />
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-parchment">Scroll</span>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
