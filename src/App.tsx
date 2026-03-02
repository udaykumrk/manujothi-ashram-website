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
  return (
    <div className="min-h-screen bg-parchment text-charcoal font-sans selection:bg-brass/30 selection:text-charcoal">
      <Navbar />
      <main>
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
    </div>
  );
}
