import './globals.css'; 
import Link from 'next/link';

export const metadata = {
  title: "Next.js Landing Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="container">
        {/* Render the navigation bar */}
        <header className="header">
          <nav className="navbar">
            <ul className="navList">
              <li className="navItem"><Link href="/">Home</Link></li>
              <li className="navItem"><Link href="/About">About</Link></li>
              <li className="navItem"><Link href="/Services">Services</Link></li>
              <li className="navItem"><Link href="/Contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Render children components (page content) */}
        {children}

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 My Education Site. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
