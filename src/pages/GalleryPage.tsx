import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useInView, useScroll, useTransform } from 'motion/react';

// ─── Assets ───────────────────────────────────────────────────────────────────
import ashramHero   from '../assets/ashram_hero_dawn.png';
import tamirabarani from '../assets/tamirabarani_river.png';
import meditation   from '../assets/teaching_meditation.png';
import prophecy     from '../assets/teaching_prophecy.png';
import scripture    from '../assets/teaching_scripture.png';
import krishnaArjuna from '../assets/teaching_krishna_arjuna.png';
import founderImg   from '../assets/founder_real.jpg';

// ─── Data ─────────────────────────────────────────────────────────────────────
const ASHRAM_PHOTOS = [
  { id: 1, src: ashramHero,    alt: 'Aerial view of Manujothi Ashram at dawn',  size: 'large'  },
  { id: 2, src: tamirabarani,  alt: 'Sacred Tamirabarani River near the Ashram', size: 'medium' },
  { id: 3, src: meditation,    alt: 'Morning prayer in the Ashram grounds',       size: 'small'  },
  { id: 4, src: scripture,     alt: 'Scripture study session at the Ashram',      size: 'medium' },
  { id: 5, src: krishnaArjuna, alt: 'Immortal Yoga — Krishna & Arjuna mural',    size: 'large'  },
  { id: 6, src: prophecy,      alt: 'The Prophecy teaching hall',                 size: 'small'  },
];

const FAMILY_MEMBERS = [
  {
    id: 1, src: founderImg,
    name: 'R. Paulaseer Lawrie Muthukrishna',
    role: 'Founder & Gurudev · 1921 – 1989',
    quote: '"Manujothi means Light to Mankind. This is the Zion of earth."',
    category: 'Founder',
  },
  {
    id: 2, src: null, // Add photo when available
    name: 'Devaaseer Emmanuel Lawrie',
    role: 'Son of the Founder · Present Leadership',
    quote: 'Continuing the legacy of spiritual guidance and ashram stewardship.',
    category: 'Family',
  },
  {
    id: 3, src: null,
    name: 'Paul Uphaz N. Lawrie',
    role: 'Grandson · Mission Activities',
    quote: 'Carrying the divine light forward into the next generation.',
    category: 'Family',
  },
  {
    id: 4, src: null,
    name: 'Leo Paul N. Lawrie',
    role: 'Grandson · Ashram Operations',
    quote: 'Serving the community with love and devotion.',
    category: 'Family',
  },
];

// Residents — placeholder grid (photos will be added later)
const RESIDENT_COUNT = 12;

