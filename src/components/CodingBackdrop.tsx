import { useEffect, useRef, useState } from 'react';

interface CodingBackdropProps {
  variant?: 'hero' | 'code' | 'grid' | 'particles';
  showScrollBeam?: boolean;
}

const SNIPPETS_BY_VARIANT: Record<
  NonNullable<CodingBackdropProps['variant']>,
  Array<{ text: string; top: string; left: string; color: string; anim: string }>
> = {
  hero: [
    { text: '<section class="experience">', top: '12%', left: '6%', color: 'text-cyan-400/25', anim: 'code-float-a' },
    { text: 'const build = () => "2026";', top: '24%', left: '72%', color: 'text-purple-400/25', anim: 'code-float-b' },
    { text: '.grid { display: flex; }', top: '74%', left: '8%', color: 'text-blue-400/25', anim: 'code-float-c' },
    { text: 'wp_enqueue_style("custom");', top: '82%', left: '66%', color: 'text-cyan-300/20', anim: 'code-float-a' },
    { text: '</>', top: '44%', left: '48%', color: 'text-purple-300/20', anim: 'code-float-b' },
  ],
  code: [
    { text: '<html>', top: '10%', left: '4%', color: 'text-cyan-400/20', anim: 'code-float-b' },
    { text: '{ transition: 60fps; }', top: '18%', left: '78%', color: 'text-purple-400/20', anim: 'code-float-a' },
    { text: 'export default App;', top: '78%', left: '74%', color: 'text-blue-400/20', anim: 'code-float-c' },
    { text: 'add_action("init");', top: '84%', left: '6%', color: 'text-cyan-300/20', anim: 'code-float-a' },
  ],
  grid: [
    { text: '/* responsive-layout */', top: '14%', left: '74%', color: 'text-blue-400/20', anim: 'code-float-a' },
    { text: 'display: grid;', top: '76%', left: '5%', color: 'text-purple-400/20', anim: 'code-float-b' },
    { text: '=>', top: '48%', left: '90%', color: 'text-cyan-400/20', anim: 'code-float-c' },
  ],
  particles: [
    { text: '<?php wp_head(); ?>', top: '15%', left: '72%', color: 'text-purple-400/20', anim: 'code-float-b' },
    { text: '@keyframes glow {}', top: '80%', left: '8%', color: 'text-cyan-400/20', anim: 'code-float-a' },
    { text: '{ ...props }', top: '52%', left: '86%', color: 'text-blue-400/20', anim: 'code-float-c' },
  ],
};

const PARTICLES = [
  { top: '16%', left: '18%', size: 'h-1.5 w-1.5', color: 'bg-cyan-400/50 shadow-[0_0_8px_#22d3ee]', anim: 'particle-drift-1' },
  { top: '34%', left: '84%', size: 'h-2 w-2', color: 'bg-purple-400/45 shadow-[0_0_10px_#a855f7]', anim: 'particle-drift-2' },
  { top: '62%', left: '12%', size: 'h-1.5 w-1.5', color: 'bg-blue-400/50 shadow-[0_0_8px_#3b82f6]', anim: 'particle-drift-3' },
  { top: '78%', left: '54%', size: 'h-1.5 w-1.5', color: 'bg-cyan-300/45 shadow-[0_0_8px_#22d3ee]', anim: 'particle-drift-1' },
  { top: '26%', left: '56%', size: 'h-1 w-1', color: 'bg-purple-300/50 shadow-[0_0_6px_#a855f7]', anim: 'particle-drift-2' },
  { top: '86%', left: '88%', size: 'h-2 w-2', color: 'bg-blue-400/40 shadow-[0_0_10px_#3b82f6]', anim: 'particle-drift-3' },
];

export function CodingBackdrop({ variant = 'grid', showScrollBeam = true }: CodingBackdropProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setInView(entry.isIntersecting);
        }
      },
      { rootMargin: '80px', threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const snippets = SNIPPETS_BY_VARIANT[variant];

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${
        inView ? 'coding-anim-running' : 'coding-anim-paused'
      }`}
    >
      {/* Subtle Developer Matrix Grid */}
      <div className="coding-grid-pattern absolute inset-0 opacity-[0.18]" />

      {/* Top Scroll-Synced Coding Accent Trace */}
      {showScrollBeam && (
        <div
          className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A855F7]/60 to-transparent transition-opacity duration-700 ${
            inView ? 'opacity-100' : 'opacity-20'
          }`}
        />
      )}

      {/* Moving Glowing Code Scan Lines */}
      <div className="code-line-sweep absolute top-[28%] left-0 h-[1px] w-48 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="code-line-sweep-reverse absolute top-[68%] right-0 h-[1px] w-56 bg-gradient-to-r from-transparent via-purple-400/55 to-transparent" />

      {/* Glowing Ambient Developer Orbs */}
      <div className="absolute -top-20 right-[12%] h-64 w-64 rounded-full bg-[#A855F7]/12 blur-3xl" />
      <div className="absolute -bottom-20 left-[10%] h-64 w-64 rounded-full bg-[#3B82F6]/12 blur-3xl" />

      {/* Floating Syntax Snippets */}
      {snippets.map((snippet, index) => (
        <span
          key={`${snippet.text}-${index}`}
          style={{ top: snippet.top, left: snippet.left }}
          className={`absolute hidden sm:block font-mono text-xs font-medium tracking-tight ${snippet.color} ${snippet.anim}`}
        >
          {snippet.text}
        </span>
      ))}

      {/* Digital Glowing Particles */}
      {PARTICLES.map((p, idx) => (
        <span
          key={idx}
          style={{ top: p.top, left: p.left }}
          className={`absolute rounded-full ${p.size} ${p.color} ${p.anim}`}
        />
      ))}
    </div>
  );
}
