import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"]});

import NavigationBar from "./ui/Navbar/NavigationBar";
import Footer from "./ui/Footer/Footer";

export const metadata: Metadata = {
  title: "Smiley Store",
  description: "Created with Next.js and Tailwind CSS, practice Fullstack E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
