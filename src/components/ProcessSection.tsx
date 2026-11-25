import { motion } from 'motion/react';
import { Compass, Gauge, Layers, Rocket, Terminal } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { CodingBackdrop } from './CodingBackdrop';

const STEP_ICONS = [Compass, Layers, Terminal, Gauge, Rocket];

export function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#170B33] py-20 sm:py-28">
      <CodingBackdrop variant="particles" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#22D3EE]">My Work Process</p>
          <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From Your Idea to a Live Website
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A clear, collaborative five-step workflow that takes every concept from initial goals to a responsive launch.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Desktop Animated Horizontal Connector */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
            aria-hidden="true"
            className="absolute left-8 right-8 top-11 hidden h-[2px] bg-gradient-to-r from-[#A855F7] via-[#3B82F6] to-[#22D3EE] lg:block"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[idx % STEP_ICONS.length];
              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col rounded-3xl border border-white/12 bg-[#1F1242]/90 p-6 shadow-lg shadow-black/25 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#22D3EE]/50"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] text-white shadow-sm transition-transform duration-200 group-hover:scale-105"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#22D3EE] tabular-nums">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
