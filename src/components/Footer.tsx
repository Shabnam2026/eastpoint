import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-navy py-[clamp(3rem,5vw,4.5rem)] text-linen/65">
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.4fr] gap-[clamp(2rem,5vw,4rem)] items-start">
          <Link to="/" className="inline-flex items-center gap-3 no-underline">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="block flex-none">
              <rect x="1.25" y="1.25" width="45.5" height="45.5" rx="1" stroke="#B48C46" strokeWidth={1.5}></rect>
              <rect x="11" y="15.5" width="13" height="1.8" fill="#B48C46"></rect>
              <rect x="11" y="23.1" width="13" height="1.8" fill="#B48C46"></rect>
              <rect x="11" y="30.7" width="9.5" height="1.8" fill="#B48C46"></rect>
              <path d="M28.5 16.5L37.5 24L28.5 31.5V16.5Z" fill="#B48C46"></path>
            </svg>
            <span className="flex flex-col items-center text-center leading-none">
              <span className="font-display font-semibold text-[1.32rem] tracking-[0.04em] text-linen">EASTPOINT</span>
              <span className="font-label font-normal text-[0.54rem] tracking-[0.42em] uppercase text-linen/65 mt-[0.45em] indent-[0.2em]">Kapital</span>
            </span>
          </Link>
          
          <div>
            <p className="font-body text-[0.78rem] leading-[1.7] max-w-[60ch] mb-4 mt-0">
              Eastpoint Advisors Sdn Bhd (Company No. 202501033253) is registered with the Securities Commission Malaysia as a Private Equity Management Corporation (PEMC). Registration No. VCPE/0147/2026.
            </p>
            <p className="font-body text-[0.78rem] leading-[1.7] max-w-[60ch] m-0">
              This website is for information only and does not constitute an offer or solicitation. Forward-looking statements are subject to uncertainty.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center gap-6 mt-[clamp(2.5rem,4vw,3.5rem)] pt-8 border-t border-linen/15">
          <div className="flex flex-wrap gap-8">
            {['Privacy Policy', 'Terms of Use', 'Regulatory Disclosures'].map(link => (
              <a key={link} href="#" className="font-label text-[0.68rem] tracking-[0.14em] uppercase text-linen/65 transition-colors hover:text-linen no-underline">
                {link}
              </a>
            ))}
          </div>
          <span className="font-label text-[0.68rem] tracking-[0.14em] uppercase text-linen/65">© 2026 Eastpoint Kapital</span>
        </div>
      </div>
    </footer>
  );
}
