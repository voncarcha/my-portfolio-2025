import React from 'react';
import Logo from '@/components/global/Logo';
import { IconEmail, IconPhone, IconPin } from '../HeaderSection/Icons';

const index = () => {
  return (
    <footer>
      <section className="mx-auto max-w-screen-xl border-t border-app-400 py-6">
        <ul className="flex flex-col items-center justify-center gap-[5px] pb-[10px] text-center text-app-200 md:flex-row md:gap-[20px] lg:hidden">
          <li className="flex items-center gap-1">
            <IconPhone />
            <a href="tel:+639549764064" className="hover:underline">
              +63 954 976 4064
            </a>
          </li>
          <li className="flex items-center gap-1">
            <IconEmail />
            <a href="mailto:voncarcha@gmail.com" className="hover:underline">
              voncarcha@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-1">
            <IconPin />
            <span>Manila, Philippines</span>
          </li>
        </ul>
        <article className="flex flex-col items-center justify-center">
          <span className="text-sm text-app-300">
            © Copyright 2025. Made by Von Carcha
          </span>
        </article>
      </section>
    </footer>
  );
};

export default index;
