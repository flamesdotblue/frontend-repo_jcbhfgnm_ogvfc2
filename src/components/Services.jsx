import React from 'react';
import { Cloud, Link, Code, Bug, ShieldCheck, Brain, Check, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Security Assessment',
    desc:
      'Comprehensive audits across AWS, Azure, and GCP to uncover misconfigurations, vulnerabilities, and compliance gaps for a hardened cloud posture.',
  },
  {
    icon: Link,
    title: 'API Security Testing',
    desc:
      'Deep evaluation of authentication, authorization, rate limiting, and business logic to protect APIs from modern attack vectors.',
  },
  {
    icon: Code,
    title: 'Static Application Security Testing (SAST)',
    desc:
      'Automated source analysis to catch security issues early and integrate seamlessly into your DevSecOps pipelines.',
  },
  {
    icon: Bug,
    title: 'Dynamic Application Security Testing (DAST)',
    desc:
      'Runtime testing that simulates real-world attacks to reveal exploitable vulnerabilities before attackers do.',
  },
  {
    icon: ShieldCheck,
    title: 'Penetration Testing as a Service (PTaaS)',
    desc:
      'Expert-led testing blending automation with hands-on techniques and actionable remediation guidance.',
  },
  {
    icon: Brain,
    title: 'LLM Security Assessment',
    desc:
      'Specialized testing for AI and LLM apps to mitigate prompt injection, data leakage, and model manipulation risks.',
  },
];

const whyPoints = [
  'Security-first delivery with developer enablement',
  'Actionable findings prioritized by risk and effort',
  'CI/CD integration and remediation pairing',
  'Transparent reporting and executive summaries',
];

const testimonials = [
  {
    quote:
      'SpotDefence helped us ship on time while eliminating critical risks. Their team felt like an extension of ours.',
    name: 'VP Engineering, Fintech Scaleup',
  },
  {
    quote:
      'The PTaaS model gave us continuous assurance. Clear reports, pragmatic fixes, fast turnarounds.',
    name: 'Head of Security, SaaS Unicorn',
  },
  {
    quote:
      'Best partner for API and cloud security. We caught issues early before they reached production.',
    name: 'CTO, HealthTech',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 sm:py-24 bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Security Services</h2>
          <p className="mt-3 text-neutral-300">
            Targeted offerings designed to strengthen the security posture of your cloud, code, and products.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                  <Icon className="h-6 w-6 text-emerald-400" />
                </span>
                <div>
                  <h3 className="text-lg font-medium text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-300">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why SpotDefence */}
        <div id="why" className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Why SpotDefence</h3>
            <p className="mt-3 text-neutral-300 max-w-xl">
              Choose a partner that blends deep security expertise with a modern, developer-friendly approach.
            </p>
            <ul className="mt-6 space-y-3">
              {whyPoints.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10">
                    <Check className="h-4 w-4 text-emerald-400" />
                  </span>
                  <span className="text-neutral-200">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Logos / social proof */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-neutral-300">Trusted by teams building in</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['AWS', 'Azure', 'GCP', 'Kubernetes', 'Stripe', 'Auth0'].map((name) => (
                <div key={name} className="flex h-20 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                  <span className="text-sm font-medium text-neutral-200">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">What leaders say</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Quote className="h-5 w-5 text-emerald-400" />
                <blockquote className="mt-3 text-neutral-200">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-neutral-400">{t.name}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            ['500+','Findings remediated'],
            ['<24h','Avg. triage time'],
            ['99.9%','Uptime of reporting'],
            ['12+','Industries served'],
          ].map(([stat, label]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-xl font-semibold text-white">{stat}</div>
              <div className="mt-1 text-xs text-neutral-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
