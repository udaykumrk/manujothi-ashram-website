import { useRef, useEffect, useState } from 'react';
import Matter from 'matter-js';
import { motion, useInView } from 'motion/react';

/* ─── Card data ─── */
const CARDS = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC7yXvYXVzDx-FwfgZpX07Rg',
    color: '#FF0000',
    bg: 'linear-gradient(135deg, #FF0000, #CC0000)',
    icon: `<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.6 12 3.6 12 3.6s-7.7 0-9.5.5c-1 .3-1.8 1-2.1 2-.5 1.8-.5 5.7-.5 5.7s0 3.9.5 5.7c.3 1 1 1.8 2 2.1 1.8.5 9.5.5 9.5.5s7.7 0 9.5-.5c1-.3 1.8-1 2-2.1.5-1.8.5-5.7.5-5.7s0-3.9-.5-5.6zM9.8 15.5V8.4l6.3 3.5-6.3 3.6z"/></svg>`,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    color: '#1877F2',
    bg: 'linear-gradient(135deg, #1877F2, #1565D8)',
    icon: `<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5h-2.8v8.4C19.6 23 24 18 24 12z"/></svg>`,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/soundarya_lahari_creations?igsh=ajVveG5ldXBmczg=',
    color: '#E4405F',
    bg: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)',
    icon: `<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 5.8.1 4.9.3 4.1.6c-.8.3-1.5.7-2.2 1.4C1.3 2.6.9 3.3.6 4.1.3 4.9.1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.2 2.2.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.5C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3-.1 2.2-.2 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.5-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.2-2.2-.5-2.9-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.7-.3-1.6-.5-2.9-.5C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-10.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z"/></svg>`,
  },
  {
    name: 'Email',
    href: 'mailto:ashram@manjothi.com',
    color: '#C4884A',
    bg: 'linear-gradient(135deg, #C4884A, #A06830)',
    icon: `<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  },
  {
    name: 'Events',
    href: '__open-event-popup__',
    color: '#E8A020',
    bg: 'linear-gradient(150deg, #C47D0E 0%, #8B5A00 100%)',
    icon: `<svg viewBox="0 0 24 24" fill="none" width="26" height="26"><rect x="3" y="4" width="18" height="17" rx="2" stroke="white" stroke-width="1.8"/><path d="M3 9h18" stroke="white" stroke-width="1.8"/><path d="M8 2v4M16 2v4" stroke="white" stroke-width="1.8" stroke-linecap="round"/><rect x="7" y="12" width="3" height="3" rx="0.5" fill="white" opacity="0.9"/><rect x="11" y="12" width="3" height="3" rx="0.5" fill="white" opacity="0.5"/><rect x="14" y="15" width="3" height="3" rx="0.5" fill="white" opacity="0.5"/></svg>`,
    sub: 'Glorification Day',
  },
  {
    name: 'Gallery',
    href: '/gallery',
    color: '#6C63FF',
    bg: 'linear-gradient(135deg, #6C63FF, #3D35CC)',
    icon: `<svg viewBox="0 0 24 24" fill="white" width="26" height="26"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
  },
];


const CARD_W = 85;
const CARD_H = 85;

