import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useBriefing } from '../context/BriefingContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useBriefing();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Eastpoint Advantage', to: '/#advantage' },
    { label: 'Strategy', to: '/strategy' },
    { label: 'Criteria', to: '/criteria' },
    { label: 'Mission & Values', to: '/mission-and-values' },
    { label: 'Team', to: '/team' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-[0.4s] flex items-center ${isScrolled ? 'bg-navy/72 backdrop-blur-md shadow-[0_1px_0_rgba(247,244,238,0.14)]' : ''}`}>
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between gap-8">
          <NavLink to="/" className="inline-flex items-center gap-3 no-underline">
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="block flex-none">
              <rect x="1.25" y="1.25" width="45.5" height="45.5" rx="1" stroke="#B48C46" strokeWidth="1.5"></rect>
              <rect x="11" y="15.5" width="13" height="1.8" fill="#B48C46"></rect>
              <rect x="11" y="23.1" width="13" height="1.8" fill="#B48C46"></rect>
              <rect x="11" y="30.7" width="9.5" height="1.8" fill="#B48C46"></rect>
              <path d="M28.5 16.5L37.5 24L28.5 31.5V16.5Z" fill="#B48C46"></path>
            </svg>
            <span className="flex flex-col items-center text-center leading-none">
              <span className="font-display font-semibold text-[1.32rem] tracking-[0.04em] text-linen">EASTPOINT</span>
              <span className="font-label font-normal text-[0.54rem] tracking-[0.42em] uppercase text-linen/65 mt-[0.45em] indent-[0.2em]">Kapital</span>
            </span>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map(({ label, to }) => {
              const pathname = to.split('#')[0] || '/';
              const isActive = location.pathname === pathname;
              return (
                <NavLink key={label} to={to} className="relative font-label text-[0.74rem] font-normal tracking-[0.12em] uppercase text-white py-2 transition-colors duration-300 group">
                  {label}
                  <span className={`absolute left-0 bottom-0 h-px bg-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </NavLink>
              );
            })}
          </nav>

          <button onClick={openModal} className="hidden lg:inline-flex justify-center items-center gap-2 font-label font-medium text-[0.78rem] tracking-[0.22em] uppercase leading-none px-[1.9em] py-[1.15em] border border-transparent rounded-[1px] cursor-pointer bg-gold text-navy transition-all duration-300 hover:bg-gold-light hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            Investor Briefing
          </button>

          <button className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none p-2 z-[120]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`w-6 h-[1.5px] bg-linen transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}></span>
            <span className={`w-6 h-[1.5px] bg-linen transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[1.5px] bg-linen transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[110] bg-navy flex flex-col justify-center gap-6 px-6 md:px-10 transition-opacity duration-[0.4s] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map(({ label, to }) => (
          <NavLink key={label} to={to} onClick={() => setIsMobileMenuOpen(false)} className="font-display font-medium text-[clamp(2rem,8vw,3rem)] text-linen tracking-[0.01em] no-underline">
            {label}
          </NavLink>
        ))}
        <button onClick={() => { setIsMobileMenuOpen(false); openModal(); }} className="inline-flex mt-6 w-fit items-center gap-2 font-label font-medium text-[0.78rem] tracking-[0.22em] uppercase leading-none px-[1.9em] py-[1.15em] border border-transparent rounded-[1px] cursor-pointer bg-gold text-navy transition-all duration-300 hover:bg-gold-light hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
          Investor Briefing
        </button>
      </div>
    </>
  );
}
