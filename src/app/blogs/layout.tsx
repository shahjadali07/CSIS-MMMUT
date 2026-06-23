'use client';

import Navbar from '@/components/Navbar';
import BlogFooter from '@/components/blog/BlogFooter';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '700'],
});

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${spaceGrotesk.variable} min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]`}>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <BlogFooter />
    </div>
  );
}
