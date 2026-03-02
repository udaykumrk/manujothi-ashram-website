import { FadeIn } from './FadeIn';
import eventImg from '../assets/prayer_hall.png';
import riverImg from '../assets/tamirabarani_river.png';

export function Events() {
  return (
    <section id="events" className="py-24 md:py-32 bg-stone/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">Events &amp; Visitation</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-3">Gather in Fellowship</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Events content */}
          <FadeIn>
            <div className="space-y-10">

              {/* Glorification Day */}
              <div className="border-l-2 border-brass pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-brass text-charcoal text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1">
                    Annual · Feb 18–25
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">Glorification Day</h3>
                <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
                  Held every year from <strong className="text-charcoal font-medium">February 18th to 25th</strong> at Manujothi Ashram, Sathia Nagaram. This multi-day celebration draws seekers from across India and the globe for deep spiritual reflection, congregational singing, communal vegetarian meals, and extended comparative scripture teachings. The Kalki Jayanthi celebration is held in this season.
                </p>
              </div>

              {/* Shree Lahari Krishna Praise Centres */}
              <div className="border-l-2 border-stone pl-6">
                <h3 className="font-serif text-2xl text-charcoal mb-3">Shree Lahari Krishna Praise &amp; Meditation Centres</h3>
                <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
                  Affiliated praise and meditation centres are active across India and internationally. Messages of Lord Shri Lahari Krishna have been broadcast on <strong className="text-charcoal font-medium">All India Radio (Akashvani), Tirunelveli</strong>. Contact the Ashram to locate a centre near you.
                </p>
              </div>

              {/* Daily life */}
              <div className="border-l-2 border-stone pl-6">
                <h3 className="font-serif text-2xl text-charcoal mb-3">Daily Meditation</h3>
                <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
                  The Ashram's 63-acre grounds — with ancient banyan groves and quiet pathways along the Tamirabarani riverbank — are open for meditation, study, and personal retreat. Visitors are welcome to participate in the rhythms of Ashram life: prayer, study, simple work, and communal meals.
                </p>
              </div>

              {/* Visit CTA */}
              <div id="visit" className="pt-2">
                <a
                  href="mailto:contact@daysofsonofman.org"
                  className="btn-arrow inline-flex items-center gap-3 bg-charcoal text-parchment px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-brass hover:text-charcoal transition-colors duration-300"
                >
                  Plan Your Visit <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Images stack */}
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              {/* Prayer hall image */}
              <div className="relative overflow-hidden">
                <img
                  src={eventImg}
                  alt="Prayer hall — Manujothi Ashram"
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-5">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-parchment/80">
                    Prayer Hall · Manujothi Ashram
                  </p>
                </div>
              </div>

              {/* Tamirabarani image */}
              <div className="relative overflow-hidden">
                <img
                  src={riverImg}
                  alt="Tamirabarani River — sacred setting of Manujothi Ashram"
                  className="w-full object-cover"
                  style={{ aspectRatio: '16/7' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-5">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-parchment/80">
                    Tamirabarani River · Tirunelveli
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
