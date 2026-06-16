import React, { useEffect, useRef, useState, useCallback, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useBriefing } from '../context/BriefingContext';
import { Eyebrow } from './ui/Eyebrow';

interface FormState {
  name: string;
  email: string;
  firm: string;
  role: string;
  jurisdiction: string;
  investorType: string;
  note: string;
  eligibility: boolean;
}

interface ErrorsState {
  name?: string;
  email?: string;
  firm?: string;
  role?: string;
  jurisdiction?: string;
  investorType?: string;
  eligibility?: string;
}

export function InvestorBriefingModal() {
  const { isOpen, closeModal } = useBriefing();
  const [formState, setFormState] = useState<FormState>({
    name: '', email: '', firm: '', role: '', jurisdiction: '', investorType: '', note: '', eligibility: false
  });
  const [errors, setErrors] = useState<ErrorsState>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    } else {
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({ name: '', email: '', firm: '', role: '', jurisdiction: '', investorType: '', note: '', eligibility: false });
        setErrors({});
        setTouched({});
        setSubmitAttempted(false);
      }, 400);
    }
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') closeModal();
    
    // Focus trap
    if (e.key === 'Tab') {
      if (!modalRef.current) return;
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (name: keyof FormState, value: any) => {
    let error = '';
    if (name === 'name' && !value) error = 'Please enter your full name.';
    if (name === 'email' && (!value || !validateEmail(value))) error = 'Please enter a valid work email.';
    if (name === 'firm' && !value) error = 'Please enter your firm.';
    if (name === 'role' && !value) error = 'Please enter your role.';
    if (name === 'jurisdiction' && !value) error = 'Please enter your jurisdiction.';
    if (name === 'investorType' && !value) error = 'Please select an investor type.';
    if (name === 'eligibility' && value !== true) error = 'Please confirm your eligibility to proceed.';
    
    setErrors(prev => {
      const next = { ...prev };
      if (error) (next as any)[name] = error;
      else delete (next as any)[name];
      return next;
    });
    
    return !error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    const val = type === 'checkbox' ? checked : value;
    
    setFormState(prev => ({ ...prev, [name]: val }));
    validateField(name as keyof FormState, val);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name as keyof FormState, val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    
    const isNameValid = validateField('name', formState.name);
    const isEmailValid = validateField('email', formState.email);
    const isFirmValid = validateField('firm', formState.firm);
    const isRoleValid = validateField('role', formState.role);
    const isJurisValid = validateField('jurisdiction', formState.jurisdiction);
    const isTypeValid = validateField('investorType', formState.investorType);
    const isEligValid = validateField('eligibility', formState.eligibility);

    const isValid = isNameValid && isEmailValid && isFirmValid && isRoleValid && isJurisValid && isTypeValid && isEligValid;

    if (isValid) {
      setIsSubmitting(true);
      // TODO: wire to real endpoint / firm email here
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 700);
    }
  };

  const showError = (name: keyof FormState) => {
    return (touched[name] || submitAttempted) && (errors as any)[name];
  };

  const inputClass = (name: keyof FormState) => `
    w-full bg-transparent border-0 border-b outline-none py-2 text-navy font-body text-[1rem] transition-colors duration-250
    focus:border-gold focus:ring-0
    ${showError(name) ? 'border-slate' : 'border-navy/12 hover:border-navy/30'}
  `;
  const labelClass = (name: keyof FormState) => `
    block font-label text-[0.68rem] tracking-[0.18em] uppercase transition-colors duration-250 mb-1
    group-focus-within:text-navy
    ${showError(name) ? 'text-slate' : 'text-slate'}
  `;
  const renderError = (name: keyof FormState) => {
    return (
      <span className={`absolute top-full left-0 mt-1 font-body text-[0.875rem] text-navy/70 flex items-start gap-1 transition-opacity duration-200 ${showError(name) ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} id={`error-${name}`} aria-hidden={!showError(name)}>
        <span className="flex-none w-0 h-0 border-y-[0.3em] border-y-transparent border-l-[0.46em] border-l-gold translate-y-[0.3em] mr-1"></span>
        {(errors as any)[name] || ' '}
      </span>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-navy/70"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div 
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6"
            onKeyDown={handleKeyDown}
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="briefing-title"
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[520px] bg-linen rounded-[2px] border border-navy/12 shadow-[0_4px_24px_rgba(26,41,84,0.06)] p-[clamp(2rem,4vw,2.75rem)] overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Signature grid texture mask */}
              <div 
                className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none select-none"
                style={{ 
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(180,140,70,.07) 0 1px, transparent 1px 38px), repeating-linear-gradient(-45deg, rgba(180,140,70,.07) 0 1px, transparent 1px 38px)',
                  maskImage: 'radial-gradient(100% 100% at 100% 0%, black 0%, transparent 80%)', 
                  WebkitMaskImage: 'radial-gradient(100% 100% at 100% 0%, black 0%, transparent 80%)' 
                }}
              />

              <button
                type="button"
                onClick={closeModal}
                className="absolute top-6 right-6 text-slate hover:text-navy transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded-[2px]"
                aria-label="Close dialog"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              </button>

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Eyebrow>INVESTOR BRIEFING</Eyebrow>
                      <h2 id="briefing-title" className="font-display font-medium text-[clamp(2.1rem,calc(1.5rem+2vw),2.75rem)] leading-[1.06] text-navy mb-4 tracking-[-0.005em]">
                        Request the <em className="text-gold italic">briefing.</em>
                      </h2>
                      <p className="font-body text-[1rem] text-navy/70 max-w-[46ch] leading-[1.65] mb-6">
                        Shared with institutional and accredited investors, under NDA where appropriate. Tell us a little about your firm and a principal will be in touch.
                      </p>
                      
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-[2px] bg-gold/30 w-[48px] origin-left mb-8"
                      />

                      <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                          <div className="group relative">
                            <label htmlFor="name" className={labelClass('name')}>Full name *</label>
                            <input ref={firstInputRef} type="text" id="name" name="name" required value={formState.name} onChange={handleChange} onBlur={handleBlur} className={inputClass('name')} aria-invalid={showError('name') ? true : undefined} aria-describedby={showError('name') ? "error-name" : undefined} />
                            {renderError('name')}
                          </div>
                          <div className="group relative">
                            <label htmlFor="email" className={labelClass('email')}>Work email *</label>
                            <input type="email" id="email" name="email" required value={formState.email} onChange={handleChange} onBlur={handleBlur} className={inputClass('email')} aria-invalid={showError('email') ? true : undefined} aria-describedby={showError('email') ? "error-email" : undefined} />
                            {renderError('email')}
                          </div>

                          <div className="group relative">
                            <label htmlFor="firm" className={labelClass('firm')}>Firm *</label>
                            <input type="text" id="firm" name="firm" required value={formState.firm} onChange={handleChange} onBlur={handleBlur} className={inputClass('firm')} aria-invalid={showError('firm') ? true : undefined} aria-describedby={showError('firm') ? "error-firm" : undefined} />
                            {renderError('firm')}
                          </div>
                          <div className="group relative">
                            <label htmlFor="role" className={labelClass('role')}>Role *</label>
                            <input type="text" id="role" name="role" required value={formState.role} onChange={handleChange} onBlur={handleBlur} className={inputClass('role')} aria-invalid={showError('role') ? true : undefined} aria-describedby={showError('role') ? "error-role" : undefined} />
                            {renderError('role')}
                          </div>

                          <div className="group relative">
                            <label htmlFor="jurisdiction" className={labelClass('jurisdiction')}>Jurisdiction *</label>
                            <input type="text" id="jurisdiction" name="jurisdiction" placeholder="e.g. Singapore" required value={formState.jurisdiction} onChange={handleChange} onBlur={handleBlur} className={inputClass('jurisdiction')} aria-invalid={showError('jurisdiction') ? true : undefined} aria-describedby={showError('jurisdiction') ? "error-jurisdiction" : undefined} />
                            {renderError('jurisdiction')}
                          </div>
                          <div className="group relative">
                            <label htmlFor="investorType" className={labelClass('investorType')}>Investor type *</label>
                            <div className="relative">
                              <select id="investorType" name="investorType" required value={formState.investorType} onChange={handleChange} onBlur={handleBlur} className={`${inputClass('investorType')} appearance-none rounded-none bg-transparent`} aria-invalid={showError('investorType') ? true : undefined} aria-describedby={showError('investorType') ? "error-investorType" : undefined}>
                                <option value="" disabled className="text-slate">Select type...</option>
                                <option value="Family office" className="text-navy">Family office</option>
                                <option value="Institutional allocator" className="text-navy">Institutional allocator</option>
                                <option value="Wealth manager / Private bank" className="text-navy">Wealth manager / Private bank</option>
                                <option value="Other" className="text-navy">Other</option>
                              </select>
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-navy/70">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 9 6 6 6-6"/></svg>
                              </div>
                            </div>
                            {renderError('investorType')}
                          </div>
                        </div>

                        <div className="group relative">
                          <label htmlFor="note" className={labelClass('note')}>Brief note (optional)</label>
                          <textarea id="note" name="note" rows={3} value={formState.note} onChange={handleChange} onBlur={handleBlur} className={`${inputClass('note')} resize-none block`} />
                        </div>

                        <div className="group relative">
                          <label className="flex items-start gap-3 cursor-pointer group/chk">
                            <div className="relative flex flex-none items-center justify-center pt-0.5">
                              <input type="checkbox" id="eligibility" name="eligibility" required checked={formState.eligibility} onChange={handleChange} onBlur={handleBlur} className="peer sr-only" aria-invalid={showError('eligibility') ? true : undefined} aria-describedby={showError('eligibility') ? "error-eligibility" : undefined} />
                              <div className={`w-4 h-4 rounded-[2px] border flex items-center justify-center transition-colors
                                  peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold
                                  peer-checked:bg-gold peer-checked:border-gold 
                                  ${showError('eligibility') ? 'border-slate' : 'border-navy/12 group-hover/chk:border-navy/30'}`}>
                                <svg className={`w-3 h-3 text-navy transform scale-0 transition-transform peer-checked:scale-100 ${formState.eligibility ? 'scale-100' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                              </div>
                            </div>
                            <span className="font-body text-[0.9375rem] text-navy/80 leading-[1.4] select-none">
                              I confirm I represent an institutional or accredited investor.
                            </span>
                          </label>
                          {renderError('eligibility')}
                        </div>

                        <div className="mt-2 text-right">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`inline-flex justify-center items-center font-label font-medium text-[0.78rem] tracking-[0.22em] uppercase leading-none px-[1.9em] py-[1.15em] border border-transparent rounded-[1px] bg-gold text-navy transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold w-full sm:w-auto
                            ${isSubmitting ? 'opacity-80 cursor-default' : 'hover:bg-gold-light hover:-translate-y-px cursor-pointer'}`}
                          >
                            {isSubmitting ? 'Sending...' : 'Request the briefing'}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-6"
                    >
                      <h2 id="briefing-title" className="font-display font-medium text-[clamp(2.1rem,calc(1.5rem+2vw),2.75rem)] leading-[1.06] text-navy mb-4 tracking-[-0.005em]">
                        Request <em className="text-gold italic">received.</em>
                      </h2>
                      <p className="font-body text-[1rem] text-navy/70 leading-[1.65] mb-8 max-w-[46ch]">
                        Thank you. Each enquiry is reviewed against our institutional
                        and accredited-investor criteria, and we will respond directly. Where appropriate, the
                        briefing is shared under NDA, followed by a conversation with a principal.
                      </p>
                      
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-[2px] bg-gold/30 w-[48px] origin-left mb-10"
                      />

                      <button
                        type="button"
                        onClick={closeModal}
                        className="inline-flex items-center font-label font-medium text-[0.78rem] tracking-[0.22em] uppercase leading-none px-[1.9em] py-[1.15em] border border-gold/30 rounded-[1px] bg-transparent text-gold transition-all duration-300 hover:bg-gold/10 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold cursor-pointer"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
