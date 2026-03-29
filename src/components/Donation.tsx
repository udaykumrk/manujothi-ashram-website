import { FadeIn } from './FadeIn';
import { CountUp } from './CountUp';
import { motion } from 'motion/react';

const microStats = [
  { text: 'Free', num: null, suffix: '', label: 'Literature distributed globally' },
  { text: null, num: 110, suffix: '+', label: 'Residents fed daily' },
  { text: null, num: 60, suffix: '+', label: 'Years of unbroken mission' },
];

export function Donation() {
  return (
    <section id="support" className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #0f0c07 0%, #1a1408 50%, #0d0b06 100%)' }}>


      {/* Gold top border line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, #D4A853, transparent)' }} />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-32">

        {/* Top label */}
        <FadeIn variant="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #D4A853, transparent)' }} />
            <span className="font-sans text-[9px] uppercase tracking-[0.5em]" style={{ color: '#D4A853' }}>
              Support the Mission
            </span>
          </div>
        </FadeIn>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — big headline */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light leading-[1.0] mb-8"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: '#fff' }}
            >
              Sustain<br />
              <span style={{ color: '#D4A853' }}>the Light</span><br />
              to Mankind
            </motion.h2>

            {/* Stats — vertical stacked */}
            <div className="space-y-6 mt-10">
              {microStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-6 border-b pb-6"
                  style={{ borderColor: 'rgba(212,168,83,0.15)' }}
                >
                  <div className="font-serif text-4xl sm:text-5xl font-light shrink-0" style={{ color: '#D4A853' }}>
                    {s.num !== null ? <CountUp end={s.num} suffix={s.suffix} duration={2200} /> : s.text}
                  </div>
                  <p className="font-sans text-xs uppercase tracking-[0.25em] text-white/40">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — quote + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-6"
          >
            <blockquote className="border-l-2 pl-6 mb-10" style={{ borderColor: '#D4A853' }}>
              <p className="font-serif italic text-xl sm:text-2xl text-white/70 leading-relaxed mb-4">
                "The light of Manujothi is kept alive by those who believe the truth is worth seeking."
              </p>
            </blockquote>

            <p className="font-sans text-sm text-white/45 leading-relaxed mb-10">
              Your contributions allow Manujothi Ashram to provide sanctuary, vegetarian sustenance, and continuous spiritual guidance to 110+ residents and global truth-seekers. All literature is distributed <strong className="text-white/70 font-medium">free of charge</strong> to anyone who seeks.
            </p>

            <a
              href="mailto:ashram@manjothi.com"
              className="group inline-flex items-center gap-4 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] rounded-full transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #D4A853, #B8893A)', color: '#000' }}
            >
              Make a Contribution
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <p className="font-sans text-[9px] mt-5 uppercase tracking-wider text-white/20">
              All contributions support the Ashram's charitable and educational work
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gold bottom border line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, #D4A853, transparent)' }} />
    </section>
  );
}
