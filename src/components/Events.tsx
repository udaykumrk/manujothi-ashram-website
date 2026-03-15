import { useEffect, useState, useRef } from 'react';
import { FadeIn } from './FadeIn';
import { TextReveal } from './TextReveal';
import { motion, AnimatePresence } from 'motion/react';

/* ── Satellite map images for zoom animation ── */
import mapIndia from '../assets/map_india.png';
import mapSouthIndia from '../assets/map_south_india.png';
import mapTamilNadu from '../assets/map_tamilnadu.png';
import mapTirunelveli from '../assets/map_tirunelveli.png';
import mapAshram from '../assets/map_ashram.png';

/* ── Animation stages config ── */
const stages = [
  { img: mapIndia, label: 'India', sub: 'Satellite View' },
  { img: mapSouthIndia, label: 'South India', sub: 'Southern Peninsula' },
  { img: mapTamilNadu, label: 'Tamil Nadu', sub: 'Land of Temples' },
  { img: mapTirunelveli, label: 'Tirunelveli', sub: 'Along the Tamirabarani' },
  { img: mapAshram, label: 'Manujothi Ashram', sub: 'Sathianagaram · Tirunelveli' },
];

export function Events() {
  const [activeStage, setActiveStage] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Start animation when the box scrolls into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  /* Auto-advance through stages */
  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2800); // each stage visible for 2.8 seconds

    return () => clearTimeout(timer);
  }, [hasStarted, activeStage]);

  const currentStage = stages[activeStage];

  return (
    <section id="events" className="py-16 sm:py-24 md:py-32 bg-stone/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

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

          {/* ── Right: Zoom animation video + address + Photos ── */}
          <div className="space-y-6">

            {/* ====== ZOOM ANIMATION VIDEO BOX ====== */}
            <div
              ref={containerRef}
              className="relative rounded-3xl bg-charcoal overflow-hidden h-[300px] sm:h-[420px] md:h-[500px]"
            >
              {/* Vignette overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-[5]"
                style={{
                  background: 'radial-gradient(ellipse 75% 65% at 50% 50%, transparent 25%, rgba(26,28,32,0.6) 100%)',
                }}
              />

              {/* ── Satellite image stages with crossfade animation ── */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  exit={{ opacity: 0, scale: 1.6 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img
                    src={currentStage.img}
                    alt={currentStage.label}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                  {/* Gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/70" />
                </motion.div>
              </AnimatePresence>

              {/* Crosshair reticle (always centered) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[6] pointer-events-none">
                <div className="w-20 h-20 border border-brass/30 rounded-full" />
                <div className="absolute top-1/2 left-0 w-5 h-px bg-brass/35 -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-5 h-px bg-brass/35 -translate-y-1/2" />
                <div className="absolute left-1/2 top-0 w-px h-5 bg-brass/35 -translate-x-1/2" />
                <div className="absolute left-1/2 bottom-0 w-px h-5 bg-brass/35 -translate-x-1/2" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brass/70">
                  <div className="absolute inset-0 rounded-full bg-brass/50 animate-ping" />
                </div>
              </div>

              {/* Stage label at bottom */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`label-${activeStage}`}
                  className="absolute bottom-16 left-0 right-0 z-[7] text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="font-serif text-xl sm:text-3xl md:text-4xl text-parchment tracking-wide drop-shadow-lg block">
                    {currentStage.label}
                  </span>
                  <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.3em] text-brass/80 drop-shadow block">
                    {currentStage.sub}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-[8]">
                {stages.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => { setActiveStage(i); }}
                    className="flex flex-col items-center gap-1 cursor-pointer group"
                  >
                    <div
                      className={`rounded-full transition-all duration-300 ${
                        i === activeStage
                          ? 'w-2.5 h-2.5 bg-brass shadow-[0_0_8px_rgba(184,151,104,0.5)]'
                          : i < activeStage
                          ? 'w-1.5 h-1.5 bg-brass/60'
                          : 'w-1.5 h-1.5 bg-brass/25'
                      }`}
                    />
                    <span className={`font-sans text-[6px] uppercase tracking-widest whitespace-nowrap transition-colors ${
                      i === activeStage ? 'text-brass/80' : 'text-brass/30'
                    }`}>
                      {i < 4 ? ['India', 'South', 'TN', 'TVL'][i] : 'Ashram'}
                    </span>
                  </button>
                ))}
              </div>

              {/* "Zooming in..." indicator */}
              {hasStarted && (
                <motion.div
                  className="absolute top-4 left-1/2 -translate-x-1/2 z-[8]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-brass/50 animate-pulse">
                    ⟐ Zooming in ⟐
                  </span>
                </motion.div>
              )}
            </div>

            {/* ====== ADDRESS CARD (always visible below animation) ====== */}
            <FadeIn variant="fade-up">
              <div className="bg-charcoal rounded-2xl p-8 text-center relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5"
                  style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #B89768 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />

                <div className="relative z-10">
                  {/* Location pin */}
                  <div className="flex justify-center mb-4">
                    <svg width="32" height="40" viewBox="0 0 24 30" fill="none">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 18 12 18s12-9 12-18C24 5.37 18.63 0 12 0z" fill="#B89768" />
                      <circle cx="12" cy="11" r="4" fill="#1A1C20" />
                    </svg>
                  </div>

                  <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-brass/60 block mb-2">
                    ✦ Find Us Here ✦
                  </span>
                  <h3 className="font-serif text-2xl text-parchment mb-4">Manujothi Ashram</h3>
                  <address className="not-italic font-sans text-sm text-parchment/50 leading-7">
                    Sathianagaram, Odaimarichan Post<br />
                    (Via) Pappagudi, Near Mukkudal<br />
                    Tirunelveli, Tamil Nadu<br />
                    <span className="text-brass font-semibold text-base">India — 627 602</span>
                  </address>

                  <div className="mt-5">
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
                </div>
              </div>
            </FadeIn>

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



          </div>
        </div>
      </div>
    </section>
  );
}
