import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import clsx from 'clsx';
import Navbar from '@/components/NavBar';

const font = localFont({
  src: '../public/fonts/RobotoCondensed-Regular.ttf',
  weight: '400',
  variable: '--font-roboto-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Hugo Gonzaga',
    template: '%s | Hugo Gonzaga',
  },
  description: 'Software Engineer.',
  openGraph: {
    title: 'Hugo Gonzaga',
    description: 'Software Engineer.',
    url: 'https://hgonzaga.dev',
    siteName: 'Hugo Gonzaga',
    images: [
      {
        url: 'https://hgonzaga.dev/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-stone-900',
        font.variable
      )}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
