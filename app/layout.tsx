// These styles apply to every route in the application
import "./globals.css";
import Navbar from "../components/navbar";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <head></head>
      <body className="">
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
