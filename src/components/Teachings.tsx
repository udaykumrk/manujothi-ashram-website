import { useRef } from 'react';
import { FadeIn } from './FadeIn';
import { TextReveal } from './TextReveal';
import { motion } from 'motion/react';
import scriptureImg from '../assets/teaching_scripture.png';
import prophecyImg from '../assets/teaching_prophecy.png';
import meditationImg from '../assets/teaching_krishna_arjuna.png';
import coverAmrutha from '../assets/book_amrutha_manjari.png';
import coverAnkuram from '../assets/book_ankuram.png';
import coverLiberation from '../assets/book_secret_liberation.png';
import coverHands from '../assets/book_loving_hands.png';
import coverKrishna from '../assets/book_krishna_lahari.png';
import coverSermons from '../assets/book_sermons.png';

const teachings = [
  {
    category: 'Comparative Scripture',
    scriptureRef: '',
    title: 'The Comparative Study',
    description:
      'A living inquiry into the parallels between the Holy Bible, Bhagavad Gita, Holy Quran, and the Vedas — revealing the single divine voice behind all scripture.',
    volume: 'Volume I',
    image: scriptureImg,
  },
  {
    category: 'Eschatology',
    scriptureRef: 'Matthew 24:27',
    title: 'Prophecies of the Son of Man',
    description:
      'Understanding the signs of the age through the lens of ancient prophets — Ahilathirattu, Arulnool, Bhagavatham, Paradise Lost and Paradise Gained — alongside the writings of Paulaseer Lawrie.',
    volume: 'Volume II',
    image: prophecyImg,
  },
  {
    category: 'Spiritual Discipline',
    scriptureRef: '',
    title: 'The Immortal Yoga',
    description:
      'Practical spiritual disciplines for aligning the soul with the eternal. Drawn from the Vedas, the Sermon on the Mount, and the lived experience of the Ashram community.',
    volume: 'Volume III',
    image: meditationImg,
  },
];

const books = [
  {
    spine: 'AM',
    vol: 'Vol. I · 2024',
    title: 'Amrutha Manjari — Gnana Makarantham',
    subtitle: '"The Nectar of Wisdom"',
    author: 'Manujothi Ashram',
    lang: 'Telugu · English',
    link: 'mailto:ashram@manjothi.com?subject=Request%20Book%20-%20Amrutha%20Manjari%20Gnana%20Makarantham',
    linkLabel: '✉ Request Free Copy',
    cover: coverAmrutha,
  },
  {
    spine: 'AN',
    vol: 'Vol. II · 2025',
    title: 'Amrutha Manjari — Ankuram 2',
    subtitle: '"The Sprouting Seed"',
    author: 'Manujothi Ashram',
    lang: 'Telugu · English',
    link: 'mailto:ashram@manjothi.com?subject=Request%20Book%20-%20Amrutha%20Manjari%20Ankuram%202',
    linkLabel: '✉ Request Free Copy',
    cover: coverAnkuram,
  },
  {
    spine: 'SL',
    vol: '2019 · Partridge Publishing',
    title: 'The Secret of Liberation',
    subtitle: '"Purification of the self — the secret of immortality"',
    author: 'Devaaseer Lankadieu',
    lang: 'English',
    link: 'https://www.amazon.in/Secret-Liberation-Devaaseer-Lankadieu/dp/1543705340',
    linkLabel: '📖 Buy on Amazon',
    external: true,
    cover: coverLiberation,
  },
  {
    spine: 'SH',
    vol: '2024 · Partridge Publishing',
    title: 'The Skill of His Loving Hands',
    subtitle: '"A journey of spiritual healing and wellness"',
    author: 'Devaaseer Lankadieu',
    lang: 'English',
    link: 'https://www.amazon.in/s?k=the+skill+of+his+loving+hands',
    linkLabel: '📖 Buy on Amazon',
    external: true,
    cover: coverHands,
  },
  {
    spine: 'KL',
    vol: 'Special',
    title: 'Krishna Lahari',
    subtitle: 'Devotional hymns & collected songs',
    author: 'Manujothi Ashram',
    lang: 'Tamil · Telugu',
    link: 'mailto:ashram@manjothi.com?subject=Request%20Book%20-%20Krishna%20Lahari',
    linkLabel: '✉ Request Free Copy',
    cover: coverKrishna,
  },
  {
    spine: 'MS',
    vol: 'Archive',
    title: 'Shree Lahari Krishna — Messages & Sermons',
    subtitle: 'Compiled teachings 1969–1989',
    author: 'Manujothi Ashram',
    lang: 'Multi-language',
    link: 'mailto:ashram@manjothi.com?subject=Request%20Book%20-%20Messages%20and%20Sermons',
    linkLabel: '✉ Request Free Copy',
    cover: coverSermons,
  },
];

const AmazonIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.23 10.56V10c-1.94.02-4 .39-4 2.18 0 1.04.46 1.74 1.38 1.74.65 0 1.19-.38 1.54-1.07.44-.82.58-1.77.58-2.3m1.27 3.15c-.37.34-.91.36-1.33.14-.7-.58-.82-1.19-.82-.85-.97 1.28-2.08 1.7-3.51 1.7-1.94 0-3.24-1.16-3.24-3.2 0-2.34 1.67-3.49 4.36-3.68l2.54-.16V7.2c0-1.04-.09-1.62-1.24-1.62-1.13 0-1.22.74-1.22 1.3v.14H7.94v-.2c.04-2.28 1.82-2.97 3.85-2.97 2.04 0 3.5.78 3.5 2.97v4.37c0 .71 0 1.08.49 1.41v.13l-1.28-.47z" />
    <path d="M19.27 18.93C17.27 20.31 14.4 21 11.88 21 8.36 21 5.18 19.74 2.77 17.6c-.19-.16-.02-.38.22-.26 2.62 1.48 5.86 2.37 9.2 2.37 2.26 0 4.73-.45 7.01-1.4.34-.15.63.22.27.62m.79-.9c-.26-.33-1.72-.15-2.38-.08-.2.02-.23-.15-.05-.27 1.16-.81 3.07-.58 3.3-.31.22.28-.06 2.19-1.15 3.1-.17.14-.33.07-.25-.12.24-.6.78-1.98.52-2.32" />
  </svg>
);

