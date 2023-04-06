import "./globals.css";

import React from "react";
import type { Metadata } from "next";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: {
    default: "Kim Abcouwer",
    template: "%s | Kim Abcouwer",
  },
  description: "Problem Solver, Developer, Passionate Learner.",
  openGraph: {
    title: "Kim Abcouwer",
    description: "Problem Solver, Developer, Passionate Learner.",
    url: "https://kimabcouwer.vercel.app/",
    siteName: "Kim Abcouwer",
    images: [
      {
        url: "/k-icon.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="relative min-h-screen bg-white dark:bg-black"
    >
      <body className="pb-24">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
