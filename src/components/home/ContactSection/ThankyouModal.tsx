'use client';

import useGlobalStore from '@/hooks/useGlobalStore';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const ThankyouModal = () => {
  const { setContactSuccess, isContactSuccess } = useGlobalStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isContactSuccess) {
      // Focus the close button when modal opens
      closeButtonRef.current?.focus();
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Handle escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setContactSuccess(false);
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isContactSuccess, setContactSuccess]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setContactSuccess(false);
    }
  };

  if (!isContactSuccess) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-30 bg-black bg-opacity-50"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <section
        ref={modalRef}
        className="fixed shadow-2xl left-[50%] top-[50%] z-40 flex h-[500px] w-full max-w-[500px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[30px] bg-slate-700 text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="text-center">
          <picture className="mb-[20px] flex items-center justify-center">
            <Image
              src="/images/icon-thankyou.png"
              alt="Thank you icon - checkmark in a circle"
              width={200}
              height={200}
              priority
            />
          </picture>
          <h3 id="modal-title" className="text-[26px] font-bold">
            Thank you for contacting me!
          </h3>
          <p id="modal-description" className="mb-[30px] mt-[10px] text-[20px]">
            I will get back to you as soon as possible.
          </p>
          <button
            ref={closeButtonRef}
            onClick={() => setContactSuccess(false)}
            className="h-[50px] w-[200px] rounded-[10px] bg-gradient-app text-[20px] font-bold text-white hover:bg-gradient-app-hover focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Close thank you message"
          >
            Close
          </button>
        </div>
      </section>
    </>
  );
};

export default ThankyouModal;
