# 🐛 Manujothi Ashram — Original Bugs (BEFORE Fixed)

**Recorded on:** 2026-03-11  
**Purpose:** This file shows what the code looked like BEFORE any fixes were applied.  
**Total Bugs Found:** 19

---

## 🔴 Critical Bugs

---

### Bug #1 — Wrong Page Title & Missing SEO Tags
**File:** `index.html`

**❌ BEFORE (broken):**
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Google AI Studio App</title>
  <!-- No meta description -->
  <!-- No Open Graph tags -->
  <!-- No favicon -->
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
</head>
```

**✅ AFTER (fixed):**
```html
<title>Manujothi Ashram — Light to Mankind | Tirunelveli, Tamil Nadu</title>
<meta name="description" content="Official website of Manujothi Ashram..." />
<meta property="og:title" content="Manujothi Ashram — Light to Mankind" />
<meta property="og:description" content="One God. One Nation." />
<meta property="og:image" content="/ashram_hero_dawn.png" />
```

---

### Bug #2 — No Video Fallback (Black Screen on Mobile)
**File:** `src/components/Hero.tsx`

**❌ BEFORE (broken):**
```tsx
<video
  ref={videoRef}
  src={starVideo}
  autoPlay
  muted
  playsInline
  className="w-full h-full object-cover"
  // ❌ No onError handler — black screen if video fails on mobile
/>
```

**✅ AFTER (fixed):**
```tsx
<video
  ref={videoRef}
  src={starVideo}
  poster={heroImg}
  autoPlay muted playsInline
  onError={() => setVideoVisible(false)}  // ✅ Falls back to image immediately
  className="w-full h-full object-cover"
/>
```

---

### Bug #3 — No Lazy Loading on Below-Fold Images
**Files:** `src/components/Founder.tsx`, `src/components/Events.tsx`

**❌ BEFORE (broken):**
```tsx
// Founder.tsx — loads founder image immediately on page load
<img src={founderImg} alt="Gurudev Shree Lahari Krishna" className="..." />

// Events.tsx — loads event images immediately even if user never scrolls
<img src={eventImg} alt="Prayer Hall" className="..." />
<img src={riverImg} alt="Tamirabarani River" className="..." />
```

**✅ AFTER (fixed):**
```tsx
<img src={founderImg} alt="..." loading="lazy" className="..." />
<img src={eventImg}   alt="..." loading="lazy" className="..." />
<img src={riverImg}   alt="..." loading="lazy" className="..." />
```

---

### Bug #4 — Video Had No Poster Frame (Black Flash)
**File:** `src/components/Hero.tsx`

**❌ BEFORE (broken):**
```tsx
<video
  ref={videoRef}
  src={starVideo}
  // ❌ No poster — user sees black screen while video buffers
  autoPlay muted playsInline
  className="w-full h-full object-cover"
/>
```

**✅ AFTER (fixed):**
```tsx
<video
  ref={videoRef}
  src={starVideo}
  poster={heroImg}   // ✅ Shows ashram dawn image while loading
  autoPlay muted playsInline
  className="w-full h-full object-cover"
/>
```

---

## 🟡 Medium Bugs

---

### Bug #5 — Broken Heading Hierarchy (Screen Readers)
**File:** `src/components/Mission.tsx`

**❌ BEFORE (broken):**
```tsx
<section id="about">
  {/* ❌ h3 used without a parent h2 — breaks accessibility */}
  <h3 className="font-serif text-4xl ...">Our Mission</h3>
</section>
```

**✅ AFTER (fixed):**
```tsx
<section id="about">
  <h2 className="font-serif text-4xl ...">Our Mission</h2>
</section>
```

---

### Bug #6 — Dead `#` Links in Footer (Scroll-to-Top Bug)
**File:** `src/components/Footer.tsx`

**❌ BEFORE (broken):**
```tsx
// Clicking these scrolls user back to top of page
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
```

**✅ AFTER (fixed):**
```tsx
<a href="#!">Privacy Policy</a>
<a href="#!">Terms of Service</a>
```

---

### Bug #7 — External Links Using Insecure `http://`
**File:** `src/components/Footer.tsx`

**❌ BEFORE (broken):**
```tsx
const associatedSites = [
  { label: 'daysofsonofman.org',   href: 'http://daysofsonofman.org' },   // ❌ http
  { label: 'daysofthesonofman.com', href: 'http://daysofthesonofman.com' }, // ❌ http
  { label: 'manujothi.org',        href: 'http://manujothi.org' },          // ❌ http
];
```

