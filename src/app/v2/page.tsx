'use client';

import Navigation from '@/components/v2/Navigation';
import HeroSection from '@/components/v2/HeroSection';
import MarqueeSection from '@/components/v2/MarqueeSection';
import WorkSection from '@/components/v2/WorkSection';
import AboutSection from '@/components/v2/AboutSection';
import ContactSection from '@/components/v2/ContactSection';
import FooterSection from '@/components/v2/FooterSection';
import CustomCursor from '@/components/v2/CustomCursor';

export default function V2Page() {
  return (
    <main className="v2-noise">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <MarqueeSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
