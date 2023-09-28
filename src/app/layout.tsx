import "./globals.css";
import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Inter } from "next/font/google";

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
      <body className="p-4">{children}</body>
    </html>
  );
}
