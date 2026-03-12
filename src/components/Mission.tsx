import { FadeIn } from './FadeIn';
import { TextReveal } from './TextReveal';

export function Mission() {
  return (
    <section id="about" className="py-28 md:py-40 px-6 bg-parchment">
      <div className="max-w-4xl mx-auto">

        {/* Section label */}
        <FadeIn variant="reveal">
          <div className="text-center mb-12">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">
              Our Foundation
            </span>
          </div>
        </FadeIn>

        {/* Top ornament */}
        <FadeIn delay={0.1} variant="scale">
          <div className="ornament mb-10">✦</div>
        </FadeIn>

        {/* The mission paragraph — drop-cap with text reveal */}
        <FadeIn delay={0.2} variant="reveal" duration={1.2}>
          <p className="drop-cap font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed md:leading-relaxed text-charcoal text-center">
            We do not teach the traditions of men. Through a living comparative study of the Holy Bible, Bhagavad Gita, Holy Quran, and the Vedas, the Manujothi Ashram seeks to illuminate the one supreme truth that underlies all divine revelation — and to unite all humanity beneath the banner of One God, One Nation.
          </p>
        </FadeIn>

        {/* Bottom ornament */}
        <FadeIn delay={0.15} variant="scale">
          <div className="ornament mt-10">✦</div>
        </FadeIn>

        {/* Sub-note / College of Vedas Card */}
        <FadeIn delay={0.1} variant="fade-right">
          <div className="group relative z-0 mt-12 border border-brass/30 bg-stone/20 p-8 md:p-10 text-center max-w-2xl mx-auto rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:z-10 hover:shadow-2xl hover:bg-stone/30 cursor-pointer">
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-brass font-bold mb-2 block">Est. at the Ashram</span>
            <TextReveal
              text="College of Vedas & Other Scriptures"
              as="h2"
              className="font-serif text-2xl text-charcoal mb-4 text-center"
              delay={0.1}
              stagger={0.05}
            />
            {/* Scrollable description area — slides in from right and stops */}
            <div className="relative mt-4 overflow-hidden w-full text-center group-hover:min-h-[140px] transition-all duration-500">
              {/* Default state indicator (fades out on hover) */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 z-10">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass/70 border border-brass/30 px-4 py-1.5 rounded-full">
                  Hover to Read About the College
                </span>
              </div>
              
              {/* Text container (slides in from the right, stops at x=0) */}
              <div className="overflow-y-auto max-h-[140px] pr-2 custom-scrollbar text-left text-center flex flex-col gap-3 translate-x-[110%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
                  <strong className="text-brass">A Research Centre for obtaining Eternal Life.</strong> It trains people of various religious organizations to come to the realization of <strong className="font-medium text-charcoal px-1">One God — One Nation,</strong> leaving caste, creed, and religion behind, by following the Vedic principle.
                </p>
                <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
                  Comparative studies across the <span className="italic">Bible, Bhagavad Gita, Quran, Bhagavatham, Geethanjali, Ahilathirattu, Arulnool, Paradise Lost and Paradise Gained</span> — free and open to all genuine seekers.
                </p>
              </div>
            </div>
            
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
