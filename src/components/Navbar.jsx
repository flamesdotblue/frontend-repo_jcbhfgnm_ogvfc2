import React, { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', href: '#services' },
    { label: 'Why SpotDefence', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
            </span>
            <span className="font-semibold tracking-tight text-white">SpotDefence</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-neutral-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-600"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
