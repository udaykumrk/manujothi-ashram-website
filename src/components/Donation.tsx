import { FadeIn } from './FadeIn';
import { TextReveal } from './TextReveal';
import { CountUp } from './CountUp';
import { motion } from 'motion/react';

const microStats = [
  { text: 'Free', num: null, suffix: '', label: 'Literature distributed globally' },
  { text: null, num: 110, suffix: '+', label: 'Residents fed daily' },
  { text: null, num: 60, suffix: '+', label: 'Years of unbroken mission' },
];

export function Donation() {
  return (
    <section id="support" className="py-16 sm:py-32 px-4 sm:px-6 bg-charcoal text-parchment">
      <div className="max-w-4xl mx-auto">

        <FadeIn variant="reveal">
          <div className="text-center mb-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">Support the Mission</span>
          </div>
        </FadeIn>

        <TextReveal
          text="Sustain the Light to Mankind"
          as="h2"
          className="font-serif text-4xl md:text-5xl text-parchment text-center mb-6"
          delay={0.05}
          stagger={0.07}
        />

        <FadeIn delay={0.1} variant="fade-up">
          <p className="font-sans text-sm text-parchment/60 leading-relaxed max-w-2xl mx-auto text-center mb-16">
            Your contributions allow Manujothi Ashram to provide sanctuary, vegetarian sustenance, and continuous spiritual guidance to our 110+ residents and global truth-seekers. The Ashram is committed to the <strong className="text-parchment/85 font-medium">free distribution of all literature</strong> — the Amrutha Manjari magazines, comparative scripture studies, and translated sermons — to anyone who seeks.
          </p>
        </FadeIn>

        {/* Micro-stats row — scale in */}
        <FadeIn delay={0.1} variant="scale">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-parchment/10 mb-12 rounded-2xl overflow-hidden">
            {microStats.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 px-4 sm:py-8 sm:px-6 text-center ${i < microStats.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-parchment/10' : ''
                  }`}
              >
                <div className="font-serif text-3xl text-brass mb-2">
                  {s.num !== null ? <CountUp end={s.num} suffix={s.suffix} duration={2200} /> : s.text}
                </div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-parchment/40">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1} variant="scale">
          <div className="ornament mb-12">✦</div>
        </FadeIn>

        {/* CTA box — slides in from far right like HopeRise */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border border-parchment/10 p-6 sm:p-10 md:p-16 text-center grain-overlay rounded-3xl">
            <p className="font-quote italic text-lg text-parchment/70 mb-10 leading-relaxed">
              "The light of Manujothi is kept alive by those who believe the truth is worth seeking."
            </p>
            <a
              href="mailto:ashram@manjothi.com"
              className="btn-arrow inline-flex items-center gap-3 bg-brass text-charcoal px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-parchment transition-colors duration-300 rounded-full"
            >
              Make a Contribution <span className="arrow">→</span>
            </a>
            <p className="font-sans text-[10px] text-parchment/30 mt-6 uppercase tracking-wider">
              All contributions support the Ashram's charitable and educational work
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
