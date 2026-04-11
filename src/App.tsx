import { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Founder } from './components/Founder';
import { Teachings } from './components/Teachings';
import { Events } from './components/Events';
import { Donation } from './components/Donation';
import { Footer } from './components/Footer';
import { EventPopup } from './components/EventPopup';
import { Gallery } from './components/Gallery';
import { GalleryPage } from './pages/GalleryPage';

function HomePage() {
  const footerSentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isScrollingToTop = false;
    const handleScroll = () => {
      if (isScrollingToTop) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      if (scrollTop + winHeight >= docHeight - 5) {
        isScrollingToTop = true;
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => { isScrollingToTop = false; }, 1500);
        }, 600);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-parchment text-charcoal font-sans selection:bg-brass/30 selection:text-charcoal">
      <EventPopup />
      <Navbar />
      <main aria-label="Main content">
        <Hero />
        <Mission />
        <Founder />
        <Teachings />
        <Gallery />
        <Events />
        <Donation />
      </main>
      <Footer />
      <div ref={footerSentinelRef} className="h-1" />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}
