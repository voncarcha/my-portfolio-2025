'use client';

import { useEffect } from 'react';
import useGlobalStore from '@/hooks/useGlobalStore';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

const MobileNav = () => {
  const { isNavOpen, setNavOpen } = useGlobalStore();

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  const handleLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isNavOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={handleLinkClick}
        aria-hidden="true"
      />

      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col bg-white/95 shadow-[-8px_0_30px_rgba(0,0,0,0.1)] backdrop-blur-lg transition-transform duration-300 ease-in-out lg:hidden ${
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-app-500 px-5 py-4">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-app-300">
            Menu
          </span>
          <button
            onClick={() => setNavOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-app-200 transition hover:bg-app-500/50 hover:text-app-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            aria-label="Close navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-5 py-6">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-app-200 transition hover:bg-app-500/50 hover:text-app-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-app-500 px-5 py-5">
          <a
            href="tel:+639549764064"
            className="flex items-center gap-2 text-sm text-app-200 hover:text-app-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +63 954 976 4064
          </a>
          <a
            href="mailto:voncarcha@gmail.com"
            className="mt-2 flex items-center gap-2 text-sm text-app-200 hover:text-app-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            voncarcha@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