**✅ AFTER (fixed):**
```tsx
const associatedSites = [
  { label: 'daysofsonofman.org',   href: 'https://daysofsonofman.org' },   // ✅ https
  { label: 'daysofthesonofman.com', href: 'https://daysofthesonofman.com' }, // ✅ https
  { label: 'manujothi.org',        href: 'https://manujothi.org' },          // ✅ https
];
```

---

### Bug #8 — Inline `<style>` Tag Inside JSX (Duplicate Styles on Remount)
**File:** `src/components/Ticker.tsx`

**❌ BEFORE (broken):**
```tsx
export function Ticker() {
  return (
    <>
      {/* ❌ This <style> gets duplicated in DOM every time component remounts */}
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker-scroll 40s linear infinite;
        }
      `}</style>
      <div className="ticker-track">...</div>
    </>
  );
}
```

**✅ AFTER (fixed):** Moved `@keyframes` and `.ticker-track` to `src/index.css`.

---

### Bug #9 — Unstable List Keys Using Array Index
**Files:** `src/components/Donation.tsx`, `src/components/Teachings.tsx`

**❌ BEFORE (broken):**
```tsx
// Donation.tsx
{steps.map((step, i) => (
  <li key={i}>...</li>   // ❌ index key — unstable if list changes
))}

// Teachings.tsx
{books.map((book, index) => (
  <div key={index}>...</div>  // ❌ index key
))}
```

**✅ AFTER (fixed):**
```tsx
{steps.map((step) => (
  <li key={step.label}>...</li>   // ✅ stable content key
))}
{books.map((book) => (
  <div key={book.title}>...</div>  // ✅ stable content key
))}
```

---

### Bug #10 — Two Nav Links Pointed to the Same Anchor
**File:** `src/components/Navbar.tsx`

**❌ BEFORE (broken):**
```tsx
const navLinks = [
  { name: 'About Us',       href: '#about' },
  { name: 'Core Teachings', href: '#teachings' },
  { name: 'Publications',   href: '#teachings' },  // ❌ Same anchor as Core Teachings!
  { name: 'Visit',          href: '#visit' },
  { name: 'Events',         href: '#events' },
];
```

**✅ AFTER (fixed):**
```tsx
{ name: 'Publications', href: '#publications' },  // ✅ Separate anchor added
```
And `id="publications"` added inside the Teachings section.

---

### Bug #11 — SVG ID Collisions (AshramEmblem Rendered Twice)
**File:** `src/components/AshramEmblem.tsx`

**❌ BEFORE (broken):**
```tsx
// Hardcoded IDs — when rendered in both Navbar AND Footer, IDs clash in DOM
<radialGradient id="embSunCore" .../>
<linearGradient id="embStarGrad" .../>
<filter id="embGlow" .../>
```

**✅ AFTER (fixed):**
```tsx
const uid = useId();  // React 18 hook — unique ID per render instance
<radialGradient id={`sunCore-${uid}`} .../>
<linearGradient id={`starGrad-${uid}`} .../>
<filter id={`glow-${uid}`} .../>
```

---

### Bug #12 — `FadeIn` Had an Inaccessible `key` Prop in its Interface
**File:** `src/components/FadeIn.tsx`

**❌ BEFORE (broken):**
```tsx
import { ReactNode, Key } from 'react';

interface FadeInProps {
  children: ReactNode;
  key?: Key;    // ❌ 'key' is React-reserved — can NEVER be read inside component
  delay?: number;
  className?: string;
}
```

**✅ AFTER (fixed):**
```tsx
interface FadeInProps {
  children: ReactNode;
  // ✅ 'key' removed — also removed unused Key import
  delay?: number;
  className?: string;
}
```

---

### Bug #13 — `<main>` Had No ARIA Label
**File:** `src/App.tsx`

**❌ BEFORE (broken):**
```tsx
<main>   {/* ❌ Screen readers can't identify this landmark */}
  ...
</main>
```

**✅ AFTER (fixed):**
```tsx
<main role="main" aria-label="Main content">  {/* ✅ Accessible */}
  ...
