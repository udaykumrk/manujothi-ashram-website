import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AshramEmblem } from './AshramEmblem';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
  ];

  return (
    <>
      {/* Brass accent line at the very top */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-brass z-[60]" />

      <nav
        className={`fixed top-[2px] w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-charcoal/30 backdrop-blur-xl shadow-lg border-b border-brass/20 py-0'
          : 'bg-transparent py-0'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
                className="transition-all duration-500 flex-shrink-0"
              />
              <span className="flex flex-col">
                <span
                  className={`font-serif tracking-wide transition-all duration-500 ${scrolled ? 'text-parchment text-xl' : 'text-parchment text-2xl'
                    }`}
                >
                  Manujothi Ashram
                </span>
                <span
                  className={`font-sans text-[10px] uppercase tracking-[0.25em] transition-all duration-500 ${'text-brass/80'}`}
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
                  className={`animated-link text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${scrolled
                    ? 'text-parchment/80 hover:text-parchment'
                    : 'text-parchment/80 hover:text-parchment'
                    }`}
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

            {/* Mobile burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden transition-colors ${'text-parchment'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-parchment border-b border-stone"
            >
              <div className="px-6 pt-4 pb-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="block px-3 py-3.5 text-sm font-medium text-charcoal/80 hover:text-charcoal hover:bg-stone/30 uppercase tracking-widest border-b border-stone/40 last:border-0"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <a
                  href="#support"
                  onClick={() => setIsOpen(false)}
                  className="block mt-4 text-center bg-brass text-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-sepia hover:text-parchment transition-colors duration-300 rounded-full"
                >
                  Support the Mission
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
