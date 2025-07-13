'use client';

import CookieConsent from 'react-cookie-consent';
import NextLink from 'next/link';

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      buttonText="Accept All"
      declineButtonText="Reject All"
      enableDeclineButton
      cookieName="cookie-consent"
      expires={30}
      containerClasses="flex flex-row max-w-[1410px] max-2xl:px-[80px] !w-[93%] !left-[50%] pt-[30px] pb-[30px] px-[120px] translate-x-[-50%] !fixed !bottom-[40%] flex !bg-[#f47c0f] [&>div]:!m-0 [&>div]:max-md:!flex-1 border-2 border-solid border-white rounded-[10px] max-md:flex-col max-md:px-[15px] max-md:!py-[20px]"
      buttonClasses="w-[210px] h-[50px] bg-white !text-[#f47c0f] text-[18px] font-bold !rounded-[10px] !bg-white max-md:w-full max-md:!m-0 max-md:!my-[20px]"
      declineButtonClasses="w-[210px] h-[50px] bg-white !text-[#f47c0f] text-[18px] font-bold !rounded-[10px] !bg-white hover:opacity-100 opacity-70 max-md:w-full max-md:!m-0"
      buttonWrapperClasses="flex flex-col-reverse max-md:w-full"
    >
      <article>
        <p className="text-[40px] font-bold leading-[1.25] text-white">
          We Value Your Privacy.
        </p>
        <p className="text-[22px] leading-[1.55]">
          Fat Goose Financial uses cookies to enhance your browsing experience
          and to analyze our traffic. By clicking “Accept All”, you concent to
          our use of cookies.{' '}
          <NextLink href="/privacy-policy" className="ml-[2px] underline">
            Cookies Policy.
          </NextLink>
        </p>
      </article>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
