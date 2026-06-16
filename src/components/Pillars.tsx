import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';

export function Pillars() {
  return (
    <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-linen text-navy" id="advantage">
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="mb-[clamp(3rem,5vw,5rem)]">
            <Eyebrow>The Discipline</Eyebrow>
            <h2 className="font-display font-medium text-[clamp(2.75rem,calc(1.3rem+5.4vw),5rem)] leading-[1.06] tracking-[-0.005em] max-w-[22ch] m-0">
              What every Eastpoint position has in <em className="text-gold italic">common</em>.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 md:border-t border-navy/15 pt-8 md:pt-0">
          <Reveal delay={0} className="md:border-l-0 md:pl-0 border-t md:border-t-0 border-navy/15 pt-8 md:pt-12 md:pr-8 flex flex-col gap-6">
            <span className="font-display font-medium text-[clamp(1.75rem,calc(1.2rem+1.8vw),2.5rem)] leading-none text-gold tabular-nums">01</span>
            <h3 className="font-display font-medium text-[clamp(1.5rem,calc(1.1rem+1.4vw),2.125rem)] leading-[1.15] m-0">Real assets</h3>
            <p className="font-body text-base leading-[1.65] text-navy/70 m-0">Tangible assets we own, control, and can liquidate to manage downside risk.</p>
          </Reveal>
          
          <Reveal delay={0.1} className="md:border-l border-navy/15 pt-8 md:pt-12 md:px-8 border-t md:border-t-0 flex flex-col gap-6">
            <span className="font-display font-medium text-[clamp(1.75rem,calc(1.2rem+1.8vw),2.5rem)] leading-none text-gold tabular-nums">02</span>
            <h3 className="font-display font-medium text-[clamp(1.5rem,calc(1.1rem+1.4vw),2.125rem)] leading-[1.15] m-0">Cash generation</h3>
            <p className="font-body text-base leading-[1.65] text-navy/70 m-0">Assets that already produce recurring or contractual cash.</p>
          </Reveal>
          
          <Reveal delay={0.2} className="md:border-l border-navy/15 pt-8 md:pt-12 md:pl-8 border-t md:border-t-0 flex flex-col gap-6">
            <span className="font-display font-medium text-[clamp(1.75rem,calc(1.2rem+1.8vw),2.5rem)] leading-none text-gold tabular-nums">03</span>
            <h3 className="font-display font-medium text-[clamp(1.5rem,calc(1.1rem+1.4vw),2.125rem)] leading-[1.15] m-0">Actively managed</h3>
            <p className="font-body text-base leading-[1.65] text-navy/70 m-0">Every position is structured to preserve capital first, with active management generating alpha.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
