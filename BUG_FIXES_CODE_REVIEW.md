# 🔍 Manujothi Ashram Website — Bug Fixes & Code Review

**Date:** 2026-03-11  
**Reviewed by:** Antigravity AI  
**Total Issues Found:** 19 | **Fixed:** 18 | **Skipped:** 1

---

## 🔴 Critical Issues (Fixed)

### #1 — Missing SEO Meta Tags & Wrong Page Title
**File:** `index.html`  
**Before:** Title was `"My Google AI Studio App"`. No `<meta name="description">`, no Open Graph tags, no favicon.  
**Fix Applied:**
```html
<title>Manujothi Ashram — Light to Mankind | Tirunelveli, Tamil Nadu</title>
<meta name="description" content="Official website of Manujothi Ashram, founded by R. Paulaseer Lawrie Muthukrishna in 1963." />
<link rel="icon" href="/favicon.ico" />
<meta property="og:title" content="Manujothi Ashram" />
<meta property="og:description" content="One God. One Nation. — The eternal call of Manujothi Ashram." />
<meta property="og:image" content="/ashram_hero_dawn.png" />
```

---

### #2 — Video Autoplay Blocked on Mobile / No Fallback
**File:** `src/components/Hero.tsx`  
**Before:** No `onError` handler — if video failed on mobile, user saw a black background.  
**Fix Applied:**
```tsx
<video
  ref={videoRef}
  src={starVideo}
  autoPlay muted playsInline
  onError={() => setVideoVisible(false)}  // ← Added fallback
  className="w-full h-full object-cover"
/>
```

---

### #3 — No `loading="lazy"` on Below-Fold Images
**Files:** `src/components/Founder.tsx`, `src/components/Events.tsx`  
**Before:** Founder photo, prayer hall image, and river image all loaded eagerly on page load.  
**Fix Applied:** Added `loading="lazy"` to all below-fold `<img>` tags.

---

### #4 — Large Video Served Without Poster Frame
**File:** `src/components/Hero.tsx`  
**Before:** No poster image — users saw a black flash before the video buffered.  
**Fix Applied:** Added `poster={heroImg}` to the video element so the ashram image shows while buffering.

---

## 🟡 Medium Issues (Fixed)

### #5 — Duplicate Heading Hierarchy Violation
**File:** `src/components/Mission.tsx`  
**Before:** `<h3>` used inside a section without a preceding `<h2>`, breaking screen reader hierarchy.  
**Fix Applied:** Corrected heading nesting so all `<h3>` elements appear under a `<h2>`.

---

### #6 — Navbar Dead `#` Links in Footer
**File:** `src/components/Footer.tsx`  
**Before:** "Privacy Policy" and "Terms of Service" used `href="#"` causing scroll-to-top behavior.  
**Fix Applied:** Changed to `href="#!"` to prevent unwanted scroll.

---

### #7 — External Links Using `http://` Instead of `https://`
**File:** `src/components/Footer.tsx`  
**Before:**
```tsx
{ label: 'daysofsonofman.org', href: 'http://daysofsonofman.org' },
{ label: 'manujothi.org',      href: 'http://manujothi.org' },
```
**Fix Applied:** Changed all external links to `https://`.

---

### #8 — Ticker Uses Inline `<style>` Tag Instead of CSS
**Files:** `src/components/Ticker.tsx`, `src/index.css`  
**Before:** `@keyframes` and `.ticker-track` injected via JSX `<style>` tag — duplicates on remount.  
**Fix Applied:** Moved all keyframe and ticker styles to `index.css`.

---

### #9 — Unstable List Keys Using Array Index
**Files:** `src/components/Donation.tsx`, `src/components/Teachings.tsx`  
**Before:** `key={i}` or `key={index}` used for list items.  
**Fix Applied:** Replaced with stable content-based keys like `key={item.title}`.

---

### #10 — "Publications" Nav Link Pointed to Same Anchor as "Core Teachings"
**Files:** `src/components/Navbar.tsx`, `src/components/Teachings.tsx`  
**Before:** Both "Publications" and "Core Teachings" nav items scrolled to `#teachings`.  
**Fix Applied:** Added a separate `id="publications"` anchor in the Teachings section.

---

### #11 — AshramEmblem SVG `id` Collisions
**File:** `src/components/AshramEmblem.tsx`  
**Before:** Hardcoded IDs like `embSunCore`, `embGlow` — duplicated when component rendered twice (Navbar + Footer).  
**Fix Applied:** Used React's `useId()` to generate unique IDs per render:
```tsx
const uid = useId();
<radialGradient id={`sunCore-${uid}`} ... />
```

---

### #12 — `FadeIn` Had Unusable `key` Prop in Interface
**File:** `src/components/FadeIn.tsx`  
**Before:** `key?: Key` declared in `FadeInProps` — `key` is a React reserved prop and can never be accessed inside a component.  
**Fix Applied:** Removed `key?: Key` from the interface and removed the `Key` import.

---

### #13 — `<main>` Missing ARIA Label
**File:** `src/App.tsx`  
**Before:** `<main>` had no `aria-label` for screen readers.  
**Fix Applied:** `<main role="main" aria-label="Main content">`

---

## 🟢 Low Issues (Fixed)

### #14 — Mobile Menu Didn't Lock Body Scroll
**File:** `src/components/Navbar.tsx`  
**Before:** Opening mobile menu allowed background page to still scroll.  
**Fix Applied:**
```tsx
useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
  return () => { document.body.style.overflow = ''; };
}, [isOpen]);
```

---

### #15 — Unused `AshramEmblem` Import in Hero
**File:** `src/components/Hero.tsx`  
**Before:** `import { AshramEmblem } from './AshramEmblem'` present but never used.  
**Fix Applied:** Removed the unused import.

---

### #16 — `tri()` Function Had Unused `id` Parameter
**File:** `src/components/AshramEmblem.tsx`  
**Before:** `tri(pts, id)` accepted `id` but never used it.  
**Fix Applied:** Removed the unused parameter.

---

### #17 — No `aria-current="page"` on Active Nav Link *(Skipped)*
**File:** `src/components/Navbar.tsx`  
**Reason Skipped:** Requires IntersectionObserver integration — deferred for a future update.

---

### #18 — Google Fonts Loaded Via Render-Blocking CSS `@import`
**Files:** `src/index.css`, `index.html`  
**Before:** `@import url('https://fonts.googleapis.com/...')` in CSS delays first paint.  
**Fix Applied:** Moved to `<link rel="preconnect">` + `<link rel="stylesheet">` in `index.html`.

---

### #19 — Print Stylesheet Not Optimized
**File:** `src/index.css`  
**Before:** Print styles only hid nav/footer but didn't handle page breaks or print URLs.  
**Fix Applied:**
```css
@media print {
  a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 0.8em; }
  section { page-break-inside: avoid; }
}
```

---

## 📊 Summary

| Severity   | Count | Status |
|------------|-------|--------|
| 🔴 Critical | 4    | ✅ All Fixed |
| 🟡 Medium   | 9    | ✅ All Fixed |
| 🟢 Low      | 6    | ✅ 5 Fixed, 1 Skipped (#17) |

---

*Generated by Antigravity AI — Manujothi Ashram Website Code Review, March 2026*
