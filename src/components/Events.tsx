import { useRef } from 'react';
import { FadeIn } from './FadeIn';
import { TextReveal } from './TextReveal';
import { motion, useScroll, useTransform } from 'motion/react';
import eventImg from '../assets/prayer_hall.png';
import riverImg from '../assets/tamirabarani_river.png';

/* ── SVG: Simplified India outline path ── */
const indiaPath =
  'M60,10 L70,8 L80,12 L88,18 L92,28 L95,35 L90,45 L92,55 L95,65 L90,75 L85,85 L78,95 L72,105 L68,115 L65,125 L60,135 L55,140 L50,138 L45,130 L40,120 L38,110 L35,100 L30,90 L28,80 L25,70 L22,60 L25,50 L30,40 L35,30 L42,20 L50,14 Z';

/* ── SVG: Simplified Tamil Nadu outline path ── */
const tnPath =
  'M35,15 L55,10 L70,15 L80,25 L85,40 L82,55 L78,70 L72,85 L65,100 L58,110 L50,115 L42,110 L35,100 L30,85 L28,70 L25,55 L28,40 L30,28 Z';

export function Events() {
  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ['start end', 'end start'],
  });

  /* Stage 1: Earth (0.0 – 0.2) */
  const earthOpacity = useTransform(scrollYProgress, [0.08, 0.15, 0.25], [0, 1, 0]);
  const earthScale = useTransform(scrollYProgress, [0.08, 0.15, 0.25], [0.8, 1, 2.5]);

  /* Stage 2: India (0.2 – 0.4) */
  const indiaOpacity = useTransform(scrollYProgress, [0.22, 0.28, 0.4], [0, 1, 0]);
  const indiaScale = useTransform(scrollYProgress, [0.22, 0.28, 0.4], [0.6, 1, 2.2]);

  /* Stage 3: Tamil Nadu (0.35 – 0.55) */
  const tnOpacity = useTransform(scrollYProgress, [0.37, 0.43, 0.55], [0, 1, 0]);
  const tnScale = useTransform(scrollYProgress, [0.37, 0.43, 0.55], [0.6, 1, 2.2]);

  /* Stage 4: Tirunelveli (0.5 – 0.7) */
  const tvOpacity = useTransform(scrollYProgress, [0.52, 0.58, 0.7], [0, 1, 0]);
  const tvScale = useTransform(scrollYProgress, [0.52, 0.58, 0.7], [0.7, 1, 1.8]);

  /* Stage 5: Ashram address (0.65+) */
  const ashramOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const ashramY = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);
  const pinDrop = useTransform(scrollYProgress, [0.7, 0.78, 0.82], [-40, 8, 0]);
  const pinOpacity = useTransform(scrollYProgress, [0.7, 0.78], [0, 1]);

  return (
    <section id="events" className="py-24 md:py-32 bg-stone/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <FadeIn variant="reveal">
          <div className="text-center mb-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">Events &amp; Visitation</span>
          </div>
        </FadeIn>

        <TextReveal
          text="Gather in Fellowship"
          as="h2"
          className="font-serif text-4xl md:text-5xl text-charcoal text-center mb-16"
          delay={0.05}
          stagger={0.07}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Event listings ── */}
          <FadeIn variant="fade-left">
            <div className="space-y-10">

              <div className="border-l-2 border-brass pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-brass text-charcoal text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                    Annual · Feb 18–25
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">Glorification Day</h3>
                <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
                  Held every year from <strong className="text-charcoal font-medium">February 18th to 25th</strong> at Manujothi Ashram, Sathia Nagaram. This multi-day celebration draws seekers from across India and the globe for deep spiritual reflection, congregational singing, communal vegetarian meals, and extended comparative scripture teachings.
                </p>
              </div>

              <div className="border-l-2 border-brass pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-brass text-charcoal text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                    Annual · July 21
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">Kalki Jayanti</h3>
                <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
                  Observed every year on <strong className="text-charcoal font-medium">July 21st</strong>, commemorating the day the Vishwaroopam was displayed in Chicago in 1969 — the same day as the Apollo 11 moon landing. Devotees gather for praise, meditation, and scripture study.
                </p>
              </div>

              <div className="border-l-2 border-stone pl-6">
                <h3 className="font-serif text-2xl text-charcoal mb-3">Shree Lahari Krishna Praise &amp; Meditation Centres</h3>
                <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
                  Affiliated praise and meditation centres are active across India and internationally. Messages of Lord Shri Lahari Krishna have been broadcast on <strong className="text-charcoal font-medium">All India Radio (Akashvani), Tirunelveli</strong>. Contact the Ashram to locate a centre near you.
                </p>
              </div>

              <div className="border-l-2 border-stone pl-6">
                <h3 className="font-serif text-2xl text-charcoal mb-3">Daily Meditation</h3>
                <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
                  The Ashram's 63-acre grounds — with ancient banyan groves and quiet pathways along the Tamirabarani riverbank — are open for meditation, study, and personal retreat. Visitors are welcome to participate in the rhythms of Ashram life: prayer, study, simple work, and communal meals.
                </p>
              </div>

              <div id="visit" className="pt-2">
                <a
                  href="mailto:ashram@manjothi.com"
                  className="btn-arrow inline-flex items-center gap-3 bg-charcoal text-parchment px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-brass hover:text-charcoal transition-colors duration-300 rounded-full"
                >
                  Plan Your Visit <span className="arrow">→</span>
                </a>
              </div>

            </div>
          </FadeIn>

          {/* ── Right: Journey animation + Photos ── */}
          <div className="space-y-6">

            {/* Journey animation box — tall enough for scroll to drive the stages */}
            <div
              ref={journeyRef}
              className="relative rounded-3xl bg-charcoal grain-overlay overflow-hidden"
              style={{ height: '520px' }}
            >

              {/* Decorative ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(184,151,104,0.06) 0%, transparent 70%)',
                }}
              />

              {/* ── STAGE 1: Earth ── */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ opacity: earthOpacity, scale: earthScale }}
              >
                <svg width="180" height="180" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="90" stroke="rgba(184,151,104,0.35)" strokeWidth="1.2" fill="none" />
                  <ellipse cx="100" cy="55" rx="82" ry="10" stroke="rgba(184,151,104,0.2)" strokeWidth="0.6" fill="none" />
                  <ellipse cx="100" cy="100" rx="90" ry="18" stroke="rgba(184,151,104,0.25)" strokeWidth="0.6" fill="none" />
                  <ellipse cx="100" cy="145" rx="80" ry="10" stroke="rgba(184,151,104,0.2)" strokeWidth="0.6" fill="none" />
                  <ellipse cx="100" cy="100" rx="30" ry="90" stroke="rgba(184,151,104,0.2)" strokeWidth="0.5" fill="none" />
                  <ellipse cx="100" cy="100" rx="60" ry="90" stroke="rgba(184,151,104,0.2)" strokeWidth="0.5" fill="none" />
                  <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(184,151,104,0.15)" strokeWidth="0.5" />
                  {/* India marker pulse */}
                  <circle cx="128" cy="112" r="4" fill="rgba(184,151,104,0.4)">
                    <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="128" cy="112" r="2.5" fill="#B89768" />
                </svg>
                <span className="mt-6 font-serif text-2xl text-parchment tracking-wide">Planet Earth</span>
                <span className="mt-2 font-sans text-[9px] uppercase tracking-[0.35em] text-brass/50">Scroll to zoom in</span>
              </motion.div>

              {/* ── STAGE 2: India ── */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ opacity: indiaOpacity, scale: indiaScale }}
              >
                <svg width="140" height="170" viewBox="0 0 120 155" fill="none">
                  <path d={indiaPath} stroke="#B89768" strokeWidth="1.5" fill="rgba(184,151,104,0.08)" />
                  {/* Tamil Nadu highlight region */}
                  <circle cx="58" cy="120" r="8" fill="rgba(184,151,104,0.25)" stroke="#B89768" strokeWidth="0.8">
                    <animate attributeName="r" values="7;11;7" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="58" cy="120" r="3" fill="#B89768" />
                </svg>
                <span className="mt-6 font-serif text-2xl text-parchment tracking-wide">India</span>
                <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.25em] text-brass/50">Southern Peninsula</span>
              </motion.div>

              {/* ── STAGE 3: Tamil Nadu ── */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ opacity: tnOpacity, scale: tnScale }}
              >
                <svg width="130" height="150" viewBox="0 0 110 130" fill="none">
                  <path d={tnPath} stroke="#B89768" strokeWidth="1.5" fill="rgba(184,151,104,0.08)" />
                  {/* Tirunelveli marker */}
                  <circle cx="48" cy="100" r="6" fill="rgba(184,151,104,0.3)" stroke="#B89768" strokeWidth="0.8">
                    <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="48" cy="100" r="3" fill="#B89768" />
                  {/* City labels */}
                  <text x="55" y="30" fill="rgba(184,151,104,0.3)" fontSize="6" fontFamily="sans-serif">Chennai</text>
                  <text x="20" y="60" fill="rgba(184,151,104,0.3)" fontSize="6" fontFamily="sans-serif">Coimbatore</text>
                  <text x="40" y="80" fill="rgba(184,151,104,0.3)" fontSize="6" fontFamily="sans-serif">Madurai</text>
                </svg>
                <span className="mt-6 font-serif text-2xl text-parchment tracking-wide">Tamil Nadu</span>
                <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.25em] text-brass/50">Land of Temples</span>
              </motion.div>

              {/* ── STAGE 4: Tirunelveli ── */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ opacity: tvOpacity, scale: tvScale }}
              >
                <div className="relative">
                  {/* River line */}
                  <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
                    <path
                      d="M10,50 C40,30 60,70 90,45 C120,20 140,65 170,40 C185,30 195,45 200,42"
                      stroke="rgba(184,151,104,0.3)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="4 3"
                    />
                    <text x="65" y="85" fill="rgba(184,151,104,0.35)" fontSize="7" fontFamily="sans-serif">Tamirabarani River</text>
                  </svg>
                  {/* Ashram marker */}
                  <div className="absolute top-[30px] left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-brass animate-pulse" />
                  </div>
                </div>
                <span className="mt-4 font-serif text-2xl text-parchment tracking-wide">Tirunelveli</span>
                <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.25em] text-brass/50">District · Tamil Nadu</span>
              </motion.div>

              {/* ── STAGE 5: Ashram address card ── */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center px-8"
                style={{ opacity: ashramOpacity, y: ashramY }}
              >
                {/* Location pin drops in */}
                <motion.div style={{ y: pinDrop, opacity: pinOpacity }} className="mb-4">
                  <svg width="40" height="50" viewBox="0 0 24 30" fill="none">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 18 12 18s12-9 12-18C24 5.37 18.63 0 12 0z" fill="#B89768" />
                    <circle cx="12" cy="11" r="4" fill="#1A1C20" />
                  </svg>
                </motion.div>

                <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-brass/60 block mb-3">
                  ✦ You Have Arrived ✦
                </span>
                <h3 className="font-serif text-3xl text-parchment mb-5">Manujothi Ashram</h3>
                <address className="not-italic font-sans text-sm text-parchment/55 leading-8 text-center">
                  Sathianagaram, Odaimarichan Post<br />
                  (Via) Pappagudi, Near Mukkudal<br />
                  Tirunelveli, Tamil Nadu<br />
                  <span className="text-brass font-semibold text-base">India — 627 602</span>
                </address>

                <div className="mt-6">
                  <a
                    href="https://maps.google.com/?q=Manujothi+Ashram+Tirunelveli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brass/15 border border-brass/30 text-brass px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest hover:bg-brass hover:text-charcoal transition-all duration-300 rounded-full"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    View on Google Maps
                  </a>
                </div>
              </motion.div>

              {/* Progress dots at bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {['Earth', 'India', 'Tamil Nadu', 'Tirunelveli', 'Ashram'].map((label) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-brass/50" />
                    <span className="font-sans text-[7px] uppercase tracking-widest text-brass/40 whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visitor info panel */}
            <FadeIn delay={0.1} variant="fade-up">
              <div className="bg-stone/30 border border-stone p-6 space-y-2 rounded-2xl">
                <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] text-brass font-bold mb-3">Visitor Information</h4>
                <p className="font-sans text-xs text-charcoal/55 leading-relaxed">• Only <strong className="text-charcoal/80">vegetarian diet</strong> is served at the Ashram</p>
                <p className="font-sans text-xs text-charcoal/55 leading-relaxed">• Minimum stay: <strong className="text-charcoal/80">3 days</strong> — food and accommodation are free</p>
                <p className="font-sans text-xs text-charcoal/55 leading-relaxed">• Overseas visitors welcome with valid visa and shared faith</p>
                <p className="font-sans text-xs text-charcoal/55 leading-relaxed">• <strong className="text-charcoal/80">8 TNSTC bus services</strong> daily to the Ashram from Tirunelveli</p>
              </div>
            </FadeIn>

            {/* Ashram photos — side by side with hover reveal */}
            <div className="grid grid-cols-2 gap-4">
              <FadeIn delay={0.15} variant="scale">
                <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                  <img
                    src={eventImg}
                    alt="Prayer hall — Manujothi Ashram"
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-parchment font-medium">
                      Prayer Hall
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.25} variant="scale">
                <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                  <img
                    src={riverImg}
                    alt="Tamirabarani River — sacred setting of Manujothi Ashram"
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-parchment font-medium">
                      Tamirabarani River
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
