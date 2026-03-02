import { FadeIn } from './FadeIn';
import founderImg from '../assets/founder_real.jpg';

const stats = [
  { value: '63', unit: 'Acres', label: 'Ashram grounds' },
  { value: '110+', unit: 'Residents', label: 'Living & serving' },
  { value: '1963', unit: '', label: 'Year established' },
  { value: '60+', unit: 'Years', label: 'Of ministry' },
];

export function Founder() {
  return (
    <section className="py-24 md:py-32 bg-stone/25">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Portrait side */}
          <FadeIn className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decorative offset frame */}
              <div className="absolute -inset-3 border border-brass/25 pointer-events-none z-10" />
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-brass/10 z-0" />

              <img
                src={founderImg}
                alt="R. Paulaseer Lawrie Muthukrishna — Founder of Manujothi Ashram, speaking at a meeting"
                className="relative z-[2] w-full object-cover object-top"
                style={{ aspectRatio: '3/4' }}
              />

              {/* Caption band */}
              <div className="bg-charcoal text-parchment px-6 py-4 relative z-[2]">
                <p className="font-serif text-lg">R. Paulaseer Lawrie</p>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mt-1">
                  Gurudev Shree Lahari Krishna · 1921 – 1989
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Text side */}
          <FadeIn delay={0.2} className="order-1 lg:order-2">
            <div className="pt-0 lg:pt-8">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">
                The Founder &amp; The Ashram
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-6">
                A Legacy of Spiritual Research
              </h2>

              <div className="space-y-5 text-charcoal/75 text-lg leading-relaxed font-light">
                <p>
                  Born on February 24, 1921, in Munnar, Kerala, <strong className="font-medium text-charcoal">R. Paulaseer Lawrie Muthukrishna</strong> — known to his followers as <em>Gurudev Shree Lahari Krishna</em> — dedicated his life to a single conviction: that one God calls to all of humanity through all scripture.
                </p>
                <p>
                  In 1963, he established the <strong className="font-medium text-charcoal">63-acre Manujothi Ashram</strong> near the sacred banks of the Tamirabarani river in Tirunelveli, Tamil Nadu. "Manujothi" means <em>Light to the Mankind</em>. It was to be the Zion of earth for those seeking the underlying unity of all divine revelation.
                </p>
                <p>
                  Paulaseer Lawrie rests at the Ashram where he lived and taught. His ministry lives on through the movement's world headquarters, the College of Vedas, and the annual <strong className="font-medium text-charcoal">Glorification Day</strong> celebrated every February 18–25.
                </p>
              </div>

              {/* Vertical timeline */}
              <div className="mt-10 border-l border-brass/30 pl-6 space-y-6">
                {[
                  { year: '1921', note: 'Born in Munnar, Kerala' },
                  { year: '1954', note: 'Participated in William Branham\'s healing revivals across India' },
                  { year: '1963', note: 'Founded Manujothi Ashram, Tirunelveli' },
                  { year: '1969', note: 'Displayed Vishwaroopam in Chicago, July 20–21' },
                  { year: '1989', note: 'Passed on February 24 — interred at the Ashram' },
                ].map((t) => (
                  <div key={t.year} className="relative">
                    <div className="absolute -left-[1.9rem] top-1 w-2 h-2 rounded-full bg-brass" />
                    <span className="font-serif text-sm text-brass font-semibold">{t.year}</span>
                    <p className="font-sans text-sm text-charcoal/65 mt-0.5">{t.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="#about"
                  className="btn-arrow inline-flex items-center gap-3 border border-charcoal text-charcoal px-7 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-charcoal hover:text-parchment transition-colors duration-300"
                >
                  Read Full History <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats bar */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-20 border border-stone divide-x divide-stone">
            {stats.map((s) => (
              <div key={s.label} className="py-8 px-6 text-center bg-parchment hover:bg-stone/20 transition-colors duration-300">
                <div className="stat-number">
                  {s.value}<span className="text-brass text-xl ml-0.5">{s.unit}</span>
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
