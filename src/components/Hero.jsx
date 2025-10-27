import React, { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Zap, Gauge } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(true);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [enable3D, setEnable3D] = useState(true);

  // Detect reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setPrefersReduced(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Default to performance mode on small screens or when user prefers reduced motion
  useEffect(() => {
    const isSmall = window.innerWidth < 768;
    if (isSmall || prefersReduced) {
      setEnable3D(false);
    }
  }, [prefersReduced]);

  // Only render Spline when in view to reduce GPU usage
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { root: null, threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const showSpline = useMemo(() => enable3D && inView && !prefersReduced, [enable3D, inView, prefersReduced]);

  return (
    <section id="home" className="relative">
      <div ref={containerRef} className="relative h-[78vh] sm:h-[85vh] md:h-[90vh]">
        <AnimatePresence initial={false}>
          {showSpline ? (
            <motion.div key="spline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
              <Spline
                scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="fallback"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <div className="h-full w-full bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(16,185,129,0.25),transparent)]" />
              <motion.div
                className="pointer-events-none absolute -top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="pointer-events-none absolute bottom-8 right-8 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Shield className="h-7 w-7 text-emerald-400" />
              </motion.div>
              <motion.div
                className="pointer-events-none absolute top-14 left-10 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Zap className="h-6 w-6 text-emerald-300" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl pointer-events-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/30 px-3 py-1 text-emerald-300 backdrop-blur">
                  <Shield className="h-4 w-4" />
                  <span className="text-xs font-medium tracking-wide">Enterprise Application Security</span>
                </div>
                <h1 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
                  SpotDefence — Secure by Design. Resilient by Default.
                </h1>
                <p className="mt-4 text-neutral-300 text-base sm:text-lg">
                  Ship fast without compromising on security. From cloud to code, we harden your stack against modern threats.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 pointer-events-auto">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                  >
                    Talk to Security Experts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                  >
                    Explore Services
                  </a>
                </div>

                {/* Performance toggle */}
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setEnable3D((v) => !v)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200 hover:bg-white/10"
                    aria-pressed={enable3D}
                    aria-label="Toggle 3D performance mode"
                  >
                    <Gauge className="h-3.5 w-3.5 text-emerald-300" />
                    {enable3D ? 'Performance mode: On (3D off when out of view)' : 'Performance mode: Max (3D disabled)'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient edges that don't block the Spline */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-neutral-950 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
