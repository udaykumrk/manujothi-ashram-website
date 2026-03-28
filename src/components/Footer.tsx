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
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer id="contact" className="relative text-white overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0d0b06 0%, #0a0806 100%)' }}>

        {/* Subtle gold top glow */}
        <div className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 100%)' }} />

        {/* ── Physics Social Cards Section ── */}
        <div className="border-b" style={{ borderColor: 'rgba(212,168,83,0.12)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <FadeIn variant="reveal">
              <p className="font-sans text-[9px] uppercase tracking-[0.45em] mb-8 text-center" style={{ color: 'rgba(212,168,83,0.6)' }}>
                Connect with Us
              </p>
            </FadeIn>
            <PhysicsCards />
          </div>
        </div>

        {/* ── Contact Details ── */}
        <div className="border-b" style={{ borderColor: 'rgba(212,168,83,0.08)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <FadeIn variant="fade-up">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="flex items-start gap-3 p-5 rounded-2xl"
                  style={{ background: 'rgba(212,168,83,0.04)', border: '1px solid rgba(212,168,83,0.10)' }}>
                  <span className="mt-0.5 flex-shrink-0" style={{ color: 'rgba(212,168,83,0.60)' }}><LocationIcon /></span>
                  <address className="not-italic font-sans text-xs leading-6" style={{ color: 'rgba(255,255,255,0.40)' }}>
                    Sathianagaram, Odaimarichan Post<br />
                    Tirunelveli, Tamil Nadu<br />
                    India — 627 602
                  </address>
                </div>
                <a href="mailto:ashram@manjothi.com"
                  className="flex items-center gap-3 p-5 rounded-2xl transition-all duration-300 group"
                  style={{ background: 'rgba(212,168,83,0.04)', border: '1px solid rgba(212,168,83,0.10)' }}>
                  <span className="flex-shrink-0 transition-colors" style={{ color: 'rgba(212,168,83,0.60)' }}><MailIcon /></span>
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.15em] mb-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>Email</p>
                    <p className="font-sans text-xs group-hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}>ashram@manjothi.com</p>
                  </div>
                </a>
                <a href="https://youtu.be/Z99LdE1f6_w" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-5 rounded-2xl transition-all duration-300 group"
                  style={{ background: 'rgba(212,168,83,0.04)', border: '1px solid rgba(212,168,83,0.10)' }}>
                  <span className="flex-shrink-0 transition-colors text-red-500/50 group-hover:text-red-500"><YouTubeIcon /></span>
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.15em] mb-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>Watch</p>
                    <p className="font-sans text-xs group-hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}>Ashram Documentary</p>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── Newsletter ── */}
        <div className="border-b" style={{ borderColor: 'rgba(212,168,83,0.08)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <FadeIn variant="fade-up">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-1">Stay Connected with the Ashram</h3>
                  <p className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.30)' }}>Receive updates on events, teachings, and Ashram news</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 w-full md:w-auto">
                  <div className="relative flex-1 md:flex-none">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgba(255,255,255,0.25)' }}><MailIcon /></div>
                    <input type="email" placeholder="Your email address"
                      className="w-full md:w-72 text-white font-sans text-sm pl-12 pr-4 py-4 focus:outline-none transition-colors rounded-full sm:rounded-l-full sm:rounded-r-none"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,168,83,0.20)', color: 'white' }}
                    />
                  </div>
                  <button
                    onClick={() => alert('Newsletter subscription coming soon! Please email ashram@manjothi.com to stay connected.')}
                    className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest flex-shrink-0 rounded-full sm:rounded-l-none sm:rounded-r-full transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #D4A853, #B8893A)', color: '#000' }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── Footer Grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

            {/* Column 1 — Brand */}
            <FadeIn variant="fade-up" delay={0}>
              <div>
                <div className="mb-5"><AshramEmblem size={56} /></div>
                <h4 className="font-serif text-xl text-white mb-1">Manujothi Ashram</h4>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: '#D4A853' }}>
                  Light to the Mankind · Est. 1963
                </p>
                <p className="font-sans text-xs leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.30)' }}>
                  A spiritual centre dedicated to the comparative study of all scriptures, revealing the single divine voice behind all sacred texts.
                </p>
              </div>
            </FadeIn>

            {/* Column 2 — Quick Links */}
            <FadeIn variant="fade-up" delay={0.08}>
              <div>
                <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#D4A853' }}>Quick Links</h4>
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
                      <a href={l.href}
                        className="group font-sans text-xs flex items-center gap-2 transition-colors duration-300"
                        style={{ color: 'rgba(255,255,255,0.40)' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.40)'}
                      >
                        <span style={{ color: 'rgba(212,168,83,0.50)', fontSize: '8px' }}>▸</span>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Column 3 — Associated Sites + Social */}
            <FadeIn variant="fade-up" delay={0.16}>
              <div>
                <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#D4A853' }}>Associated Sites</h4>
                <ul className="space-y-3">
                  {[
                    { label: 'daysofsonofman.org', href: 'https://daysofsonofman.org' },
                    { label: 'daysofthesonofman.com', href: 'https://daysofthesonofman.com' },
                    { label: 'manujothi.org', href: 'https://manujothi.org' },
                  ].map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 font-sans text-xs transition-colors duration-300"
                        style={{ color: 'rgba(255,255,255,0.40)' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.40)'}
                      >
                        <span style={{ color: 'rgba(212,168,83,0.50)' }}><GlobeIcon /></span>
                        {s.label}
                        <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '9px' }}>↗</span>
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Social icons */}
                <div className="flex items-center gap-3 mt-8 pt-6" style={{ borderTop: '1px solid rgba(212,168,83,0.12)' }}>
                  {[
                    { href: 'https://www.youtube.com/channel/UC7yXvYXVzDx-FwfgZpX07Rg', icon: <YouTubeIcon />, color: '#FF0000', label: 'YouTube' },
                    { href: 'https://facebook.com', icon: <FacebookIcon />, color: '#1877F2', label: 'Facebook' },
                    { href: 'https://www.instagram.com/soundarya_lahari_creations?igsh=ajVveG5ldXBmczg=', icon: <InstagramIcon />, color: '#E4405F', label: 'Instagram' },
                    { href: 'mailto:ashram@manjothi.com', icon: <MailIcon />, color: '#D4A853', label: 'Email' },
                  ].map((s) => (
                    <a key={s.label} href={s.href}
                      target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ border: '1px solid rgba(212,168,83,0.20)', color: 'rgba(255,255,255,0.30)' }}
                      aria-label={s.label}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = s.color; (e.currentTarget as HTMLElement).style.borderColor = s.color + '60'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.30)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,83,0.20)'; }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Bottom bar */}
          <FadeIn variant="fade-up" delay={0.3}>
            <div className="pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6"
              style={{ borderTop: '1px solid rgba(212,168,83,0.10)' }}>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 font-sans text-[11px]"
                style={{ color: 'rgba(255,255,255,0.20)' }}>
                <p>© {year} Manujothi Ashram. All rights reserved.</p>
                <div className="flex gap-4">
                  <span className="cursor-default hover:text-white/40 transition-colors">Privacy Policy</span>
                  <span style={{ color: 'rgba(255,255,255,0.10)' }}>|</span>
                  <span className="cursor-default hover:text-white/40 transition-colors">Terms of Use</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <p className="flex items-center gap-1.5 font-sans text-[11px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
                  Made with <span style={{ color: 'rgba(212,168,83,0.50)' }}><HeartIcon /></span> for the Light
                </p>
                <button onClick={scrollToTop}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ border: '1px solid rgba(212,168,83,0.20)', color: 'rgba(255,255,255,0.30)' }}
                  aria-label="Back to top"
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#D4A853'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,83,0.50)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.30)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,83,0.20)'; }}
                >
                  <ArrowUpIcon />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </footer>
    </>
  );
}
