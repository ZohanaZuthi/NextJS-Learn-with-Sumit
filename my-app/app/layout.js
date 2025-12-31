import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav><ul className="flex gap-6">
          <li><Link href='/home'>Home</Link></li>
          <li><Link prefetch={false} href='/about'>About</Link></li>
          <li><Link href='/blog'>Blog</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
