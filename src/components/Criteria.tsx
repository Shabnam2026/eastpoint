import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';

export function Criteria() {
  return (
    <>
      <section className="pt-[clamp(4rem,2rem+9vw,8rem)] pb-[clamp(3rem,4vw,6rem)] bg-navy text-linen" id="criteria">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          <Reveal>
            <Eyebrow>Investment Criteria</Eyebrow>
            <h2 className="font-display font-medium text-[clamp(2.75rem,calc(1.3rem+5.4vw),5rem)] leading-[1.06] tracking-[-0.005em] m-0">
              What we <em className="text-gold italic">look for.</em>
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-linen text-navy">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="border-t border-navy/15">
            {[
              { label: 'Geography', desc: 'Malaysia and the wider Southeast Asia region.' },
              { label: 'Ticket size', desc: 'Typically up to RM50M per transaction.' },
              { label: 'Real assets', desc: 'Tangible, high-quality assets we can own, control, and actively manage, not paper exposure or financial structures.' },
              { label: 'Cash generation', desc: 'Assets and businesses that already produce recurring or contractual cash, so a meaningful part of the return is earned through the hold, not only at exit.' },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06} className="grid grid-cols-1 md:grid-cols-[minmax(180px,0.7fr)_1.6fr] gap-[clamp(1.5rem,4vw,3.5rem)] items-baseline py-12 border-b border-navy/15">
                <h3 className="font-display font-medium text-[clamp(1.5rem,calc(1.1rem+1.4vw),2.125rem)] leading-[1.15] text-navy m-0">{c.label}</h3>
                <p className="font-body text-base leading-[1.65] text-navy/70 max-w-[56ch] m-0">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-navy text-linen">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Guardrail */}
          <Reveal className="relative px-6 py-[clamp(3.5rem,8vw,6rem)] text-center overflow-hidden border border-navy/15 rounded-[2px] bg-navy isolate">
            <div className="absolute inset-0 z-0 arch-grid pointer-events-none opacity-20" style={{ maskImage: 'radial-gradient(120% 120% at 50% 50%, #000 0%, transparent 78%)', WebkitMaskImage: 'radial-gradient(120% 120% at 50% 50%, #000 0%, transparent 78%)' }} />
            <Eyebrow align="center" className="text-linen/65 mb-8 relative z-10" muted>The three positions we will not take</Eyebrow>
            <div className="relative z-10 flex flex-col gap-6 mt-8">
              {['Leveraged buyouts.', 'Plain-vanilla EBITDA-multiple lending.', 'Deeply subordinated capital.'].map((deny, i) => (
                <p key={i} className="font-display font-medium text-[clamp(1.75rem,1.2rem+2.4vw,3rem)] leading-[1.1] text-linen m-0">
                  {deny}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
