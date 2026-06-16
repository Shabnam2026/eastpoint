import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';
import { Mail } from 'lucide-react';

const TEAM = [
  { initials: 'WEK', name: 'Ee Keen Wong', role: 'Co-Founder & CEO', desc: 'Ee Keen co-founded Eastpoint Kapital and leads the firm\'s strategy and investment activity. He brings over a decade in private equity, private credit, and structured finance, including a period at Crestline Europe (US$18bn AUM) focused on special situations and asset-backed investments. His experience spans specialty finance, real estate, litigation finance, and operating-platform roll-ups across the UK, Europe, and Asia. He is an ICAEW Chartered Accountant and holds an MSc in Taxation Law from Oxford and a BSc in Accounting & Finance from Warwick.', email: 'ewong@eastpointkapital.com' },
  { initials: 'RB', name: 'Russell Boyd', role: 'Co-Founder & CIO', desc: 'Russell co-founded Eastpoint Kapital and leads its investment strategy and execution. He has more than ten years in private equity, credit structuring, and recovery-focused investing across Southeast Asia and Europe, spanning MYR300m of NPL acquisitions, platform M&A, and large-scale corporate transactions. He was previously at a regional special-situations and debt-advisory firm. He holds an MBA from INSEAD and a BSc in Accounting & Finance from LSE.', email: 'rboyd@eastpointkapital.com' },
  { initials: 'GY', name: 'Ginny Yeow', role: 'Chairman', desc: 'Ginny serves as Chairman of Eastpoint Kapital. She brings extensive experience across equity transactions, commercial real estate, and platform investments, and her long-standing network in Malaysian financial and legal markets supports the firm\'s deal sourcing and structuring.' },
  { initials: 'EC', name: 'Elaine Cheng', role: 'Finance & Compliance Manager', desc: 'Elaine oversees the firm\'s finance function and compliance, bringing over a decade of financial expertise and strategic leadership. She began her career in 2014 at Harveston, one of Malaysia\'s leading financial planning firms licensed by Bank Negara Malaysia, before advancing into the public-listed sector as a Corporate Finance Senior Executive managing complex corporate portfolios and financial strategies. She is an ACCA charterholder and holds an MBA from London.' },
];

export function Team() {
  return (
    <>
      <section className="pt-[clamp(4rem,2rem+9vw,8rem)] pb-[clamp(3rem,4vw,6rem)] bg-navy text-linen" id="team">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          <Reveal className="flex flex-wrap justify-between items-end gap-8">
            <div className="flex flex-col">
              <Eyebrow>Team</Eyebrow>
              <h2 className="font-display font-medium text-[clamp(2.75rem,calc(1.3rem+5.4vw),5rem)] leading-[1.06] tracking-[-0.005em] m-0">
                The <em className="text-gold italic">principals.</em>
              </h2>
            </div>
            <span className="font-label text-[0.7rem] tracking-[0.2em] uppercase text-linen/65">Over 30 years of combined experience</span>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-linen text-navy">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(1.25rem,2.5vw,2rem)]">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08} className="flex flex-col gap-6 p-[clamp(1.75rem,1rem+1.8vw,2.75rem)] bg-navy/[0.035] border border-navy/15 rounded-[2px] transition-colors duration-[0.35s] hover:bg-navy/[0.07] group">
                <div className="w-[4.25rem] h-[4.25rem] flex items-center justify-center bg-gold/12 border border-gold/30 rounded-[2px] font-display font-semibold text-[1.32rem] tracking-[0.04em] text-gold-light transition-colors duration-[0.35s] group-hover:border-gold">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-display font-medium text-[clamp(1.5rem,calc(1.1rem+1.4vw),2.125rem)] leading-[1.15] text-navy m-0">{member.name}</h3>
                  <span className="font-label text-[0.68rem] tracking-[0.22em] uppercase text-gold block mt-2">{member.role}</span>
                </div>
                <p className="font-body text-[0.9375rem] leading-[1.65] text-navy/70 m-0 pb-4">{member.desc}</p>
                
                {member.email && (
                  <a href={`mailto:${member.email}`} className="mt-auto inline-flex items-center gap-[0.55em] font-body text-[0.9375rem] text-gold no-underline transition-colors duration-[0.35s] hover:text-gold-light">
                    <Mail className="w-[15px] h-[15px]" strokeWidth={1.4} />
                    {member.email}
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
