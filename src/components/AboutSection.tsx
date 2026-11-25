import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Code2,
  Download,
  FileText,
  Layers,
  MonitorSmartphone,
  X,
} from 'lucide-react';
import { ABOUT_IMAGE, PROFILE } from '../data/portfolioData';
import { CodingBackdrop } from './CodingBackdrop';
import { MagneticButton } from './MagneticButton';
import { SafeImage } from './SafeImage';

const FOCUS_TABS = [
  {
    id: 'scratch',
    label: 'Custom Code',
    icon: Code2,
    title: 'Built From Scratch With Clean Code',
    summary:
      'I love crafting unique layouts in semantic HTML5, modern CSS3, and lightweight JavaScript—giving brands bespoke animations and fast performance without template constraints.',
    highlights: ['Semantic HTML5 Structure', 'GPU-Smooth CSS3 Motion', 'Custom Vanilla JS Logic'],
  },
  {
    id: 'wordpress',
    label: 'WordPress & Elementor',
    icon: Layers,
    title: 'Flexible WordPress & Elementor Pro Systems',
    summary:
      'I build scalable WordPress websites using Elementor and Elementor Pro, elevating every layout with Custom CSS so clients enjoy effortless editing alongside bespoke styling.',
    highlights: ['Elementor Pro Theme Builder', 'Custom CSS Polish', 'Easy Client Content Control'],
  },
  {
    id: 'responsive',
    label: 'Responsive Craft',
    icon: MonitorSmartphone,
    title: 'Pixel-Balanced Across Every Screen Size',
    summary:
      'From wide desktop monitors to tablets and mobile phones, every section is structured with thoughtful spacing, accessible contrast, and smooth touch interactions.',
    highlights: ['Desktop, Tablet & Mobile Fluidity', 'Accessible Typography', 'Fast Page Loading'],
  },
];

