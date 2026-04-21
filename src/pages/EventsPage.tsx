import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'motion/react';

// ─── Types ───────────────────────────────────────────────────────────────────
type Status = 'upcoming' | 'ongoing' | 'past';

interface AshramEvent {
  id: number;
  title: string;
  dates: string;
  month: string;
  year: string;
  status: Status;
  category: string;
  description: string;
  venue: string;
  registrationSubject?: string;
  registrationBody?: string;
  highlights?: string[];
  note?: string;
}

// ─── Event Data ───────────────────────────────────────────────────────────────
const TODAY = new Date();
const YEAR = TODAY.getFullYear();

const EVENTS: AshramEvent[] = [
  {
    id: 1,
    title: 'Glorification Day',
    dates: 'February 18 – 25',
    month: 'FEB',
    year: String(YEAR + 1),
    status: 'upcoming',
    category: 'Annual Celebration',
    description:
      'The most sacred annual gathering at Manujothi Ashram, held every year from February 18th to 25th. This multi-day celebration draws seekers from across India and the globe for deep spiritual reflection, congregational singing, communal vegetarian meals, and extended comparative scripture teachings.',
    venue: 'Manujothi Ashram, Sathianagaram, Tirunelveli',
    highlights: [
      'Comparative scripture sessions across all religions',
      'Congregational hymns and praise',
      'Free vegetarian meals for all attendees',
      'Open to seekers from every faith and country',
    ],
    registrationSubject: 'Event Registration — Glorification Day · Feb 18–25',
    registrationBody:
      'Dear Manujothi Ashram,\n\nI would like to register for the upcoming event:\n\n🗓 Event   : Glorification Day\n📅 Dates   : February 18 – 25\n📍 Venue   : Manujothi Ashram, Sathianagaram, Tirunelveli\n\n— My Details —\nName            : \nNumber of People : \nPhone           : \nCity / State    : \nCountry         : \n\nAny special requirements:\n\n\nWith warm regards,',
  },
  {
    id: 2,
    title: 'Kalki Jayanti',
    dates: 'July 21',
    month: 'JUL',
    year: String(YEAR),
    status: TODAY.getMonth() < 6 ? 'upcoming' : TODAY.getMonth() === 6 && TODAY.getDate() <= 21 ? 'ongoing' : 'past',
    category: 'Annual Observance',
    description:
      'Observed every year on July 21st, commemorating the day the Vishwaroopam was displayed in Chicago in 1969 — the same day as the Apollo 11 moon landing. Devotees gather for praise, meditation, and scripture study.',
    venue: 'Manujothi Ashram, Sathianagaram, Tirunelveli',
    highlights: [
      'Special Vishwaroopam remembrance',
      'Scripture-based teachings on divine identity',
      'Prayer and meditation sessions',
      'Anniversary of Apollo 11 — a cosmic convergence',
    ],
    registrationSubject: 'Event Registration — Kalki Jayanti · July 21',
    registrationBody:
      'Dear Manujothi Ashram,\n\nI would like to register for the upcoming event:\n\n🗓 Event   : Kalki Jayanti\n📅 Date    : July 21\n📍 Venue   : Manujothi Ashram, Sathianagaram, Tirunelveli\n\n— My Details —\nName            : \nNumber of People : \nPhone           : \nCity / State    : \nCountry         : \n\nAny special requirements:\n\n\nWith warm regards,',
  },
  {
    id: 3,
    title: 'Glorification Day',
    dates: 'February 18 – 25',
    month: 'FEB',
    year: String(YEAR),
    status: 'past',
    category: 'Annual Celebration',
    description:
      'The annual Glorification Day celebration was held at Manujothi Ashram, bringing together hundreds of devotees from across India and beyond. Comparative scripture sessions, congregational praise, and communal meals were shared across 8 days.',
    venue: 'Manujothi Ashram, Sathianagaram, Tirunelveli',
    highlights: [
      'Hundreds of devotees from across India',
      'International visitors from multiple countries',
      'Comparative sessions covering all major scriptures',
      'Free vegetarian meals served throughout',
    ],
  },
  {
    id: 4,
    title: 'Kalki Jayanti',
    dates: 'July 21',
    month: 'JUL',
    year: String(YEAR - 1),
    status: 'past',
    category: 'Annual Observance',
    description:
      'The Kalki Jayanti observance was held on July 21st at Manujothi Ashram. Devotees gathered to commemorate the 1969 Chicago Vishwaroopam display which coincided with the historic Apollo 11 moon landing.',
    venue: 'Manujothi Ashram, Sathianagaram, Tirunelveli',
    note: 'Completed successfully',
  },
  {
    id: 5,
    title: 'Glorification Day',
    dates: 'February 18 – 25',
    month: 'FEB',
    year: String(YEAR - 1),
    status: 'past',
    category: 'Annual Celebration',
    description:
      'The annual Glorification Day was observed with great devotion. Seekers from across the globe joined the multi-day celebration of comparative scripture study, praise and meditation.',
    venue: 'Manujothi Ashram, Sathianagaram, Tirunelveli',
    note: 'Completed successfully',
  },
  {
    id: 6,
    title: 'Shree Lahari Krishna Praise Centre — Monthly Gathering',
    dates: 'Every Month',
    month: 'MON',
    year: 'Ongoing',
    status: 'ongoing',
    category: 'Monthly Gathering',
    description:
      'Affiliated praise and meditation centres hold regular monthly gatherings across India and internationally. Messages of Lord Shri Lahari Krishna have been broadcast on All India Radio (Akashvani), Tirunelveli. Contact the Ashram to locate a centre near you.',
    venue: 'Centres across India & internationally',
    highlights: [
      'Active centres across India',
      'International gatherings worldwide',
      'Broadcast on All India Radio (Akashvani), Tirunelveli',
      'Monthly comparative scripture study',
    ],
    registrationSubject: 'Inquiry — Praise Centre Near Me',
    registrationBody:
      'Dear Manujothi Ashram,\n\nI would like to find a Shree Lahari Krishna Praise & Meditation Centre near me.\n\n— My Details —\nName     : \nPhone    : \nCity / State : \nCountry  : \n\nWith warm regards,',
  },
  {
    id: 7,
    title: 'Daily Meditation & Retreat',
    dates: 'Every Day',
    month: 'DAILY',
    year: 'Open',
    status: 'ongoing',
    category: 'Open Retreat',
    description:
      "The Ashram's 63-acre grounds — with ancient banyan groves and quiet pathways along the Tamirabarani riverbank — are open for personal retreat, meditation, and study year-round. Visitors are welcome to participate in Ashram life: prayer, study, simple work, and communal meals.",
    venue: 'Manujothi Ashram, Sathianagaram, Tirunelveli',
    highlights: [
      'Open to all sincere seekers',
      'Free vegetarian meals and accommodation (min 3 days)',
      'Ancient banyan groves for meditation',
      'Tamirabarani riverbank walks',
    ],
    registrationSubject: 'Visit Enquiry — Manujothi Ashram',
    registrationBody:
      'Dear Manujothi Ashram,\n\nI would like to plan a visit to the Ashram.\n\n— My Details —\nName            : \nPhone           : \nCity / State    : \nCountry         : \nPlanned Dates   : \nNumber of People : \nPurpose of Visit : \n\nAny questions or special requirements:\n\n\nWith warm regards,',
  },
];

