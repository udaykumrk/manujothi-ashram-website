import { FadeIn } from './FadeIn';

const microStats = [
  { value: 'Free', label: 'Literature distributed globally' },
  { value: '110+', label: 'Residents fed daily' },
  { value: '60+', label: 'Years of unbroken mission' },
];

export function Donation() {
  return (
    <section id="support" className="py-32 px-6 bg-charcoal text-parchment">
      <div className="max-w-4xl mx-auto">

        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">Support the Mission</span>
            <h2 className="font-serif text-4xl md:text-5xl text-parchment mt-4 mb-6">
              Sustain the Light to Mankind
            </h2>
            <p className="font-sans text-sm text-parchment/60 leading-relaxed max-w-2xl mx-auto">
              Your contributions allow Manujothi Ashram to provide sanctuary, vegetarian sustenance, and continuous spiritual guidance to our 110+ residents and global truth-seekers. The Ashram is committed to the <strong className="text-parchment/85 font-medium">free distribution of all literature</strong> — the Amrutha Manjari magazines, comparative scripture studies, and translated sermons — to anyone who seeks.
            </p>
          </div>
        </FadeIn>

        {/* Micro-stats row */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-3 gap-0 border border-parchment/10 mb-12">
            {microStats.map((s, i) => (
              <div
                key={i}
                className={`py-8 px-6 text-center ${i < microStats.length - 1 ? 'border-r border-parchment/10' : ''
                  }`}
              >
                <div className="font-serif text-3xl text-brass mb-2">{s.value}</div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-parchment/40">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CTA box */}
        <FadeIn delay={0.25}>
          <div className="border border-parchment/10 p-10 md:p-16 text-center">
            <p className="font-quote italic text-lg text-parchment/70 mb-10 leading-relaxed">
              "The light of Manujothi is kept alive by those who believe the truth is worth seeking."
            </p>
            <a
              href="mailto:contact@daysofsonofman.org"
              className="btn-arrow inline-flex items-center gap-3 bg-brass text-charcoal px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-parchment transition-colors duration-300"
            >
              Make a Contribution <span className="arrow">→</span>
            </a>
            <p className="font-sans text-[10px] text-parchment/30 mt-6 uppercase tracking-wider">
              All contributions support the Ashram's charitable and educational work
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
