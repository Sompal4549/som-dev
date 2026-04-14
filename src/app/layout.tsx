import type { Metadata } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manropeSans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const space_grotesk = Space_Grotesk({
  variable:"--font-space-grotesk",
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Som-Dev your Frontend partner",
  description: "Hi, I am Sompal, and I have 4 years of professional experience as a frontend developer. I have worked with three different companies, where my responsibilities included designing user interfaces and implementing application logic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manropeSans.variable} ${interSans.variable} ${space_grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
