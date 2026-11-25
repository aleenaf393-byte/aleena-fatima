import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Globe,
  Layers,
  MonitorSmartphone,
  RefreshCw,
  Rocket,
  X,
} from 'lucide-react';
import { SERVICES, type ServiceItem } from '../data/portfolioData';
import { CodingBackdrop } from './CodingBackdrop';

const SERVICE_ICONS = [Code2, Globe, Layers, MonitorSmartphone, Rocket, RefreshCw];

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectServiceForContact }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleStartInquiry = (serviceTitle: string) => {
    setSelectedService(null);
    onSelectServiceForContact(serviceTitle);
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-white/10 bg-[#140F2D] py-20 sm:py-28"
    >
      <CodingBackdrop variant="code" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#C084FC]">Services I Offer</p>
          <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How I Can Help Your Business Grow
          </h2>
          <p className="mt-3 text-base text-slate-300">
            From hand-coded custom websites to versatile WordPress &amp; Elementor Pro builds, every service is structured around clarity, responsiveness, and craft.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between rounded-3xl border border-white/12 bg-[#1B153B]/90 p-7 shadow-lg shadow-black/25 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1.5 hover:border-[#22D3EE]/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.accentBg} ${service.accentText} transition-transform duration-200 group-hover:scale-105`}
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-medium text-slate-400 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display mt-6 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-7 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#22D3EE] transition-colors hover:text-[#C084FC] cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-[#161030] p-6 text-white shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Close service details"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-xs font-semibold uppercase tracking-wider text-[#22D3EE]">
              Service Scope
            </p>
            <h3 id="service-modal-title" className="font-display mt-2 text-2xl font-bold text-white">
              {selectedService.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {selectedService.shortDescription}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B1021] p-5">
              <h4 className="font-display text-sm font-bold text-white">What&apos;s Included</h4>
              <ul className="mt-3 space-y-2.5">
                {selectedService.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/10 pt-3 text-xs text-slate-400">
                <strong className="text-white">Ideal for:</strong> {selectedService.idealFor}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="min-h-[44px] rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => handleStartInquiry(selectedService.title)}
                className="min-h-[44px] rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] px-5 py-2.5 text-sm font-semibold text-white hover:from-[#9333EA] hover:to-[#22D3EE]"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
