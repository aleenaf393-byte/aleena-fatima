import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ExternalLink, Eye, Monitor, Smartphone, X } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';
import { CodingBackdrop } from './CodingBackdrop';
import { SafeImage } from './SafeImage';

interface ProjectsSectionProps {
  onInquireProject: (projectTitle: string) => void;
}

export function ProjectsSection({ onInquireProject }: ProjectsSectionProps) {
  const [detailProject, setDetailProject] = useState<ProjectItem | null>(null);
  const [demoProject, setDemoProject] = useState<ProjectItem | null>(null);
  const [demoViewport, setDemoViewport] = useState<'desktop' | 'mobile'>('desktop');

  const handleLiveDemoClick = (project: ProjectItem) => {
    if (project.liveUrl && project.liveUrl !== '#') {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setDemoViewport('desktop');
    setDemoProject(project);
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-[#0D1526] py-20 sm:py-28">
      <CodingBackdrop variant="particles" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-[#22D3EE]">Featured Projects</p>
            <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Some Things I&apos;ve Built
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Curated website showcase concepts demonstrating layout range across e-commerce, wellness, consultancy, corporate, and landing pages. All images, copy, and URLs are editable placeholders for your live client links.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/12 bg-[#141E36]/95 shadow-lg shadow-black/25 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#A855F7]/50"
            >
              {/* Preview Image with Zoom on Hover */}
              <div className="relative overflow-hidden bg-[#090E1A]">
                <SafeImage
                  src={project.image}
                  alt={`${project.title} showcase mockup`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  fallbackTitle={project.title}
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-medium text-slate-400">{project.category}</p>
                  <h3 className="font-display mt-1.5 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  {/* Unboxed Typographic Tech Metadata */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#22D3EE]">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={tech} className="inline-flex items-center gap-2">
                        <span>{tech}</span>
                        {techIdx < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-500">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    onClick={() => handleLiveDemoClick(project)}
                    className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] px-4 py-2 text-xs font-semibold text-white transition-all hover:from-[#9333EA] hover:to-[#22D3EE] whitespace-nowrap cursor-pointer"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Live Demo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDetailProject(project)}
                    className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#22D3EE]/50 hover:bg-white/10 whitespace-nowrap cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>View Project</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* View Project Details Modal */}
      {detailProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/15 bg-[#121933] p-6 text-white shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setDetailProject(null)}
              aria-label="Close project details"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-xs font-semibold text-[#22D3EE]">{detailProject.category}</p>
            <h3
              id="project-detail-title"
              className="font-display mt-1.5 text-2xl font-bold text-white"
            >
              {detailProject.title}
            </h3>

            <div className="mt-5 overflow-hidden rounded-2xl border border-white/12 bg-[#090E1A]">
              <SafeImage
                src={detailProject.image}
                alt={detailProject.title}
                className="aspect-[16/10] w-full object-cover"
                fallbackTitle={detailProject.title}
              />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              {detailProject.description}
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-[#0B1021] p-5">
              <h4 className="font-display text-sm font-bold text-white">
                Architecture &amp; Layout Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {detailProject.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/10 pt-3 text-xs text-slate-400">
                Editable Showcase Template — replace image, copy, and <code className="rounded bg-white/10 px-1 py-0.5 text-cyan-300">liveUrl</code> in <code className="rounded bg-white/10 px-1 py-0.5 text-cyan-300">src/data/portfolioData.ts</code> with your real project link.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  const p = detailProject;
                  setDetailProject(null);
                  handleLiveDemoClick(p);
                }}
                className="min-h-[44px] rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Open Interactive Demo
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = detailProject.title;
                  setDetailProject(null);
                  onInquireProject(`Inquiry similar to: ${title}`);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="min-h-[44px] rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] px-5 py-2.5 text-sm font-semibold text-white hover:from-[#9333EA] hover:to-[#22D3EE]"
              >
                Request Similar Website
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Live Demo Preview Modal */}
      {demoProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-preview-title"
        >
          <div className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#121933] text-white shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#0D1326] px-5 py-3.5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#22D3EE]">
                  Interactive Concept Demo
                </p>
                <h3 id="demo-preview-title" className="font-display text-base font-bold text-white">
                  {demoProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-xl bg-white/10 p-1">
                  <button
                    type="button"
                    onClick={() => setDemoViewport('desktop')}
                    aria-label="Desktop preview"
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                      demoViewport === 'desktop'
                        ? 'bg-[#3B82F6] text-white shadow-sm'
                        : 'text-slate-300'
                    }`}
                  >
                    <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Desktop</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDemoViewport('mobile')}
                    aria-label="Mobile preview"
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                      demoViewport === 'mobile'
                        ? 'bg-[#3B82F6] text-white shadow-sm'
                        : 'text-slate-300'
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Mobile</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setDemoProject(null)}
                  aria-label="Close live demo preview"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-[#090E1A] p-5 sm:p-8">
              <div
                className={`mx-auto overflow-hidden rounded-2xl border border-white/15 bg-white text-[#1E103C] shadow-lg transition-all duration-300 ${
                  demoViewport === 'mobile' ? 'max-w-[360px]' : 'w-full'
                }`}
                style={{ backgroundColor: demoProject.previewPalette.bg }}
              >
                {/* Simulated Website Header */}
                <div className="flex items-center justify-between border-b border-[#2E1065]/10 bg-white px-5 py-3">
                  <span className="font-display text-sm font-bold text-[#1E103C]">
                    {demoProject.title.split(' ')[0]} Studio
                  </span>
                  <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-[#1E103C]/70">
                    <span>Overview</span>
                    <span>Collections</span>
                    <span>Contact</span>
                  </div>
                </div>

                {/* Simulated Hero */}
                <div className="p-6 sm:p-8">
                  <div
                    className={`grid gap-6 ${
                      demoViewport === 'mobile' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
                    } items-center`}
                  >
                    <div>
                      <span
                        className="inline-block text-xs font-semibold"
                        style={{ color: demoProject.previewPalette.accent }}
                      >
                        {demoProject.technologies.join(' · ')}
                      </span>
                      <h4 className="font-display mt-2 text-2xl font-bold leading-tight text-[#1E103C]">
                        {demoProject.previewPalette.headline}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-[#1E103C]/75">
                        {demoProject.previewPalette.subheadline}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          const title = demoProject.title;
                          setDemoProject(null);
                          onInquireProject(`Project Inquiry: ${title}`);
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-5 inline-flex min-h-[40px] items-center rounded-xl bg-[#2E1065] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#4C1D95]"
                      >
                        {demoProject.previewPalette.ctaText}
                      </button>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-[#2E1065]/10 bg-white shadow-sm">
                      <SafeImage
                        src={demoProject.image}
                        alt={demoProject.title}
                        className="aspect-[4/3] w-full object-cover"
                        fallbackTitle={demoProject.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
