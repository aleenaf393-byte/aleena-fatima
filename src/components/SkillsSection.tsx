import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Braces,
  Code2,
  FileCode2,
  Globe,
  Layout,
  MonitorSmartphone,
  Paintbrush,
  Sliders,
  Sparkles,
  Wrench,
} from 'lucide-react';
import {
  SKILL_CATEGORIES,
  SKILLS,
  type SkillCategory,
  type SkillItem,
} from '../data/portfolioData';
import { CodingBackdrop } from './CodingBackdrop';

const SKILL_ICON_MAP: Record<string, typeof Code2> = {
  html5: FileCode2,
  css3: Paintbrush,
  javascript: Braces,
  wordpress: Globe,
  elementor: Layout,
  'elementor-pro': Sparkles,
  'custom-css': Sliders,
  'custom-js': Code2,
  'responsive-design': MonitorSmartphone,
  'website-dev': Wrench,
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative overflow-hidden bg-[#0B1120] py-20 sm:py-28">
      <CodingBackdrop variant="grid" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-[#22D3EE]">Technical Skills</p>
            <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              My Creative &amp; Technical Toolkit
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Organized across frontend coding, WordPress page builders, and responsive design. Indicator values are editable placeholders you can adjust anytime.
            </p>
          </div>
        </div>

        {/* Interactive Category Filter Controls */}
        <div
          className="mt-8 flex flex-wrap items-center gap-2 rounded-2xl border border-white/12 bg-[#131C33]/90 p-1.5 w-fit"
          role="tablist"
          aria-label="Filter skills by category"
        >
          {SKILL_CATEGORIES.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(category)}
                className={`min-h-[40px] rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer sm:text-sm ${
                  active
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white shadow-sm'
                    : 'text-slate-300 hover:bg-white/10 hover:text-cyan-300'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill: SkillItem, index: number) => {
            const Icon = SKILL_ICON_MAP[skill.id] || Code2;
            return (
              <motion.article
                key={skill.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-3xl border border-white/12 bg-[#131C33]/85 p-6 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#A855F7]/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#A855F7]/15 text-[#22D3EE] transition-transform duration-200 group-hover:scale-105"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {skill.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-400">{skill.category}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#22D3EE] tabular-nums">
                    {skill.proficiency}%
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {skill.description}
                </p>

                {/* Animated Progress Indicator */}
                <div className="mt-5">
                  <div className="mb-1.5 flex items-center justify-between text-[11px] font-medium text-slate-400">
                    <span>Skill indicator</span>
                    <span>Editable</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: skill.proficiency / 100 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      style={{ transformOrigin: 'left' }}
                      className="h-full w-full rounded-full bg-gradient-to-r from-[#A855F7] via-[#3B82F6] to-[#22D3EE]"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