const STATUS_TABS: { label: string; value: Status | 'all' }[] = [
  { label: 'All Events', value: 'all' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Ongoing', value: 'ongoing' },
  { label: 'Past', value: 'past' },
];

const STATUS_COLORS: Record<Status, { bg: string; text: string; dot: string }> = {
  upcoming: { bg: 'rgba(232,128,58,0.12)', text: '#E8803A', dot: '#E8803A' },
  ongoing:  { bg: 'rgba(56,189,100,0.12)', text: '#38BD64', dot: '#38BD64' },
  past:     { bg: 'rgba(252,250,248,0.08)', text: 'rgba(252,250,248,0.4)', dot: 'rgba(252,250,248,0.3)' },
};

// ─── Main Page ────────────────────────────────────────────────────────────────
export function EventsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Status | 'all'>('all');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeTab === 'all' ? EVENTS : EVENTS.filter(e => e.status === activeTab);
  const upcoming = EVENTS.filter(e => e.status === 'upcoming').length;
  const ongoing  = EVENTS.filter(e => e.status === 'ongoing').length;

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#1A1C20' }}>

      {/* ── Top Nav ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-4"
        style={{ background: 'rgba(26,28,32,0.94)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(232,128,58,0.12)' }}
      >
        <button onClick={() => navigate('/')}
          className="group flex items-center gap-3 transition-colors"
          style={{ color: 'rgba(252,250,248,0.5)' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FCFAF8'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(252,250,248,0.5)'}
        >
          <motion.span whileHover={{ x: -4 }}
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm transition-colors"
            style={{ border: '1px solid rgba(232,128,58,0.25)' }}
          >←</motion.span>
          <span className="font-sans text-[10px] uppercase tracking-[0.28em] hidden sm:inline">Home</span>
        </button>

        <div className="text-center">
          <p className="font-sans text-[9px] uppercase tracking-[0.45em]" style={{ color: 'rgba(232,128,58,0.7)' }}>Manujothi Ashram</p>
          <p className="font-serif text-lg" style={{ color: '#FDF6EC' }}>Events & Gathering</p>
        </div>
        <div className="w-24" />
      </motion.nav>

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-6 md:px-14 relative overflow-hidden">
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,128,58,0.10) 0%, transparent 70%)' }} />

        {/* Decorative top line */}
        <div className="w-16 h-px mx-auto mb-8" style={{ background: 'linear-gradient(90deg, transparent, #E8803A, transparent)' }} />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-center text-[10px] uppercase tracking-[0.4em] mb-5"
          style={{ color: 'rgba(232,128,58,0.7)' }}
        >
          Gather in Fellowship
        </motion.p>

        <div className="overflow-hidden text-center mb-6">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 0.9, letterSpacing: '-2px', color: '#FDF6EC' }}
          >
            All Events
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-sans text-center max-w-lg mx-auto text-sm leading-relaxed"
          style={{ color: 'rgba(252,250,248,0.40)' }}
        >
          Annual celebrations, observances, and open retreats at Manujothi Ashram — past, present, and upcoming.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-8 mt-12"
        >
          {[
            { label: 'Upcoming', value: upcoming, color: '#E8803A' },
            { label: 'Ongoing', value: ongoing, color: '#38BD64' },
            { label: 'Total', value: EVENTS.length, color: 'rgba(252,250,248,0.6)' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl" style={{ color: s.color }}>{s.value}</p>
              <p className="font-sans text-[9px] uppercase tracking-[0.25em] mt-1" style={{ color: 'rgba(252,250,248,0.3)' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Filter Tabs ── */}
      <div className="sticky top-[65px] z-40 px-6 md:px-14 py-3"
        style={{ background: 'rgba(26,28,32,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(232,128,58,0.08)' }}
      >
        <div className="max-w-5xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {STATUS_TABS.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className="flex-shrink-0 px-4 py-1.5 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                background: activeTab === tab.value ? '#E8803A' : 'rgba(252,250,248,0.06)',
                color: activeTab === tab.value ? '#1A1C20' : 'rgba(252,250,248,0.45)',
                border: activeTab === tab.value ? 'none' : '1px solid rgba(252,250,248,0.08)',
                fontWeight: activeTab === tab.value ? 700 : 400,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Events List ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-14 py-12 space-y-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((event, i) => (
            <div key={event.id}>
              <EventCard
                event={event}
                index={i}
                isExpanded={expanded === event.id}
                onToggle={() => setExpanded(expanded === event.id ? null : event.id)}
              />
            </div>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-serif text-2xl mb-3" style={{ color: 'rgba(252,250,248,0.15)' }}>No events found</p>
            <p className="font-sans text-xs uppercase tracking-widest" style={{ color: 'rgba(252,250,248,0.2)' }}>Try a different filter</p>
          </motion.div>
        )}
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-24 px-6 text-center border-t" style={{ borderColor: 'rgba(232,128,58,0.10)', background: '#141618' }}>
        <p className="font-sans text-[9px] uppercase tracking-[0.4em] mb-4" style={{ color: 'rgba(232,128,58,0.6)' }}>Plan Your Visit</p>
        <h2 className="font-serif mb-4" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: '#FDF6EC' }}>All Are Welcome</h2>
        <p className="font-sans text-sm max-w-sm mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(252,250,248,0.35)' }}>
          Food and accommodation are provided free of charge to all sincere seekers. Minimum stay is 3 days.
        </p>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=kalavnaudaykumar4512@gmail.com&su=${encodeURIComponent('Visit Enquiry — Manujothi Ashram')}&body=${encodeURIComponent('Dear Manujothi Ashram,\n\nI would like to plan a visit to the Ashram.\n\n— My Details —\nName            : \nPhone           : \nCity / State    : \nCountry         : \nPlanned Dates   : \nNumber of People : \nPurpose of Visit : \n\nAny questions or special requirements:\n\n\nWith warm regards,')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300"
          style={{ background: '#E8803A', color: '#1A1C20' }}
        >
          ✉ Plan Your Visit
        </a>
      </section>
    </div>
  );
}

// ─── Event Card Component ─────────────────────────────────────────────────────
function EventCard({ event, index, isExpanded, onToggle }: {
  event: AshramEvent;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const colors = STATUS_COLORS[event.status];

  const gmailLink = event.registrationSubject
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=kalavnaudaykumar4512@gmail.com&su=${encodeURIComponent(event.registrationSubject)}&body=${encodeURIComponent(event.registrationBody || '')}`
    : null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: 'rgba(252,250,248,0.04)', border: `1px solid ${isExpanded ? 'rgba(232,128,58,0.3)' : 'rgba(252,250,248,0.07)'}`, transition: 'border-color 0.3s' }}
      onClick={onToggle}
    >
      {/* Card header */}
      <div className="flex items-start gap-5 p-5 md:p-7">

        {/* Date badge */}
        <div className="flex-shrink-0 w-14 text-center rounded-xl py-2 px-1" style={{ background: 'rgba(252,250,248,0.06)' }}>
          <p className="font-sans text-[9px] font-bold uppercase tracking-widest" style={{ color: colors.text }}>{event.month}</p>
          <p className="font-serif text-lg leading-none mt-1" style={{ color: '#FDF6EC' }}>{event.year.length <= 4 ? event.year : '—'}</p>
        </div>

        {/* Main info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {/* Status badge */}
            <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full flex items-center gap-1.5"
              style={{ background: colors.bg, color: colors.text }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: colors.dot }} />
              {event.status === 'upcoming' ? 'Upcoming' : event.status === 'ongoing' ? 'Ongoing' : 'Past'}
            </span>
            <span className="font-sans text-[8px] uppercase tracking-[0.2em]" style={{ color: 'rgba(252,250,248,0.25)' }}>
              {event.category}
            </span>
          </div>

          <h3 className="font-serif text-xl md:text-2xl mb-1" style={{ color: '#FDF6EC' }}>{event.title}</h3>
          <p className="font-sans text-xs" style={{ color: 'rgba(252,250,248,0.40)' }}>
            📅 {event.dates} &nbsp;·&nbsp; 📍 {event.year}
          </p>
        </div>

        {/* Expand arrow */}
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1"
          style={{ border: '1px solid rgba(252,250,248,0.10)', color: 'rgba(252,250,248,0.35)' }}
        >
          ↓
        </motion.span>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="px-5 md:px-7 pb-7 border-t" style={{ borderColor: 'rgba(252,250,248,0.06)' }}>
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Description */}
                <div>
                  <p className="font-sans text-[9px] uppercase tracking-[0.3em] mb-3" style={{ color: 'rgba(232,128,58,0.6)' }}>About</p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(252,250,248,0.55)' }}>{event.description}</p>

                  {event.note && (
                    <p className="font-sans text-[10px] uppercase tracking-widest mt-4 flex items-center gap-2"
                      style={{ color: 'rgba(252,250,248,0.25)' }}>
                      <span style={{ color: '#38BD64' }}>✓</span> {event.note}
                    </p>
                  )}
                </div>

                {/* Details */}
                <div>
                  {event.highlights && (
                    <>
                      <p className="font-sans text-[9px] uppercase tracking-[0.3em] mb-3" style={{ color: 'rgba(232,128,58,0.6)' }}>Highlights</p>
                      <ul className="space-y-2 mb-6">
                        {event.highlights.map((h, i) => (
                          <li key={i} className="font-sans text-xs flex items-start gap-2" style={{ color: 'rgba(252,250,248,0.50)' }}>
                            <span className="flex-shrink-0 mt-0.5" style={{ color: '#E8803A' }}>▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Venue */}
                  <div className="rounded-xl p-4 mb-5" style={{ background: 'rgba(252,250,248,0.04)', border: '1px solid rgba(252,250,248,0.07)' }}>
                    <p className="font-sans text-[9px] uppercase tracking-[0.25em] mb-1" style={{ color: 'rgba(232,128,58,0.5)' }}>Venue</p>
                    <p className="font-sans text-xs" style={{ color: 'rgba(252,250,248,0.55)' }}>{event.venue}</p>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-3">
                    {gmailLink && event.status !== 'past' && (
                      <a
                        href={gmailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-300"
                        style={{ background: '#E8803A', color: '#1A1C20' }}
                        onClick={e => e.stopPropagation()}
                      >
                        ✉ Register via Gmail
                      </a>
                    )}
                    <a
                      href="https://maps.google.com/?q=Manujothi+Ashram+Tirunelveli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-300"
                      style={{ border: '1px solid rgba(232,128,58,0.3)', color: 'rgba(232,128,58,0.8)' }}
                      onClick={e => e.stopPropagation()}
                    >
                      📍 View on Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
