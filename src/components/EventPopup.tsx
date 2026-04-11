import { useState, useEffect, useCallback } from 'react';

export function EventPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const EVENT_EXPIRY_DATE = new Date('2026-03-30T00:00:00');

  const openPopup = useCallback(() => {
    setIsClosing(false);
    setIsVisible(true);
  }, []);

  // Auto-show on load only if event hasn't passed
  useEffect(() => {
    const now = new Date();
    if (now > EVENT_EXPIRY_DATE) return;
    const timer = setTimeout(() => openPopup(), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Open when event physics card is tapped
  useEffect(() => {
    const handler = () => openPopup();
    window.addEventListener('open-event-popup', handler);
    return () => window.removeEventListener('open-event-popup', handler);
  }, [openPopup]);

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 450);
  }, [isClosing]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`ep-overlay ${isClosing ? 'ep-exit' : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Upcoming Event"
    >
      {/* Card */}
      <div
        className={`ep-card ${isClosing ? 'ep-exit' : ''}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(170deg, #0d0a04 0%, #110d05 60%, #1a1200 100%)',
          border: '1px solid rgba(212,168,83,0.25)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button className="ep-close" onClick={handleClose} aria-label="Close" style={{ zIndex: 20 }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="11" fill="rgba(0,0,0,0.65)" />
            <path d="M7.5 7.5L14.5 14.5M14.5 7.5L7.5 14.5" stroke="rgba(212,168,83,0.9)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Gold radial glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,168,83,0.13) 0%, transparent 70%)',
        }} />

        {/* Corner ornaments */}
        {['top-0 left-0', 'top-0 right-0 rotate-90', 'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'].map((cls, i) => (
          <svg key={i} className={`absolute ${cls}`} width="44" height="44" viewBox="0 0 44 44" fill="none" style={{ opacity: 0.55 }}>
            <path d="M2 2 L2 18 M2 2 L18 2" stroke="#D4A853" strokeWidth="1.2" strokeLinecap="round"/>
            <circle cx="2" cy="2" r="2" fill="#D4A853" />
          </svg>
        ))}

        {/* Content */}
        <div style={{ padding: '2.5rem 2rem 2rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>

          {/* Top label */}
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.38em',
            textTransform: 'uppercase', color: 'rgba(212,168,83,0.65)', marginBottom: '1.2rem',
          }}>
            ✦ Manujothi Ashram · Tirunelveli ✦
          </p>

          {/* Flame / lotus SVG */}
          <div style={{ marginBottom: '1.1rem' }}>
            <svg viewBox="0 0 80 80" width="72" height="72" fill="none" style={{ margin: '0 auto', display: 'block' }}>
              {/* Outer petals */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <ellipse
                  key={i}
                  cx="40" cy="40" rx="7" ry="18"
                  fill="rgba(212,168,83,0.18)"
                  stroke="rgba(212,168,83,0.5)"
                  strokeWidth="0.8"
                  transform={`rotate(${deg} 40 40)`}
                />
              ))}
              {/* Inner circle */}
              <circle cx="40" cy="40" r="10" fill="rgba(212,168,83,0.25)" stroke="#D4A853" strokeWidth="1.2" />
              {/* Flame */}
              <path
                d="M40 32 C38 36 36 39 40 44 C44 39 42 36 40 32Z"
                fill="rgba(255,200,80,0.85)"
              />
              <path
                d="M40 35 C39 37 38.5 39 40 41.5 C41.5 39 41 37 40 35Z"
                fill="rgba(255,240,160,0.95)"
              />
            </svg>
          </div>

          {/* Event name */}
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 400,
            color: '#F9F5EB', letterSpacing: '0.02em', lineHeight: 1.15,
            marginBottom: '0.4rem',
          }}>
            Glorification Day
          </h2>

          {/* Gold rule */}
          <div style={{
            width: '60px', height: '1px', margin: '0.85rem auto',
            background: 'linear-gradient(90deg, transparent, #D4A853, transparent)',
          }} />

          {/* Date */}
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600,
            color: '#D4A853', letterSpacing: '0.15em', marginBottom: '0.5rem',
          }}>
            FEBRUARY 18 – 25
          </p>

          {/* Location */}
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
            color: 'rgba(249,245,235,0.45)', letterSpacing: '0.1em', marginBottom: '1.4rem',
          }}>
            Manujothi Ashram · Sathianagaram
          </p>

          {/* Description */}
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.72rem', lineHeight: 1.7,
            color: 'rgba(249,245,235,0.38)', maxWidth: '300px', margin: '0 auto 1.6rem',
          }}>
            A sacred multi-day celebration of comparative scripture, congregational singing,
            and communal prayer — drawing seekers from across India and the world.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <a
              href="#events"
              onClick={handleClose}
              style={{
                display: 'inline-block',
                padding: '0.65rem 2rem',
                fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.25em',
                color: '#0d0a04',
                background: 'linear-gradient(135deg, #D4A853, #B8893A)',
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              View Details →
            </a>

            {/* Gmail registration link — auto-fills event details */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=kalavnaudaykumar4512@gmail.com&su=${encodeURIComponent('Event Registration — Glorification Day · Feb 18–25')}&body=${encodeURIComponent('Dear Manujothi Ashram,\n\nI would like to register for the upcoming event:\n\n🗓 Event   : Glorification Day\n📅 Dates   : February 18 – 25\n📍 Venue   : Manujothi Ashram, Sathianagaram, Tirunelveli\n\n— My Details —\nName            : \nNumber of People : \nPhone           : \nCity / State    : \nCountry         : \n\nAny special requirements or questions:\n\n\nWith warm regards,')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.8rem',
                fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.2em',
                color: 'rgba(212,168,83,0.85)',
                border: '1px solid rgba(212,168,83,0.30)',
                borderRadius: '100px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(212,168,83,0.10)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,168,83,0.55)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,168,83,0.30)';
              }}
            >
              ✉ Register via Gmail
            </a>
          </div>

          {/* Bottom tagline */}
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'rgba(212,168,83,0.30)', marginTop: '1rem',
          }}>
            Light to Mankind · Est. 1963
          </p>
        </div>
      </div>
    </div>
  );
}
