import { useState } from 'react';
import { Layers } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({ src, alt, className = '', fallbackTitle }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#161030] via-[#1C1440] to-[#0F172A] p-6 text-center text-[#F8FAFC] ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#22D3EE] shadow-sm">
          <Layers className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="font-display text-base font-semibold">{fallbackTitle || alt}</p>
        <p className="mt-1 text-xs text-slate-300">Preview image placeholder</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