</main>
```

---

## 🟢 Low Bugs

---

### Bug #14 — Mobile Menu Didn't Lock Page Scroll
**File:** `src/components/Navbar.tsx`

**❌ BEFORE (broken):**
```tsx
// When mobile menu opened, background page could still scroll
const [isOpen, setIsOpen] = useState(false);
// ❌ Nothing locked body scroll
```

**✅ AFTER (fixed):**
```tsx
useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : '';  // ✅ Locks scroll
  return () => { document.body.style.overflow = ''; };
}, [isOpen]);
```

---

### Bug #15 — Unused Import in Hero Component
**File:** `src/components/Hero.tsx`

**❌ BEFORE (broken):**
```tsx
import { AshramEmblem } from './AshramEmblem';  // ❌ Imported but never used
```

**✅ AFTER (fixed):**
```tsx
// ✅ Line removed entirely
```

---

### Bug #16 — `tri()` Function Had an Unused Parameter
**File:** `src/components/AshramEmblem.tsx`

**❌ BEFORE (broken):**
```tsx
function tri(pts: string, id: string) {  // ❌ 'id' parameter never used inside
  return <polygon points={pts} />;
}
```

**✅ AFTER (fixed):**
```tsx
function tri(pts: string) {  // ✅ Removed unused parameter
  return <polygon points={pts} />;
}
```

---

### Bug #17 — No Active Nav Link Indicator *(Not Fixed — Deferred)*
**File:** `src/components/Navbar.tsx`  
**Issue:** Nav links had no `aria-current="page"` to show which section is active.  
**Reason skipped:** Requires IntersectionObserver — planned for future update.

---

### Bug #18 — Google Fonts Loaded Via Render-Blocking CSS `@import`
**File:** `src/index.css`

**❌ BEFORE (broken):**
```css
/* Top of index.css — blocks first paint of the page */
@import url('https://fonts.googleapis.com/css2?family=Cormorant:...');
```

**✅ AFTER (fixed):** Moved to `index.html` using `<link rel="preconnect">`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?..." />
```

---

### Bug #19 — Print Stylesheet Not Optimized
**File:** `src/index.css`

**❌ BEFORE (broken):**
```css
@media print {
  nav, footer { display: none; }
  /* ❌ No page-break rules, no link URL display, no print margins */
}
```

**✅ AFTER (fixed):**
```css
@media print {
  nav, footer { display: none; }
  a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 0.8em; }
  section { page-break-inside: avoid; }
}
```

---

## 📊 Summary Table

| # | File | Bug | Severity | Status |
|---|------|-----|----------|--------|
| 1 | `index.html` | Wrong title, no SEO tags | 🔴 Critical | ✅ Fixed |
| 2 | `Hero.tsx` | No video error fallback | 🔴 Critical | ✅ Fixed |
| 3 | `Founder.tsx`, `Events.tsx` | No lazy loading on images | 🔴 Critical | ✅ Fixed |
| 4 | `Hero.tsx` | No video poster frame | 🔴 Critical | ✅ Fixed |
| 5 | `Mission.tsx` | Wrong heading level (h3 without h2) | 🟡 Medium | ✅ Fixed |
| 6 | `Footer.tsx` | Dead `#` links | 🟡 Medium | ✅ Fixed |
| 7 | `Footer.tsx` | http → https | 🟡 Medium | ✅ Fixed |
| 8 | `Ticker.tsx` | Inline `<style>` in JSX | 🟡 Medium | ✅ Fixed |
| 9 | `Donation.tsx`, `Teachings.tsx` | Unstable list keys | 🟡 Medium | ✅ Fixed |
| 10 | `Navbar.tsx` | Two nav links → same anchor | 🟡 Medium | ✅ Fixed |
| 11 | `AshramEmblem.tsx` | SVG ID collisions | 🟡 Medium | ✅ Fixed |
| 12 | `FadeIn.tsx` | Unusable `key` prop in interface | 🟡 Medium | ✅ Fixed |
| 13 | `App.tsx` | No ARIA on `<main>` | 🟡 Medium | ✅ Fixed |
| 14 | `Navbar.tsx` | Mobile menu doesn't lock scroll | 🟢 Low | ✅ Fixed |
| 15 | `Hero.tsx` | Unused import | 🟢 Low | ✅ Fixed |
| 16 | `AshramEmblem.tsx` | Unused function parameter | 🟢 Low | ✅ Fixed |
| 17 | `Navbar.tsx` | No aria-current on active link | 🟢 Low | ⏭ Skipped |
| 18 | `index.css` | Render-blocking font CSS | 🟢 Low | ✅ Fixed |
| 19 | `index.css` | No print optimization | 🟢 Low | ✅ Fixed |

---

*All bugs above were found during code review on 2026-03-11 morning.*  
*Fixed by: Antigravity AI — Manujothi Ashram Website*
