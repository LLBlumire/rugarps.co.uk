import "./globals.css";
import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Inter } from "next/font/google";
import Link from "next/link";

export const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-atkinson",
});
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GARPS",
  description: "The university of reading Games and Roleplay Society.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${atkinson.variable}`}>
      <body className="flex flex-col min-h-[100dvh] items-center">
        <header className="bg-[#E02217] w-full p-2 pb-4">
          <Link href="/">
            <h1 className="text-8xl text-center font-garps">GARPS</h1>
          </Link>
          <nav>
            <ul className="flex flex-wrap gap-3 justify-center">
              <li>
                <Navlink to="/about" title="About" />
              </li>
              <li>
                <Navlink to="/board-games" title="Board Games" />
              </li>
              <li>
                <Navlink to="/ccgs" title="CCGs" />
              </li>
              <li>
                <Navlink to="/wargames" title="Wargames" />
              </li>
              <li>
                <Navlink to="/larp" title="LARP" />
              </li>
              <li>
                <Navlink to="/ttrpgs" title="TTRPGs" />
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow p-4 max-w-screen-lg w-full">{children}</main>
        <footer className="bg-[#E02217] w-full p-2">
          <nav>
            <ul className="flex flex-wrap gap-3 justify-center">
              <li>
                <Navlink
                  to="https://readingsu.co.uk/student-opportunities/view/garps"
                  title="Student Union"
                />
              </li>
              <li>
                <Navlink
                  to="https://www.instagram.com/rugarps"
                  title="Instagram"
                ></Navlink>
              </li>
              <li>
                <Navlink
                  to="https://discord.gg/xFZuwNCupG"
                  title="Discord"
                ></Navlink>
              </li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}

function Navlink({ to, title }: { to: string; title: string }) {
  return (
    <Link href={to} className="text-xl text-white font-bold hover:underline">
      {title}
    </Link>
  );
}
