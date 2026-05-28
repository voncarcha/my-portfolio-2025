import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './v2.css';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Von Carcha — Frontend Developer & Designer',
  description:
    'Crafting refined digital experiences through code and design. Portfolio of Von Carcha.',
};

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cormorant.variable} ${inter.variable} v2-root`}>
      {children}
    </div>
  );
}
