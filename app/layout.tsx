import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Auth',
  description: 'Next auth for test',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-white`}>
        <div className="flex flex-col h-screen w-full">
          <div className="flex-none">
            <Navbar />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
