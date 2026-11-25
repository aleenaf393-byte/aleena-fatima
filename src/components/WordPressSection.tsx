import { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Layers,
  LayoutTemplate,
  Monitor,
  Palette,
  Smartphone,
  Tablet,
} from 'lucide-react';
import { CodingBackdrop } from './CodingBackdrop';

const WP_HIGHLIGHTS = [
  'WordPress Website Development',
  'Elementor Page Builder',
  'Elementor Pro',
  'Custom CSS Styling',
  'Responsive Elementor Layouts',
  'Website Customization',
  'Landing Page Creation',
];

type PreviewDevice = 'desktop' | 'tablet' | 'mobile';

export function WordPressSection() {
  const [device, setDevice] = useState<PreviewDevice>('desktop');
  const [showHeroBlock, setShowHeroBlock] = useState(true);
  const [showFeaturesBlock, setShowFeaturesBlock] = useState(true);
  const [customCssEnabled, setCustomCssEnabled] = useState(true);

  const canvasWidth =
    device === 'mobile' ? 'max-w-[300px]' : device === 'tablet' ? 'max-w-[460px]' : 'w-full';

  return (
    <section
      id="wordpress-expertise"
      className="relative overflow-hidden border-b border-white/10 bg-[#0E1629] py-20 sm:py-28"
    >
      <CodingBackdrop variant="grid" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-semibold tracking-wide text-[#C084FC]">
              WordPress &amp; Elementor Expertise
            </p>
            <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Powerful Websites. Built With WordPress.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              I combine the ease of WordPress and Elementor Pro with clean Custom CSS styling so you get an easily editable website that never looks like a generic template.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {WP_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-200">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#22D3EE]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Interactive Elementor Builder Preview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#121B33] shadow-2xl shadow-black/35">
              {/* Simulated Elementor Top Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#1B103B] px-4 py-3 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <Layers className="h-4 w-4 text-[#22D3EE]" aria-hidden="true" />
                  <span>Elementor Visual Builder Preview</span>
                </div>

                {/* Responsive Breakpoint Switcher */}
                <div className="flex items-center gap-1 rounded-xl bg-white/10 p-1">
                  <button
                    type="button"
                    onClick={() => setDevice('desktop')}
                    aria-label="Preview desktop layout"
                    className={`rounded-lg p-1.5 transition-colors cursor-pointer ${
                      device === 'desktop' ? 'bg-[#3B82F6] text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Monitor className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDevice('tablet')}
                    aria-label="Preview tablet layout"
                    className={`rounded-lg p-1.5 transition-colors cursor-pointer ${
                      device === 'tablet' ? 'bg-[#3B82F6] text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Tablet className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDevice('mobile')}
                    aria-label="Preview mobile layout"
                    className={`rounded-lg p-1.5 transition-colors cursor-pointer ${
                      device === 'mobile' ? 'bg-[#3B82F6] text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Builder Controls & Live Canvas */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Elementor-style Widget Panel */}
                <div className="border-b border-white/10 bg-[#0D1326] p-4 md:col-span-4 md:border-b-0 md:border-r">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Builder Blocks
                  </p>
                  <div className="mt-3 space-y-2.5">
                    <button
                      type="button"
                      onClick={() => setShowHeroBlock((v) => !v)}
                      className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition-colors cursor-pointer ${
                        showHeroBlock
                          ? 'border-[#22D3EE]/40 bg-[#182242] text-white'
                          : 'border-white/10 bg-white/5 text-slate-400'
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        <LayoutTemplate className="h-3.5 w-3.5 text-[#22D3EE]" />
                        Hero Section
                      </span>
                      <span>{showHeroBlock ? 'On' : 'Off'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowFeaturesBlock((v) => !v)}
                      className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition-colors cursor-pointer ${
                        showFeaturesBlock
                          ? 'border-[#22D3EE]/40 bg-[#182242] text-white'
                          : 'border-white/10 bg-white/5 text-slate-400'
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Layers className="h-3.5 w-3.5 text-[#C084FC]" />
                        Service Grid
                      </span>
                      <span>{showFeaturesBlock ? 'On' : 'Off'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCustomCssEnabled((v) => !v)}
                      className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition-colors cursor-pointer ${
                        customCssEnabled
                          ? 'border-[#A855F7]/60 bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white'
                          : 'border-white/10 bg-white/5 text-slate-400'
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Palette className="h-3.5 w-3.5" />
                        Custom CSS
                      </span>
                      <span>{customCssEnabled ? 'Active' : 'Base'}</span>
                    </button>
                  </div>
                </div>

                {/* Live Canvas Output */}
                <div className="flex min-h-[290px] items-center justify-center bg-[#0A0F1F] p-5 md:col-span-8">
                  <div
                    className={`mx-auto rounded-2xl border transition-all duration-300 ${canvasWidth} ${
                      customCssEnabled
                        ? 'border-[#A855F7]/45 bg-gradient-to-br from-[#1B123A] via-[#131A38] to-[#0E172E] shadow-lg shadow-[#A855F7]/10'
                        : 'border-white/15 bg-[#121930] shadow-sm'
                    } p-5`}
                  >
                    {showHeroBlock && (
                      <div className="rounded-xl border border-dashed border-[#22D3EE]/45 p-4">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#22D3EE]">
                          WordPress + Elementor Pro
                        </span>
                        <h3 className="font-display mt-1 text-base font-bold text-white">
                          Launch-Ready Responsive Page
                        </h3>
                        <p className="mt-1 text-xs text-slate-300">
                          {customCssEnabled
                            ? 'Enhanced with custom CSS depth, clean typography, and crisp spacing.'
                            : 'Standard clean Elementor wireframe structure.'}
                        </p>
                      </div>
                    )}

                    {showFeaturesBlock && (
                      <div
                        className={`mt-3 grid gap-2.5 ${
                          device === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'
                        }`}
                      >
                        {['Header & Menu', 'Dynamic Grid', 'Contact Form'].map((block) => (
                          <div
                            key={block}
                            className={`rounded-xl p-3 text-center text-[11px] font-semibold ${
                              customCssEnabled
                                ? 'bg-gradient-to-r from-[#7C3AED]/80 to-[#3B82F6]/80 text-white'
                                : 'bg-white/10 text-slate-300'
                            }`}
                          >
                            {block}
                          </div>
                        ))}
                      </div>
                    )}

                    {!showHeroBlock && !showFeaturesBlock && (
                      <p className="py-10 text-center text-xs text-slate-400">
                        Toggle blocks on the left to preview the live layout.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
