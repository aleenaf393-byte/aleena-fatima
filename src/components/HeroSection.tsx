import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowRight, Code2, FileCode, Layers, Palette, Terminal } from 'lucide-react';
import { HERO_IMAGE, PROFILE } from '../data/portfolioData';
import { CodingBackdrop } from './CodingBackdrop';
import { MagneticButton } from './MagneticButton';
import { SafeImage } from './SafeImage';

const HERO_STACK = [
  {
    id: 'html',
    label: 'HTML5',
    tag: 'Structure',
    code: '<main class="portfolio">\n  <section aria-label="Hero">...</section>\n</main>',
    note: 'Semantic landmarks & clean accessible DOM hierarchy.',
    icon: FileCode,
    color: 'text-cyan-300',
    glow: 'border-cyan-400/55 bg-cyan-400/10',
  },
  {
    id: 'css',
    label: 'CSS3',
    tag: 'Styling',
    code: '.stage {\n  display: grid;\n  transition: transform 220ms ease;\n}',
    note: 'Fluid grids, layered depth & 60 FPS GPU transforms.',
    icon: Palette,
    color: 'text-purple-300',
    glow: 'border-purple-400/55 bg-purple-400/15',
  },
  {
    id: 'js',
    label: 'JavaScript',
    tag: 'Motion',
    code: 'const observer = new IntersectionObserver(\n  (entries) => animateOnView(entries)\n);',
    note: 'Interactive DOM logic & scroll-triggered motion.',
    icon: Code2,
    color: 'text-blue-300',
    glow: 'border-blue-400/55 bg-blue-400/15',
  },
  {
    id: 'wp',
    label: 'WordPress',
    tag: 'Elementor Pro',
    code: 'add_action("wp_enqueue_scripts", () => {\n  wp_enqueue_style("custom-ui");\n});',
    note: 'Custom Elementor Pro builds with tailored CSS polish.',
    icon: Layers,
    color: 'text-cyan-300',
    glow: 'border-cyan-400/55 bg-purple-500/15',
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);
  const [activeStackIndex, setActiveStackIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const showcaseParallaxY = useTransform(scrollYProgress, [0, 1], [0, 28]);

  useEffect(() => {
    const el = sectionRef.current;
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

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(() => {
      setActiveStackIndex((prev) => (prev + 1) % HERO_STACK.length);
    }, 3600);
    return () => window.clearInterval(interval);
  }, [inView]);

  const activeStack = HERO_STACK[activeStackIndex];

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`relative overflow-hidden bg-[#090E1A] pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-24 ${
        inView ? 'coding-anim-running' : 'coding-anim-paused'
      }`}
    >
      <CodingBackdrop variant="hero" showScrollBeam={false} />

      {/* Ambient Neon Purple / Electric Blue / Cyan Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-gradient-float absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-[#A855F7]/18 blur-3xl" />
        <div className="animate-gradient-float absolute top-20 right-[12%] h-[420px] w-[420px] rounded-full bg-[#3B82F6]/16 blur-3xl" />
        <div className="animate-gradient-float absolute bottom-0 left-[10%] h-[320px] w-[320px] rounded-full bg-[#22D3EE]/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Centered Monumental Editorial Header */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-300"
          >
            <span className="inline-flex items-center gap-2 border-b-2 border-[#22D3EE] pb-0.5 font-semibold text-white">
              <Terminal className="h-3.5 w-3.5 text-[#22D3EE]" aria-hidden="true" />
              {PROFILE.availability}
            </span>
            <span aria-hidden="true" className="text-slate-500">
              ·
            </span>
            <span>{PROFILE.title}</span>
          </motion.div>

          <h1 className="font-display text-balance text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.15rem]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Turning Creative Ideas Into
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="block bg-gradient-to-r from-[#C084FC] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent"
              >
                Beautiful Digital Experiences.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Hi, I&apos;m Aleena — a Website Developer passionate about creating modern,
            responsive, and interactive websites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="inline-flex min-h-[48px] items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/25 transition-all duration-200 hover:from-[#9333EA] hover:to-[#22D3EE] whitespace-nowrap shrink-0"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-[#22D3EE]/60 hover:bg-white/10 whitespace-nowrap shrink-0"
            >
              <span>Let&apos;s Talk</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Wide Interactive Architectural Showcase Stage */}
        <motion.div
          style={{ y: showcaseParallaxY }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#140E2E]/95 via-[#0E162D]/95 to-[#101B38]/95 p-4 shadow-2xl shadow-[#A855F7]/15 backdrop-blur-md sm:p-6"
        >
          {/* Animated Top Neon Scan Trace */}
          <div
            aria-hidden="true"
            className="code-line-sweep pointer-events-none absolute top-0 left-0 h-[1px] w-56 bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent"
          />

          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            {/* Wide Studio Preview */}
            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#090E1A] lg:col-span-7">
              <SafeImage
                src={HERO_IMAGE}
                alt="Aleena creative web developer studio workspace with laptop wireframes and design notes"
                className="aspect-[16/10] h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                fallbackTitle="Creative Developer Workspace"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090E1A]/80 via-transparent to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-200">
                <span className="font-mono text-cyan-300">aleena.studio / 2026</span>
                <span className="font-medium text-slate-300">
                  Custom Code · WordPress · Elementor Pro
                </span>
              </div>
            </div>

            {/* Interactive Live Build Inspector */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/12 bg-[#0B1021]/90 p-5 lg:col-span-5">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs font-semibold text-[#22D3EE]">
                    Live Stack Inspector
                  </span>
                  <span className="font-mono text-[11px] text-purple-300">
                    {activeStack.tag}
                  </span>
                </div>

                {/* Vertical Interactive Stack Tabs */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {HERO_STACK.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = idx === activeStackIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveStackIndex(idx)}
                        onMouseEnter={() => setActiveStackIndex(idx)}
                        className={`flex min-h-[44px] items-center gap-2.5 rounded-xl border px-3 py-2 text-left transition-all duration-200 cursor-pointer ${
                          isActive
                            ? `${item.glow} shadow-sm`
                            : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.07]'
                        }`}
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${item.color}`} aria-hidden="true" />
                        <span className="font-display text-xs font-bold text-white whitespace-nowrap">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Code Window */}
                <div className="mt-4 rounded-xl border border-white/10 bg-[#070B16] p-4">
                  <pre className="overflow-x-auto font-mono text-xs leading-5 text-cyan-200">
                    <code>{activeStack.code}</code>
                  </pre>
                </div>
              </div>

              <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-relaxed text-slate-300">
                {activeStack.note}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Centered Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#tech-marquee"
            className="group inline-flex items-center gap-3 text-xs font-semibold tracking-wide text-slate-300 transition-colors hover:text-[#22D3EE]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#22D3EE] transition-transform duration-200 group-hover:translate-y-1">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>Scroll to explore skills, projects &amp; process</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
