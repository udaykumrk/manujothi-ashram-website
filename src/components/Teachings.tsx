import { FadeIn } from './FadeIn';
import { motion } from 'motion/react';

const teachings = [
  {
    category: 'Comparative Scripture',
    scriptureRef: 'John 1:1',
    title: 'The Comparative Study',
    description:
      'A living inquiry into the parallels between the Holy Bible, Bhagavad Gita, Holy Quran, and the Vedas — revealing the single divine voice behind all scripture.',
    volume: 'Volume I',
  },
  {
    category: 'Eschatology',
    scriptureRef: 'Matthew 24:27',
    title: 'Prophecies of the Son of Man',
    description:
      'Understanding the signs of the age through the lens of ancient prophets — Ahilathirattu, Arulnool, Paradise Lost and Gained — alongside the writings of Paulaseer Lawrie.',
    volume: 'Volume II',
  },
  {
    category: 'Spiritual Discipline',
    scriptureRef: 'John 12:34',
    title: 'The Immortal Yoga',
    description:
      'Practical spiritual disciplines for aligning the soul with the eternal. Drawn from the Vedas, the Sermon on the Mount, and the lived experience of the Ashram community.',
    volume: 'Volume III',
  },
];

const books = [
  {
    spine: 'AM',
    vol: 'Vol. I · 2024',
    title: 'Amrutha Manjari — Gnana Makarantham',
    subtitle: '"The Nectar of Wisdom"',
    lang: 'Telugu · English',
    amazon: 'https://www.amazon.in/s?k=Amrutha+Manjari+Gnana+Makarantham',
  },
  {
    spine: 'AN',
    vol: 'Vol. II · 2025',
    title: 'Amrutha Manjari — Ankuram 2',
    subtitle: '"The Sprouting Seed"',
    lang: 'Telugu · English',
    amazon: 'https://www.amazon.in/s?k=Amrutha+Manjari+Ankuram',
  },
  {
    spine: 'KL',
    vol: 'Special',
    title: 'Krishna Lahari',
    subtitle: 'Devotional hymns & collected songs',
    lang: 'Tamil · Telugu',
    amazon: 'https://www.amazon.in/s?k=Krishna+Lahari+Lahari+Krishna',
  },
  {
    spine: 'SL',
    vol: 'Archive',
    title: 'Shree Lahari Krishna — Messages & Sermons',
    subtitle: 'Compiled teachings 1969–1989',
    lang: 'Multi-language',
    amazon: 'https://www.amazon.in/s?k=Paulaseer+Lawrie+Lahari+Krishna',
  },
];

const AmazonIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.23 10.56V10c-1.94.02-4 .39-4 2.18 0 1.04.46 1.74 1.38 1.74.65 0 1.19-.38 1.54-1.07.44-.82.58-1.77.58-2.3m1.27 3.15c-.37.34-.91.36-1.33.14-.7-.58-.82-1.19-.82-.85-.97 1.28-2.08 1.7-3.51 1.7-1.94 0-3.24-1.16-3.24-3.2 0-2.34 1.67-3.49 4.36-3.68l2.54-.16V7.2c0-1.04-.09-1.62-1.24-1.62-1.13 0-1.22.74-1.22 1.3v.14H7.94v-.2c.04-2.28 1.82-2.97 3.85-2.97 2.04 0 3.5.78 3.5 2.97v4.37c0 .71 0 1.08.49 1.41v.13l-1.28-.47z" />
    <path d="M19.27 18.93C17.27 20.31 14.4 21 11.88 21 8.36 21 5.18 19.74 2.77 17.6c-.19-.16-.02-.38.22-.26 2.62 1.48 5.86 2.37 9.2 2.37 2.26 0 4.73-.45 7.01-1.4.34-.15.63.22.27.62m.79-.9c-.26-.33-1.72-.15-2.38-.08-.2.02-.23-.15-.05-.27 1.16-.81 3.07-.58 3.3-.31.22.28-.06 2.19-1.15 3.1-.17.14-.33.07-.25-.12.24-.6.78-1.98.52-2.32" />
  </svg>
);

