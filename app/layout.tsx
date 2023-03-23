// These styles apply to every route in the application
import "./globals.css";
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
        <div className="pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}

