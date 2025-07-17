import React from 'react';
import dynamic from 'next/dynamic';
import ThankyouModal from './ThankyouModal';
import Background from './Background';

const ContactForm = dynamic(() => import('./ContactForm'), {
  ssr: false,
});

const ContactSection = () => {
  return (
    <article className="relative w-full pb-[100px] lg:pb-[200px]" id="contact">
      <section className="mx-auto flex max-w-screen-xl flex-col px-[20px] lg:flex-row">
        <article className="w-full lg:w-1/2">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Let&apos;s Connect
          </p>
          <h2 className="py-6 font-dm-serif-text text-5xl leading-none md:text-6xl">
            <span className="gradient-text">Send me a message</span> and I will
            get back to you as soon as possible.
          </h2>
        </article>
        <article className="w-full pt-[20px] lg:w-1/2 lg:pl-[100px] lg:pt-[50px]">
          <ContactForm />
        </article>
      </section>
      <ThankyouModal />

      <Background />
    </article>
  );
};

export default ContactSection;
