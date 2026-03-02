export function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Core Teachings', href: '#teachings' },
    { label: 'Visit the Ashram', href: '#visit' },
    { label: 'Upcoming Events', href: '#events' },
    { label: 'Support the Mission', href: '#support' },
  ];

  const associatedSites = [
    { label: 'daysofsonofman.org', href: 'http://daysofsonofman.org' },
    { label: 'daysofthesonofman.com', href: 'http://daysofthesonofman.com' },
    { label: 'Soundarya Lahari Creations', href: 'https://www.youtube.com/@SoundaryaLahariCreations' },
  ];

  return (
    <>
      {/* Brass rule transition */}
      <div className="h-px bg-brass/20" />

      <footer className="bg-charcoal text-parchment/60 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">

            {/* Column 1 — Brand + Address */}
            <div>
              {/* Sacred Star Logo (SVG) */}
              <div className="mb-5">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Manujothi Ashram sacred symbol"
                >
                  {/* Rainbow rings */}
                  <circle cx="50" cy="50" r="48" stroke="#FF9933" strokeWidth="3" fill="none" opacity="0.8" />
                  <circle cx="50" cy="50" r="42" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.5" />
                  <circle cx="50" cy="50" r="36" stroke="#138808" strokeWidth="3" fill="none" opacity="0.8" />
                  {/* Six-pointed star (Star of David) */}
                  <path
                    d="M50 12 L58 32 L78 32 L63 46 L69 66 L50 54 L31 66 L37 46 L22 32 L42 32 Z"
                    fill="none"
                    stroke="#B89768"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  {/* Upward triangle */}
                  <polygon points="50,18 67,48 33,48" fill="none" stroke="#B89768" strokeWidth="1.5" opacity="0.7" />
                  {/* Downward triangle */}
                  <polygon points="50,82 33,52 67,52" fill="none" stroke="#B89768" strokeWidth="1.5" opacity="0.7" />
                  {/* Centre circle */}
                  <circle cx="50" cy="50" r="8" fill="#B89768" opacity="0.5" />
                </svg>
              </div>

              <h4 className="font-serif text-xl text-parchment mb-1">Manujothi Ashram</h4>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-5">
                Sathia Nagaram · Light to the Mankind
              </p>

              <address className="not-italic font-sans text-xs leading-7 text-parchment/50">
                <p>Vadakku Ariyanayakipuram Village</p>
                <p>Near Mukkudal, Tamirabarani River</p>
                <p>Tirunelveli District, Tamil Nadu</p>
                <p>India — 627 601</p>
                <p className="mt-3 text-parchment/40">contact@daysofsonofman.org</p>
              </address>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brass mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="animated-link font-sans text-xs text-parchment/55 hover:text-parchment transition-colors duration-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Associated Sites */}
            <div>
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brass mb-6">
                Associated Sites
              </h4>
              <ul className="space-y-3">
                {associatedSites.map((s) => (
                  <li key={s.label} className="flex items-center gap-2">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-link font-sans text-xs text-parchment/55 hover:text-parchment transition-colors duration-300"
                    >
                      {s.label}
                    </a>
                    <span className="text-parchment/25 text-xs">↗</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-parchment/10">
                <p className="font-sans text-xs text-parchment/35 leading-relaxed">
                  Watch the full documentary:<br />
                  <a
                    href="https://youtu.be/Z99LdE1f6_w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brass/60 hover:text-brass transition-colors"
                  >
                    Vykunta Loka Utsavamulu ↗
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-parchment/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-parchment/25">
            <p>© {year} Manujothi Ashram. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-parchment/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-parchment/60 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
