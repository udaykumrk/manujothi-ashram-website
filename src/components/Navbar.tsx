import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AshramEmblem } from './AshramEmblem';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldBeScrolled = window.scrollY > 60;
      setScrolled(prev => prev === shouldBeScrolled ? prev : shouldBeScrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Core Teachings', href: '#teachings' },
    { name: 'Publications', href: '#publications' },
    { name: 'Visit', href: '#visit' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  // Close menu first, then scroll to section after overflow is restored
  const handleMobileNavClick = useCallback((href: string) => {
    setIsOpen(false);
    // Wait for body overflow to be restored before scrolling
    setTimeout(() => {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, []);

  return (
    <>
      {/* Brass accent line at the very top */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-brass z-[60]" />

      <nav
        className={`fixed left-0 top-[2px] w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-charcoal/30 backdrop-blur-xl shadow-lg border-b border-brass/20 py-0'
          : 'bg-transparent py-0'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div
            className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'
              }`}
          >
            {/* Brand */}
            <a
              href="#"
              className="flex items-center gap-3 leading-none group"
              aria-label="Manujothi Ashram Home"
            >

              <AshramEmblem
                size={scrolled ? 36 : 44}
                className="transition-all duration-500 flex-shrink-0 hidden sm:block"
              />
              <span className="flex flex-col min-w-0">
                <span
                  className={`font-serif tracking-wide truncate transition-all duration-500 ${scrolled ? 'text-parchment text-base sm:text-xl' : 'text-parchment text-lg sm:text-2xl'
                    }`}
                >
                  Manujothi Ashram
                </span>
                <span
                  className={`font-sans text-[8px] sm:text-[10px] uppercase truncate tracking-[0.15em] sm:tracking-[0.25em] transition-all duration-500 ${'text-brass/80'}`}
                >
                  Tirunelveli · Est. 1963
                </span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="animated-link text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300 text-parchment/80 hover:text-parchment"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#support"
                className="ml-2 border border-brass text-brass px-5 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-brass hover:text-charcoal transition-all duration-300 rounded-full"
              >
                Support the Mission
              </a>
            </div>

            {/* Mobile Hamburger — Animated bars → X */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hamburger-btn md:hidden w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-brass/30 shadow-[0_0_12px_rgba(184,151,104,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-brass/60 hover:shadow-[0_0_18px_rgba(184,151,104,0.15)] active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="hamburger-icon" data-open={isOpen}>
                <span className="hamburger-bar bar-top" />
                <span className="hamburger-bar bar-mid" />
                <span className="hamburger-bar bar-bot" />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile fullscreen overlay menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mobile-menu-overlay"
            >
              <div className="mobile-menu-content">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMobileNavClick(link.href);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mobile-menu-link"
                  >
                    <span className="mobile-menu-link-number">0{i + 1}</span>
                    <span className="mobile-menu-link-text">{link.name}</span>
                  </motion.a>
                ))}
                <motion.a
                  href="#support"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNavClick('#support');
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mobile-menu-cta"
                >
                  Support the Mission
                </motion.a>
              </div>

              {/* Decorative bottom line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mobile-menu-decoration"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}


