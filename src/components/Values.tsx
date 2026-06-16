import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';

const VALUES = [
  { num: '01', title: 'Capital preservation first', desc: 'Every position is underwritten to the downside before the upside.' },
  { num: '02', title: 'Real-asset conviction', desc: 'We invest behind tangible assets we can own, control, and improve.' },
  { num: '03', title: 'Alignment', desc: 'Long-term partnerships built on transparency and shared interest.' },
  { num: '04', title: 'Discipline', desc: 'A consistent process applied to every transaction.' },
  { num: '05', title: 'Stewardship', desc: 'We actively manage every investment with discipline and integrity, maximizing value while protecting downside risk.' },
];

export function Values() {
  return (
    <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-linen text-navy" id="values">
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
        <Reveal className="mb-[clamp(2rem,4vw,4rem)] flex flex-col">
          <Eyebrow>Principles</Eyebrow>
          <h2 className="font-display font-medium text-[clamp(2.75rem,calc(1.3rem+5.4vw),5rem)] leading-[1.06] tracking-[-0.005em] m-0">
            Five principles. <em className="text-gold italic">Applied to every transaction.</em>
          </h2>
        </Reveal>

        <div className="border-t border-navy/15">
          {VALUES.map((v, i) => (
            <Reveal key={v.num} delay={i * 0.06} className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_minmax(220px,1fr)_1.7fr] gap-[clamp(1.5rem,4vw,3.5rem)] items-baseline py-12 border-b border-navy/15">
              <span className="font-display font-medium text-[clamp(1.4rem,1rem+1.4vw,2rem)] text-gold leading-none tabular-nums truncate">{v.num}</span>
              <h3 className="font-display font-medium text-[clamp(1.5rem,calc(1.1rem+1.4vw),2.125rem)] leading-[1.15] text-navy m-0">{v.title}</h3>
              <p className="font-body text-base leading-[1.65] text-navy/70 max-w-[52ch] col-span-2 md:col-span-1 m-0">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
