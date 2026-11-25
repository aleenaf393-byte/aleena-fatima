import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, LayoutGrid, Play, RotateCcw, Sparkles } from 'lucide-react';
import { CodingBackdrop } from './CodingBackdrop';

type CodeTab = 'html' | 'css' | 'js';

const CODE_SNIPPETS: Record<CodeTab, { filename: string; code: string }> = {
  html: {
    filename: 'index.html',
    code: `<section class="hero-card">
  <span class="eyebrow">Custom Built · 2026</span>
  <h1>Clean Code Meets Creative UI</h1>
  <p>Crafted from scratch with semantic HTML5.</p>
  <button id="themeBtn">Switch Accent</button>
</section>`,
  },
  css: {
    filename: 'styles.css',
    code: `.hero-card {
  background: linear-gradient(135deg, #161030, #0F172A);
  border-radius: 24px;
  padding: 2rem;
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
}
.hero-card:hover {
  transform: translateY(-4px);
}`,
  },
  js: {
    filename: 'script.js',
    code: `const btn = document.getElementById('themeBtn');
const accents = ['#A855F7', '#3B82F6', '#22D3EE'];
let index = 0;

btn.addEventListener('click', () => {
  index = (index + 1) % accents.length;
  card.style.setProperty('--accent', accents[index]);
});`,
  },
};

const CAPABILITIES = [
  'HTML structure',
  'CSS styling',
  'JavaScript functionality',
  'Responsive layouts',
  'Custom animations',
  'Interactive UI components',
];

const ACCENT_OPTIONS = [
  { name: 'Neon Purple', bg: 'bg-[#7C3AED]', text: 'text-white', surface: 'from-[#1D113D] to-[#111936]' },
  { name: 'Electric Blue', bg: 'bg-[#3B82F6]', text: 'text-white', surface: 'from-[#101C3D] to-[#171238]' },
  { name: 'Cyan Glow', bg: 'bg-[#0891B2]', text: 'text-white', surface: 'from-[#0D2136] to-[#141236]' },
];

export function CustomCodeSection() {
  const [activeTab, setActiveTab] = useState<CodeTab>('html');
  const [typedLength, setTypedLength] = useState(CODE_SNIPPETS.html.code.length);
  const [isTyping, setIsTyping] = useState(false);
  const [accentIdx, setAccentIdx] = useState(0);
  const [previewCount, setPreviewCount] = useState(1);

  const fullCode = CODE_SNIPPETS[activeTab].code;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedLength(fullCode.length);
      setIsTyping(false);
      return;
    }

    setTypedLength(0);
    setIsTyping(true);
    let current = 0;
    const timer = window.setInterval(() => {
      current += 4;
      if (current >= fullCode.length) {
        setTypedLength(fullCode.length);
        setIsTyping(false);
        window.clearInterval(timer);
      } else {
        setTypedLength(current);
      }
    }, 18);

    return () => window.clearInterval(timer);
  }, [activeTab, fullCode]);

  const replayTyping = () => {
    setTypedLength(0);
    setIsTyping(true);
    let current = 0;
    const timer = window.setInterval(() => {
      current += 4;
      if (current >= fullCode.length) {
        setTypedLength(fullCode.length);
        setIsTyping(false);
        window.clearInterval(timer);
      } else {
        setTypedLength(current);
      }
    }, 18);
  };

  const currentAccent = ACCENT_OPTIONS[accentIdx];

  return (
    <section
      id="custom-coding"
      className="relative overflow-hidden border-y border-white/10 bg-[#120929] py-20 text-white sm:py-28"
    >
      <CodingBackdrop variant="code" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-wide text-[#22D3EE]">
              Custom Coding &amp; Scratch Development
            </p>
            <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built From Scratch. Designed With Purpose.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              &ldquo;I don&apos;t just customize templates. I love creating unique digital experiences through clean code and creative problem-solving.&rdquo;
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-slate-200">
              {CAPABILITIES.map((cap) => (
                <div key={cap} className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 shrink-0 text-[#22D3EE]" aria-hidden="true" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Split-Screen Interactive Code Editor & Live Preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-white/15 bg-[#090D1C] shadow-2xl lg:grid-cols-12"
        >
          {/* Left: Code Editor */}
          <div className="flex flex-col border-b border-white/10 lg:col-span-7 lg:border-b-0 lg:border-r">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#121630] px-4 py-3">
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Code files">
                {(['html', 'css', 'js'] as CodeTab[]).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-colors cursor-pointer ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {CODE_SNIPPETS[tab].filename}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={replayTyping}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-colors hover:bg-white/10 cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Replay Typing</span>
              </button>
            </div>

            <div className="flex-1 p-5 sm:p-6">
              <pre className="overflow-x-auto font-mono text-xs leading-6 text-cyan-200 sm:text-sm">
                <code>
                  {fullCode.slice(0, typedLength)}
                  {isTyping && <span className="inline-block h-4 w-2 animate-pulse bg-[#22D3EE] align-middle" />}
                </code>
              </pre>
            </div>
          </div>

          {/* Right: Interactive Live Preview */}
          <div className="flex flex-col justify-between bg-[#11172E] p-6 text-white lg:col-span-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#22D3EE]">
                <LayoutGrid className="h-4 w-4" aria-hidden="true" />
                <span>Interactive Output Preview</span>
              </div>
              <span className="font-mono text-[11px] text-slate-400 tabular-nums">
                Clicks: {previewCount}
              </span>
            </div>

            <div
              className={`my-5 rounded-2xl border border-white/15 bg-gradient-to-br ${currentAccent.surface} p-6 shadow-sm transition-all duration-300`}
            >
              <p className="text-xs font-semibold text-[#22D3EE]">Custom Built · 2026</p>
              <h3 className="font-display mt-2 text-xl font-bold text-white">
                Clean Code Meets Creative UI
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Crafted from scratch with semantic HTML5, modern CSS depth, and responsive JavaScript interactions.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setAccentIdx((prev) => (prev + 1) % ACCENT_OPTIONS.length);
                    setPreviewCount((c) => c + 1);
                  }}
                  className={`inline-flex min-h-[40px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm transition-transform active:scale-95 cursor-pointer ${currentAccent.bg} ${currentAccent.text}`}
                >
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Switch Accent ({currentAccent.name})</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-[#22D3EE]" aria-hidden="true" />
                Zero template bloat
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#A855F7]" aria-hidden="true" />
                GPU-smooth motion
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