export function AboutSection() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [activeTabId, setActiveTabId] = useState(FOCUS_TABS[0].id);

  const activeFocus = FOCUS_TABS.find((t) => t.id === activeTabId) || FOCUS_TABS[0];

  const handleDownloadClick = () => {
    if (PROFILE.cvFileUrl && !PROFILE.cvFileUrl.startsWith('#')) {
      const link = document.createElement('a');
      link.href = PROFILE.cvFileUrl;
      link.download = 'Aleena-Web-Developer-CV.pdf';
      link.click();
      return;
    }
    setCvModalOpen(true);
  };

  const handleDownloadGeneratedResume = () => {
    const resumeHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Aleena — Website Developer & Frontend Developer CV</title>
<style>
  body { font-family: Arial, sans-serif; color: #1E103C; max-width: 780px; margin: 40px auto; padding: 0 24px; line-height: 1.6; }
  h1 { margin-bottom: 4px; color: #2E1065; }
  .subtitle { color: #4C1D95; font-weight: bold; margin-bottom: 16px; }
  h2 { border-bottom: 2px solid #4C1D95; padding-bottom: 4px; margin-top: 28px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.06em; }
  ul { padding-left: 20px; }
</style>
</head>
<body>
  <h1>${PROFILE.name}</h1>
  <div class="subtitle">${PROFILE.title} · ${PROFILE.experienceYears} Years Experience</div>
  <p>Email: ${PROFILE.email} | Phone: ${PROFILE.phone}</p>
  <h2>Professional Summary</h2>
  <p>${PROFILE.intro}</p>
  <h2>Core Skills</h2>
  <ul>
    <li>Frontend Development: HTML5, CSS3, JavaScript, Responsive Web Design</li>
    <li>WordPress Ecosystem: WordPress Website Development, Elementor, Elementor Pro</li>
    <li>Custom Solutions: Scratch Website Development, Custom CSS, Custom JavaScript, Landing Pages, Website Customization</li>
  </ul>
</body>
</html>`;
    const blob = new Blob([resumeHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Aleena-Web-Developer-CV.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="relative overflow-hidden bg-[#0F172A] py-20 sm:py-28">
      <CodingBackdrop variant="code" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Editorial Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 border-b border-white/12 pb-10 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-[#22D3EE]">About Me</p>
            <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.08]">
              More Than Just Code. I Create Digital Experiences.
            </h2>
          </div>

          <div className="shrink-0">
            <MagneticButton
              onClick={handleDownloadClick}
              className="inline-flex min-h-[48px] items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#3B82F6]/20 transition-all duration-200 hover:from-[#9333EA] hover:to-[#22D3EE] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download CV</span>
            </MagneticButton>
          </div>
        </motion.div>

        {/* 3-Column Editorial Bento Stage */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Column 1: Sculpted Arch Studio Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="h-full overflow-hidden rounded-t-[6.5rem] rounded-b-3xl border border-white/15 bg-gradient-to-b from-[#1C123B] to-[#0B1021] p-2.5 shadow-xl shadow-black/35">
              <div className="h-full overflow-hidden rounded-t-[5.8rem] rounded-b-2xl bg-[#0B1021]">
                <SafeImage
                  src={ABOUT_IMAGE}
                  alt="Aleena at her creative web development studio desk with UI sketches"
                  className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  fallbackTitle="Aleena — Web Developer"
                />
              </div>
            </div>
          </motion.div>

          {/* Column 2: Personal Intro + Interactive Focus Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#131C35]/85 p-6 backdrop-blur-sm sm:p-8 lg:col-span-5"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                Developer Story · 3 Years Experience
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-200">
                {PROFILE.intro}
              </p>
            </div>

            {/* Interactive Craft Switcher */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <div
                className="flex flex-wrap gap-1.5 rounded-xl bg-[#090E1A] p-1"
                role="tablist"
                aria-label="Aleena core focus areas"
              >
                {FOCUS_TABS.map((tab) => {
                  const active = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                        active
                          ? 'bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white shadow-sm'
                          : 'text-slate-300 hover:text-cyan-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B1021]/80 p-4">
                <div className="flex items-center gap-2 text-[#22D3EE]">
                  <activeFocus.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-sm font-bold text-white">
                    {activeFocus.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {activeFocus.summary}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium text-purple-300">
                  {activeFocus.highlights.map((h, i) => (
                    <span key={h} className="inline-flex items-center gap-2">
                      <span>{h}</span>
                      {i < activeFocus.highlights.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Developer Profile Index Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-3xl border border-white/12 bg-gradient-to-b from-[#1A1038]/90 to-[#111936]/95 p-6 backdrop-blur-sm lg:col-span-3"
          >
            <div>
              <p className="font-mono text-xs font-semibold text-[#22D3EE]">
                profile.summary
              </p>

              <dl className="mt-5 divide-y divide-white/10 text-sm">
                <div className="py-3">
                  <dt className="text-xs text-slate-400">Name</dt>
                  <dd className="mt-0.5 font-display font-bold text-white">{PROFILE.name}</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-400">Experience</dt>
                  <dd className="mt-0.5 font-display font-bold text-white tabular-nums">
                    {PROFILE.experienceYears} Years
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-400">Primary Stack</dt>
                  <dd className="mt-0.5 font-medium text-slate-200">
                    HTML5 · CSS3 · JS · WordPress · Elementor
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-400">Direct Email</dt>
                  <dd className="mt-0.5 truncate font-medium text-cyan-300">
                    <a href={`mailto:${PROFILE.email}`} className="hover:underline">
                      {PROFILE.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <a
                href="#process"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22D3EE] transition-colors hover:text-purple-300"
              >
                <span>See My 5-Step Process</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <p className="mt-2 text-[11px] text-slate-400">
                CV link is configurable in portfolio data.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Replaceable CV Modal */}
      {cvModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          <div className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-[#121933] p-6 text-white shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setCvModalOpen(false)}
              aria-label="Close CV dialog"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3 text-[#22D3EE]">
              <FileText className="h-5 w-5" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Curriculum Vitae · Replaceable Link
              </span>
            </div>

            <h3 id="cv-modal-title" className="font-display mt-3 text-2xl font-bold text-white">
              {PROFILE.name} — {PROFILE.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              This button is wired to a replaceable <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-cyan-300">cvFileUrl</code> setting in{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-cyan-300">src/data/portfolioData.ts</code>. Once you upload your PDF CV, set that path and it downloads directly. Until then, you can download a clean HTML summary CV below.
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-[#0B1021] p-4 text-sm text-slate-300">
              <p className="font-semibold text-white">Summary Included:</p>
              <p className="mt-1">
                {PROFILE.experienceYears} Years Experience · HTML5, CSS3, JavaScript, WordPress, Elementor Pro, Custom Coding, Responsive Design · {PROFILE.email}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setCvModalOpen(false)}
                className="min-h-[44px] rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleDownloadGeneratedResume}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] px-5 py-2.5 text-sm font-semibold text-white hover:from-[#9333EA] hover:to-[#22D3EE]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download Summary CV (.html)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
