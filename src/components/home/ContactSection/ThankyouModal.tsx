'use client';

import useGlobalStore from '@/hooks/useGlobalStore';
import Image from 'next/image';

const ThankyouModal = () => {
  const { setContactSuccess, isContactSuccess } = useGlobalStore();

  return (
    <section
      className={`fixed shadow-2xl left-[50%] top-[50%] z-40 flex h-[500px] w-full max-w-[500px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[30px] bg-slate-700 text-white ${
        isContactSuccess ? 'block' : 'hidden'
      }`}
    >
      <div className="text-center">
        <picture className="mb-[20px] flex items-center justify-center">
          <Image
            src="/images/icon-thankyou.png"
            alt="bg-access"
            width={200}
            height={200}
            priority
          />
        </picture>
        <h3 className="text-[26px] font-bold">Thank you for contacting us!</h3>
        <p className="mb-[30px] mt-[10px] text-[20px]">
          We will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setContactSuccess(false)}
          className="h-[50px] w-[200px] rounded-[10px] bg-gradient-app text-[20px] font-bold text-white hover:bg-gradient-app-hover"
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default ThankyouModal;
