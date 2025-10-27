import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-600/20 via-emerald-500/10 to-transparent p-8 sm:p-12">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_90%_10%,rgba(16,185,129,0.25),transparent)]" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to strengthen your security posture?</h3>
            <p className="mt-3 max-w-2xl text-neutral-200">
              Partner with SpotDefence to identify risks, prioritize remediation, and build resilient applications and infrastructure.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:contact@spotdefence.com?subject=SpotDefence%20Inquiry"
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600"
              >
                <Mail className="mr-2 h-4 w-4" />
                contact@spotdefence.com
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                View Capabilities
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
