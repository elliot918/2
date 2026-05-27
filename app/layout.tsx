import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyPhone from "@/components/StickyPhone";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "TRANS'HORSES | %s",
    default: "TRANS'HORSES",
  },
  description:
    "Transport de chevaux professionnels en France et à l'étranger. Liaisons hebdomadaires, groupage, location PL et VL avec ou sans chauffeur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} h-full`}>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <LenisProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyPhone />
        </LenisProvider>
      </body>
    </html>
  );
}
