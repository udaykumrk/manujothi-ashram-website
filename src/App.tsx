import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Ticker } from './components/Ticker';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Founder } from './components/Founder';
import { Teachings } from './components/Teachings';
import { Scripture } from './components/Scripture';
import { Events } from './components/Events';
import { Donation } from './components/Donation';
import { Footer } from './components/Footer';

export default function App() {
  const footerSentinelRef = useRef<HTMLDivElement>(null);

  // Scroll-to-top loop: when user scrolls past the footer sentinel, smoothly scroll back to top
  useEffect(() => {
    let isScrollingToTop = false;

    const handleScroll = () => {
      if (isScrollingToTop) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // If scrolled to the very bottom (within 5px)
      if (scrollTop + winHeight >= docHeight - 5) {
        isScrollingToTop = true;
        // Small delay so it feels natural
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          // Reset guard after scroll completes
          setTimeout(() => { isScrollingToTop = false; }, 1500);
        }, 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-parchment text-charcoal font-sans selection:bg-brass/30 selection:text-charcoal">
      <Navbar />
      <main aria-label="Main content">
        <Hero />
        <Mission />
        <Founder />
        <Teachings />
        <Scripture />
        <Ticker />
        <Events />
        <Donation />
      </main>
      <Footer />
      {/* Sentinel for scroll-to-top loop */}
      <div ref={footerSentinelRef} className="h-1" />
    </div>
  );
}
