import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Geist, Geist_Mono, Lexend, Schoolbell } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  preload: true
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: true
});

const schoolbell = Schoolbell({
  weight: '400',
  variable: '--font-schoolbell',
  subsets: ['latin'],
  preload: true
});

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
  preload: true
});

export const metadata: Metadata = {
  title: 'Clothing App',
  description: 'Unfinished, mock streetwear marketplace site'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${schoolbell.variable} ${lexend.variable} antialiased`}
      >
        <div className='sticky top-0 bg-warning flex justify-center text-center font-heading py-0 md:py-2 text-lg md:text-xl text-black'>
          This is a MOCK version of site. Full functionality is NOT complete.
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
