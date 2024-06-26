import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import { NavBar } from '@/components/nav-bar/nav-bar';
import { Footer } from '@/components/footer';

import { Suspense } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Ester Beltrami Portfolio ',
  description: 'Full Sack Web Developer',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon.png',
        href: '/favicon.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${montserrat.variable}`}>
      <Script src='/js/animated-number.js' strategy='lazyOnload' />
      <Script src='/js/animated-bar.js' strategy='lazyOnload' />

      <body
        className='flex flex-col  bg-light dark:bg-dark w-full
      '
      >
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
        </Suspense>
        <main
          className='flex flex-col justify-center items-center w-full h-full
        px-responsive print:p-0 '
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
