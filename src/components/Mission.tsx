import { FadeIn } from './FadeIn';

export function Mission() {
  return (
    <section id="about" className="py-28 md:py-40 px-6 bg-parchment">
      <div className="max-w-4xl mx-auto">

        {/* Section label */}
        <FadeIn>
          <div className="text-center mb-12">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">
              Our Foundation
            </span>
          </div>
        </FadeIn>

        {/* Top ornament */}
        <FadeIn delay={0.1}>
          <div className="ornament mb-10">✦</div>
        </FadeIn>

        {/* The mission paragraph — drop-cap */}
        <FadeIn delay={0.2}>
          <p className="drop-cap font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed md:leading-relaxed text-charcoal text-center">
            We do not teach the traditions of men. Through a living comparative study of the Holy Bible, Bhagavad Gita, Holy Quran, and the Vedas, the Manujothi Ashram seeks to illuminate the one supreme truth that underlies all divine revelation — and to unite all humanity beneath the banner of One God, One Nation.
          </p>
        </FadeIn>

        {/* Bottom ornament */}
        <FadeIn delay={0.3}>
          <div className="ornament mt-10">✦</div>
        </FadeIn>

        {/* Sub-note */}
        <FadeIn delay={0.4}>
          <p className="text-center font-sans text-sm text-charcoal/50 mt-10 tracking-wide leading-relaxed max-w-xl mx-auto">
            The College of Vedas and Other Scriptures at Manujothi Ashram conducts comparative studies across the Bible, Bhagavad Gita, Quran, Geethanjali, Ahilathirattu, Arulnool, and other prophetical texts — free and open to all seekers.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
