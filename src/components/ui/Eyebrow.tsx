import { ReactNode } from 'react';

export function Eyebrow({ children, className = '', align = 'left', muted = false }: { children: ReactNode, className?: string, align?: 'left' | 'center', muted?: boolean }) {
  const textColor = muted ? 'text-inherit opacity-70' : 'text-gold';
  const borderColor = muted ? 'border-l-current' : 'border-l-gold';
  return (
    <p className={`inline-flex items-center gap-2 font-label font-normal text-[0.72rem] tracking-[0.3em] uppercase leading-[1.4] mb-3 md:mb-4 ${align === 'center' ? 'justify-center' : ''} ${textColor} ${className}`}>
      <span className={`flex-none w-0 h-0 border-y-[0.3em] border-y-transparent border-l-[0.46em] ${borderColor} translate-y-[0.02em]`}></span>
      {children}
    </p>
  );
}
