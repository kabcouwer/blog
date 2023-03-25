// These styles apply to every route in the application
import "./globals.css";
import React from "react";
import Navbar from "../components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
