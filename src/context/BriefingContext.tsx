import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

interface BriefingContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BriefingContext = createContext<BriefingContextType | undefined>(undefined);

export function BriefingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openModal = () => {
    triggerRef.current = document.activeElement as HTMLElement;
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <BriefingContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BriefingContext.Provider>
  );
}

export function useBriefing() {
  const context = useContext(BriefingContext);
  if (!context) throw new Error('useBriefing must be used within BriefingProvider');
  return context;
}