export function PhysicsCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!isInView || initialized) return;
    const scene = containerRef.current;
    if (!scene) return;

    requestAnimationFrame(() => {
      const cW = scene.clientWidth;
      const cH = scene.clientHeight;
      if (cW < 50 || cH < 50) return;
      setInitialized(true);

      const { Engine, Bodies, Body, Composite, Bounds } = Matter;

      // Slow-motion gravity — feels like low gravity / floating in space
      const engine = Engine.create({
        gravity: { x: 0, y: 1.2, scale: 0.001 }, // normal fall speed
      });

      // ─── Walls — EXACT Vercel values ───
      const wallThick = 50;
      const ground = Bodies.rectangle(cW / 2, cH + wallThick / 2, cW * 3, wallThick, {
        isStatic: true, restitution: 0.6, friction: 0.4,
      });
      const leftWall = Bodies.rectangle(-wallThick / 2, cH / 2, wallThick, cH * 3, {
        isStatic: true, restitution: 0.7,
      });
      const rightWall = Bodies.rectangle(cW + wallThick / 2, cH / 2, wallThick, cH * 3, {
        isStatic: true, restitution: 0.7,
      });
      Composite.add(engine.world, [ground, leftWall, rightWall]);

      // ─── Scale — EXACT Vercel values ───
      const isMobile = cW < 600;
      const scale = isMobile ? 0.7 : 0.85;
      const cardW = CARD_W * scale;
      const cardH = CARD_H * scale;

      // ─── Card bodies + DOM ───
      interface CardEntry { el: HTMLElement; body: Matter.Body }
      const cards: CardEntry[] = [];

      for (let i = 0; i < CARDS.length; i++) {
        const card = CARDS[i];

        // All cards start from roughly the same center point — they fall as a pile
        const x = cW / 2 + (Math.random() - 0.5) * 20; // tiny random offset so they're not perfectly stacked
        const y = -cardH * 2 - (i * 5); // staggered slightly vertically above the viewport

        // EXACT Vercel body properties
        const body = Bodies.rectangle(x, y, cardW, cardH, {
          restitution: 0.5,
          friction: 0.1,
          frictionAir: 0.04,
          density: 0.002,
          angle: (Math.random() - 0.5) * 0.4,
          chamfer: { radius: 12 },
        });

        // Give each card a random horizontal impulse so they scatter after landing
        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 8,
          y: 0,
        });

        Composite.add(engine.world, body);

        const isEventCard = card.href === '__open-event-popup__';
        const isInternalLink = card.href.startsWith('/');
        const el = document.createElement('a');
        el.href = isEventCard ? '#' : card.href;
        if (!isEventCard && !card.href.startsWith('mailto:') && !isInternalLink) {
          el.target = '_blank';
          el.rel = 'noopener noreferrer';
        }
        el.className = 'physics-card';
        el.style.cssText = `
          width:${cardW}px; height:${cardH}px;
          background:${card.bg}; border-radius:1rem; padding:0;
          touch-action:none; cursor:grab;
        `;
        el.style.setProperty('--card-color', card.color);
        el.draggable = false;
        const subLine = (card as { sub?: string }).sub
          ? `<span style="font-family:var(--font-sans);font-size:0.5rem;font-weight:500;letter-spacing:0.08em;color:rgba(255,255,255,0.65);">${(card as { sub?: string }).sub}</span>`
          : '';
        el.innerHTML = `
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;gap:6px;pointer-events:none;">
            <div style="opacity:0.95;">${card.icon}</div>
            <span style="font-family:var(--font-sans);font-size:0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:white;opacity:0.9;">${card.name}</span>
            ${subLine}
          </div>
        `;
        if (isEventCard) {
          el.addEventListener('click', (e) => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('open-event-popup'));
          });
        }
        if (isInternalLink) {
          el.addEventListener('click', (e) => {
            if (isDragging) return; // drag-blocked by the global onClick handler
            e.preventDefault();
            window.location.href = card.href;
          });
        }
        scene.appendChild(el);
        cards.push({ el, body });
      }

      // ─── Drag state ───
      let dragCard: CardEntry | null = null;
      let isDragging = false;
      let prevPos = { x: 0, y: 0 };
      let dragVel = { x: 0, y: 0 };

      function getPos(e: MouseEvent | Touch) {
        const r = scene!.getBoundingClientRect();
        return { x: e.clientX - r.left, y: e.clientY - r.top };
      }

      function hitTest(px: number, py: number) {
        for (let i = cards.length - 1; i >= 0; i--) {
          if (Bounds.contains(cards[i].body.bounds, { x: px, y: py })) return cards[i];
        }
        return null;
      }

      const onMouseDown = (e: MouseEvent) => {
        const p = getPos(e);
        const hit = hitTest(p.x, p.y);
        if (hit) {
          dragCard = hit;
          isDragging = true;
          prevPos = p;
          dragVel = { x: 0, y: 0 };
          Body.setStatic(hit.body, true);
          e.preventDefault();
        }
      };
      const onMouseMove = (e: MouseEvent) => {
        if (!dragCard) return;
        const p = getPos(e);
        dragVel = { x: p.x - prevPos.x, y: p.y - prevPos.y };
        prevPos = p;
        Body.setPosition(dragCard.body, p);
        Body.setVelocity(dragCard.body, { x: 0, y: 0 });
      };
      const onMouseUp = () => {
        if (!dragCard) return;
        Body.setStatic(dragCard.body, false);
        // Slow-motion throw: 30% of real pointer velocity
        Body.setVelocity(dragCard.body, {
          x: dragVel.x * 0.3,
          y: dragVel.y * 0.3,
        });
        dragCard = null;
        setTimeout(() => { isDragging = false; }, 80);
      };

      const onTouchStart = (e: TouchEvent) => {
        const p = getPos(e.touches[0]);
        const hit = hitTest(p.x, p.y);
        if (hit) {
          dragCard = hit;
          isDragging = true;
          prevPos = p;
          dragVel = { x: 0, y: 0 };
          Body.setStatic(hit.body, true);
        }
      };
      const onTouchMove = (e: TouchEvent) => {
        if (!dragCard) return;
        e.preventDefault();
        const p = getPos(e.touches[0]);
        dragVel = { x: p.x - prevPos.x, y: p.y - prevPos.y };
        prevPos = p;
        Body.setPosition(dragCard.body, p);
        Body.setVelocity(dragCard.body, { x: 0, y: 0 });
      };
      const onTouchEnd = () => {
        if (!dragCard) return;
        Body.setStatic(dragCard.body, false);
        // Slow-motion throw: 30% of real pointer velocity
        Body.setVelocity(dragCard.body, {
          x: dragVel.x * 0.3,
          y: dragVel.y * 0.3,
        });
        dragCard = null;
        setTimeout(() => { isDragging = false; }, 100);
      };

      // Block link clicks while dragging
      const onClick = (e: MouseEvent) => {
        if (isDragging) { e.preventDefault(); e.stopPropagation(); }
      };

      scene.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      scene.addEventListener('touchstart', onTouchStart, { passive: true });
      scene.addEventListener('touchmove', onTouchMove, { passive: false });
      scene.addEventListener('touchend', onTouchEnd);
      scene.addEventListener('click', onClick, true);

      // ─── Engine loop ─── buoyancy + hard clamp so cards never escape downward ───
      const maxY = cH - cardH; // furthest visible top-left Y a card can have
      let raf = 0;
      function update() {
        Engine.update(engine, 1000 / 60);

        for (const c of cards) {
          // Buoyancy: push up any card approaching the floor
          if (c.body.position.y > cH * 0.75 && c.body !== dragCard?.body) {
            Body.applyForce(c.body, c.body.position, {
              x: 0,
              y: -0.001 * c.body.mass,
            });
          }

          // Hard clamp — never let a card visually escape the bottom boundary
          const rawPy = c.body.position.y - cardH / 2;
          const clampedPy = Math.min(rawPy, maxY);
          if (clampedPy < rawPy) {
            // Snap physics body back and kill downward velocity
            Body.setPosition(c.body, { x: c.body.position.x, y: cH - cardH / 2 });
            if (c.body.velocity.y > 0) {
              Body.setVelocity(c.body, { x: c.body.velocity.x, y: 0 });
            }
          }

          const px = c.body.position.x - cardW / 2;
          const py = Math.min(c.body.position.y - cardH / 2, maxY);
          const deg = c.body.angle * (180 / Math.PI);
          c.el.style.transform = `translate3d(${px}px, ${py}px, 0) rotate(${deg}deg)`;
        }
        raf = requestAnimationFrame(update);
      }
      raf = requestAnimationFrame(update);

      // ─── Cleanup ───
      return () => {
        cancelAnimationFrame(raf);
        Composite.clear(engine.world, false);
        Engine.clear(engine);
        scene.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        scene.removeEventListener('touchstart', onTouchStart);
        scene.removeEventListener('touchmove', onTouchMove);
        scene.removeEventListener('touchend', onTouchEnd);
        scene.removeEventListener('click', onClick, true);
        cards.forEach(c => c.el.remove());
      };
    });
  }, [isInView, initialized]);

  return (
    <div ref={sectionRef} className="physics-cards-section">
      <div className="physics-cards-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-[10px] uppercase tracking-[0.35em] text-brass block"
        >
          Every way to reach Manujothi Ashram
        </motion.span>
        <div className="overflow-hidden mt-3">
          <motion.h2
            initial={{ y: '110%' }}
            animate={isInView ? { y: '0%' } : {}}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-parchment"
          >
            Our Channels
          </motion.h2>
        </div>
      </div>

      <div ref={containerRef} className="physics-container" />
    </div>
  );
}
