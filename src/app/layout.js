import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";
import { ToastContainer } from 'react-toastify';

import ProvideTheme from "@/component/ProvideTheme";
import ThemeChanger from "@/component/shared/ThemeChanger";
import { Suspense } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MediQueue",
  description: "Tutor selection",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"

      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-light dark:bg-linear-to-r dark:from-primary-dark dark:to-bg-dark">
        <ProvideTheme>
           <Navbar></Navbar>
          {children}
          <Footer></Footer>
          <ToastContainer></ToastContainer>
        </ProvideTheme>
      </body>

    </html>
  );
}
