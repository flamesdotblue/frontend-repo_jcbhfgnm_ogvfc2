import React from 'react';
import { Cloud, Link, Code, Bug, ShieldCheck, Brain } from 'lucide-react';

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

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 hover:bg-white/10 transition-colors"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