export function Teachings() {
  return (
    <section id="teachings" className="py-32 px-6 bg-parchment">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">Core Teachings</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal text-center mb-4">
            Publications &amp; Sermons
          </h2>
          <p className="text-center font-sans text-sm text-charcoal/50 max-w-xl mx-auto mb-6 leading-relaxed">
            The Ashram's <em>Amrutha Manjari</em> magazine series and collected messages of Lord Shri Lahari Krishna — broadcast on All India Radio, Tirunelveli (Akashvani) — freely distributed across India.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="ornament mb-16">✦</div>
        </FadeIn>

        {/* Teaching cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone">
          {teachings.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group bg-parchment p-10 h-full flex flex-col hover:bg-stone/10 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-brass">{item.category}</span>
                  <span className="font-quote italic text-xs text-charcoal/40">{item.scriptureRef}</span>
                </div>
                <div className="text-[9px] font-sans uppercase tracking-[0.2em] text-charcoal/30 mb-3">{item.volume}</div>
                <h3 className="font-serif text-2xl text-charcoal mb-4 group-hover:text-sepia transition-colors duration-300">{item.title}</h3>
                <p className="font-sans text-sm text-charcoal/65 leading-relaxed flex-grow">{item.description}</p>
                <div className="mt-8 pt-6 border-t border-stone">
                  <span className="btn-arrow inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal group-hover:text-brass transition-colors duration-300">
                    Read Document <span className="arrow">→</span>
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* ── Books / Publications section ── */}
        <FadeIn delay={0.3}>
          <div className="mt-20">

            <div className="flex items-center gap-6 mb-10">
              <div className="h-px flex-1 bg-stone" />
              <div className="text-center">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">Get the Publications</span>
                <h3 className="font-serif text-2xl text-charcoal mt-1">Books by Manujothi Ashram</h3>
              </div>
              <div className="h-px flex-1 bg-stone" />
            </div>

            <p className="text-center font-sans text-xs text-charcoal/45 max-w-lg mx-auto mb-10 leading-relaxed">
              Published by <strong className="text-charcoal/60">Arjuna Publications</strong> via Soundarya Lahari Creations. Literature is distributed <em>free of charge</em> to genuine seekers — or buy a printed copy on Amazon.
            </p>

            {/* Book cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone">
              {books.map((book) => (
                <div
                  key={book.title}
                  className="group bg-parchment p-8 flex flex-col hover:bg-stone/20 transition-colors duration-300"
                >
                  <div className="flex gap-3 items-end mb-6">
                    <div className="relative w-10 h-14 bg-charcoal flex-shrink-0 flex items-center justify-center shadow-md">
                      <div className="absolute left-0 inset-y-0 w-1.5 bg-brass/40" />
                      <span className="font-serif text-brass text-sm font-bold pl-1">{book.spine}</span>
                    </div>
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-charcoal/30">{book.vol}</span>
                  </div>
                  <h4 className="font-serif text-lg text-charcoal leading-snug mb-1 group-hover:text-sepia transition-colors duration-300">{book.title}</h4>
                  <p className="font-quote italic text-xs text-charcoal/45 mb-2">{book.subtitle}</p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-brass/60 mb-6">{book.lang}</p>
                  <a
                    href={book.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-arrow mt-auto inline-flex items-center gap-2 border border-charcoal text-charcoal px-4 py-2.5 text-[9px] font-bold uppercase tracking-widest hover:bg-charcoal hover:text-parchment transition-colors duration-300"
                  >
                    <AmazonIcon />
                    Search on Amazon <span className="arrow">→</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="mt-px bg-charcoal text-parchment flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5">
              <p className="font-sans text-xs text-parchment/50">
                Can't find what you need? Search all Ashram publications on Amazon.
              </p>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <a
                  href="https://www.amazon.in/s?k=Manujothi+Ashram+Lahari+Krishna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-arrow inline-flex items-center gap-2 bg-brass text-charcoal px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest hover:bg-parchment transition-colors duration-300"
                >
                  Browse All on Amazon <span className="arrow">→</span>
                </a>
                <a
                  href="mailto:contact@daysofsonofman.org?subject=Request%20Free%20Publications"
                  className="btn-arrow inline-flex items-center gap-2 border border-parchment/20 text-parchment/65 px-5 py-2.5 text-[9px] font-semibold uppercase tracking-widest hover:border-brass hover:text-brass transition-colors duration-300"
                >
                  Request Free Copies <span className="arrow">→</span>
                </a>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
