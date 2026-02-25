import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Moiz Khan | Frontend Developer | MERN Stack | React & Next.js",
  description: "Innovative Front-end Developer crafting responsive, high-performance web applications with React.js, Next.js, Node.js, and MongoDB. Karachi, Pakistan.",
  openGraph: { title: "Abdul Moiz Khan | Frontend Developer", description: "Frontend Developer | MERN Stack | React.js | Next.js" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden min-w-0`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