export function Teachings() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <section id="teachings" className="py-16 sm:py-32 px-4 sm:px-6 bg-parchment">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeIn variant="reveal">
          <div className="text-center mb-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">Core Teachings</span>
          </div>
        </FadeIn>

        <TextReveal
          text="Publications & Sermons"
          as="h2"
          className="font-serif text-4xl md:text-5xl text-charcoal text-center mb-4"
          delay={0.05}
          stagger={0.06}
        />

        <FadeIn delay={0.1} variant="fade-up">
          <p className="text-center font-sans text-sm text-charcoal/50 max-w-xl mx-auto mb-6 leading-relaxed">
            The Ashram's <em>Amrutha Manjari</em> magazine series and collected messages of Lord Shri Lahari Krishna — broadcast on All India Radio, Tirunelveli (Akashvani) — freely distributed across India.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} variant="scale">
          <div className="ornament mb-16">✦</div>
        </FadeIn>

        {/* Teaching cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teachings.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.12} variant="scale">
              <motion.div
                whileHover={{
                  y: -24,
                  scale: 1.08,
                  boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.45), 0 20px 35px -10px rgba(184, 151, 104, 0.25)',
                  zIndex: 10,
                }}
                whileTap={{ scale: 1.02 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full flex flex-col overflow-hidden cursor-pointer rounded-2xl"
                style={{ zIndex: 1 }}
              >
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/50 group-hover:from-charcoal group-hover:via-charcoal/90 group-hover:to-charcoal/60 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-[2] p-6 sm:p-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-brass">{item.category}</span>
                    <span className="font-quote italic text-xs text-parchment/40">{item.scriptureRef}</span>
                  </div>
                  <div className="text-[9px] font-sans uppercase tracking-[0.2em] text-parchment/30 mb-3">{item.volume}</div>
                  <h3 className="font-serif text-2xl text-parchment mb-4 group-hover:text-brass transition-colors duration-300">{item.title}</h3>
                  <p className="font-sans text-sm text-parchment/65 leading-relaxed flex-grow">{item.description}</p>
                  <div className="mt-8 pt-6 border-t border-parchment/15 group-hover:border-brass/30 transition-colors duration-300">
                    <span className="btn-arrow inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-parchment/70 group-hover:text-brass transition-colors duration-300">
                      Read Document <span className="arrow">→</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* ── Books / Publications section ── */}
        <FadeIn delay={0.1} variant="fade-up">
          <div id="publications" className="mt-20">

            <div className="flex items-center gap-6 mb-10">
              <div className="h-px flex-1 bg-stone" />
              <div className="text-center">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass">Get the Publications</span>
                <h3 className="font-serif text-2xl text-charcoal mt-1">Books &amp; Publications</h3>
              </div>
              <div className="h-px flex-1 bg-stone" />
            </div>

            <p className="text-center font-sans text-xs text-charcoal/45 max-w-lg mx-auto mb-10 leading-relaxed">
              Published by <strong className="text-charcoal/60">Arjuna Publications</strong> via Soundarya Lahari Creations &amp; <strong className="text-charcoal/60">Partridge Publishing India</strong>. Ashram literature is distributed <em>free of charge</em> to genuine seekers.
            </p>

            {/* Book cards — horizontal auto-scroll carousel */}
            <div className="relative">
              {/* Left arrow */}
              <button
                onClick={() => {
                  const el = scrollRef.current;
                  if (el) el.scrollBy({ left: -324, behavior: 'smooth' });
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-charcoal/70 backdrop-blur-sm text-parchment flex items-center justify-center hover:bg-brass hover:text-charcoal transition-all duration-300 shadow-lg"
                aria-label="Scroll left"
              >
                ←
              </button>

              {/* Right arrow */}
              <button
                onClick={() => {
                  const el = scrollRef.current;
                  if (el) el.scrollBy({ left: 324, behavior: 'smooth' });
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-charcoal/70 backdrop-blur-sm text-parchment flex items-center justify-center hover:bg-brass hover:text-charcoal transition-all duration-300 shadow-lg"
                aria-label="Scroll right"
              >
                →
              </button>

              <div ref={scrollRef} className="w-full overflow-hidden rounded-2xl" role="region" aria-label="Books carousel">
                <div className="book-scroll-track flex">
                  {/* Two copies of all books for seamless infinite loop */}
                  {[0, 1].map((copy) =>
                    books.map((book) => (
                      <div
                        key={`${copy}-${book.title}`}
                        className="group relative flex-shrink-0 w-[220px] h-[310px] sm:w-[300px] sm:h-[400px] rounded-2xl overflow-hidden mx-2 sm:mx-3"
                      >
                        {/* Book cover image */}
                        <img
                          src={book.cover}
                          alt={`${book.title} — Book Cover`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Bottom gradient — hidden by default, slides up on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Content overlay — hidden, slides up on hover/tap */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col z-[2] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                          {/* Volume / language pill */}
                          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-brass/80 mb-1">
                            {book.vol} · {book.lang}
                          </span>

                          <h4 className="font-serif text-lg text-parchment leading-snug mb-1">
                            {book.title}
                          </h4>

                          <p className="font-quote italic text-xs text-parchment/50 mb-1 line-clamp-1">
                            {book.subtitle}
                          </p>

                          <p className="font-sans text-[10px] text-brass font-medium mb-3">
                            by {book.author}
                          </p>

                          {/* Action button */}
                          <a
                            href={book.link}
                            {...(book.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="btn-arrow inline-flex items-center gap-2 bg-brass text-charcoal px-4 py-2.5 text-[9px] font-bold uppercase tracking-widest hover:bg-parchment transition-colors duration-300 w-fit rounded-full"
                          >
                            {book.linkLabel} <span className="arrow">→</span>
                          </a>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-4 bg-charcoal text-parchment flex flex-col items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5 rounded-2xl sm:flex-row">
              <p className="font-sans text-xs text-parchment/50">
                All Ashram publications are distributed free of charge to genuine seekers.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 flex-shrink-0 w-full sm:w-auto">
                <a
                  href="mailto:ashram@manjothi.com?subject=Request%20Free%20Publications"
                  className="btn-arrow inline-flex items-center gap-2 bg-brass text-charcoal px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest hover:bg-parchment transition-colors duration-300 rounded-full w-full sm:w-auto"
                >
                  Request Free Copies <span className="arrow">→</span>
                </a>
                <a
                  href="https://www.youtube.com/@SoundaryaLahariCreations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-arrow inline-flex items-center gap-2 border border-parchment/20 text-parchment/65 px-5 py-2.5 text-[9px] font-semibold uppercase tracking-widest hover:border-brass hover:text-brass transition-colors duration-300 rounded-full"
                >
                  Watch on YouTube <span className="arrow">→</span>
                </a>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
