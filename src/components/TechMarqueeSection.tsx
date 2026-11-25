import { useEffect, useRef, useState } from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';

const TRACK_DETAILS: Record<string, string> = {
  HTML5: 'Semantic markup, accessible landmarks, and SEO-ready document structure.',
  CSS3: 'Fluid Grid & Flexbox systems, glassmorphism, and 60 FPS GPU animations.',
  JAVASCRIPT: 'Interactive DOM logic, Intersection Observer reveals, and clean UX.',
  WORDPRESS: 'Custom themes, scalable content architecture, and fast site setup.',
  ELEMENTOR: 'Pixel-accurate sections, reusable blocks, and Elementor Pro Theme Builder.',
  'CUSTOM CODING': 'Hand-crafted websites built from scratch without generic template bloat.',
  'RESPONSIVE DESIGN': 'Seamless layouts tuned across desktop, tablet, and mobile screens.',
};

const SYNTAX_RIBBON = [
  '<semantic-html5 />',
  '{ modern-css3 }',
  '() => javascript',
  'wp_elementor_pro()',
  'custom_scratch_builds',
  'responsive_100%',
];

export function TechMarqueeSection() {
  const repeatedPrimary = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  const repeatedSyntax = [...SYNTAX_RIBBON, ...SYNTAX_RIBBON, ...SYNTAX_RIBBON, ...SYNTAX_RIBBON];

  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);
  const [activeTech, setActiveTech] = useState<string>('HTML5');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) setInView(entries[0].isIntersecting);
      },
      { rootMargin: '60px', threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="tech-marquee"
      aria-label="Core technologies kinetic showcase"
      className={`marquee-wrapper relative overflow-hidden border-y border-white/12 bg-gradient-to-b from-[#170B36] via-[#130D2E] to-[#0E1630] py-7 text-white ${
        inView ? 'coding-anim-running' : 'coding-anim-paused'
      }`}
    >
      {/* Track 1: Large Editorial Solid + Outlined Typography */}
      <div className="animate-marquee items-center">
        {repeatedPrimary.map((item, index) => {
          const isOutlined = index % 2 === 1;
          const isSelected = activeTech === item;
          return (
            <button
              key={`${item}-${index}`}
              type="button"
              onMouseEnter={() => setActiveTech(item)}
              onFocus={() => setActiveTech(item)}
              onClick={() => setActiveTech(item)}
              className="group flex items-center cursor-pointer bg-transparent border-0 p-0 focus:outline-none"
            >
              <span
                className={`px-5 font-display text-lg font-extrabold tracking-[0.12em] transition-all duration-200 sm:px-7 sm:text-2xl whitespace-nowrap ${
                  isSelected
                    ? 'text-[#22D3EE] -translate-y-0.5'
                    : isOutlined
                      ? 'text-stroke-subtle group-hover:text-white'
                      : 'text-white/90 group-hover:text-[#C084FC]'
                }`}
              >
                {item}
              </span>
              <span className="text-[#A855F7]" aria-hidden="true">
                ✦
              </span>
            </button>
          );
        })}
      </div>

      {/* Track 2: Opposing Reverse Code-Syntax Stream */}
      <div className="animate-marquee-reverse mt-3.5 items-center">
        {repeatedSyntax.map((snippet, index) => (
          <div key={`${snippet}-${index}`} className="flex items-center">
            <span className="px-5 font-mono text-xs font-medium tracking-wide text-cyan-300/75 sm:px-7 sm:text-sm whitespace-nowrap">
              {snippet}
            </span>
            <span className="text-blue-400/60" aria-hidden="true">
              ·
            </span>
          </div>
        ))}
      </div>

      {/* Interactive Live Readout Strip */}
      <div className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-center gap-2 px-4 text-center text-xs sm:text-sm">
        <span className="font-mono font-semibold text-[#22D3EE]">{activeTech}</span>
        <span className="text-slate-500" aria-hidden="true">
          —
        </span>
        <span className="text-slate-300">
          {TRACK_DETAILS[activeTech] || TRACK_DETAILS.HTML5}
        </span>
      </div>
    </section>
  );
}
