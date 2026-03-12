import { FadeIn } from './FadeIn';
import { TextReveal } from './TextReveal';
import { CountUp } from './CountUp';
import { motion } from 'motion/react';
import founderImg from '../assets/founder_real.jpg';

const stats = [
  { num: 63, suffix: '', unit: 'Acres', label: 'Ashram grounds' },
  { num: 110, suffix: '+', unit: 'Residents', label: 'Living & serving' },
  { num: 1963, suffix: '', unit: '', label: 'Year established' },
  { num: 60, suffix: '+', unit: 'Years', label: 'Of ministry' },
];

export function Founder() {
  return (
    <section className="py-24 md:py-32 bg-stone/25">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Portrait side — slides in from left */}
          <FadeIn variant="fade-left" className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decorative offset frame */}
              <div className="absolute -inset-3 border border-brass/25 pointer-events-none z-10 rounded-3xl" />
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-brass/10 z-0 rounded-2xl" />

              <img
                src={founderImg}
                alt="R. Paulaseer Lawrie Muthukrishna — Founder of Manujothi Ashram, speaking at a meeting"
                loading="lazy"
                className="relative z-[2] w-full object-cover object-top rounded-2xl"
                style={{ aspectRatio: '3/4' }}
              />

              {/* Caption band */}
              <div className="bg-charcoal text-parchment px-6 py-4 relative z-[2] rounded-b-2xl">
                <p className="font-serif text-lg">R. Paulaseer Lawrie</p>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mt-1">
                  Gurudev Shree Lahari Krishna · 1921 – 1989
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Text side — slides in from right */}
          <FadeIn delay={0.15} variant="fade-right" className="order-1 lg:order-2">
            <div className="pt-0 lg:pt-8">
              <FadeIn variant="reveal">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">
                  The Founder &amp; The Ashram
                </span>
              </FadeIn>

              <TextReveal
                text="A Legacy of Spiritual Research"
                as="h2"
                className="font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-6"
                delay={0.1}
                stagger={0.06}
              />

              <div className="space-y-5 text-charcoal/75 text-lg leading-relaxed font-light">
                <p>
                  Born on February 24, 1921, at the Lakshmi Tea Estate in Munnar, Kerala, to Deva Rasiah and Nesammal, <strong className="font-medium text-charcoal">R. Paulaseer Lawrie Muthukrishna</strong> — known to his followers as <em>Gurudev Shree Lahari Krishna</em> — dedicated his life to a single conviction: that one God calls to all of humanity through all scripture. Educated at St. John's College, Wesley College, and Madras Christian College, he also served at the Vellore Medical College Hospital before devoting himself entirely to his spiritual mission.
                </p>
                <p>
                  In 1963, he established the <strong className="font-medium text-charcoal">63-acre Manujothi Ashram</strong> near the sacred banks of the Tamirabarani river in Tirunelveli, Tamil Nadu. "Manujothi" means <em>Light to the Mankind</em>. It was to be the Zion of earth for those seeking the underlying unity of all divine revelation.
                </p>
                <p>
                  Paulaseer Lawrie rests at the Ashram where he lived and taught. His ministry lives on through the movement's world headquarters, the College of Vedas, and the annual <strong className="font-medium text-charcoal">Glorification Day</strong> celebrated every February 18–25.
                </p>
              </div>

              {/* Vertical timeline — staggered one-by-one reveal */}
              <div className="mt-10 border-l border-brass/30 pl-6 space-y-6">
                {[
                  { year: '1921', note: 'Born in Munnar, Kerala' },
                  { year: '1954', note: 'Participated in William Branham\'s healing revivals across India' },
                  { year: '1963', note: 'Founded Manujothi Ashram, Tirunelveli' },
                  { year: '1969', note: 'Displayed Vishwaroopam in Chicago, July 20–21 — the same day as the Apollo 11 moon landing' },
                ].map((t, i) => (
                  <motion.div
                    key={t.year}
                    className="relative"
                    initial={{ opacity: 0, x: -30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-5%' }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* Animated brass dot */}
                    <motion.div
                      className="absolute -left-[1.9rem] top-1 w-2 h-2 rounded-full bg-brass"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.2 + 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                    <span className="font-serif text-sm text-brass font-semibold">{t.year}</span>
                    <p className="font-sans text-sm text-charcoal/65 mt-0.5">{t.note}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="#about"
                  className="btn-arrow inline-flex items-center gap-3 border border-charcoal text-charcoal px-7 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-charcoal hover:text-parchment transition-colors duration-300 rounded-full"
                >
                  Read Full History <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats bar — scale in with stagger */}
        <FadeIn delay={0.2} variant="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-20 border border-stone divide-x divide-stone rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="py-8 px-6 text-center bg-parchment hover:bg-stone/20 transition-colors duration-300">
                <div className="stat-number">
                  <CountUp end={s.num} suffix={s.suffix} duration={2200} /><span className="text-brass text-xl ml-0.5">{s.unit}</span>
                </div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/50 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
