import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="relative h-[80vh] sm:h-[85vh] md:h-[90vh]">
        <Spline
          scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

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
                  We help product teams ship fast without compromising on security. From cloud to code, we harden your stack against modern threats.
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
