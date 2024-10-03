import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GoUp from "./components/GoUp/GoUp";

const font = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finituz Game Studio",
  description: "The official Finituz game studio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className + " text-xl text-white bg-black"}>
        <Header />
        <GoUp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
