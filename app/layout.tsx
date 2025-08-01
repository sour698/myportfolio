import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";

// ✅ Google Font (Pacifico)
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Sourav's Portfolio",
  description: "Generated by Readdy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${pacifico.variable} font-geist antialiased`}>
        {children}
      </body>
    </html>
  );
}
