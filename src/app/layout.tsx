import type { Metadata } from 'next';
import { Poppins, DM_Serif_Text } from 'next/font/google';
import '@/styles/index.css';
import '@/styles/slick.css';
import '@/styles/slick-theme.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700',],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const dmSerifText = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-serif-text',
});

export const metadata: Metadata = {
  title: 'Von Carcha Portfolio',
  description: 'Front-end Developer & Web Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSerifText.variable}`}>{children}</body>
    </html>
  );
}
