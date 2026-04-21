import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useMotionValue, useInView, animate, useMotionTemplate } from "motion/react";

import ashramHero from '../assets/ashram_hero_dawn.png';
import meditation from '../assets/teaching_meditation.png';
import tamirabarani from '../assets/tamirabarani_river.png';
import prophecy from '../assets/teaching_prophecy.png';
import scripture from '../assets/teaching_scripture.png';
import krishnaArjuna from '../assets/teaching_krishna_arjuna.png';

const MASTER_PICS = [ashramHero, meditation, tamirabarani, prophecy, scripture, krishnaArjuna];

function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoProgress = useMotionValue(0);
  const isInView = useInView(containerRef, { amount: 0.2 });

  const [gallery, setGallery] = useState({
    main: ashramHero,
    interior: meditation,
    left: [tamirabarani, prophecy, scripture, krishnaArjuna, meditation],
    right: [meditation, krishnaArjuna, tamirabarani, scripture, prophecy],
    top: [krishnaArjuna, prophecy],
    bottom: [scripture, tamirabarani],
    carousel: [scripture, krishnaArjuna, prophecy, tamirabarani],
    phase4: [krishnaArjuna, meditation, prophecy, ashramHero, scripture],
    phase5: [prophecy, scripture, tamirabarani, ashramHero, meditation],
    phase6: [meditation, tamirabarani, scripture, prophecy]
  });

  const [isFirstLoop, setIsFirstLoop] = useState(true);

  useEffect(() => {
    if (!isInView) return;
    let cycleCount = 0;

    const runCycle = () => {
      if (cycleCount > 0) {
        setIsFirstLoop(false);
        const megaPool = [...MASTER_PICS, ...MASTER_PICS, ...MASTER_PICS];
        const freshRoles = shuffleArray(MASTER_PICS);

        setGallery({
          main: freshRoles[0],
          interior: freshRoles[1],
          left: shuffleArray(megaPool).slice(0, 5),
          right: shuffleArray(megaPool).slice(0, 5),
          top: shuffleArray(MASTER_PICS).slice(0, 2),
          bottom: shuffleArray(MASTER_PICS).slice(0, 2),
          carousel: shuffleArray(MASTER_PICS).slice(0, 4),
          phase4: shuffleArray(MASTER_PICS).slice(0, 5),
          phase5: shuffleArray(MASTER_PICS).slice(0, 5),
          phase6: shuffleArray(MASTER_PICS).slice(0, 4)
        });
      }

      cycleCount++;
      videoProgress.set(0);

      // The 40s CONTINUOUS TIMELINE! The absolute mammoth cinematic layout.
      animate(videoProgress, 1, {
        duration: 40,
        ease: "linear",
      });
    };

    runCycle();
    const intervalId = window.setInterval(runCycle, 42000); // 40s duration + 2s rest

    return () => {
      window.clearInterval(intervalId);
      videoProgress.stop();
    };
  }, [isInView, videoProgress]);

  // ===================================
  // PHASE 1: The Grid (0.0 -> 0.12)
  // ===================================
  const deskMainWidth = useTransform(videoProgress, [0.04, 0.12], ["320px", "860px"]);
  const deskMainHeight = useTransform(videoProgress, [0.04, 0.12], ["200px", "520px"]);
  const leftColumnY = useTransform(videoProgress, [0.04, 0.12], [0, 800]);
  const rightColumnY = useTransform(videoProgress, [0.04, 0.12], [0, -800]);
  const bgBlurOpacity = useTransform(videoProgress, [0.06, 0.12], [0, 1]);
  const auxTargetOpacity = useTransform(videoProgress, [0.06, 0.12], [0.8, 0]);
  const mainTextOpacity = useTransform(videoProgress, [0.08, 0.13, 0.14], [0, 1, 0]);

  // ===================================
  // PHASE 2: Text / Wipe (0.14 -> 0.28)
  // ===================================
  const heroY = useTransform(videoProgress, [0.14, 0.21], [0, -120]);
  const heroOpacity = useTransform(videoProgress, [0.14, 0.21], [1, 0]);
  const phase2Y = useTransform(videoProgress, [0.14, 0.21, 0.25, 0.29], [120, 0, 0, -120]);
  const phase2Opacity = useTransform(videoProgress, [0.14, 0.19, 0.25, 0.28], [0, 1, 1, 0]);
  const photoClipBottom = useTransform(videoProgress, [0.16, 0.22], [100, 0]);
  const photoClipPath = useMotionTemplate`inset(0% 0% ${photoClipBottom}% 0% round 2rem)`;
  const photoRevealScale = useTransform(videoProgress, [0.16, 0.24], [1.3, 1]);

  const t1YReveal = useTransform(videoProgress, [0.17, 0.21], ["100%", "0%"]);
  const t2YReveal = useTransform(videoProgress, [0.18, 0.22], ["100%", "0%"]);
  const t3YReveal = useTransform(videoProgress, [0.19, 0.23], ["100%", "0%"]);

  // ===================================
  // PHASE 3: Spotlight Carousel (0.28 -> 0.48)
  // ===================================
  const carouselTrackOpacity = useTransform(videoProgress, [0.28, 0.31, 0.45, 0.48], [0, 1, 1, 0]);
  const cTextOpacity = useTransform(videoProgress, [0.30, 0.34, 0.45, 0.48], [0, 1, 1, 0]);
  const cTextScale = useTransform(videoProgress, [0.30, 0.34], [0.95, 1]);

  const img0X = useTransform(videoProgress, [0.30, 0.37], ["-40vw", "-90vw"]);
  const img0Scale = useTransform(videoProgress, [0.30, 0.37], [0.8, 0.5]);
  const img0Opacity = useTransform(videoProgress, [0.30, 0.37], [0.4, 0]);
  const img0ZRaw = useTransform(videoProgress, [0.30, 0.37], [30, 10]);

  const img1X = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], ["0vw", "-40vw", "-40vw", "-90vw"]);
  const img1Scale = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], [0.88, 0.65, 0.65, 0.4]);
  const img1Opacity = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], [1, 0.4, 0.4, 0]);
  const img1ZRaw = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], [50, 30, 30, 10]);

  const img2X = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], ["40vw", "0vw", "0vw", "-40vw"]);
  const img2Scale = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], [0.65, 0.88, 0.88, 0.65]);
  const img2Opacity = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], [0.4, 1, 1, 0.4]);
  const img2ZRaw = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], [30, 50, 50, 30]);

  const img3X = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], ["90vw", "40vw", "40vw", "0vw"]);
  const img3Scale = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], [0.4, 0.65, 0.65, 0.88]);
  const img3Opacity = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], [0, 0.4, 0.4, 1]);
  const img3ZRaw = useTransform(videoProgress, [0.30, 0.37, 0.40, 0.47], [10, 30, 30, 50]);

  const z0 = useTransform(img0ZRaw, Math.round);
  const z1 = useTransform(img1ZRaw, Math.round);
  const z2 = useTransform(img2ZRaw, Math.round);
  const z3 = useTransform(img3ZRaw, Math.round);

  // ===================================
  // PHASE 5: Automated Polaroid Scatter (0.48 -> 0.72)
  // ===================================
  const pOpacity = useTransform(videoProgress, [0.48, 0.51, 0.68, 0.72], [0, 1, 1, 0]);

  const pCenterRotate = useTransform(videoProgress, [0.53, 0.60], [-5, 0]);
  const pCenterScale = useTransform(videoProgress, [0.53, 0.60], [1, 1.05]);

  const pOthersScale = useTransform(videoProgress, [0.53, 0.60], [1, 0.85]);
  const pOthersBlurRaw = useTransform(videoProgress, [0.53, 0.60], [0, 8]);
  const pOthersBlur = useMotionTemplate`blur(${pOthersBlurRaw}px) brightness(0.6)`;
  const pNoBlur = useMotionTemplate`blur(0px) brightness(1)`;

  // ===================================
  // PHASE 6: Monolithic Breathing Pillars (0.73 -> 1.00)
  // ===================================
  const slabsOpacity = useTransform(videoProgress, [0.72, 0.76, 0.98, 1], [0, 1, 1, 0]);

  const slabCenterBasis = useTransform(videoProgress, [0.80, 0.92], ["25%", "65%"]);
  const slabOthersBasis = useTransform(videoProgress, [0.80, 0.92], ["25%", "11.6%"]);
  const slabCenterImgScale = useTransform(videoProgress, [0.80, 0.94], [1.2, 1]);
  const slabCenterOverlay = useTransform(videoProgress, [0.80, 0.86], [0.5, 0]);

  // Mobile mappings
  const mobMainHeight = useTransform(videoProgress, [0.04, 0.12], ["180px", "380px"]);
  const mobileStackY = useTransform(videoProgress, [0.04, 0.12], [0, 220]);


  return (
    <section id="gallery" ref={containerRef} className="relative bg-[#111111] h-screen min-h-[700px] mx-4 my-6 rounded-3xl" style={{ boxShadow: '0 8px 60px rgba(0,0,0,0.25)', overflow: 'hidden', clipPath: 'inset(0px round 1.5rem)' }}>

      {/* --- PHASE 1 GRID & HERO --- */}
      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-[10] flex items-center justify-center pointer-events-none">
        {/* Same layout as before, dynamically using Phase 1 Mappings */}
        <div className="absolute inset-0 w-full h-full pointer-events-auto flex items-center justify-center">

          <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8 text-white border-b border-white/10 pointer-events-none">
            <div className="flex items-center gap-x-3">
              <span className="font-[var(--font-serif)] text-2xl md:text-3xl tracking-[-1px]">
                MANUJOTHI ASHRAM
              </span>
              <span className="text-[#d4af77] text-2xl leading-none">—</span>
              <span className="font-light text-base md:text-lg tracking-widest hidden md:inline">
                Light to Mankind
              </span>
            </div>
          </div>

          {isFirstLoop && (
            <div className="absolute inset-0 z-40 pointer-events-none flex flex-col items-center justify-center px-6">
              <motion.div style={{ opacity: mainTextOpacity }} className="flex flex-col items-center text-center max-w-[1080px]">
                <h1 className="font-[var(--font-serif)] text-[68px] md:text-[108px] lg:text-[148px] leading-[0.82] tracking-[-8px] text-white mt-16 md:mt-0 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                  MANUJOTHI
                </h1>
                <p className="mt-14 max-w-md md:max-w-2xl text-white/90 text-[1rem] md:text-xl font-light leading-relaxed px-4 text-balance drop-shadow-md">
                  Welcome to Manujothi Ashram, where timeless faith, wellness-focused living and spiritual enrichment converge in order to create an unparalleled sanctuary of peace and divine light.
                </p>
              </motion.div>
            </div>
          )}

          <div className="hidden md:flex items-center justify-center w-full h-full relative z-10 pointer-events-none overflow-hidden">
            <motion.div style={{ opacity: bgBlurOpacity }} className="absolute inset-0 z-20 backdrop-blur-2xl bg-[#0a0a0a]/60 pointer-events-none" />

            <motion.div style={{ x: -432, y: leftColumnY, opacity: auxTargetOpacity }} className="absolute z-10 flex flex-col gap-8">
              {gallery.left.map((src, i) => (
                <div key={`L${i}`} className="w-[400px] h-[240px] shrink-0 rounded-3xl overflow-hidden"><img src={src} className="w-full h-full object-cover" /></div>
              ))}
            </motion.div>
            <motion.div style={{ x: 432, y: rightColumnY, opacity: auxTargetOpacity }} className="absolute z-10 flex flex-col gap-8">
              {gallery.right.map((src, i) => (
                <div key={`R${i}`} className="w-[400px] h-[240px] shrink-0 rounded-3xl overflow-hidden"><img src={src} className="w-full h-full object-cover" /></div>
              ))}
            </motion.div>

            <div className="absolute z-30 flex flex-col gap-8">
              <motion.div style={{ opacity: auxTargetOpacity }} className="flex flex-col gap-8">
                {gallery.top.map((src, i) => (
                  <div key={`T${i}`} className="w-[400px] h-[240px] shrink-0 rounded-3xl overflow-hidden"><img src={src} className="w-full h-full object-cover" /></div>
                ))}
              </motion.div>
              <motion.div style={{ width: deskMainWidth, height: deskMainHeight }} className="relative shrink-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 mx-auto">
                <img src={gallery.main} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
              </motion.div>
              <motion.div style={{ opacity: auxTargetOpacity }} className="flex flex-col gap-8">
                {gallery.bottom.map((src, i) => (
                  <div key={`B${i}`} className="w-[400px] h-[240px] shrink-0 rounded-3xl overflow-hidden"><img src={src} className="w-full h-full object-cover" /></div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="md:hidden w-full px-4 flex flex-col items-center absolute top-1/2 -translate-y-1/2 pointer-events-none">
            <motion.div style={{ opacity: bgBlurOpacity }} className="absolute inset-0 z-20 backdrop-blur-2xl bg-[#0a0a0a]/80" />
            <motion.div style={{ height: mobMainHeight }} className="relative z-50 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl">
              <img src={gallery.main} className="w-full h-full object-cover" />
            </motion.div>
            <div className="mt-16 w-full h-[420px] overflow-hidden relative z-10">
              <motion.div style={{ y: mobileStackY, opacity: auxTargetOpacity }} className="flex flex-col gap-8">
                {gallery.left.map((src, i) => (
                  <div key={`M${i}`} className="w-full h-[240px] shrink-0 rounded-3xl overflow-hidden"><img src={src} className="w-full h-full object-cover" /></div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- PHASE 2 TEXT REVEAL --- */}
      <motion.div style={{ y: phase2Y, opacity: phase2Opacity }} className="absolute inset-0 z-[20] flex items-center justify-center pointer-events-none">
        <div className="w-full px-12 py-12 grid grid-cols-12 gap-16 items-center max-w-screen-2xl">
          <div className="col-span-7">
            <div className="overflow-hidden"><motion.div style={{ y: t1YReveal }}><span className="text-[#d4af77] tracking-[2.5px] uppercase">Tirunelveli · Est. 1963</span></motion.div></div>
            <h2 className="font-[var(--font-serif)] text-7xl leading-[1.0] tracking-[-2px] text-white mt-4 flex flex-col gap-0 pb-2">
              <div className="overflow-hidden py-1"><motion.span style={{ y: t2YReveal, display: "block" }}>LIGHT TO</motion.span></div>
              <div className="overflow-hidden py-1"><motion.span style={{ y: t2YReveal, display: "block" }}>MANKIND</motion.span></div>
            </h2>
            <div className="mt-12 overflow-hidden py-2">
              <motion.div style={{ y: t3YReveal }} className="text-white/80 text-[21px] font-light max-w-prose">
                Founded in 1963 on the banks of the sacred Tamirabarani river, Manujothi Ashram is a 63-acre sanctuary of comparative scripture study, congregational praise, and communal living — open to all sincere seekers regardless of faith or nationality.
              </motion.div>
            </div>
          </div>
          <div className="col-span-5 relative z-50">
            <motion.div style={{ clipPath: photoClipPath }} className="relative aspect-[580/650] max-w-[580px] bg-[#1a1a1a]">
              <motion.img style={{ scale: photoRevealScale }} src={gallery.interior} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* --- PHASE 3 SPOTLIGHT CAROUSEL --- */}
      <motion.div style={{ opacity: carouselTrackOpacity }} className="absolute inset-0 z-[30] flex items-center justify-center bg-[#111111] pointer-events-none">
        {isFirstLoop && (
          <motion.div style={{ opacity: cTextOpacity, scale: cTextScale }} className="absolute inset-0 flex items-center justify-center z-10 mix-blend-screen">
            <h2 className="font-[var(--font-serif)] text-[10rem] tracking-[-6px] leading-[0.9] text-white/20">A SANCTUARY</h2>
          </motion.div>
        )}
        <div className="relative w-full h-full flex justify-center items-center z-50">
          <motion.div style={{ x: img0X, scale: img0Scale, opacity: img0Opacity, zIndex: z0 }} className="absolute w-[480px] h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
            <img src={gallery.carousel[0]} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div style={{ x: img1X, scale: img1Scale, opacity: img1Opacity, zIndex: z1 }} className="absolute w-[480px] h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
            <img src={gallery.carousel[1]} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div style={{ x: img2X, scale: img2Scale, opacity: img2Opacity, zIndex: z2 }} className="absolute w-[480px] h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
            <img src={gallery.carousel[2]} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div style={{ x: img3X, scale: img3Scale, opacity: img3Opacity, zIndex: z3 }} className="absolute w-[480px] h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
            <img src={gallery.carousel[3]} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </motion.div>

      {/* --- PHASE 5 AUTOMATED POLAROID DECK --- */}
      <motion.div style={{ opacity: pOpacity }} className="absolute inset-0 z-[50] flex items-center justify-center bg-[#111111] pointer-events-none">


        <div className="relative w-[500px] h-[650px]">
          <motion.div style={{ rotate: 18, x: -100, y: 120, scale: pOthersScale, filter: pOthersBlur }} className="absolute inset-0 p-5 bg-white shadow-2xl z-[10]"><img src={gallery.phase5[0]} className="w-full h-full object-cover" /></motion.div>
          <motion.div style={{ rotate: 8, x: 140, y: 80, scale: pOthersScale, filter: pOthersBlur }} className="absolute inset-0 p-5 bg-white shadow-2xl z-[11]"><img src={gallery.phase5[1]} className="w-full h-full object-cover" /></motion.div>
          <motion.div style={{ rotate: -14, x: -140, y: -60, scale: pOthersScale, filter: pOthersBlur }} className="absolute inset-0 p-5 bg-white shadow-2xl z-[12]"><img src={gallery.phase5[2]} className="w-full h-full object-cover" /></motion.div>
          <motion.div style={{ rotate: -22, x: 100, y: -100, scale: pOthersScale, filter: pOthersBlur }} className="absolute inset-0 p-5 bg-white shadow-2xl z-[13]"><img src={gallery.phase5[3]} className="w-full h-full object-cover" /></motion.div>

          {/* THE STAR - Autoplays perfectly */}
          <motion.div style={{ rotate: pCenterRotate, x: 0, y: 0, scale: pCenterScale, filter: pNoBlur }} className="absolute inset-0 p-5 bg-white shadow-2xl z-[50]">
            <img src={gallery.phase5[4]} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </motion.div>

      {/* --- PHASE 6 MONOLITHIC BREATHING CRUSH --- */}
      <motion.div style={{ opacity: slabsOpacity }} className="absolute inset-0 z-[60] flex items-center justify-center bg-black pointer-events-none">
        <div className="w-full max-w-screen-2xl h-[70vh] flex gap-6 px-12">

          {/* L1 */}
          <motion.div style={{ width: slabOthersBasis }} className="relative h-full overflow-hidden rounded-[2rem] shadow-2xl border border-white/5 shrink-0 will-change-transform">
            <img src={gallery.phase6[0]} className="absolute inset-0 w-full h-full object-cover" />
            <motion.div style={{ opacity: slabCenterOverlay }} className="absolute inset-0 bg-black/60" />
          </motion.div>

          {/* CENTRAL STAR - Implodes siblings */}
          <motion.div style={{ width: slabCenterBasis }} className="relative h-full overflow-hidden rounded-[2rem] shadow-2xl border border-white/5 shrink-0 will-change-transform">
            <motion.img style={{ scale: slabCenterImgScale }} src={gallery.phase6[1]} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          </motion.div>

          {/* R1 */}
          <motion.div style={{ width: slabOthersBasis }} className="relative h-full overflow-hidden rounded-[2rem] shadow-2xl border border-white/5 shrink-0 will-change-transform">
            <img src={gallery.phase6[2]} className="absolute inset-0 w-full h-full object-cover" />
            <motion.div style={{ opacity: slabCenterOverlay }} className="absolute inset-0 bg-black/60" />
          </motion.div>

          {/* R2 */}
          <motion.div style={{ width: slabOthersBasis }} className="relative h-full overflow-hidden rounded-[2rem] shadow-2xl border border-white/5 shrink-0 will-change-transform">
            <img src={gallery.phase6[3]} className="absolute inset-0 w-full h-full object-cover" />
            <motion.div style={{ opacity: slabCenterOverlay }} className="absolute inset-0 bg-black/60" />
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}