// ─── Main Page ────────────────────────────────────────────────────────────────
export function GalleryPage() {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  // Cursor spotlight
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 760);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 400);
  const spotX = useSpring(mouseX, { stiffness: 80, damping: 18 });
  const spotY = useSpring(mouseY, { stiffness: 80, damping: 18 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: '#F5EDD6' }}>

      {/* Cursor spotlight */}
      <motion.div className="pointer-events-none fixed inset-0 z-0" style={{
        background: `radial-gradient(500px circle at ${spotX}px ${spotY}px, rgba(212,140,30,0.08), transparent 70%)`,
      }} />

      {/* ── Top Nav ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-5"
        style={{ background: 'rgba(245,237,214,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
      >
        <button onClick={() => navigate('/')}
          className="group flex items-center gap-3 text-[#3a2a1a]/60 hover:text-[#3a2a1a] transition-colors">
          <motion.span whileHover={{ x: -4 }}
            className="w-9 h-9 rounded-full border border-[#3a2a1a]/20 group-hover:border-[#b87d2a] flex items-center justify-center transition-colors text-sm">←</motion.span>
          <span className="font-sans text-[10px] uppercase tracking-[0.28em] hidden sm:inline">Home</span>
        </button>
        <div className="text-center">
          <p className="font-sans text-[9px] uppercase tracking-[0.45em] text-[#b87d2a]/80">Manujothi Ashram</p>
          <p className="font-[var(--font-serif)] text-lg tracking-tight text-[#1a1208]">Sacred Gallery</p>
        </div>
        <div className="w-24" />
      </motion.nav>

      {/* ─────────────────────────────────────────────── */}
      {/*  SECTION 1 — ASHRAM                           */}
      {/* ─────────────────────────────────────────────── */}
      <AshramSection photos={ASHRAM_PHOTOS} onOpen={setLightbox} />

      {/* ─────────────────────────────────────────────── */}
      {/*  SECTION 2 — FOUNDER                          */}
      {/* ─────────────────────────────────────────────── */}
      <FounderSection member={FAMILY_MEMBERS[0]} onOpen={setLightbox} />

      {/* ─────────────────────────────────────────────── */}
      {/*  SECTION 3 — FAMILY                           */}
      {/* ─────────────────────────────────────────────── */}
      <FamilySection members={FAMILY_MEMBERS.slice(1)} />

      {/* ─────────────────────────────────────────────── */}
      {/*  SECTION 4 — ASHRAM RESIDENTS                 */}
      {/* ─────────────────────────────────────────────── */}
      <ResidentsSection count={RESIDENT_COUNT} />

      {/* ── Footer ── */}
      <div className="py-24 text-center border-t pt-24" style={{ background: '#1a1208', borderColor: 'rgba(184,125,42,0.15)' }}>
        <p className="font-[var(--font-serif)] text-4xl mb-3" style={{ color: 'rgba(245,237,214,0.2)' }}>Growing Archive</p>
        <p className="font-sans text-sm tracking-widest" style={{ color: 'rgba(184,125,42,0.4)' }}>Add photos to each section as they become available</p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1: ASHRAM — Cinematic film-strip horizontal flow
