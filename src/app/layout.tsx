import type { Metadata } from 'next';
import { Poppins, DM_Serif_Text } from 'next/font/google';
import '@/styles/index.css';
import '@/styles/slick.css';
import '@/styles/slick-theme.css';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const dmSerifText = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-serif-text',
});

export const metadata: Metadata = {
  title: 'Von Carcha — Front-end Developer & Web Designer',
  description:
    'Front-end developer and designer with 10+ years building fast, accessible web interfaces in React, Next.js, and TypeScript. 100+ websites delivered for startups, agencies, and growing businesses.',
  openGraph: {
    title: 'Von Carcha — Front-end Developer & Web Designer',
    description:
      'Front-end developer and designer with 10+ years building fast, accessible web interfaces in React, Next.js, and TypeScript.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSerifText.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
