import { FadeIn } from './FadeIn';
import { AshramEmblem } from './AshramEmblem';
import { PhysicsCards } from './PhysicsCards';
import {
  MailIcon,
  LocationIcon,
  YouTubeIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  HeartIcon,
  ArrowUpIcon,
} from './Icons';


export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Brass rule transition */}
      <div className="h-px bg-brass/20" />

      <footer id="contact" className="bg-charcoal text-parchment/60 grain-overlay relative">

        {/* ── Physics Social Cards Section (Matter.js) ── */}
        <div className="border-b border-parchment/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <PhysicsCards />
          </div>
        </div>

        {/* ── Contact Details Row ── */}
        <div className="border-b border-parchment/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <FadeIn variant="fade-up">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
                {/* Address */}
                <div className="flex items-start gap-3 p-5 rounded-2xl border border-parchment/8 bg-parchment/[0.02]">
                  <span className="text-brass/50 mt-0.5 flex-shrink-0"><LocationIcon /></span>
                  <address className="not-italic font-sans text-xs text-parchment/45 leading-6">
                    Sathianagaram, Odaimarichan Post<br />
                    Tirunelveli, Tamil Nadu<br />
                    India — 627 602
                  </address>
                </div>

                {/* Email */}
                <a href="mailto:ashram@manjothi.com" className="flex items-center gap-3 p-5 rounded-2xl border border-parchment/8 bg-parchment/[0.02] hover:border-brass/20 transition-colors group">
                  <span className="text-brass/50 group-hover:text-brass transition-colors flex-shrink-0"><MailIcon /></span>
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-parchment/30 mb-0.5">Email</p>
                    <p className="font-sans text-xs text-parchment/50 group-hover:text-parchment transition-colors">ashram@manjothi.com</p>
                  </div>
                </a>

                {/* Documentary */}
                <a
                  href="https://youtu.be/Z99LdE1f6_w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-5 rounded-2xl border border-parchment/8 bg-parchment/[0.02] hover:border-[#FF0000]/20 transition-colors group"
                >
                  <span className="text-[#FF0000]/40 group-hover:text-[#FF0000] transition-colors flex-shrink-0"><YouTubeIcon /></span>
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-parchment/30 mb-0.5">Watch</p>
                    <p className="font-sans text-xs text-parchment/50 group-hover:text-parchment transition-colors">Ashram Documentary</p>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── Newsletter Section ── */}
        <div className="border-b border-parchment/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <FadeIn variant="fade-up">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="font-serif text-2xl text-parchment mb-2">Stay Connected with the Ashram</h3>
                  <p className="font-sans text-xs text-parchment/40">Receive updates on events, teachings, and Ashram news</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 w-full md:w-auto">
                  <div className="relative flex-1 md:flex-none">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-parchment/30">
                      <MailIcon />
                    </div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full md:w-72 bg-parchment/5 border border-parchment/15 text-parchment font-sans text-sm pl-12 pr-4 py-4 placeholder:text-parchment/25 focus:outline-none focus:border-brass/50 transition-colors rounded-full sm:rounded-l-full sm:rounded-r-none"
                    />
                  </div>
                  <button
                    onClick={() => alert('Newsletter subscription coming soon! Please email ashram@manjothi.com to stay connected.')}
                    className="bg-brass text-charcoal px-6 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-parchment transition-colors duration-300 flex-shrink-0 rounded-full sm:rounded-l-none sm:rounded-r-full"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── Footer Grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

            {/* Column 1 — Brand */}
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

            {/* Column 2 — Quick Links */}
            <FadeIn variant="fade-up" delay={0.08}>
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

            {/* Column 3 — Associated Sites */}
            <FadeIn variant="fade-up" delay={0.16}>
              <div>
                <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brass mb-6">
                  Associated Sites
                </h4>
                <ul className="space-y-3">
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
                        className="flex items-center gap-2 font-sans text-xs text-parchment/50 hover:text-parchment transition-colors duration-300"
                      >
                        <span className="text-brass/40"><GlobeIcon /></span>
                        {s.label}
                        <span className="text-parchment/20 text-[9px]">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Social row */}
                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-parchment/8">
                  {[
                    { href: 'https://www.youtube.com/channel/UC7yXvYXVzDx-FwfgZpX07Rg', icon: <YouTubeIcon />, color: '#FF0000', label: 'YouTube' },
                    { href: 'https://facebook.com', icon: <FacebookIcon />, color: '#1877F2', label: 'Facebook' },
                    { href: 'https://www.instagram.com/soundarya_lahari_creations?igsh=ajVveG5ldXBmczg=', icon: <InstagramIcon />, color: '#E4405F', label: 'Instagram' },
                    { href: 'mailto:ashram@manjothi.com', icon: <MailIcon />, color: '#B89768', label: 'Email' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="w-9 h-9 rounded-full border border-parchment/15 flex items-center justify-center text-parchment/30 transition-all duration-300"
                      style={{ ['--hover-color' as string]: s.color }}
                      aria-label={s.label}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = s.color; (e.currentTarget as HTMLElement).style.borderColor = s.color + '4D'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ''; (e.currentTarget as HTMLElement).style.borderColor = ''; }}
                    >
                      {s.icon}
                    </a>
                  ))}
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
