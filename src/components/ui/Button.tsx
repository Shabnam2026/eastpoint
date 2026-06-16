import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'a' | 'button';
};

export function Button({ children, className = '', as, ...props }: ButtonProps) {
  const baseClass = `inline-flex justify-center items-center gap-2 font-label font-medium text-[0.78rem] tracking-[0.22em] uppercase leading-none px-[1.9em] py-[1.15em] border border-transparent rounded-[1px] cursor-pointer bg-gold text-navy transition-all duration-300 hover:bg-gold-light hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${className}`;

  if (as === 'button' || !props.href) {
    return (
      <button className={baseClass} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }

  return (
    <a className={baseClass} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  );
}
