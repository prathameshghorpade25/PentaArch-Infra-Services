import '@/styles/globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  title: {
    default: 'PentaArch Infra Services | Building Dreams into Reality',
    template: '%s | PentaArch Infra Services',
  },
  description: 'A multidisciplinary firm offering architectural, interior, construction, and Vastu consultancy services. We blend traditional Indian wisdom with contemporary design.',
  keywords: ['architecture', 'interior design', 'vastu', 'construction', 'premium design', 'PentaArch'],
  author: 'PentaArch Infra Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main className="main-container">{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: 'bg-charcoal text-warm-neutral border border-terracotta',
            duration: 5000,
          }}
        />
      </body>
    </html>
  );
}
