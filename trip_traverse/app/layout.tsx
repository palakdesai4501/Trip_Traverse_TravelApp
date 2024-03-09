import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TripTraverse",
  description: "Travel App For Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
