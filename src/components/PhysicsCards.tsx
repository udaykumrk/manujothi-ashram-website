import { useRef, useEffect, useState } from 'react';
import Matter from 'matter-js';
import { motion, useInView } from 'motion/react';

/* ─── Card data — exact match to Vercel deployment ─── */
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
    color: '#B89768',
    bg: 'linear-gradient(135deg, #B89768, #9A7B50)',
    icon: `<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
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

        // Cards start just above the section — short drop, land near heading
        const x = (cW / (CARDS.length + 1)) * (i + 1);
        const y = -cardH - (i * 10);

        // EXACT Vercel body properties
        const body = Bodies.rectangle(x, y, cardW, cardH, {
          restitution: 0.5,
          friction: 0.1,
          frictionAir: 0.06,  // heavy air drag = slow dreamy motion when thrown
          density: 0.002,
          angle: (Math.random() - 0.5) * 0.3,
          chamfer: { radius: 12 },
        });
        Composite.add(engine.world, body);

        const el = document.createElement('a');
        el.href = card.href;
        if (!card.href.startsWith('mailto:')) {
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
        el.innerHTML = `
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;gap:8px;pointer-events:none;">
            <div style="opacity:0.95;">${card.icon}</div>
            <span style="font-family:var(--font-sans);font-size:0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:white;opacity:0.9;">${card.name}</span>
          </div>
        `;
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

      // ─── Engine loop — EXACT Vercel: buoyancy force if card sinks too low ───
      let raf = 0;
      function update() {
        Engine.update(engine, 1000 / 60);

        for (const c of cards) {
          // Buoyancy: keep any settled card from sinking below 80%
          if (c.body.position.y > cH * 0.8 && c.body !== dragCard?.body) {
            Body.applyForce(c.body, c.body.position, {
              x: 0,
              y: -0.0005 * c.body.mass,
            });
          }

          const px = c.body.position.x - cardW / 2;
          const py = c.body.position.y - cardH / 2;
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass block"
        >
          Connect with Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-parchment mt-3"
        >
          Contact Us
        </motion.h2>
      </div>

      <div ref={containerRef} className="physics-container" />
    </div>
  );
}
