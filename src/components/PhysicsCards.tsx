import { useRef, useEffect, useState } from 'react';
import Matter from 'matter-js';
import { motion, useInView } from 'motion/react';

/* ─── Card data — clean icon + brand color design ─── */
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

const CARD_W = 110;
const CARD_H = 110;

export function PhysicsCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '0px' });
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!isInView || initialized) return;
    const container = containerRef.current;
    if (!container) return;

    requestAnimationFrame(() => {
      const cW = container.clientWidth;
      const cH = container.clientHeight;

      if (cW < 50 || cH < 50) return;
      setInitialized(true);

      const isMobile = cW < 600;
      const scale = isMobile ? 0.7 : 0.85;
      const cardW = CARD_W * scale;
      const cardH = CARD_H * scale;

      // ─── Matter.js Engine ───
      const engine = Matter.Engine.create({
        gravity: { x: 0, y: 1.2, scale: 0.001 },
      });

      // ─── Floor + Walls (thick to prevent tunneling) ───
      const wallThick = 200;
      const floor = Matter.Bodies.rectangle(cW / 2, cH + wallThick / 2, cW * 3, wallThick, { isStatic: true, restitution: 0.4, friction: 0.8 });
      const ceiling = Matter.Bodies.rectangle(cW / 2, -wallThick / 2, cW * 3, wallThick, { isStatic: true, restitution: 0.3 });
      const leftWall = Matter.Bodies.rectangle(-wallThick / 2, cH / 2, wallThick, cH * 3, { isStatic: true, restitution: 0.5 });
      const rightWall = Matter.Bodies.rectangle(cW + wallThick / 2, cH / 2, wallThick, cH * 3, { isStatic: true, restitution: 0.5 });
      Matter.Composite.add(engine.world, [floor, ceiling, leftWall, rightWall]);

      // ─── Safe bounds for cards ───
      const minX = cardW / 2 + 2;
      const maxX = cW - cardW / 2 - 2;
      const minY = cardH / 2 + 2;
      const maxY = cH - cardH / 2 - 2;
      const MAX_SPEED = 15; // cap velocity to prevent tunneling

      // ─── Create physics bodies + DOM cards ───
      const bodies: Matter.Body[] = [];
      const domCards: HTMLElement[] = [];

      CARDS.forEach((card, i) => {
        const spacing = cW / (CARDS.length + 1);
        const x = spacing * (i + 1);
        const y = -cardH - (i * 40); // start above the container — fall from the top

        const body = Matter.Bodies.rectangle(x, y, cardW, cardH, {
          restitution: 0.4,
          friction: 0.3,
          frictionAir: 0.03,
          density: 0.002,
          angle: (Math.random() - 0.5) * 0.3,
          chamfer: { radius: 12 },
        });
        Matter.Composite.add(engine.world, body);
        bodies.push(body);

        // Create DOM card with icon + brand color
        const el = document.createElement('a');
        el.href = card.href;
        if (!card.href.startsWith('mailto:')) {
          el.target = '_blank';
          el.rel = 'noopener noreferrer';
        }
        el.className = 'physics-card';
        el.style.width = cardW + 'px';
        el.style.height = cardH + 'px';
        el.style.setProperty('--card-color', card.color);
        el.style.background = card.bg;
        el.style.borderRadius = '1rem';
        el.style.padding = '0';
        el.draggable = false;
        el.innerHTML = `
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;gap:8px;">
            <div style="opacity:0.95;">${card.icon}</div>
            <span style="font-family:var(--font-sans);font-size:0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:white;opacity:0.9;">${card.name}</span>
          </div>
        `;
        container.appendChild(el);
        domCards.push(el);
      });

      // ─── Mouse/Touch Constraint (proper physics-based drag) ───
      const mouse = Matter.Mouse.create(container);
      // Fix pixel ratio for retina screens
      mouse.pixelRatio = window.devicePixelRatio || 1;

      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.6,
          damping: 0.1,
          render: { visible: false },
        } as Matter.IConstraintDefinition,
      });
      Matter.Composite.add(engine.world, mouseConstraint);

      // Prevent page scrolling when dragging cards
      let dragging = false;
      Matter.Events.on(mouseConstraint, 'startdrag', () => { dragging = true; });
      Matter.Events.on(mouseConstraint, 'enddrag', () => {
        setTimeout(() => { dragging = false; }, 100);
      });

      // Block link clicks while dragging
      container.addEventListener('click', (e) => {
        if (dragging) { e.preventDefault(); e.stopPropagation(); }
      }, true);

      // Prevent page scroll during touch-drag on cards
      const preventScroll = (e: TouchEvent) => {
        if (mouseConstraint.body) { e.preventDefault(); }
      };
      container.addEventListener('touchmove', preventScroll, { passive: false });

      // ─── Every tick: clamp positions + velocities, anti-gravity + pull to center ───
      Matter.Events.on(engine, 'beforeUpdate', () => {
        const cxCenter = cW / 2;
        
        bodies.forEach((b) => {
          // Hard-clamp velocity
          const speed = Math.sqrt(b.velocity.x ** 2 + b.velocity.y ** 2);
          if (speed > MAX_SPEED) {
            const factor = MAX_SPEED / speed;
            Matter.Body.setVelocity(b, {
              x: b.velocity.x * factor,
              y: b.velocity.y * factor,
            });
          }

          // Strict boundary clamping -- prevent tunneling
          let cx = b.position.x;
          let cy = b.position.y;
          let clamped = false;
          if (cx < minX) { cx = minX; clamped = true; }
          if (cx > maxX) { cx = maxX; clamped = true; }
          if (cy < minY) { cy = minY; clamped = true; }
          if (cy > maxY) { cy = maxY; clamped = true; }
          if (clamped) {
            Matter.Body.setVelocity(b, {
              x: b.position.x !== cx ? -b.velocity.x * 0.8 : b.velocity.x, // Corrected logic: reverse if position was changed
              y: b.position.y !== cy ? -b.velocity.y * 0.8 : b.velocity.y,
            });
            Matter.Body.setPosition(b, { x: cx, y: cy });
          }

          // Apply physics forces only if this card is NOT currently being dragged
          if (mouseConstraint.body !== b) {
            // Anti-gravity: keep cards from sinking to the floor
            if (b.position.y > cH * 0.6) {
              const upwardForce = (b.position.y - cH * 0.6) * 0.000008;
              Matter.Body.applyForce(b, b.position, { x: 0, y: -upwardForce * b.mass });
            }

            // Strong push-back from the edges
            if (b.position.x < minX + 20) {
              Matter.Body.applyForce(b, b.position, { x: 0.005 * b.mass, y: 0 });
            } else if (b.position.x > maxX - 20) {
              Matter.Body.applyForce(b, b.position, { x: -0.005 * b.mass, y: 0 });
            }

            // Always pull slightly horizontally towards the center (spring back)
            const dx = cxCenter - b.position.x;
            Matter.Body.applyForce(b, b.position, { x: dx * 0.000003 * b.mass, y: 0 });
          }
        });
      });

      // ─── Start engine ───
      const runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);

      let raf = 0;
      const render = () => {
        for (let i = 0; i < bodies.length; i++) {
          const b = bodies[i];
          const el = domCards[i];
          const px = b.position.x - cardW / 2;
          const py = b.position.y - cardH / 2;
          const deg = b.angle * (180 / Math.PI);
          el.style.transform = `translate3d(${px}px, ${py}px, 0) rotate(${deg}deg)`;
        }
        raf = requestAnimationFrame(render);
      };
      raf = requestAnimationFrame(render);

      return () => {
        cancelAnimationFrame(raf);
        Matter.Runner.stop(runner);
        Matter.Composite.clear(engine.world, false);
        Matter.Engine.clear(engine);
        container.removeEventListener('touchmove', preventScroll);
        domCards.forEach((el) => el.remove());
      };
    });
  }, [isInView, initialized]);

  return (
    <div ref={sectionRef} className="physics-section-wrapper" style={{ position: 'relative', width: '100%', height: '300px' }}>
      {/* Heading — clean, no subtitle */}
      <div style={{
        position: 'absolute',
        top: '0.75rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 5,
        textAlign: 'center',
        pointerEvents: 'none',
        maxWidth: '380px',
        width: '100%',
        padding: '0 1rem',
      }}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
          className="font-sans text-[10px] uppercase tracking-[0.3em] text-brass"
          style={{ display: 'block' }}
        >
          Connect with Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-parchment"
          style={{ marginTop: '0.5rem' }}
        >
          Contact Us
        </motion.h2>
      </div>

      {/* Physics container */}
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 1,
        }}
      />
    </div>
  );
}
