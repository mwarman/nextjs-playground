import { PropsWithChildren } from "react";
import Link from "next/link";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Next.js App</h1>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/tasks">Tasks</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
