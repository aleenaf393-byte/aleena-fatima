import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, Code, Sparkles } from 'lucide-react';
import { STATS, type StatItem } from '../data/portfolioData';
import { CodingBackdrop } from './CodingBackdrop';

const STAT_ICONS = [Briefcase, Award, Code, Sparkles];

function AnimatedCounter({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    let start: number | null = null;
    const duration = 1200;
    let rafId = 0;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, trigger]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Experience and achievements"
      className="relative overflow-hidden border-y border-white/8 bg-[#160C2E] py-12 sm:py-16"
    >
      <CodingBackdrop variant="particles" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat: StatItem, idx: number) => {
            const Icon = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br ${stat.accentGradient} p-6 shadow-lg shadow-black/25 transition-all duration-200 hover:-translate-y-1 hover:border-[#22D3EE]/45`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    {stat.isEditablePlaceholder ? 'Editable placeholder' : 'Verified'}
                  </span>
                </div>

                <div className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} trigger={inView} />
                </div>

                <h3 className="mt-1 font-display text-base font-bold text-[#EDE9FE]">
                  {stat.label}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">{stat.sublabel}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
