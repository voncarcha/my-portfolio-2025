import React from 'react';
import Logo from '@/components/global/Logo';
import { IconEmail, IconPhone, IconPin } from '../HeaderSection/Icons';

const FooterSection = () => {
  return (
    <footer role="contentinfo">
      <div className="mx-auto max-w-screen-xl border-t border-app-400 py-6">
        <nav aria-label="Footer contact information" className="flex flex-col items-center justify-center gap-[5px] pb-[10px] text-center text-app-200 md:flex-row md:gap-[20px] lg:hidden">
          <ul className="flex flex-col items-center gap-[5px] md:flex-row md:gap-[20px]" role="list">
            <li className="flex items-center gap-1">
              <IconPhone />
              <a 
                href="tel:+639549764064" 
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded"
                aria-label="Call Von Carcha at +63 954 976 4064"
              >
                +63 954 976 4064
              </a>
            </li>
            <li className="flex items-center gap-1">
              <IconEmail />
              <a 
                href="mailto:voncarcha@gmail.com" 
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded"
                aria-label="Send email to voncarcha@gmail.com"
              >
                voncarcha@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-1">
              <IconPin />
              <span aria-label="Location: Manila, Philippines">Manila, Philippines</span>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-app-300">
            © Copyright 2025. Made by Von Carcha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
