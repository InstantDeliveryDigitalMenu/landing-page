import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900']
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
      <body className={`${geistSans.className}`}>
        {children}
      </body>
    </html>
  );
}
