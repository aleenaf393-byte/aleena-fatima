import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Code2, MonitorSmartphone, Palette, ShieldCheck } from 'lucide-react';
import { FAQS, REASONS_TO_WORK } from '../data/portfolioData';
import { CodingBackdrop } from './CodingBackdrop';

const REASON_ICONS = [ShieldCheck, Palette, MonitorSmartphone, Code2];

export function WhyAndFaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-white/10 bg-[#0A1124] py-20 sm:py-28"
    >
      <CodingBackdrop variant="code" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#C084FC]">Why Work With Me</p>
          <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Build Something Amazing Together
          </h2>
        </div>

        {/* 4 Reasons Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS_TO_WORK.map((reason, idx) => {
            const Icon = REASON_ICONS[idx % REASON_ICONS.length];
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-white/12 bg-[#121B36]/90 p-6 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#22D3EE]/50"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] text-white"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-base font-bold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold tracking-wide text-[#22D3EE]">Common Questions</p>
            <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Frequently Asked Questions
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Quick answers about my process, custom coding, WordPress &amp; Elementor builds, and how we can kick off your website.
            </p>
          </div>

          <div className="space-y-3 lg:col-span-8">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                    isOpen
                      ? 'border-[#22D3EE]/45 bg-[#131C3A] shadow-md'
                      : 'border-white/12 bg-[#111830]/90 hover:border-[#A855F7]/45'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-panel`}
                    id={`${faq.id}-button`}
                    onClick={() => toggleFaq(faq.id)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                  >
                    <span className="font-display text-base font-bold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#22D3EE] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${faq.id}-panel`}
                        role="region"
                        aria-labelledby={`${faq.id}-button`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-slate-300">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
