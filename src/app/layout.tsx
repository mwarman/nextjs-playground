import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

// These styles are global and apply to the entire application
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Playground',
  description: 'A playground for Next.js features and configurations.',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen text-gray-900 dark:text-gray-100">
          <header className="bg-gray-200 dark:bg-gray-800">
            <div className="container mx-auto px-4 flex items-center gap-4 h-16">
              <div className="text-lg font-bold mr-4">Next.js Playground</div>
              <nav>
                <ul className="flex gap-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/tasks">Tasks</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="flex-grow bg-gray-50 dark:bg-gray-800/95">{children}</main>
          <footer className="bg-gray-200 dark:bg-gray-800">
            <div className="flex justify-center items-center h-10 text-xs px-4 container mx-auto">
              <div>&copy; 2025 Next.js Playground</div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
