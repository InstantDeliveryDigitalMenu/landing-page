import type { Metadata } from "next";
import { Josefin_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const geistMonSans = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Instant Delivery - Seu Cardápio digital",
  description: "Seu cardápio digital, rápido e fácil de usar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.className} ${geistMonSans.className}`}>
        {children}
      </body>
    </html>
  );
}
