import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-end justify-start overflow-hidden bg-black">

      {/* ── Video with subtle parallax ── */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/landing_page.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Multi-layer overlay ── */}
      <div className="absolute top-0 left-0 right-0 h-40 z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-[65%] z-[1]"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, transparent 100%)' }} />
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 60%)' }} />

      {/* ── All text — bottom-left editorial ── */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-8 sm:px-14 lg:px-20 pb-24 sm:pb-28 max-w-5xl">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="h-px w-8 bg-[#D4A853]/70" />
          <span className="font-sans text-[9px] uppercase tracking-[0.45em] text-[#D4A853]/80">
            Tirunelveli · Tamil Nadu · Est. 1963
          </span>
        </motion.div>

        {/* Subtitle */}
        <div className="overflow-hidden mb-3">
          <motion.p
            className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.5em] text-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Light to Mankind
          </motion.p>
        </div>

        {/* Title line 1 */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)', color: '#fff', textShadow: '0 4px 60px rgba(0,0,0,0.6)' }}
          >
            Manujothi
          </motion.h1>
        </div>

        {/* Title line 2 — gold */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light leading-[0.95] tracking-tight"
            style={{
              fontSize: 'clamp(3.5rem, 11vw, 9rem)',
              color: '#D4A853',
              textShadow: '0 4px 60px rgba(180,120,20,0.5)',
            }}
          >
            Ashram
          </motion.h1>
        </div>

        {/* Gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0, height: '1px', maxWidth: '80px', background: 'linear-gradient(to right, #D4A853, transparent)', marginBottom: '1.5rem' }}
        />

        {/* Scripture quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="max-w-lg mb-8"
        >
          <p className="font-serif italic text-sm sm:text-base text-white/65 leading-loose mb-2">
            "As the lightning cometh out of the East, and shineth even unto the West; so shall also the coming of the Son of Man be."
          </p>
          <cite className="font-sans text-[9px] uppercase tracking-[0.35em] text-[#D4A853]/70 not-italic flex items-center gap-3">
            <span className="h-px w-5 inline-block bg-[#D4A853]/40" />
            Matthew 24:27
          </cite>
        </motion.blockquote>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a href="#teachings"
            className="group inline-flex items-center gap-3 px-7 py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] rounded-full transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #D4A853, #B8893A)', color: '#000' }}
          >
            Explore Teachings
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a href="#visit"
            className="group inline-flex items-center gap-3 px-7 py-3.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] rounded-full border border-white/25 text-white/80 hover:border-white/50 hover:text-white backdrop-blur-sm transition-all duration-300"
          >
            Plan Your Visit
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        {/* Vertical scroll indicator — right side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute right-10 bottom-28 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-white/30 [writing-mode:vertical-rl]">Scroll</span>
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, #D4A853aa, transparent)', transformOrigin: 'top' }}
          />
        </motion.div>
      </motion.div>

      {/* ── Marquee strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden py-2.5"
        style={{ background: 'rgba(0,0,0,0.50)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="marquee-track flex whitespace-nowrap">
          {[0, 1, 2].map((idx) => (
            <span key={idx} className="font-sans text-[9px] uppercase tracking-[0.32em] px-12 shrink-0"
              style={{ color: 'rgba(212,168,83,0.55)' }}>
              OUR LORD GOD ALONE IS HOLY! HOLY! HOLY! — HE LIVETH FOREVER — HE HAS REDEEMED US BY THE LOVE OF HIS SUPREME SACRIFICE — PRAISE HIM, FOR HE IS GOOD AND HIS MERCY ENDURETH FOREVER — BLESSED IS HE THAT COMETH IN THE NAME OF THE LORD — MATTHEW 24:27 &nbsp;&nbsp;✦&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
