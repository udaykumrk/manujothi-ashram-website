import { FadeIn } from './FadeIn';
import { AshramEmblem } from './AshramEmblem';

/* ── SVG Icon Components ── */
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Brass rule transition */}
      <div className="h-px bg-brass/20" />

      <footer className="bg-charcoal text-parchment/60 grain-overlay relative">

        {/* ── Top section: Newsletter CTA ── */}
        <div className="border-b border-parchment/8">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <FadeIn variant="fade-up">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="font-serif text-2xl text-parchment mb-2">Stay Connected with the Ashram</h3>
                  <p className="font-sans text-xs text-parchment/40">Receive updates on events, teachings, and Ashram news</p>
                </div>
                <div className="flex items-center gap-0 w-full md:w-auto">
                  <div className="relative flex-1 md:flex-none">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-parchment/30">
                      <MailIcon />
                    </div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full md:w-72 bg-parchment/5 border border-parchment/15 text-parchment font-sans text-sm pl-12 pr-4 py-4 placeholder:text-parchment/25 focus:outline-none focus:border-brass/50 transition-colors rounded-l-full"
                    />
                  </div>
                  <button className="bg-brass text-charcoal px-6 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-parchment transition-colors duration-300 flex-shrink-0 rounded-r-full">
                    Subscribe
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── Main footer grid ── */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            {/* Column 1 — Brand + Address */}
            <FadeIn variant="fade-up" delay={0}>
              <div>
                <div className="mb-5">
                  <AshramEmblem size={56} />
                </div>

                <h4 className="font-serif text-xl text-parchment mb-1">Manujothi Ashram</h4>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-6">
                  Light to the Mankind · Est. 1963
                </p>

                <p className="font-sans text-xs text-parchment/40 leading-relaxed max-w-xs">
                  A spiritual centre dedicated to the comparative study of all scriptures, revealing the single divine voice behind all sacred texts.
                </p>
              </div>
            </FadeIn>

            {/* Column 2 — Contact Info with Icons */}
            <FadeIn variant="fade-up" delay={0.08}>
              <div>
                <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brass mb-6">
                  Contact Us
                </h4>

                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="text-brass/60 mt-0.5 flex-shrink-0"><LocationIcon /></span>
                    <address className="not-italic font-sans text-xs text-parchment/50 leading-6">
                      Sathianagaram, Odaimarichan Post<br />
                      (Via) Pappagudi, Near Mukkudal<br />
                      Tirunelveli, Tamil Nadu<br />
                      India — 627 602
                    </address>
                  </li>

                  <li>
                    <a href="mailto:ashram@manjothi.com" className="flex items-center gap-3 group">
                      <span className="text-brass/60 group-hover:text-brass transition-colors flex-shrink-0"><MailIcon /></span>
                      <span className="font-sans text-xs text-parchment/50 group-hover:text-parchment transition-colors">ashram@manjothi.com</span>
                    </a>
                  </li>

                  <li>
                    <a href="tel:+914634000000" className="flex items-center gap-3 group">
                      <span className="text-brass/60 group-hover:text-brass transition-colors flex-shrink-0"><PhoneIcon /></span>
                      <span className="font-sans text-xs text-parchment/50 group-hover:text-parchment transition-colors">+91 4634 000 000</span>
                    </a>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Column 3 — Quick Links */}
            <FadeIn variant="fade-up" delay={0.16}>
              <div>
                <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brass mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: 'About the Founder', href: '#about' },
                    { label: 'Core Teachings', href: '#teachings' },
                    { label: 'Publications', href: '#publications' },
                    { label: 'Visit the Ashram', href: '#visit' },
                    { label: 'Upcoming Events', href: '#events' },
                    { label: 'Support the Mission', href: '#support' },
                  ].map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="animated-link font-sans text-xs text-parchment/50 hover:text-parchment transition-colors duration-300 flex items-center gap-2"
                      >
                        <span className="text-brass/40 text-[8px]">▸</span>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Column 4 — Social & Associated Sites */}
            <FadeIn variant="fade-up" delay={0.24}>
              <div>
                <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brass mb-6">
                  Connect & Follow
                </h4>

                {/* Social icons row */}
                <div className="flex items-center gap-3 mb-8">
                  <a
                    href="https://www.youtube.com/@SoundaryaLahariCreations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-parchment/15 flex items-center justify-center text-parchment/40 hover:text-[#FF0000] hover:border-[#FF0000]/30 transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <YouTubeIcon />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-parchment/15 flex items-center justify-center text-parchment/40 hover:text-[#1877F2] hover:border-[#1877F2]/30 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="mailto:ashram@manjothi.com"
                    className="w-10 h-10 rounded-full border border-parchment/15 flex items-center justify-center text-parchment/40 hover:text-brass hover:border-brass/30 transition-all duration-300"
                    aria-label="Email"
                  >
                    <MailIcon />
                  </a>
                </div>

                {/* Associated sites */}
                <h5 className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-parchment/25 mb-4">
                  Associated Sites
                </h5>
                <ul className="space-y-2.5">
                  {[
                    { label: 'daysofsonofman.org', href: 'https://daysofsonofman.org' },
                    { label: 'daysofthesonofman.com', href: 'https://daysofthesonofman.com' },
                    { label: 'manujothi.org', href: 'https://manujothi.org' },
                  ].map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-sans text-[11px] text-parchment/40 hover:text-parchment transition-colors duration-300"
                      >
                        <span className="text-brass/40"><GlobeIcon /></span>
                        {s.label}
                        <span className="text-parchment/20 text-[9px]">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Documentary */}
                <div className="mt-6 pt-5 border-t border-parchment/8">
                  <a
                    href="https://youtu.be/Z99LdE1f6_w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-[#FF0000]/50 group-hover:text-[#FF0000] transition-colors"><YouTubeIcon /></span>
                    <div>
                      <p className="font-sans text-[10px] text-parchment/30">Watch Documentary</p>
                      <p className="font-sans text-xs text-parchment/50 group-hover:text-parchment transition-colors">Vykunta Loka Utsavamulu</p>
                    </div>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── Bottom bar ── */}
          <FadeIn variant="fade-up" delay={0.3}>
            <div className="border-t border-parchment/8 pt-8 pb-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[11px] text-parchment/25">
                  <p>© {year} Manujothi Ashram. All rights reserved.</p>
                  <div className="flex gap-4">
                    <span className="hover:text-parchment/40 cursor-default transition-colors">Privacy Policy</span>
                    <span className="text-parchment/10">|</span>
                    <span className="hover:text-parchment/40 cursor-default transition-colors">Terms of Use</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <p className="flex items-center gap-1.5 text-[11px] text-parchment/20">
                    Made with <span className="text-brass/50"><HeartIcon /></span> for the Light
                  </p>

                  {/* Back to top */}
                  <button
                    onClick={scrollToTop}
                    className="w-10 h-10 rounded-full border border-parchment/15 flex items-center justify-center text-parchment/30 hover:text-brass hover:border-brass/30 transition-all duration-300"
                    aria-label="Back to top"
                  >
                    <ArrowUpIcon />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

      </footer>
    </>
  );
}
