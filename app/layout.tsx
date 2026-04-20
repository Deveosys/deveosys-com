import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DeveoSys — Développement logiciel sur mesure",
    template: "%s · DeveoSys",
  },
  description:
    "DeveoSys conçoit des sites, web apps et applications mobiles sur mesure.",
  metadataBase: new URL("https://deveosys.com"),
};

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="border-b border-black/[.08] dark:border-white/[.12]">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              DeveoSys
            </Link>
            <ul className="flex gap-6 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-black/[.08] dark:border-white/[.12]">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} DeveoSys</p>
            <Link href="/contact" className="hover:underline">
              Nous contacter
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
