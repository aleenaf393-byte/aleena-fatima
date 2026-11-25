import { useEffect, useState } from 'react';
import {
  ArrowUp,
  Check,
  Copy,
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
  Send,
  User,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { CodingBackdrop } from './CodingBackdrop';
import { MagneticButton } from './MagneticButton';

interface ContactFooterSectionProps {
  prefilledSubject: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactFooterSection({ prefilledSubject }: ContactFooterSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [validatedReady, setValidatedReady] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setSubject(prefilledSubject);
      setValidatedReady(false);
    }
  }, [prefilledSubject]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!subject.trim() || subject.trim().length < 3) {
      nextErrors.subject = 'Please add a short subject for your project.';
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = 'Please share a brief message (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setValidatedReady(false);
      return;
    }
    setValidatedReady(true);
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    subject.trim() || 'Website Project Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Aleena,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
  )}`;

  const whatsappHref = `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
    `Hi Aleena! My name is ${name.trim() || 'a prospective client'} (${
      email.trim() || 'via portfolio'
    }). Subject: ${subject.trim() || 'Website Project'}.\n\n${message.trim()}`
  )}`;

  const handleCopySummary = async () => {
    const summary = `To: ${PROFILE.email}\nSubject: ${subject}\nFrom: ${name} (${email})\n\n${message}`;
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/12 bg-[#110A24] pt-20 pb-10 sm:pt-28"
    >
      <CodingBackdrop variant="particles" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Details & Actions */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#22D3EE]">Contact Me</p>
              <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Have a Project in Mind? Let&apos;s Create Something Great!
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                I&apos;m always excited to work on creative ideas and build beautiful digital experiences. Let&apos;s discuss your next project.
              </p>

              {/* Contact Info Block */}
              <div className="mt-8 space-y-4 rounded-3xl border border-white/12 bg-[#181033]/90 p-6 shadow-lg shadow-black/25">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] text-white">
                    <User className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Name</p>
                    <p className="font-display text-sm font-bold text-white">{PROFILE.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22D3EE]/15 text-[#22D3EE]">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-400">Email</p>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="block truncate font-display text-sm font-bold text-white transition-colors hover:text-[#22D3EE]"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A855F7]/20 text-[#C084FC]">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Phone / WhatsApp</p>
                    <a
                      href={`tel:${PROFILE.phone}`}
                      className="font-display text-sm font-bold text-white transition-colors hover:text-[#22D3EE] tabular-nums"
                    >
                      {PROFILE.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <MagneticButton
                  href={`https://wa.me/${PROFILE.whatsappNumber}`}
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:from-[#9333EA] hover:to-[#22D3EE] whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </MagneticButton>

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#22D3EE]/60 hover:bg-white/10 whitespace-nowrap shrink-0"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>

            {/* Editable Social Links */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Social Profiles (Editable URLs)
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-200">
                {PROFILE.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-[#22D3EE]"
                  >
                    <span>{social.label}</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-white/12 bg-[#181033]/95 p-6 shadow-xl shadow-black/30 backdrop-blur-sm sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-white">
                Send a Project Inquiry
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Complete the fields below to validate your inquiry and send directly via your email app or WhatsApp.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-200">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="e.g. Sarah Ahmed"
                    aria-invalid={Boolean(errors.name)}
                    className={`mt-1.5 w-full rounded-xl border bg-[#0E0921] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:bg-[#140E2E] ${
                      errors.name ? 'border-rose-400' : 'border-white/15'
                    }`}
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-rose-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-200">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className={`mt-1.5 w-full rounded-xl border bg-[#0E0921] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:bg-[#140E2E] ${
                      errors.email ? 'border-rose-400' : 'border-white/15'
                    }`}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-rose-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-200">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
                  }}
                  placeholder="e.g. Custom WordPress Website or Landing Page"
                  aria-invalid={Boolean(errors.subject)}
                  className={`mt-1.5 w-full rounded-xl border bg-[#0E0921] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:bg-[#140E2E] ${
                    errors.subject ? 'border-rose-400' : 'border-white/15'
                  }`}
                />
                {errors.subject && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-rose-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-200">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder="Tell me about your website goals, pages needed, and timeline..."
                  aria-invalid={Boolean(errors.message)}
                  className={`mt-1.5 w-full rounded-xl border bg-[#0E0921] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:bg-[#140E2E] ${
                    errors.message ? 'border-rose-400' : 'border-white/15'
                  }`}
                />
                {errors.message && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-rose-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#3B82F6]/20 transition-all duration-200 hover:from-[#9333EA] hover:to-[#22D3EE] cursor-pointer sm:w-auto"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </div>

              {/* Transparent Validation Confirmation & Real Dispatch Options */}
              {validatedReady && (
                <div
                  role="status"
                  className="mt-6 rounded-2xl border border-[#22D3EE]/35 bg-[#0E1630] p-5"
                >
                  <p className="font-display text-sm font-bold text-[#22D3EE]">
                    Your inquiry is validated and ready to send
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Because this static portfolio does not run a mail server, choose one of the direct channels below so your message reaches Aleena immediately:
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <a
                      href={mailtoHref}
                      className="inline-flex min-h-[40px] items-center gap-2 rounded-xl bg-[#7C3AED] px-4 py-2 text-xs font-semibold text-white hover:bg-[#9333EA]"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Open in Email App</span>
                    </a>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-2 rounded-xl bg-[#3B82F6] px-4 py-2 text-xs font-semibold text-white hover:bg-[#22D3EE] hover:text-[#090E1A]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/15 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#22D3EE]" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copy Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-sm text-slate-300 sm:text-left">
            Designed &amp; Developed with Creativity by Aleena © 2026. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#22D3EE]/60 hover:bg-white/10 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