// ─────────────────────────────────────────────────────────────────────────────
function AshramSection({ photos, onOpen }: {
  photos: typeof ASHRAM_PHOTOS;
  onOpen: (p: { src: string; alt: string }) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="relative pt-40 pb-32 overflow-hidden" style={{ background: '#F5EDD6' }}>
      {/* Large section number watermark */}
      <div className="absolute top-32 left-8 md:left-16 select-none pointer-events-none">
        <span className="font-[var(--font-serif)] text-[12rem] md:text-[18rem] font-bold leading-none" style={{ color: 'rgba(120,80,20,0.07)' }}>01</span>
      </div>

      <div className="px-6 md:px-16 mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#d4af77]/70 block mb-4"
        >Chapter One</motion.span>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            animate={isInView ? { y: '0%' } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-serif)] text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] tracking-[-3px]" style={{ color: '#1a0e04' }}
          >The Ashram</motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-lg font-light text-lg leading-relaxed" style={{ color: '#7a5c38' }}
        >
          63 acres of sacred grounds on the banks of the Tamirabarani river — established in 1963 as a Zion on earth.
        </motion.p>
      </div>

      {/* Masonry grid — varying heights, full width */}
      <div className="px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 relative z-10">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 60, clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={isInView ? { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onOpen({ src: photo.src, alt: photo.alt })}
            className={`group relative overflow-hidden rounded-2xl cursor-zoom-in ${
              photo.size === 'large' ? 'col-span-2 row-span-2' : photo.size === 'medium' ? 'col-span-2 md:col-span-1' : ''
            }`}
            style={{ aspectRatio: photo.size === 'large' ? '4/3' : '3/4' }}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <motion.div
              initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col justify-end p-5"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent 60%)' }}
            >
              <p className="font-[var(--font-serif)] text-white text-base leading-tight">{photo.alt}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2: FOUNDER — Dramatic full-bleed cinematic portrait
// ─────────────────────────────────────────────────────────────────────────────
function FounderSection({ member, onOpen }: {
  member: typeof FAMILY_MEMBERS[0];
  onOpen: (p: { src: string; alt: string }) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden border-t" style={{ background: '#0D2818', borderColor: 'rgba(255,255,255,0.06)' }}>

      <div className="absolute top-8 left-8 md:left-16 select-none pointer-events-none">
        <span className="font-[var(--font-serif)] text-[12rem] md:text-[18rem] font-bold leading-none" style={{ color: 'rgba(255,255,255,0.03)' }}>02</span>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
        {/* Photo side */}
        <motion.div
          className="relative overflow-hidden min-h-[60vh] lg:min-h-screen cursor-zoom-in"
          onClick={() => onOpen({ src: member.src!, alt: member.name })}
        >
          <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
            <img src={member.src!} alt={member.name}
              className="w-full h-full object-cover object-top grayscale-[20%] brightness-75" />
          </motion.div>
          {/* Gold overlay gradient */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent 60%, rgba(10,10,10,1) 100%)' }} />
          <div className="absolute inset-0 pointer-events-none lg:hidden"
            style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 30%, transparent)' }} />
        </motion.div>

        {/* Text side */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20 lg:py-40">
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#d4af77]/70 mb-6 block"
          >Chapter Two · The Founder</motion.span>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: '110%' }}
              animate={isInView ? { y: '0%' } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-[var(--font-serif)] text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.9] tracking-[-2px]"
            >{member.name}</motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#d4af77] mb-10"
          >{member.role}</motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-l-2 border-[#d4af77]/40 pl-6 mb-10"
          >
            <p className="font-[var(--font-serif)] text-xl md:text-2xl italic text-white/60 leading-relaxed">{member.quote}</p>
          </motion.blockquote>

          {/* Timeline dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-5 border-l border-white/10 pl-6"
          >
            {[
              { year: '1921', event: 'Born in Munnar, Kerala' },
              { year: '1963', event: 'Founded Manujothi Ashram, Tirunelveli' },
              { year: '1969', event: 'Displayed Vishwaroopam in Chicago' },
              { year: '1989', event: 'Glorified on February 24' },
            ].map((t, i) => (
              <motion.div key={t.year} className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              >
                <div className="absolute -left-[1.6rem] top-1.5 w-2 h-2 rounded-full bg-[#d4af77]" />
                <span className="font-[var(--font-serif)] text-sm text-[#d4af77]">{t.year}</span>
                <p className="text-white/40 text-sm font-light">{t.event}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3: FAMILY — Horizontal cards with hover expand
// ─────────────────────────────────────────────────────────────────────────────
function FamilySection({ members }: { members: typeof FAMILY_MEMBERS }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ background: '#2D0A14', borderTop: '1px solid rgba(255,255,255,0.05)' }}>

      <div className="absolute top-8 right-8 md:right-16 select-none pointer-events-none text-right">
        <span className="font-[var(--font-serif)] text-[12rem] md:text-[18rem] font-bold leading-none" style={{ color: 'rgba(255,200,180,0.04)' }}>03</span>
      </div>

      <div className="px-6 md:px-16 mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#d4af77]/70 block mb-4"
        >Chapter Three</motion.span>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            animate={isInView ? { y: '0%' } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-serif)] text-[clamp(3rem,7vw,7rem)] leading-[0.88] tracking-[-3px]"
          >The Family</motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-5 text-white/35 max-w-md font-light text-lg"
        >The lineage that continues the founder's divine mission.</motion.p>
      </div>

      {/* Horizontal breathing pillars */}
      <div
        className="px-4 md:px-8 flex gap-3 md:gap-4 h-[70vh] min-h-[500px] relative z-10"
        onMouseLeave={() => setHovered(null)}
      >
        {members.map((member, i) => {
          const isActive = hovered === i;
          const someoneHovered = hovered !== null;

          return (
            <motion.div
              key={member.id}
              onMouseEnter={() => setHovered(i)}
              animate={{ width: someoneHovered ? (isActive ? '60%' : '13.33%') : '33.33%' }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/8 shrink-0 cursor-pointer"
              style={{ background: '#181818' }}
            >
              {/* Photo if available, else gradient placeholder */}
              {member.src ? (
                <img src={member.src} alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60" />
              ) : (
                <div className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, hsl(${(i * 60 + 220)},40%,12%), hsl(${(i * 60 + 240)},30%,8%))` }} />
              )}

              {/* Overlay */}
              <motion.div
                animate={{ opacity: isActive ? 0.3 : 0.7 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-black pointer-events-none"
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
                {/* Number always visible */}
                <motion.span
                  animate={{ opacity: isActive ? 0.2 : 0.15 }}
                  className="font-[var(--font-serif)] text-[5rem] md:text-[8rem] font-bold leading-none text-white absolute top-4 left-4 md:top-6 md:left-6 select-none"
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>

                {/* Collapsed: only role tag */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.p
                      initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
                      className="font-sans text-[8px] uppercase tracking-[0.25em] text-white rotate-90 origin-bottom-left translate-x-4 -translate-y-4 whitespace-nowrap absolute bottom-12 left-4"
                    >{member.category}</motion.p>
                  )}
                </AnimatePresence>

                {/* Expanded: full info */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      {!member.src && (
                        <div className="w-20 h-20 rounded-full border-2 border-[#d4af77]/40 mb-6 flex items-center justify-center bg-white/5">
                          <span className="text-[#d4af77] text-2xl font-[var(--font-serif)]">{member.name[0]}</span>
                        </div>
                      )}
                      <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#d4af77]/70 mb-2">{member.role}</p>
                      <h3 className="font-[var(--font-serif)] text-2xl md:text-3xl text-white mb-4 leading-tight">{member.name}</h3>
                      <p className="text-white/50 text-sm font-light leading-relaxed italic max-w-xs">"{member.quote}"</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4: RESIDENTS — Organic bubble/mosaic grid
// ─────────────────────────────────────────────────────────────────────────────
function ResidentsSection({ count }: { count: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // When real photos are added, replace null with the import
  const slots = Array.from({ length: count }, (_, i) => ({ id: i + 1, src: null as null }));

  return (
    <section ref={ref} className="relative py-32" style={{ background: '#0C0F2E', borderTop: '1px solid rgba(255,255,255,0.05)' }}>

      <div className="absolute top-8 left-8 md:left-16 select-none pointer-events-none">
        <span className="font-[var(--font-serif)] text-[12rem] md:text-[18rem] font-bold leading-none" style={{ color: 'rgba(100,160,255,0.04)' }}>04</span>
      </div>

      <div className="px-6 md:px-16 mb-20 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#d4af77]/70 block mb-4"
        >Chapter Four</motion.span>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            animate={isInView ? { y: '0%' } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-serif)] text-[clamp(3rem,7vw,7rem)] leading-[0.88] tracking-[-3px]"
          >The Residents</motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-5 text-white/35 max-w-md font-light text-lg"
        >Over 110 souls who live, serve, and walk in the divine light of the Ashram.</motion.p>
      </div>

      {/* Hexagonal mosaic grid */}
      <div className="px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4">
          {slots.map((slot, i) => (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.15, zIndex: 10 }}
              className="relative aspect-square rounded-full overflow-hidden border border-white/10 cursor-pointer group"
              style={{
                background: `linear-gradient(135deg, hsl(${(i * 29) % 360}, 20%, 18%), hsl(${(i * 29 + 30) % 360}, 15%, 12%))`,
              }}
            >
              {slot.src ? (
                <img src={slot.src} alt={`Resident ${slot.id}`} className="w-full h-full object-cover" loading="lazy" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-[var(--font-serif)] text-white/20 text-xs">{slot.id}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-[#d4af77]/0 group-hover:bg-[#d4af77]/10 transition-colors duration-300 rounded-full" />
            </motion.div>
          ))}

          {/* "More" placeholder bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: count * 0.04 + 0.1 }}
            className="aspect-square rounded-full border border-[#d4af77]/20 flex items-center justify-center cursor-default"
            style={{ background: 'rgba(212,168,83,0.05)' }}
          >
            <span className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#d4af77]/50 text-center leading-tight px-1">110+<br/>souls</span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-white/20 font-sans text-xs tracking-[0.3em] uppercase"
        >
          Photos will appear here as they are added
        </motion.p>
      </div>
    </section>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ photo, onClose }: { photo: { src: string; alt: string }; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-16"
      style={{ background: 'rgba(0,0,0,0.94)', backdropFilter: 'blur(24px)' }}
    >
      <motion.div
        initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[88vh] rounded-3xl overflow-hidden shadow-2xl"
      >
        <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 px-8 py-7"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
          <p className="font-[var(--font-serif)] text-white text-2xl">{photo.alt}</p>
        </div>
        <button onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors text-sm">
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}
