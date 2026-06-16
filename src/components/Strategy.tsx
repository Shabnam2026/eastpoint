import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';
import { GitBranch, Shield, TrendingUp, Layers, ArrowLeftRight, RefreshCw, Package, BarChart3 } from 'lucide-react';

export function Strategy() {
  return (
    <>
      {/* 1. Header (Dark) */}
      <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-navy text-linen" id="strategy">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[clamp(2rem,6vw,5.5rem)] items-start mb-[clamp(1rem,3vw,3rem)]">
            <Reveal>
              <Eyebrow>Investment Strategy</Eyebrow>
              <h2 className="font-display font-medium text-[clamp(2.75rem,calc(1.3rem+5.4vw),5rem)] leading-[1.06] tracking-[-0.005em] max-w-[16ch] m-0 text-balance">
                Hybrid Equity. <em className="text-gold italic">Private Asset Yield.</em> Built for the situations between PE and PC.
              </h2>
            </Reveal>
            <div className="flex flex-col gap-6 lg:pt-8">
              <Reveal delay={0.1}>
                <p className="font-body text-[clamp(1.0625rem,calc(1rem+0.3vw),1.1875rem)] leading-[1.65] text-linen/65 m-0">
                  Eastpoint acquires assets, then partners with best-in-class operators and servicers
                  to drive recovery and value creation across Southeast Asia.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-body text-base leading-[1.65] text-linen/65 m-0">
                  The firm is neither private equity nor private credit. From PE, it takes
                  active-management discipline and a return profile that targets PE-quantum outcomes.
                  From PC, it takes senior, secured positions and cash-flow-led returns. The
                  combination is <span className="font-display italic text-[1.08em] text-gold">Hybrid Equity</span>, the tool, deployed
                  in pursuit of <span className="font-display italic text-[1.08em] text-gold">Private Asset Yield</span>, the strategy.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Structures (Light) */}
      <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-linen text-navy">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          <Reveal><p className="font-display italic font-medium text-[clamp(1.5rem,1rem+1.6vw,2.1rem)] text-gold leading-[1.2] m-0">Three structures. One discipline.</p></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-[clamp(2rem,4vw,3.5rem)] mb-[clamp(2rem,4vw,3rem)] border-y border-navy/15">
            {['Preferred equity', 'Selectively JV equity', 'Ordinary equity'].map((title, i) => (
              <Reveal key={title} delay={i * 0.1} className={`font-display font-medium text-[clamp(1.5rem,1rem+1.6vw,2.25rem)] py-6 md:py-8 md:pr-8 ${i === 0 ? '' : 'border-t md:border-t-0 md:border-l border-navy/15 md:pl-8'}`}>
                {title}
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}><p className="font-body text-[0.9375rem] text-navy/70 tracking-[0.01em] m-0">Always senior in substance, structured to the situation.</p></Reveal>
        </div>
      </section>

      {/* 3. Active management (Dark) */}
      <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-navy text-linen">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-[clamp(2rem,5vw,5rem)] items-start">
            <Reveal><p className="font-display italic font-medium text-[clamp(1.5rem,1rem+1.6vw,2.1rem)] text-gold-light leading-[1.2] m-0">Active management.<br/>Expert servicers on the ground.</p></Reveal>
            <div className="flex flex-col gap-6">
              <Reveal delay={0.1}>
                <p className="font-body text-base leading-[1.65] text-linen/65 m-0">
                  Eastpoint underwrites and structures every position, then works alongside
                  best-in-class operators and servicers, the expert boots on the ground, who manage
                  the asset day-to-day. The combination protects the firm's position throughout the
                  hold and drives the operational improvement that converts a good asset into a
                  great return.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-body text-base leading-[1.65] text-linen/65 m-0">
                  This active-management discipline is part of how Eastpoint mitigates downside risk
                  and generates alpha. It is what separates Private Asset Yield from a passive credit
                  investment. The firm is engaged from origination to exit, not only at the points of
                  capital deployment and realisation.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Situations Grid (Light) */}
      <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-linen text-navy">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          <Reveal><p className="font-display italic font-medium text-[clamp(1.5rem,1rem+1.6vw,2.1rem)] text-gold leading-[1.2] m-0">Where flexible capital meets a real situation.</p></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/15 mt-[clamp(2.5rem,5vw,4rem)] border border-navy/15">
            {[
              { icon: GitBranch, title: 'Restructuring' },
              { icon: Shield, title: 'White-knight financings' },
              { icon: TrendingUp, title: 'Transition and development capital' },
              { icon: Layers, title: 'Acquisition and growth capital' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="bg-linen p-6 lg:p-8 flex flex-col gap-6 min-h-[190px]">
                <item.icon className="text-gold w-[30px] h-[30px]" strokeWidth={1.25} />
                <h3 className="font-display font-medium text-[clamp(1.25rem,1rem+0.7vw,1.6rem)] leading-[1.15] mt-auto text-navy text-balance m-0">{item.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Exits (Dark) */}
      <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-navy text-linen">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          <Reveal><p className="font-display italic font-medium text-[clamp(1.5rem,1rem+1.6vw,2.1rem)] text-gold-light leading-[1.2] m-0">Designed-in exits. Multiple pathways.</p></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-linen/15 mt-[clamp(2.5rem,5vw,4rem)] mb-[clamp(2rem,4vw,3.5rem)] border border-linen/15">
            {[
              { icon: ArrowLeftRight, title: 'Trade sale' },
              { icon: RefreshCw, title: 'Refinancing or buy-back' },
              { icon: Package, title: 'Asset disposal' },
              { icon: BarChart3, title: 'Listing' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="bg-navy p-6 lg:p-8 flex flex-col gap-6 min-h-[190px]">
                <item.icon className="text-gold w-[30px] h-[30px]" strokeWidth={1.25} />
                <h3 className="font-display font-medium text-[clamp(1.25rem,1rem+0.7vw,1.6rem)] leading-[1.15] mt-auto text-linen m-0">{item.title}</h3>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}><p className="font-body text-[0.9375rem] text-linen/65 tracking-[0.01em] m-0">Base-case returns come through cash yield during the hold, so exit is upside rather than requirement.</p></Reveal>
        </div>
      </section>

      {/* 6. Where we focus (Light) */}
      <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-linen text-navy overflow-hidden">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">
            <Reveal>
              <h3 className="font-display font-medium text-[max(2rem,calc(1.2rem+3vw))] leading-[1.18] text-navy max-w-[16ch] m-0 text-balance">
                Real-economy assets and businesses across <em className="text-gold italic">Malaysia and the wider Southeast Asia region.</em>
              </h3>
            </Reveal>
            <Reveal delay={0.2} className="relative aspect-[4/3.2] rounded-[2px] overflow-hidden border border-navy/15 isolate group bg-linen">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-[50%_32%] transition-transform duration-[1.2s] group-hover:scale-105" 
                style={{
                  backgroundImage: "url('/strategy.jpg')",
                  filter: "grayscale(0.7) saturate(0.6) brightness(0.95)"
                }}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-linen/30 to-linen/70 mix-blend-multiply" />
              <div className="absolute inset-0 z-20 bg-gradient-to-b from-linen/20 to-linen/60" />
              <svg className="absolute inset-0 z-30 w-full h-full" viewBox="0 0 400 320" fill="none" preserveAspectRatio="xMidYMid slice">
                <g stroke="#B48C46" strokeWidth={0.6} opacity={0.6} fill="none">
                  <path d="M40 90 C 120 60, 220 120, 360 80" />
                  <path d="M20 150 C 140 130, 250 190, 380 150" />
                  <path d="M50 220 C 150 200, 240 250, 360 220" />
                  <path d="M180 30 C 160 120, 210 200, 190 300" />
                  <path d="M280 40 C 260 130, 300 220, 280 300" />
                </g>
                <g fill="#B48C46">
                  <circle cx="150" cy="170" r="2.5" />
                  <circle cx="240" cy="120" r="2.5" />
                  <circle cx="300" cy="210" r="2.5" />
                  <circle cx="110" cy="230" r="2.5" />
                </g>
                <g fill="none" stroke="#1A2954" strokeWidth={1}>
                  <circle cx="205" cy="165" r="3.4" fill="#1A2954" />
                  <circle cx="205" cy="165" r="9" />
                </g>
              </svg>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
