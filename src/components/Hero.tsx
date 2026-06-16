import { motion } from 'motion/react';
import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';
import { Button } from './ui/Button';
import { useBriefing } from '../context/BriefingContext';

export function Hero() {
  const { openModal } = useBriefing();
  
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden bg-navy text-linen" id="top">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[#0f1830] bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://i.ibb.co/G4Xxv1Q1/view-world-monument-celebrate-world-heritage-day-1.jpg')"
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-transparent" />
        <div className="absolute -top-[12%] -right-[6%] w-[46vw] h-[46vw] max-w-[720px] max-h-[720px] hero-glow pointer-events-none" />
        <div className="absolute top-0 right-0 w-[42%] h-[60%] arch-grid pointer-events-none" style={{ maskImage: 'radial-gradient(120% 100% at 90% 0%, #000 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(120% 100% at 90% 0%, #000 0%, transparent 70%)' }} />
      </div>

      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="max-w-[760px]">
          <Reveal>
            <Eyebrow>Founder-led&nbsp;&nbsp;·&nbsp;&nbsp;Kuala Lumpur</Eyebrow>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="font-display font-medium text-[clamp(3.1rem,calc(1.1rem+7.4vw),7rem)] leading-[0.98] tracking-[-0.012em] text-balance mb-12 m-0">
              <span className="block">Asset-backed</span>
              <span className="block"><em className="text-gold not-italic italic">Private Asset Yield</em></span>
              <span className="block">capital for Southeast</span>
              <span className="block">Asia's mid-market.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="font-body font-normal text-[clamp(1.0625rem,calc(0.95rem+0.4vw),1.25rem)] leading-relaxed text-linen/65 max-w-[48ch] mb-12 text-balance m-0">
              Eastpoint Kapital is a founder-led private capital platform headquartered in
              Kuala Lumpur. We invest in real, cash-generative assets, and in the situations
              that conventional capital overlooks.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <Button as="button" onClick={openModal}>
              Request the Investor Briefing <span className="text-[1.1em] translate-y-[0.06em]">→</span>
            </Button>
          </Reveal>
        </div>
      </div>

      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3">
        <span className="font-label text-[0.58rem] tracking-[0.3em] uppercase text-linen/65">Scroll</span>
        <div className="relative w-px h-[54px] bg-linen/15 overflow-hidden">
          <motion.div 
            className="absolute left-0 top-0 w-px h-[45%] bg-gradient-to-b from-transparent to-gold"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
