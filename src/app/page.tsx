import HeaderSection from '@/components/home/HeaderSection';
import AboutSection from '@/components/home/AboutSection';
import CvSection from '@/components/home/CvSection';
import WorksSection from '@/components/home/WorksSection';
// import ContactSection from '@/components/home/ContactSection';
import FooterSection from '@/components/home/FooterSection';

export default function Home() {
  return (
    <main className="relative min-h-[100vh]">
      <HeaderSection />
      <AboutSection />
      <CvSection />
      <WorksSection />
      {/* <ContactSection /> */}
      <FooterSection />
    </main>
  );
}
