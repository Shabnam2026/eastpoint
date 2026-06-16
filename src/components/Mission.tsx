import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';

export function Mission() {
  return (
    <section className="pt-[clamp(4rem,2rem+9vw,8rem)] pb-[clamp(3rem,4vw,6rem)] bg-navy text-linen" id="mission">
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <Reveal className="flex flex-col items-center">
          <Eyebrow align="center">Mission & Values</Eyebrow>
          <h2 className="max-w-[26ch] mx-auto mb-[clamp(1.5rem,1vw,2rem)] font-display font-medium text-[clamp(2rem,calc(1.2rem+3vw),3.25rem)] leading-[1.18] text-balance m-0">
            Our goal is to generate strong, asset-backed returns through a rigorous,
            downside-first process, applying <em className="text-gold italic">discipline, integrity, and transparency</em>
            {' '}in close partnership with our investors and counterparties.
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="max-w-[46ch] mx-auto mb-[clamp(1.5rem,1vw,2rem)] font-body text-[clamp(1.0625rem,calc(1rem+0.3vw),1.1875rem)] text-linen/65 leading-[1.55]">
            Asymmetric returns: equity upside with asset-backed downside protection.
          </p>
        </Reveal>
        
        <Reveal delay={0.2} direction="none">
          {/* Animated line */}
          <div className="h-[2px] bg-gold/30 mx-auto w-[72px] origin-center relative">
            <div className="absolute inset-0 w-full h-full bg-gold" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
