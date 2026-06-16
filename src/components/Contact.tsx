import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';
import { Button } from './ui/Button';
import { Mail } from 'lucide-react';
import { useBriefing } from '../context/BriefingContext';

export function Contact() {
  const { openModal } = useBriefing();

  return (
    <>
      <section className="relative pt-[clamp(4rem,2rem+9vw,8rem)] pb-[clamp(3rem,4vw,6rem)] bg-navy text-linen" id="contact">
        <div className="absolute inset-0 z-0 opacity-50 overflow-hidden isolate object-cover bg-navy">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-[center_10%]" 
            style={{
              backgroundImage: "url('/contact.jpg')",
              filter: "grayscale(0.85) saturate(0.55) brightness(0.82) contrast(1.04)"
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/60 to-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-navy/90 to-transparent" />
        </div>

        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <Reveal className="flex flex-col">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="font-display font-medium text-[clamp(2.75rem,calc(1.3rem+5.4vw),5rem)] leading-[1.06] tracking-[-0.005em] m-0">
              Start a <em className="text-gold italic">conversation.</em>
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(4rem,2rem+9vw,8rem)] bg-linen text-navy">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2.5rem,6vw,6rem)]">
            <Reveal>
              <p className="font-label text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-6 m-0">Head Office · Kuala Lumpur</p>
              <p className="font-display font-medium text-[clamp(1.35rem,calc(1rem+1.2vw),1.85rem)] leading-[1.35] text-navy mb-6 max-w-[24ch] m-0">
                3A-3A-03 Corporate Tower 3A, Pavilion Damansara Heights, 50490 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia.
              </p>
              <p className="font-body text-[0.9375rem] text-navy/70 tracking-[0.04em] m-0">Tel 03-2099 1188<span className="opacity-50 mx-2">·</span>Fax 03-2099 1189</p>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="font-label text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-6 m-0">Reach a principal directly</p>
              <div className="flex flex-col gap-1 mb-8">
                <span className="font-display font-medium text-[1.4rem] text-navy">Ee Keen Wong</span>
                <a href="mailto:ewong@eastpointkapital.com" className="font-body text-[0.9375rem] text-gold inline-flex items-center gap-2 w-fit transition-colors hover:text-gold-light no-underline">
                  <Mail className="w-[14px] h-[14px]" strokeWidth={1.4} />
                  ewong@eastpointkapital.com
                </a>
              </div>
              <div className="flex flex-col gap-1 mb-8">
                <span className="font-display font-medium text-[1.4rem] text-navy">Russell Boyd</span>
                <a href="mailto:rboyd@eastpointkapital.com" className="font-body text-[0.9375rem] text-gold inline-flex items-center gap-2 w-fit transition-colors hover:text-gold-light no-underline">
                  <Mail className="w-[14px] h-[14px]" strokeWidth={1.4} />
                  rboyd@eastpointkapital.com
                </a>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.2} className="mt-[clamp(2.5rem,5vw,4rem)] pt-[clamp(2.5rem,5vw,4rem)] border-t border-navy/15">
            <Button as="button" onClick={openModal}>
              Request the Investor Briefing <span className="text-[1.1em] translate-y-[0.06em]">→</span>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
