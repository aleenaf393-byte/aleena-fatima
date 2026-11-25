import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'border-b border-white/12 bg-[#090E1A]/92 backdrop-blur-md'
          : 'border-b border-white/8 bg-[#090E1A]/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
        <a
          href="#home"
          aria-label="Aleena Home"
          className="font-display text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-[#EDE9FE] to-[#22D3EE] bg-clip-text text-transparent transition-opacity duration-200 hover:opacity-85 whitespace-nowrap shrink-0"
        >
          {PROFILE.brandMark}
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-medium text-slate-300 transition-colors duration-150 hover:text-cyan-300 whitespace-nowrap shrink-0"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#A855F7] to-[#22D3EE] transition-all duration-200 group-hover:w-full"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#3B82F6]/25 transition-all duration-200 hover:-translate-y-0.5 hover:from-[#9333EA] hover:to-[#22D3EE] whitespace-nowrap shrink-0"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0D1326] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] px-4 py-2.5 text-sm font-semibold text-white"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
