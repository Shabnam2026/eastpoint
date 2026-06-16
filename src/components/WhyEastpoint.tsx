import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';

export function WhyEastpoint() {
  return (
    <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-navy text-linen" id="advantage">
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.15fr] gap-[clamp(2.5rem,6vw,6rem)] items-start">
          
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Why Eastpoint</Eyebrow>
              <h2 className="font-display font-medium text-[clamp(2.75rem,calc(1.3rem+5.4vw),5rem)] leading-[1.06] tracking-[-0.005em] m-0">
                Equity-like upside. <em className="text-gold italic">Senior-secured downside discipline.</em>
              </h2>
              <div className="mt-[clamp(3rem,3vw,4.5rem)] aspect-[4/3.4] relative rounded-[2px] overflow-hidden border border-linen/15 bg-navy isolate group">
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-[50%_32%] transition-transform duration-[1.2s] group-hover:scale-105" 
                  style={{
                    backgroundImage: "url('/why.jpg')",
                    filter: "grayscale(0.85) saturate(0.55) brightness(0.82) contrast(1.04)"
                  }}
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/60 to-navy/80 mix-blend-multiply" />
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-navy/50 to-navy/80" />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:pt-8">
            <Reveal delay={0.1}>
              <p className="font-body text-[clamp(1.0625rem,calc(1rem+0.3vw),1.1875rem)] leading-[1.65] text-linen/65 m-0">
                Most managers force a choice. Private equity offers high returns but long lock-ups,
                a punishing J-curve, and exit risk. Private credit offers visible cash flow but
                pedestrian returns. Eastpoint refuses the trade-off, built on a hybrid structure
                that takes the active-management discipline and return profile of PE, and the
                senior-secured recourse and cash-flow-led returns of PC.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-[clamp(1.0625rem,calc(1rem+0.3vw),1.1875rem)] leading-[1.65] text-linen/65 m-0">
                Returns are earned primarily through asset cash yields, from contractual or
                recurring cash flows, with senior structural protection on the downside. Exits are
                upside, not requirement. This is what we mean by{' '}
                <span className="font-display italic text-[1.08em] text-gold">Private Asset Yield</span>, and why we believe it is the
                most institutionally responsible way to invest in Southeast Asia today.
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
